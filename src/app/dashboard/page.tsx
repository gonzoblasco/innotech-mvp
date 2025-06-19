// src/app/dashboard/page.tsx
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default async function Dashboard() {
  const supabase = createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    redirect('/');
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          ¡Hola, {user.user_metadata?.full_name || 'Emprendedor'}! 👋
        </h1>
        <p className="text-gray-600">
          Bienvenido a InnoTech Solutions. Elegí un agente especializado para empezar.
        </p>
      </div>

      {/* Progress del Sprint */}
      <div className="mb-8">
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>🚀 Estado del MVP</span>
              <Badge className="bg-green-100 text-green-800 border-green-200">
                Día 4/10 completado
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>✅ Agente LinkedIn Posts</span>
                  <span className="text-green-600 font-medium">Activo</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>✅ Agente Instagram Reels</span>
                  <span className="text-green-600 font-medium">Activo</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>⏳ Agente Business Plan</span>
                  <span className="text-gray-500">Próximamente</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>⏳ Sistema de Pagos</span>
                  <span className="text-gray-500">Día 8-9</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Agentes Disponibles */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-blue-200 bg-blue-50 hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="text-4xl mb-2">📱</div>
              <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                ✅ Activo
              </Badge>
            </div>
            <CardTitle className="text-blue-700">LinkedIn Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Posts profesionales adaptados al mercado argentino con formularios inteligentes
            </p>
            <Button asChild className="w-full">
              <Link href="/agents/linkedin">
                Usar Agente
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-pink-200 bg-pink-50 hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="text-4xl mb-2">🎬</div>
              <Badge className="bg-pink-100 text-pink-800 border-pink-200">
                ✅ Activo
              </Badge>
            </div>
            <CardTitle className="text-pink-700">Instagram Reels</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Scripts de reels con timing y referencias culturales argentinas
            </p>
            <Button asChild className="w-full bg-pink-600 hover:bg-pink-700">
              <Link href="/agents/reels">
                Usar Agente
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50 opacity-60">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="text-4xl mb-2">📊</div>
              <Badge className="bg-gray-100 text-gray-600 border-gray-200">
                ⏳ Próximamente
              </Badge>
            </div>
            <CardTitle className="text-green-700">Planes de Negocio</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Planes completos adaptados a la legislación y mercado argentino
            </p>
            <Button className="w-full" disabled>
              Día 6-7 del Sprint
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-pink-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-center">
          🎯 Acciones Rápidas
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Button asChild variant="outline" className="flex items-center justify-center gap-2 h-12">
            <Link href="/agents">
              📋 Ver Todos los Agentes
            </Link>
          </Button>
          <Button asChild variant="outline" className="flex items-center justify-center gap-2 h-12">
            <Link href="/test">
              ❓ Cómo Funciona InnoTech
            </Link>
          </Button>
        </div>
      </div>

      {/* Feedback del MVP */}
      <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h3 className="font-semibold mb-2 text-yellow-800">
          🚧 MVP en Desarrollo Activo
        </h3>
        <p className="text-sm text-yellow-700 mb-4">
          Estás viendo el desarrollo en tiempo real. Ya tenemos 2 agentes funcionando completamente.
          ¿Qué te parece? Tu feedback nos ayuda a mejorar.
        </p>
        <div className="flex gap-2">
          <Button size="sm" variant="outline">
            👍 Me gusta
          </Button>
          <Button size="sm" variant="outline">
            💡 Tengo una sugerencia
          </Button>
        </div>
      </div>
    </div>
  );
}