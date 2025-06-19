// src/app/test/page.tsx - Transformada en página de información
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Zap, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          🚀 ¿Cómo funciona InnoTech Solutions?
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Descubrí cómo nuestros agentes especializados pueden transformar 
          la manera en que tu PyME crea contenido profesional.
        </p>
      </div>

      {/* Demo Flow */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="text-center border-blue-200 bg-blue-50">
          <CardHeader>
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white font-bold">1</span>
            </div>
            <CardTitle className="text-lg">Elegís tu Agente</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Seleccionás el agente especializado según tu necesidad: 
              LinkedIn Posts, Instagram Reels, o Planes de Negocio.
            </p>
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">
              3 agentes disponibles
            </Badge>
          </CardContent>
        </Card>

        <Card className="text-center border-green-200 bg-green-50">
          <CardHeader>
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white font-bold">2</span>
            </div>
            <CardTitle className="text-lg">Completás el Formulario</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Nuestro formulario inteligente se adapta a tu sector y objetivos. 
              Sin prompt engineering complicado.
            </p>
            <Badge className="bg-green-100 text-green-800 border-green-200">
              4 pasos simples
            </Badge>
          </CardContent>
        </Card>

        <Card className="text-center border-purple-200 bg-purple-50">
          <CardHeader>
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white font-bold">3</span>
            </div>
            <CardTitle className="text-lg">Recibís Contenido Pro</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Contenido profesional adaptado al mercado argentino, 
              listo para usar y optimizado para engagement.
            </p>
            <Badge className="bg-purple-100 text-purple-800 border-purple-200">
              100% argentino
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Live Demo */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">
            🎯 Probá Nuestro Agente LinkedIn
          </h2>
          <p className="text-gray-600">
            Experimenta la diferencia de contenido especializado para PyMEs argentinas
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <Button asChild className="w-full mb-4" size="lg">
            <Link href="/agents/linkedin" className="flex items-center justify-center gap-2">
              Probar Agente LinkedIn
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <p className="text-xs text-center text-gray-500">
            Sin registro • Sin tarjeta de crédito • Resultado inmediato
          </p>
        </div>
      </div>

      {/* Benefits for PyMEs */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Ventajas para tu PyME
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <Zap className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <span><strong>Velocidad:</strong> Creá contenido profesional en minutos, no horas</span>
            </div>
            <div className="flex items-start gap-2">
              <Target className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Precisión:</strong> Cada agente está entrenado para objetivos específicos</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
              <span><strong>Localización:</strong> Contexto y lenguaje 100% argentino</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">
            🎯 Casos de Éxito
          </h3>
          <div className="space-y-4">
            <Card className="p-4 border-l-4 border-blue-500">
              <p className="text-sm italic text-gray-600">
                &quot;Antes tardaba 2 horas en escribir un post. Ahora lo hago en 5 minutos 
                y queda más profesional.&quot;
              </p>
              <p className="text-xs text-gray-500 mt-2">
                - María, Consultora de Marketing
              </p>
            </Card>
            
            <Card className="p-4 border-l-4 border-green-500">
              <p className="text-sm italic text-gray-600">
                &quot;El agente entiende mi sector y genera contenido que realmente conecta 
                con mis clientes argentinos.&quot;
              </p>
              <p className="text-xs text-gray-500 mt-2">
                - Carlos, Dueño de Software Factory
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Status Update */}
      <div className="text-center bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="font-semibold mb-2 text-yellow-800">
          🚧 Estado del MVP (Sprint 1 - Día 3)
        </h3>
        <p className="text-sm text-yellow-700 mb-4">
          Estamos en construcción activa. El agente LinkedIn ya está funcionando completamente.
        </p>
        <div className="flex justify-center">
          <Button asChild>
            <Link href="/agents">
              Ver Estado de Todos los Agentes
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}