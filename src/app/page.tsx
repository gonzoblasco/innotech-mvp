// src/app/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="container mx-auto py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          InnoTech Solutions
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          El Netflix de Agentes Conversacionales para PyMEs Argentinas
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              📱 LinkedIn Posts
            </CardTitle>
            <CardDescription>
              Posts profesionales para LinkedIn adaptados al mercado argentino
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" disabled>
              Próximamente
            </Button>
          </CardContent>
        </Card>

        <Card className="border-pink-200 bg-pink-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🎬 Instagram Reels
            </CardTitle>
            <CardDescription>
              Scripts de reels que conectan con tu audiencia argentina
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" disabled>
              Próximamente
            </Button>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              📊 Planes de Negocio
            </CardTitle>
            <CardDescription>
              Planes completos adaptados a la legislación argentina
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" disabled>
              Próximamente
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <div className="bg-gray-50 p-6 rounded-lg inline-block">
          <h2 className="text-xl font-semibold mb-2">🚀 MVP en Construcción</h2>
          <p className="text-gray-600">
            Sprint 1 - Día 1: Base técnica establecida ✅
          </p>
          <div className="mt-4 space-y-2 text-sm text-left">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✅</span>
              <span>Next.js + TypeScript configurado</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✅</span>
              <span>Tailwind CSS + shadcn/ui instalado</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-500">🔄</span>
              <span>Supabase configuración en proceso</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">⏳</span>
              <span>Google AI API - pendiente</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}