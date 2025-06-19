// src/app/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            El Netflix de Agentes IA
            <br />
            para PyMEs Argentinas
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Democratizamos el acceso a IA especializada. Creá contenido profesional 
            sin saber prompt engineering. Formularios intuitivos que se convierten 
            en prompts optimizados automáticamente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/agents/linkedin">
                Probar Agente LinkedIn
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/agents">
                Ver Todos los Agentes
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            ¿Por qué elegir InnoTech Solutions?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-green-200 bg-green-50/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-2">🇦🇷</div>
                <CardTitle className="text-green-700">100% Argentino</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Agentes entrenados específicamente para el mercado argentino. 
                  Entienden la cultura empresarial local y usan el lenguaje apropiado.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-blue-200 bg-blue-50/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-2">💰</div>
                <CardTitle className="text-blue-700">70% Más Económico</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  $12-25 USD/mes vs $35-115 USD/mes de la competencia internacional. 
                  Pricing pensado para PyMEs argentinas.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-purple-200 bg-purple-50/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-2">🚀</div>
                <CardTitle className="text-purple-700">Sin Conocimientos Técnicos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Formularios dinámicos que se adaptan a tus respuestas. 
                  No necesitás saber prompt engineering.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Agents Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Catálogo de Agentes Especializados
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Cada agente está diseñado como el experto perfecto para resolver problemas específicos de tu PyME
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-2">📱</div>
                <CardTitle className="text-blue-600">LinkedIn Posts</CardTitle>
                <CardDescription>
                  Posts profesionales adaptados al mercado argentino con formularios inteligentes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/agents/linkedin">
                    ✅ Usar Agente
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-2">🎬</div>
                <CardTitle className="text-pink-600">Instagram Reels</CardTitle>
                <CardDescription>
                  Scripts de reels con timing y referencias culturales argentinas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-pink-600 hover:bg-pink-700">
                  <Link href="/agents/reels">
                    ✅ Usar Agente
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-2">📊</div>
                <CardTitle className="text-green-600">Planes de Negocio</CardTitle>
                <CardDescription>
                  Planes completos adaptados a la legislación y mercado argentino
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" disabled>
                  Próximamente - Día 7
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Status Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-8">Estado del MVP</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2">
                  🚀 Sprint 1 - Día 4 ✅
                </CardTitle>
                <CardDescription>Dos agentes especializados funcionando</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-medium">Base técnica (Next.js + Supabase)</span>
                  <span className="text-green-600 font-bold">✅ Completo</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-medium">Autenticación con Google</span>
                  <span className="text-green-600 font-bold">✅ Completo</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-medium">Integración Google AI</span>
                  <span className="text-green-600 font-bold">✅ Completo</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-medium">Chat básico funcionando</span>
                  <span className="text-green-600 font-bold">✅ Completo</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-medium">Agente LinkedIn Posts</span>
                  <span className="text-green-600 font-bold">✅ Completo</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-medium">Agente Instagram Reels</span>
                  <span className="text-green-600 font-bold">✅ Completo</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium">Agente Business Plan</span>
                  <span className="text-blue-600 font-bold">🔄 Día 6-7</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Sistema de pagos</span>
                  <span className="text-gray-500 font-bold">⏳ Día 8-9</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
            Probá nuestros agentes especializados
          </h2>
          <p className="text-xl mb-2 opacity-90">
            Ya tenemos 2 agentes funcionando completamente - LinkedIn Posts y Instagram Reels
          </p>
          <p className="text-sm mb-8 opacity-75">
            Sin registro • Sin tarjeta de crédito • Resultados inmediatos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/agents/linkedin">
                📱 Agente LinkedIn
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="/agents/reels">
                🎬 Agente Reels
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto text-center px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-semibold mb-2 text-gray-800">
              🏗️ MVP en Construcción Activa
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              ¡Ya tenemos 2 agentes especializados funcionando completamente! 
              Cada día del sprint agregamos nuevas funcionalidades.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              <span>✅ Día 1-2: Base técnica + IA</span>
              <span>✅ Día 3: Agente LinkedIn</span>
              <span>✅ Día 4: Agente Reels</span>
              <span>🔄 Día 6-7: Agente Business Plan</span>
              <span>⏳ Día 8-9: Pagos + Legal</span>
            </div>
            <div className="mt-3 text-xs text-green-600 font-medium">
              🎯 Progreso actual: 4/10 días completados - Dos agentes funcionando perfectamente
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}