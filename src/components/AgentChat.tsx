// src/components/AgentChat.tsx
'use client';
import { useChat } from 'ai/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Send, Bot, User, AlertCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface AgentChatProps {
  agentType?: string;
  initialMessage?: string;
  agentName?: string;
  agentIcon?: string;
}

export default function AgentChat({ 
  agentType = 'default', 
  initialMessage = '',
  agentName = 'Agente IA',
  agentIcon = '🤖'
}: AgentChatProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  
  const { 
    messages, 
    input, 
    handleInputChange, 
    handleSubmit, 
    isLoading, 
    error: chatError 
  } = useChat({
    api: '/api/chat',
    body: { agentType },
    initialMessages: initialMessage ? [
      { id: '1', role: 'user', content: initialMessage }
    ] : [],
    onError: (error) => {
      console.error('Chat error:', error);
      setError(error.message || 'Error al procesar el mensaje');
    }
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (chatError) {
      setError(chatError.message);
    }
  }, [chatError]);

  const clearError = () => {
    setError(null);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto h-[600px] flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">{agentIcon}</span>
          {agentName}
          {isLoading && (
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <div className="animate-spin h-3 w-3 border border-gray-300 rounded-full border-t-blue-600"></div>
              Pensando...
            </div>
          )}
        </CardTitle>
        
        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2">
            <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-red-700 text-sm font-medium">Error de conexión</p>
              <p className="text-red-600 text-xs mt-1">{error}</p>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearError}
              className="text-red-500 hover:text-red-700"
            >
              ✕
            </Button>
          </div>
        )}
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col overflow-hidden">
        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2">
          {messages.length === 0 && !error && (
            <div className="text-center text-gray-500 mt-8">
              <div className="text-4xl mb-2">{agentIcon}</div>
              <p className="font-medium">¡Hola! Soy tu {agentName.toLowerCase()}.</p>
              <p className="text-sm">¿En qué puedo ayudarte hoy?</p>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg text-xs text-blue-700">
                💡 Probá preguntando: "Ayudame con ideas para mi PyME"
              </div>
            </div>
          )}
          
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${
                message.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {message.role === 'assistant' && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs bg-blue-100">
                    <Bot className="h-4 w-4 text-blue-600" />
                  </AvatarFallback>
                </Avatar>
              )}
              
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  message.role === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900 border'
                }`}
              >
                <div className="whitespace-pre-wrap text-sm leading-relaxed">
                  {message.content}
                </div>
              </div>
              
              {message.role === 'user' && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs bg-green-100">
                    <User className="h-4 w-4 text-green-600" />
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <form onSubmit={(e) => {
          clearError();
          handleSubmit(e);
        }} className="flex gap-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Escribí tu consulta aquí..."
            disabled={isLoading}
            className="flex-1"
            autoFocus
          />
          <Button 
            type="submit" 
            disabled={isLoading || !input.trim()}
            size="icon"
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
        
        {/* Debug Info (solo en desarrollo) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-2 text-xs text-gray-400">
            Agent: {agentType} | Messages: {messages.length}
          </div>
        )}
      </CardContent>
    </Card>
  );
}