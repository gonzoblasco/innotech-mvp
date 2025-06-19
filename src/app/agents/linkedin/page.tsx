// src/app/agents/linkedin/page.tsx
'use client';
import { useState } from 'react';
import LinkedInPostForm from '@/components/LinkedInPostForm';
import AgentChat from '@/components/AgentChat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle, Users, Target, MessageSquare } from 'lucide-react';

export default function LinkedInAgent() {
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [showChat, setShowChat] = useState(false);

  const handleGenerate = (prompt: string) => {
    setGeneratedPrompt(prompt);
    setShowChat(true);
  };

  const handleBackToForm = () => {
    setShowChat(false);
    setGeneratedPrompt('');
  };

  if (showChat) {
    return (
      <div className="container mx-auto py-8">
        <div className="mb-6">
          <Button 
            onClick={handleBackToForm}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al formulario
          </Button>
        </div>
        
        <AgentChat 
          agentType="linkedin" 
          initialMessage={generatedPrompt}
          agentName="Especialista en LinkedIn"
          agentIcon="📱"
        />
        
        {/* Tips de optimización */}
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">💡 Tips para LinkedIn</CardTitle>
            </CardHeader>
            <CardContent className="text-xs space-y-1">
              <p>• Publicá entre 8-10 AM o 12-2 PM (Argentina)</p>
              <p>• Martes a jueves tienen mejor engagement</p>
              <p>• Máximo 1,300 caracteres para mejor alcance</p>
              <p>• Usá 3-5 hashtags específicos, no genéricos</p>
            </CardContent>
          </Card>
          
          <Card className="border-green-200 bg-green-50">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">🎯 Engagement Argentina</CardTitle>
            </CardHeader>
            <CardContent className="text-xs space-y-1">
              <p>• Mencioná ciudades/regiones argentinas</p>
              <p>• Usá &quot;vos&quot; para conectar mejor</p>
              <p>• Referencias culturales locales funcionan</p>
              <p>• PyMEs valoran casos de éxito locales</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-4xl">📱</span>
          <Badge className="bg-blue-100 text-blue-800 border-blue-200">
            Agente Especializado
          </Badge>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          LinkedIn Posts para PyMEs Argentinas
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Creá posts profesionales que conecten con tu audiencia argentina. 
          Nuestro formulario inteligente se adapta a tu negocio y genera contenido optimizado automáticamente.
        </p>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <Card className="text-center border-blue-200">
          <CardHeader className="pb-3">
            <Users className="h-8 w-8 text-blue-600 mx-auto" />
            <CardTitle className="text-sm">Audiencia Argentina</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-xs">
              Lenguaje y referencias específicas para el mercado argentino
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card className="text-center border-green-200">
          <CardHeader className="pb-3">
            <Target className="h-8 w-8 text-green-600 mx-auto" />
            <CardTitle className="text-sm">Objetivos Claros</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-xs">
              Cada post está diseñado para lograr un objetivo específico
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card className="text-center border-purple-200">
          <CardHeader className="pb-3">
            <MessageSquare className="h-8 w-8 text-purple-600 mx-auto" />
            <CardTitle className="text-sm">Engagement Real</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-xs">
              Prompts optimizados para generar interacción genuina
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      {/* Main Form */}
      <LinkedInPostForm onGenerate={handleGenerate} />

      {/* Benefits */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-center">
          ¿Por qué usar nuestro agente especializado?
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Localización argentina:</strong> Usamos &quot;vos&quot;, referencias culturales y contexto de mercado local</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Formulario inteligente:</strong> Se adapta a tu sector y objetivos específicos</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Optimización automática:</strong> Respeta límites de caracteres y mejores prácticas</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Call-to-actions efectivos:</strong> Diseñados para generar resultados reales</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Múltiples versiones:</strong> Recibís variantes para elegir la mejor</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Tips de timing:</strong> Sugerencias de cuándo publicar para máximo alcance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}