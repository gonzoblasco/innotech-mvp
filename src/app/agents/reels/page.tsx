// src/app/agents/reels/page.tsx
'use client';
import { useState } from 'react';
import InstagramReelForm from '@/components/InstagramReelForm';
import AgentChat from '@/components/AgentChat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle, Video, Clock, TrendingUp, Users } from 'lucide-react';

export default function ReelsAgent() {
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
          agentType="reels" 
          initialMessage={generatedPrompt}
          agentName="Especialista en Reels"
          agentIcon="🎬"
        />
        
        {/* Tips de optimización para Reels */}
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <Card className="border-pink-200 bg-pink-50">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">🎬 Tips para Reels</CardTitle>
            </CardHeader>
            <CardContent className="text-xs space-y-1">
              <p>• Grabá en vertical (9:16) para mejor experiencia</p>
              <p>• Los primeros 3 segundos son críticos</p>
              <p>• Usá buena iluminación natural cuando sea posible</p>
              <p>• Publicá entre 19-21hs para audiencia argentina</p>
              <p>• Interactuá con comentarios en la primera hora</p>
            </CardContent>
          </Card>
          
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">🇦🇷 Engagement Argentina</CardTitle>
            </CardHeader>
            <CardContent className="text-xs space-y-1">
              <p>• Usá referencias locales (barrios, comidas, expresiones)</p>
              <p>• Mencioná fechas importantes argentinas</p>
              <p>• Colaborá con influencers locales</p>
              <p>• Aprovechá tendencias que funcionan en LATAM</p>
              <p>• Respondé en horario argentino para mejor alcance</p>
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
          <span className="text-4xl">🎬</span>
          <Badge className="bg-pink-100 text-pink-800 border-pink-200">
            Agente Especializado
          </Badge>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Instagram Reels para PyMEs Argentinas
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Creá scripts de reels que conecten con tu audiencia argentina. 
          Nuestro agente especializado genera contenido con timing perfecto, 
          referencias culturales locales y estrategias de engagement probadas.
        </p>
      </div>

      {/* Stats destacadas */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <Card className="text-center border-pink-200 bg-pink-50">
          <CardHeader className="pb-3">
            <TrendingUp className="h-6 w-6 text-pink-600 mx-auto" />
            <CardTitle className="text-sm">+300% Engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-600">Vs posts tradicionales</p>
          </CardContent>
        </Card>
        
        <Card className="text-center border-blue-200 bg-blue-50">
          <CardHeader className="pb-3">
            <Video className="h-6 w-6 text-blue-600 mx-auto" />
            <CardTitle className="text-sm">15-90 Segundos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-600">Duración optimizada</p>
          </CardContent>
        </Card>
        
        <Card className="text-center border-green-200 bg-green-50">
          <CardHeader className="pb-3">
            <Clock className="h-6 w-6 text-green-600 mx-auto" />
            <CardTitle className="text-sm">Timing Perfecto</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-600">Scripts con segundos exactos</p>
          </CardContent>
        </Card>
        
        <Card className="text-center border-purple-200 bg-purple-50">
          <CardHeader className="pb-3">
            <Users className="h-6 w-6 text-purple-600 mx-auto" />
            <CardTitle className="text-sm">Audiencia Local</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-600">Referencias argentinas</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Form */}
      <InstagramReelForm onGenerate={handleGenerate} />

      {/* Tipos de Reels */}
      <div className="mt-12 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-6 text-center">
          Tipos de Reels que podés crear
        </h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="space-y-3">
            <h4 className="font-semibold text-pink-700">🎯 Promocionales</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Product Showcase:</strong> Mostrá tu producto en acción</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Antes/Después:</strong> Resultados impactantes</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Unboxing/Reveal:</strong> Genera expectativa y sorpresa</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-blue-700">📚 Educativos</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Tutoriales:</strong> Enseñá paso a paso</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Tips/Consejos:</strong> Compartí tu expertise</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Behind the Scenes:</strong> Mostrá tu proceso</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-purple-700">🎉 Entretenimiento</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Trends:</strong> Sumate a tendencias virales</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Storytelling:</strong> Contá historias que conecten</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Humor:</strong> Hacé reír a tu audiencia</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Beneficios específicos */}
      <div className="mt-12 bg-white rounded-lg p-8 shadow-sm border">
        <h2 className="text-2xl font-bold text-center mb-8">
          ¿Por qué usar nuestro agente de Reels?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-pink-700 mb-3">
              🎯 Especialización Argentina
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Lenguaje local:</strong> Usamos &quot;vos&quot;, &quot;che&quot; y expresiones argentinas naturales</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Referencias culturales:</strong> Barrios, comidas, fechas importantes del país</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Timing local:</strong> Horarios y días optimizados para audiencia argentina</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Hashtags locales:</strong> Tags que funcionan específicamente en Argentina</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-700 mb-3">
              ⚡ Optimización Técnica
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Scripts con timing:</strong> Indicamos segundos exactos para cada escena</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Hooks poderosos:</strong> Primeros 3 segundos diseñados para retener</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>CTAs efectivos:</strong> Llamadas a la acción que generan resultados</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Sugerencias de música:</strong> Recommendations de audio para cada tipo</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-4">
            🚀 Listo para crear reels que conecten con tu audiencia?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Nuestro formulario inteligente te guía paso a paso para crear 
            scripts profesionales adaptados a tu negocio y audiencia argentina.
          </p>
          <div className="flex justify-center">
            <Badge className="bg-pink-100 text-pink-800 border-pink-200">
              ✨ Formulario optimizado en 4 pasos simples
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}