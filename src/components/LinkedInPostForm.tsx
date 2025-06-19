// src/components/LinkedInPostForm.tsx
'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

interface FormData {
  // Paso 1: Información Básica
  companyName: string;
  sector: string;
  companySize: string;
  
  // Paso 2: Objetivo del Post
  objective: string;
  audience: string;
  urgency: string;
  
  // Paso 3: Contenido y Tono
  keyMessage: string;
  tone: string;
  includeHashtags: boolean;
  
  // Paso 4: Call-to-Action
  callToAction: string;
  contactMethod: string;
}

interface LinkedInPostFormProps {
  onGenerate: (prompt: string) => void;
}

export default function LinkedInPostForm({ onGenerate }: LinkedInPostFormProps) {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    sector: '',
    companySize: '',
    objective: '',
    audience: '',
    urgency: '',
    keyMessage: '',
    tone: 'profesional-cercano',
    includeHashtags: true,
    callToAction: '',
    contactMethod: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.companyName && formData.sector && formData.companySize;
      case 2:
        return formData.objective && formData.audience && formData.urgency;
      case 3:
        return formData.keyMessage && formData.tone;
      case 4:
        return formData.callToAction && formData.contactMethod;
      default:
        return false;
    }
  };

  const generatePrompt = () => {
    const prompt = `Creá un post de LinkedIn profesional para ${formData.companyName}, una ${formData.companySize} del sector ${formData.sector} en Argentina.

CONTEXTO DE LA EMPRESA:
- Empresa: ${formData.companyName}
- Sector: ${formData.sector}
- Tamaño: ${formData.companySize}

OBJETIVO DEL POST:
- Propósito principal: ${formData.objective}
- Audiencia objetivo: ${formData.audience}
- Urgencia/timing: ${formData.urgency}

CONTENIDO Y MENSAJE:
- Mensaje clave: ${formData.keyMessage}
- Tono deseado: ${formData.tone}
- Incluir hashtags: ${formData.includeHashtags ? 'Sí, 3-5 hashtags relevantes' : 'No incluir hashtags'}

CALL-TO-ACTION:
- Acción deseada: ${formData.callToAction}
- Método de contacto: ${formData.contactMethod}

REQUISITOS ESPECÍFICOS PARA ARGENTINA:
- Usar "vos" en lugar de "tú"
- Incluir referencias culturales argentinas cuando sea apropiado
- Adaptar el lenguaje al mercado empresarial argentino
- Mencionar beneficios específicos para PyMEs argentinas si es relevante
- Máximo 1,300 caracteres (límite de LinkedIn)
- Estructura: Hook inicial + desarrollo + call-to-action
- Ser auténtico y evitar jerga empresarial excesiva

FORMATO DE SALIDA:
1. Post completo optimizado para LinkedIn
2. Versión alternativa más corta (opcional)
3. Sugerencias de hashtags (si corresponde)
4. Tips para el timing de publicación

Creá un post que genere engagement genuino y refleje la personalidad de una empresa argentina.`;

    onGenerate(prompt);
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="flex items-center gap-2">
            📱 Generador de Posts LinkedIn
          </CardTitle>
          <Badge variant="outline">
            {currentStep}/{totalSteps}
          </Badge>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Paso 1: Información Básica */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Información de tu empresa</h3>
              <p className="text-sm text-gray-600">Contanos sobre tu negocio para personalizar el contenido</p>
            </div>
            
            <div>
              <Label htmlFor="companyName">Nombre de tu empresa *</Label>
              <Input
                id="companyName"
                value={formData.companyName}
                onChange={(e) => updateFormData('companyName', e.target.value)}
                placeholder="Ej: TechSolutions Argentina"
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="sector">Sector/Industria *</Label>
              <Select onValueChange={(value) => updateFormData('sector', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Seleccioná tu sector" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tecnologia">Tecnología y Software</SelectItem>
                  <SelectItem value="marketing">Marketing y Publicidad</SelectItem>
                  <SelectItem value="consultoria">Consultoría</SelectItem>
                  <SelectItem value="retail">Retail y E-commerce</SelectItem>
                  <SelectItem value="servicios-profesionales">Servicios Profesionales</SelectItem>
                  <SelectItem value="manufactura">Manufactura</SelectItem>
                  <SelectItem value="gastronomia">Gastronomía</SelectItem>
                  <SelectItem value="salud">Salud y Bienestar</SelectItem>
                  <SelectItem value="educacion">Educación y Capacitación</SelectItem>
                  <SelectItem value="finanzas">Finanzas y Seguros</SelectItem>
                  <SelectItem value="logistica">Logística y Transporte</SelectItem>
                  <SelectItem value="turismo">Turismo y Hotelería</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="companySize">Tamaño de la empresa *</Label>
              <Select onValueChange={(value) => updateFormData('companySize', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Seleccioná el tamaño" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="emprendedor-solo">Emprendedor individual</SelectItem>
                  <SelectItem value="micro-empresa">Micro empresa (2-10 empleados)</SelectItem>
                  <SelectItem value="pequena-empresa">Pequeña empresa (11-50 empleados)</SelectItem>
                  <SelectItem value="mediana-empresa">Mediana empresa (51-200 empleados)</SelectItem>
                  <SelectItem value="empresa-grande">Empresa grande (200+ empleados)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Paso 2: Objetivo del Post */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">¿Cuál es tu objetivo?</h3>
              <p className="text-sm text-gray-600">Definí qué querés lograr con este post</p>
            </div>
            
            <div>
              <Label htmlFor="objective">Objetivo principal del post *</Label>
              <Select onValueChange={(value) => updateFormData('objective', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="¿Qué querés lograr?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="generar-leads">Generar leads/clientes potenciales</SelectItem>
                  <SelectItem value="promocionar-servicio">Promocionar un servicio específico</SelectItem>
                  <SelectItem value="promocionar-producto">Promocionar un producto</SelectItem>
                  <SelectItem value="compartir-logro">Compartir un logro o hito</SelectItem>
                  <SelectItem value="educar-audiencia">Educar a la audiencia</SelectItem>
                  <SelectItem value="construir-marca">Construir reconocimiento de marca</SelectItem>
                  <SelectItem value="reclutar-talento">Reclutar talento</SelectItem>
                  <SelectItem value="networking">Hacer networking</SelectItem>
                  <SelectItem value="anunciar-evento">Anunciar un evento</SelectItem>
                  <SelectItem value="compartir-contenido">Compartir contenido de valor</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="audience">¿A quién está dirigido? *</Label>
              <Textarea
                id="audience"
                value={formData.audience}
                onChange={(e) => updateFormData('audience', e.target.value)}
                placeholder="Ej: Dueños de PyMEs argentinas, profesionales de RRHH, emprendedores en tecnología..."
                className="mt-1"
                rows={2}
              />
            </div>
            
            <div>
              <Label htmlFor="urgency">Timing/Urgencia *</Label>
              <Select onValueChange={(value) => updateFormData('urgency', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="¿Cuándo necesitás publicarlo?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inmediato">Inmediato - publicar hoy</SelectItem>
                  <SelectItem value="esta-semana">Esta semana</SelectItem>
                  <SelectItem value="proximo-mes">El próximo mes</SelectItem>
                  <SelectItem value="evento-especifico">Para un evento específico</SelectItem>
                  <SelectItem value="contenido-evergreen">Contenido atemporal</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Paso 3: Contenido y Tono */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Contenido y estilo</h3>
              <p className="text-sm text-gray-600">Definí el mensaje y tono de tu post</p>
            </div>
            
            <div>
              <Label htmlFor="keyMessage">Mensaje clave que querés transmitir *</Label>
              <Textarea
                id="keyMessage"
                value={formData.keyMessage}
                onChange={(e) => updateFormData('keyMessage', e.target.value)}
                placeholder="Ej: Nuestro nuevo sistema reduce los costos administrativos de PyMEs en un 40%..."
                className="mt-1"
                rows={3}
              />
            </div>
            
            <div>
              <Label htmlFor="tone">Tono del post *</Label>
              <Select onValueChange={(value) => updateFormData('tone', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="¿Qué tono preferís?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="profesional-cercano">Profesional pero cercano</SelectItem>
                  <SelectItem value="inspiracional">Inspiracional y motivador</SelectItem>
                  <SelectItem value="educativo">Educativo e informativo</SelectItem>
                  <SelectItem value="conversacional">Conversacional y amigable</SelectItem>
                  <SelectItem value="tecnico">Técnico y especializado</SelectItem>
                  <SelectItem value="storytelling">Narrativo (storytelling)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="includeHashtags"
                checked={formData.includeHashtags}
                onChange={(e) => updateFormData('includeHashtags', e.target.checked)}
                className="rounded"
              />
              <Label htmlFor="includeHashtags" className="text-sm">
                Incluir hashtags relevantes (recomendado)
              </Label>
            </div>
          </div>
        )}

        {/* Paso 4: Call-to-Action */}
        {currentStep === 4 && (
          <div className="space-y-4">
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">¿Qué querés que hagan?</h3>
              <p className="text-sm text-gray-600">Definí tu call-to-action</p>
            </div>
            
            <div>
              <Label htmlFor="callToAction">Acción que querés que tomen *</Label>
              <Select onValueChange={(value) => updateFormData('callToAction', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="¿Qué querés que hagan los lectores?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="contactar-dm">Enviar mensaje directo</SelectItem>
                  <SelectItem value="comentar">Comentar su experiencia/opinión</SelectItem>
                  <SelectItem value="visitar-sitio">Visitar nuestro sitio web</SelectItem>
                  <SelectItem value="agendar-llamada">Agendar una llamada</SelectItem>
                  <SelectItem value="descargar-recurso">Descargar un recurso gratuito</SelectItem>
                  <SelectItem value="seguir-perfil">Seguir nuestro perfil</SelectItem>
                  <SelectItem value="compartir-post">Compartir el post</SelectItem>
                  <SelectItem value="contactar-email">Contactar por email</SelectItem>
                  <SelectItem value="llamar-telefono">Llamar por teléfono</SelectItem>
                  <SelectItem value="agendar-reunion">Agendar una reunión</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="contactMethod">Información de contacto *</Label>
              <Textarea
                id="contactMethod"
                value={formData.contactMethod}
                onChange={(e) => updateFormData('contactMethod', e.target.value)}
                placeholder="Ej: Escribinos al +54 11 1234-5678, visitá nuestro sitio www.ejemplo.com, o mandanos un DM..."
                className="mt-1"
                rows={2}
              />
            </div>
            
            {/* Resumen */}
            <div className="p-4 bg-blue-50 rounded-lg mt-6">
              <h4 className="font-semibold mb-2">📋 Resumen de tu post:</h4>
              <div className="text-sm space-y-1">
                <p><strong>Empresa:</strong> {formData.companyName} ({formData.sector})</p>
                <p><strong>Objetivo:</strong> {formData.objective}</p>
                <p><strong>Audiencia:</strong> {formData.audience.substring(0, 50)}...</p>
                <p><strong>Tono:</strong> {formData.tone}</p>
                <p><strong>Call-to-action:</strong> {formData.callToAction}</p>
              </div>
            </div>
          </div>
        )}

        {/* Botones de navegación */}
        <div className="flex justify-between pt-4">
          <Button 
            onClick={handleBack} 
            disabled={currentStep === 1}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Anterior
          </Button>
          
          {currentStep < totalSteps ? (
            <Button 
              onClick={handleNext}
              disabled={!canProceed()}
              className="flex items-center gap-2"
            >
              Siguiente
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button 
              onClick={generatePrompt}
              disabled={!canProceed()}
              className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
            >
              <Sparkles className="h-4 w-4" />
              Generar Post
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}