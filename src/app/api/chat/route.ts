// src/app/api/chat/route.ts
import { streamText, CoreMessage } from 'ai';
import { google } from '@ai-sdk/google';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    console.log('Chat API called');
    
    const body = await req.json();
    console.log('Request body:', body);
    
    const { messages, agentType = 'default' } = body;
    
    if (!messages || !Array.isArray(messages)) {
      throw new Error('Messages array is required');
    }

    // Verificar que la API key existe
    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      throw new Error('Google AI API key not configured');
    }
    
    // Prompts especializados para cada agente
    const systemPrompts = {
      linkedin: `Sos un experto en marketing digital para PyMEs argentinas. 
                 Creás posts de LinkedIn profesionales pero cercanos, usando "vos" 
                 y referencias culturales argentinas apropiadas. 
                 Conocés el mercado local, las tendencias y el lenguaje que conecta 
                 con empresarios argentinos.
                 
                 IMPORTANTE: Formateá tu respuesta usando Markdown para que sea fácil de leer:
                 - Usá **negrita** para destacar puntos importantes
                 - Usá ## para títulos de sección
                 - Usá listas con - para organizar información
                 - Usá > para citas o destacados especiales`,
      
      reels: `Sos un especialista en contenido para Instagram, experto en crear 
              scripts de reels virales para el mercado argentino. Conocés las tendencias
              locales, el lenguaje que conecta y cómo estructurar contenido que retiene
              atención desde el primer segundo. Usás referencias argentinas y "vos".
              
              IMPORTANTE: Formateá tu respuesta usando Markdown para que sea fácil de leer:
              - Usá **negrita** para destacar timing y acciones clave
              - Usá ## para títulos de sección  
              - Usá listas numeradas para secuencias temporales
              - Usá > para tips importantes`,
      
      'business-plan': `Sos un consultor empresarial especializado en PyMEs argentinas.
                        Creás planes de negocio adaptados a la legislación, cultura empresarial
                        y realidad económica argentina. Conocés AFIP, monotributo, 
                        fuentes de financiamiento locales y el ecosistema emprendedor argentino.
                        
                        IMPORTANTE: Formateá tu respuesta usando Markdown para que sea fácil de leer:
                        - Usá ## para títulos principales de secciones
                        - Usá ### para subsecciones
                        - Usá **negrita** para datos financieros y puntos clave
                        - Usá listas para organizar información compleja`,
      
      default: `Sos un asistente especializado en PyMEs argentinas. 
                Hablás usando "vos", conocés la cultura empresarial local 
                y podés ayudar con diferentes aspectos del negocio. 
                Sos amigable, profesional y usás ejemplos argentinos cuando es apropiado.
                
                IMPORTANTE: Formateá tu respuesta usando Markdown para que sea fácil de leer:
                - Usá **negrita** para destacar puntos importantes
                - Usá listas con - para organizar información
                - Usá ## para títulos cuando corresponda`
    };

    console.log('Using agent type:', agentType);
    
    // Convertir mensajes al formato correcto
    const coreMessages: CoreMessage[] = messages.map((msg: { role: string; content: string }) => {
      const role = msg.role as 'user' | 'assistant';
      if (role !== 'user' && role !== 'assistant') {
        throw new Error(`Invalid message role: ${msg.role}`);
      }
      return {
        role,
        content: msg.content
      };
    });

    const result = await streamText({
      model: google('gemini-1.5-flash'),
      system: systemPrompts[agentType as keyof typeof systemPrompts] || systemPrompts.default,
      messages: coreMessages,
      temperature: 0.7,
      maxTokens: 1000,
    });

    console.log('AI response generated successfully');
    return result.toDataStreamResponse();
    
  } catch (error) {
    console.error('Detailed error in chat API:', error);
    
    // Log más detallado del error
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    return new Response(
      JSON.stringify({ 
        error: 'Error procesando la consulta',
        details: error instanceof Error ? error.message : 'Unknown error'
      }), 
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  }
}