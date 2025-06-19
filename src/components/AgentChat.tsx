// src/components/AgentChat.tsx
'use client';
import { useChat } from 'ai/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Send, Bot, User, AlertCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';

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
  const [isInitialized, setIsInitialized] = useState(false);
  
  const { 
    messages, 
    input, 
    handleInputChange, 
    handleSubmit, 
    isLoading, 
    error: chatError,
    append
  } = useChat({
    api: '/api/chat',
    body: { agentType },
    onError: (error) => {
      console.error('Chat error:', error);
      setError(error.message || 'Error al procesar el mensaje');
    }
  });

  // Auto-enviar el mensaje inicial cuando se proporciona
  useEffect(() => {
    if (initialMessage && !isInitialized && messages.length === 0) {
      console.log('Sending initial message:', initialMessage.substring(0, 100) + '...');
      append({
        role: 'user',
        content: initialMessage
      });
      setIsInitialized(true);
    }
  }, [initialMessage, isInitialized, messages.length, append]);

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
              Generando...
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
          {messages.length === 0 && !error && !isLoading && (
            <div className="text-center text-gray-500 mt-8">
              <div className="text-4xl mb-2">{agentIcon}</div>
              <p className="font-medium">¡Hola! Soy tu {agentName.toLowerCase()}.</p>
              <p className="text-sm">¿En qué puedo ayudarte hoy?</p>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg text-xs text-blue-700">
                💡 Probá preguntando: &quot;Ayudame con ideas para mi PyME&quot;
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
                className={`max-w-[80%] rounded-lg px-4 py-3 ${
                  message.role === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-50 text-gray-900 border'
                }`}
              >
                {message.role === 'assistant' ? (
                  <div className="prose prose-sm max-w-none">
                    <ReactMarkdown
                      components={{
                        h1: ({children}) => <h1 className="text-lg font-bold mb-2 mt-0">{children}</h1>,
                        h2: ({children}) => <h2 className="text-base font-semibold mb-2 mt-3">{children}</h2>,
                        h3: ({children}) => <h3 className="text-sm font-semibold mb-1 mt-2">{children}</h3>,
                        p: ({children}) => <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>,
                        ul: ({children}) => <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>,
                        ol: ({children}) => <ol className="list-decimal list-inside mb-2 space-y-1">{children}</ol>,
                        li: ({children}) => <li className="text-sm">{children}</li>,
                        strong: ({children}) => <strong className="font-semibold text-gray-900">{children}</strong>,
                        em: ({children}) => <em className="italic">{children}</em>,
                        blockquote: ({children}) => <blockquote className="border-l-4 border-blue-300 pl-3 italic my-2">{children}</blockquote>,
                        code: ({children}) => <code className="bg-gray-100 px-1 py-0.5 rounded text-xs font-mono">{children}</code>,
                        pre: ({children}) => <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto my-2">{children}</pre>
                      }}
                    >
                      {message.content}
                    </ReactMarkdown>
                  </div>
                ) : (
                  <div className="text-sm leading-relaxed">
                    {message.content}
                  </div>
                )}
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
            Agent: {agentType} | Messages: {messages.length} | Initial: {!!initialMessage}
          </div>
        )}
      </CardContent>
    </Card>
  );
}