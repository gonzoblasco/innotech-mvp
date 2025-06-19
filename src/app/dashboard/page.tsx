// src/app/dashboard/page.tsx
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
          Bienvenido a InnoTech Solutions. Elegí un agente para empezar.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              📱 LinkedIn Posts
            </CardTitle>
            <CardDescription>
              Posts profesionales adaptados al mercado argentino
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full" disabled>
              <Link href="/agents/linkedin">
                Próximamente
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🧪 Test de IA
            </CardTitle>
            <CardDescription>
              Probá la integración básica con nuestro agente de prueba
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/test">
                Probar Ahora
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-gray-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🎬 Instagram Reels
            </CardTitle>
            <CardDescription>
              Scripts de reels que conectan con tu audiencia
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" disabled>
              Próximamente
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 p-6 bg-yellow-50 rounded-lg">
        <h3 className="font-semibold mb-2">🚀 MVP en Desarrollo</h3>
        <p className="text-sm text-gray-600">
          Estás viendo la versión de desarrollo. Los agentes especializados 
          estarán listos en los próximos días del sprint.
        </p>
      </div>
    </div>
  );
}