// src/app/test/page.tsx
import AgentChat from '@/components/AgentChat';

export default function TestPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">
          🧪 Test del Agente IA
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Probá la integración básica con Google AI. Esta es la base que vamos 
          a usar para todos los agentes especializados.
        </p>
      </div>

      <AgentChat 
        agentType="default"
        agentName="Agente de Prueba"
        agentIcon="🤖"
      />

      <div className="mt-8 text-center">
        <div className="bg-blue-50 p-6 rounded-lg inline-block max-w-lg">
          <h3 className="font-semibold mb-2">💡 Probá estas consultas:</h3>
          <div className="text-sm text-left space-y-1">
            <p>• "Ayudame a crear un plan de marketing para mi PyME"</p>
            <p>• "¿Cómo puedo mejorar mi presencia en redes sociales?"</p>
            <p>• "Necesito ideas para un post de LinkedIn"</p>
            <p>• "¿Qué tendencias de marketing funcionan en Argentina?"</p>
          </div>
        </div>
      </div>
    </div>
  );
}