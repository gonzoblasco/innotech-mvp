// src/app/agents/page.tsx - Dashboard de Agentes
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const agents = [
  {
    id: 'linkedin',
    name: 'LinkedIn Posts',
    description: 'Posts profesionales adaptados al mercado argentino con formularios inteligentes',
    icon: '📱',
    href: '/agents/linkedin',
    status: 'active',
    color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200'
  },
  {
    id: 'reels',
    name: 'Instagram Reels',
    description: 'Scripts de reels con timing y referencias culturales argentinas',
    icon: '🎬',
    href: '/agents/reels',
    status: 'active',
    color: 'bg-pink-50 border-pink-200 hover:bg-pink-100',
    badgeColor: 'bg-pink-100 text-pink-800 border-pink-200'
  },
  {
    id: 'business-plan',
    name: 'Planes de Negocio',
    description: 'Planes completos adaptados a la legislación y mercado argentino',
    icon: '📊',
    href: '/agents/business-plan',
    status: 'coming-soon',
    color: 'bg-green-50 border-green-200 hover:bg-green-100',
    badgeColor: 'bg-green-100 text-green-800 border-green-200'
  }
];

export default function AgentsPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Catálogo de Agentes Especializados
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          Elegí el agente perfecto para tu necesidad. Cada agente está especializado 
          en crear contenido profesional adaptado al mercado argentino.
        </p>
        <div className="flex justify-center">
          <Badge className="bg-green-100 text-green-800 border-green-200">
            🚀 Sprint 1 - Día 4: Dos agentes activos funcionando
          </Badge>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {agents.map((agent) => (
          <Card key={agent.id} className={`${agent.color} transition-all duration-200`}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="text-4xl mb-2">{agent.icon}</div>
                <Badge className={agent.badgeColor}>
                  {agent.status === 'active' ? '✅ Activo' : '⏳ Próximamente'}
                </Badge>
              </div>
              <CardTitle className="text-xl">{agent.name}</CardTitle>
              <CardDescription className="text-gray-600">
                {agent.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {agent.status === 'active' ? (
                <Button asChild className="w-full">
                  <Link href={agent.href}>
                    Usar Agente
                  </Link>
                </Button>
              ) : (
                <Button className="w-full" disabled>
                  {agent.id === 'reels' ? 'Día 5 del Sprint' : 'Día 7 del Sprint'}
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Features Section */}
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-center mb-6">
          ¿Qué hace únicos a nuestros agentes?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-2">🇦🇷</div>
            <h3 className="font-semibold mb-2">100% Argentino</h3>
            <p className="text-sm text-gray-600">
              Lenguaje, cultura y contexto empresarial local
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🚀</div>
            <h3 className="font-semibold mb-2">Sin Prompt Engineering</h3>
            <p className="text-sm text-gray-600">
              Formularios intuitivos que generan prompts optimizados
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="font-semibold mb-2">Resultados Específicos</h3>
            <p className="text-sm text-gray-600">
              Cada agente está entrenado para un objetivo específico
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">💰</div>
            <h3 className="font-semibold mb-2">Pricing PyME</h3>
            <p className="text-sm text-gray-600">
              70% más económico que competencia internacional
            </p>
          </div>
        </div>
      </div>

      {/* Custom Agent CTA */}
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-2">
            ¿Necesitás un agente específico para tu industria?
          </h3>
          <p className="text-gray-600 mb-4">
            Podemos crear agentes personalizados para necesidades específicas de tu PyME
          </p>
          <Button variant="outline">
            Solicitar Agente Personalizado
          </Button>
        </div>
      </div>
    </div>
  );
}