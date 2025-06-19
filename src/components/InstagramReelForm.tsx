// src/components/InstagramReelForm.tsx
'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, Video, Clock } from 'lucide-react';

interface FormData {
  // Paso 1: Información del Negocio
  businessName: string;
  businessType: string;
  productService: string;
  
  // Paso 2: Objetivo del Reel
  reelObjective: string;
  targetAudience: string;
  reelType: string;
  
  // Paso 3: Contenido y Estructura
  hook: string;
  duration: string;
  keyMessage: string;
  
  // Paso 4: Estilo y Finalización
  tone: string;
  callToAction: string;
  includeMusic: boolean;
  includeHashtags: boolean;
}

interface InstagramReelFormProps {
  onGenerate: (prompt: string) => void;
}

export default function InstagramReelForm({ onGenerate }: InstagramReelFormProps) {
  const [formData, setFormData] = useState<FormData>({
    businessName: '',
    businessType: '',
    productService: '',
    reelObjective: '',
    targetAudience: '',
    reelType: '',
    hook: '',
    duration: '30',
    keyMessage: '',
    tone: 'energico-amigable',
    callToAction: '',
    includeMusic: true,
    includeHashtags: true
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
        return formData.businessName && formData.businessType && formData.productService;
      case 2:
        return formData.reelObjective && formData.targetAudience && formData.reelType;
      case 3:
        return formData.hook && formData.duration && formData.keyMessage;
      case 4:
        return formData.tone && formData.callToAction;
      default:
        return false;
    }
  };

  const generatePrompt = () => {
    const prompt = `Creá un script completo para un reel de Instagram de ${formData.duration} segundos para ${formData.businessName}, un negocio argentino del tipo ${formData.businessType}.

INFORMACIÓN DEL NEGOCIO:
- Nombre: ${formData.businessName}
- Tipo de negocio: ${formData.businessType}
- Producto/Servicio: ${formData.productService}

OBJETIVOS DEL REEL:
- Propósito principal: ${formData.reelObjective}
- Audiencia objetivo: ${formData.targetAudience}
- Tipo de reel: ${formData.reelType}

ESTRUCTURA DEL CONTENIDO:
- Hook inicial: ${formData.hook}
- Duración total: ${formData.duration} segundos
- Mensaje clave: ${formData.keyMessage}
- Tono: ${formData.tone}
- Call-to-action: ${formData.callToAction}

ELEMENTOS TÉCNICOS:
- Incluir música: ${formData.includeMusic ? 'Sí, sugerir tipo de música' : 'No incluir música'}
- Incluir hashtags: ${formData.includeHashtags ? 'Sí, hashtags argentinos relevantes' : 'Sin hashtags'}

REQUISITOS ESPECÍFICOS PARA ARGENTINA:
- Usar lenguaje argentino natural ("vos", "che", expresiones locales)
- Incluir referencias culturales argentinas cuando sea apropiado
- Adaptar el contenido al contexto de redes sociales argentinas
- Considerar tendencias locales de Instagram Argentina
- Timing optimizado para audiencia argentina

FORMATO DEL SCRIPT:
1. **Hook (0-3 segundos)**: Primer impacto para retener atención
2. **Desarrollo (${formData.duration === '15' ? '4-12' : formData.duration === '30' ? '4-25' : formData.duration === '60' ? '4-55' : '4-85'} segundos)**: Contenido principal con valor
3. **Cierre y CTA (últimos 3 segundos)**: Call-to-action claro
4. **Elementos visuales**: Descripción de qué mostrar en pantalla
5. **Texto on-screen**: Sugerencias de texto superpuesto
6. **Timing específico**: Indicar segundos exactos para cada escena
7. **Hashtags**: Lista de hashtags argentinos relevantes
8. **Música sugerida**: ${formData.includeMusic ? 'Tipo de música y mood recomendado' : 'N/A'}
9. **Tips de producción**: Consejos para grabación y edición

OBJETIVO: Crear un reel que genere engagement auténtico, refleje la personalidad argentina del negocio y logre el objetivo específico planteado.`;

    onGenerate(prompt);
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="flex items-center gap-2">
            🎬 Generador de Reels Instagram
          </CardTitle>
          <Badge variant="outline">
            {currentStep}/{totalSteps}
          </Badge>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-pink-600 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Paso 1: Información del Negocio */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Información de tu negocio</h3>
              <p className="text-sm text-gray-600">Contanos sobre tu negocio para crear contenido personalizado</p>
            </div>
            
            <div>
              <Label htmlFor="businessName">Nombre de tu negocio *</Label>
              <Input
                id="businessName"
                value={formData.businessName}
                onChange={(e) => updateFormData('businessName', e.target.value)}
                placeholder="Ej: Café Central Buenos Aires"
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="businessType">Tipo de negocio *</Label>
              <Select onValueChange={(value) => updateFormData('businessType', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Seleccioná tu tipo de negocio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="restaurante-gastronomia">Restaurante/Gastronomía</SelectItem>
                  <SelectItem value="tienda-retail">Tienda/Retail</SelectItem>
                  <SelectItem value="servicios-profesionales">Servicios Profesionales</SelectItem>
                  <SelectItem value="belleza-estetica">Belleza/Estética</SelectItem>
                  <SelectItem value="fitness-deportes">Fitness/Deportes</SelectItem>
                  <SelectItem value="educacion-cursos">Educación/Cursos</SelectItem>
                  <SelectItem value="tecnologia">Tecnología</SelectItem>
                  <SelectItem value="salud-bienestar">Salud/Bienestar</SelectItem>
                  <SelectItem value="arte-creatividad">Arte/Creatividad</SelectItem>
                  <SelectItem value="turismo-eventos">Turismo/Eventos</SelectItem>
                  <SelectItem value="inmobiliaria">Inmobiliaria</SelectItem>
                  <SelectItem value="automotriz">Automotriz</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="productService">¿Qué producto o servicio querés promocionar? *</Label>
              <Textarea
                id="productService"
                value={formData.productService}
                onChange={(e) => updateFormData('productService', e.target.value)}
                placeholder="Ej: Hamburguesas artesanales con ingredientes orgánicos de productores locales"
                className="mt-1"
                rows={2}
              />
            </div>
          </div>
        )}

        {/* Paso 2: Objetivo del Reel */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">¿Cuál es tu objetivo?</h3>
              <p className="text-sm text-gray-600">Definí qué querés lograr con este reel</p>
            </div>
            
            <div>
              <Label htmlFor="reelObjective">Objetivo principal del reel *</Label>
              <Select onValueChange={(value) => updateFormData('reelObjective', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="¿Qué querés lograr?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aumentar-ventas">Aumentar ventas</SelectItem>
                  <SelectItem value="generar-awareness">Generar conocimiento de marca</SelectItem>
                  <SelectItem value="mostrar-producto">Mostrar producto/servicio</SelectItem>
                  <SelectItem value="educar-audiencia">Educar a la audiencia</SelectItem>
                  <SelectItem value="behind-scenes">Mostrar behind the scenes</SelectItem>
                  <SelectItem value="testimonios">Compartir testimonios</SelectItem>
                  <SelectItem value="tendencia-viral">Sumarse a tendencia viral</SelectItem>
                  <SelectItem value="anunciar-promocion">Anunciar promoción especial</SelectItem>
                  <SelectItem value="construir-comunidad">Construir comunidad</SelectItem>
                  <SelectItem value="reclutar-staff">Reclutar personal</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="targetAudience">¿Quién es tu audiencia ideal? *</Label>
              <Textarea
                id="targetAudience"
                value={formData.targetAudience}
                onChange={(e) => updateFormData('targetAudience', e.target.value)}
                placeholder="Ej: Jóvenes de 20-35 años de CABA y GBA, interesados en gastronomía saludable y productos locales"
                className="mt-1"
                rows={2}
              />
            </div>
            
            <div>
              <Label htmlFor="reelType">Tipo de reel *</Label>
              <Select onValueChange={(value) => updateFormData('reelType', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="¿Qué estilo de reel querés?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tutorial-howto">Tutorial/How-to</SelectItem>
                  <SelectItem value="antes-despues">Antes y Después</SelectItem>
                  <SelectItem value="behind-scenes">Behind the Scenes</SelectItem>
                  <SelectItem value="producto-showcase">Product Showcase</SelectItem>
                  <SelectItem value="tendencia-trend">Trend/Tendencia</SelectItem>
                  <SelectItem value="testimonial">Testimonial</SelectItem>
                  <SelectItem value="educativo-tips">Educativo/Tips</SelectItem>
                  <SelectItem value="storytelling">Storytelling</SelectItem>
                  <SelectItem value="humor-entretenimiento">Humor/Entretenimiento</SelectItem>
                  <SelectItem value="unboxing-reveal">Unboxing/Reveal</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Paso 3: Contenido y Estructura */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Estructura del contenido</h3>
              <p className="text-sm text-gray-600">Definí el contenido principal y timing</p>
            </div>
            
            <div>
              <Label htmlFor="hook">Hook inicial (primeros 3 segundos) *</Label>
              <Input
                id="hook"
                value={formData.hook}
                onChange={(e) => updateFormData('hook', e.target.value)}
                placeholder="Ej: ¿Sabías que podés hacer la hamburguesa perfecta en casa?"
                className="mt-1"
              />
              <p className="text-xs text-gray-500 mt-1">
                💡 El hook debe captar atención inmediatamente para evitar que scrolleen
              </p>
            </div>
            
            <div>
              <Label htmlFor="duration" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Duración del reel *
              </Label>
              <Select onValueChange={(value) => updateFormData('duration', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="¿Cuánto debe durar?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 segundos (máximo impacto)</SelectItem>
                  <SelectItem value="30">30 segundos (recomendado)</SelectItem>
                  <SelectItem value="60">60 segundos (contenido detallado)</SelectItem>
                  <SelectItem value="90">90 segundos (storytelling)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="keyMessage">Mensaje clave que querés transmitir *</Label>
              <Textarea
                id="keyMessage"
                value={formData.keyMessage}
                onChange={(e) => updateFormData('keyMessage', e.target.value)}
                placeholder="Ej: Nuestras hamburguesas se hacen con carne 100% argentina y verduras de la huerta orgánica"
                className="mt-1"
                rows={3}
              />
            </div>
          </div>
        )}

        {/* Paso 4: Estilo y Finalización */}
        {currentStep === 4 && (
          <div className="space-y-4">
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Estilo y finalización</h3>
              <p className="text-sm text-gray-600">Últimos detalles para tu reel perfecto</p>
            </div>
            
            <div>
              <Label htmlFor="tone">Tono del reel *</Label>
              <Select onValueChange={(value) => updateFormData('tone', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="¿Qué vibe querés?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="energico-amigable">Enérgico y amigable</SelectItem>
                  <SelectItem value="profesional-confiable">Profesional y confiable</SelectItem>
                  <SelectItem value="divertido-casual">Divertido y casual</SelectItem>
                  <SelectItem value="inspiracional">Inspiracional</SelectItem>
                  <SelectItem value="educativo-experto">Educativo/Experto</SelectItem>
                  <SelectItem value="emotivo-cercano">Emotivo y cercano</SelectItem>
                  <SelectItem value="trendy-juvenil">Trendy y juvenil</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="callToAction">Call-to-action *</Label>
              <Select onValueChange={(value) => updateFormData('callToAction', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="¿Qué querés que hagan?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="visitar-local">Visitar nuestro local</SelectItem>
                  <SelectItem value="seguir-cuenta">Seguir nuestra cuenta</SelectItem>
                  <SelectItem value="comentar-experiencia">Comentar su experiencia</SelectItem>
                  <SelectItem value="compartir-reel">Compartir este reel</SelectItem>
                  <SelectItem value="guardar-post">Guardar el post</SelectItem>
                  <SelectItem value="mandar-dm">Mandar mensaje directo</SelectItem>
                  <SelectItem value="visitar-web">Visitar nuestro sitio web</SelectItem>
                  <SelectItem value="llamar-telefono">Llamar o contactar</SelectItem>
                  <SelectItem value="probar-producto">Probar el producto</SelectItem>
                  <SelectItem value="agendar-cita">Agendar una cita</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="includeMusic"
                  checked={formData.includeMusic}
                  onChange={(e) => updateFormData('includeMusic', e.target.checked)}
                  className="rounded"
                />
                <Label htmlFor="includeMusic" className="text-sm">
                  Incluir sugerencias de música (recomendado para engagement)
                </Label>
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
                  Incluir hashtags argentinos relevantes (aumenta alcance)
                </Label>
              </div>
            </div>
            
            {/* Resumen */}
            <div className="p-4 bg-pink-50 rounded-lg mt-6">
              <h4 className="font-semibold mb-2">🎬 Resumen de tu reel:</h4>
              <div className="text-sm space-y-1">
                <p><strong>Negocio:</strong> {formData.businessName} ({formData.businessType})</p>
                <p><strong>Objetivo:</strong> {formData.reelObjective}</p>
                <p><strong>Tipo:</strong> {formData.reelType}</p>
                <p><strong>Duración:</strong> {formData.duration} segundos</p>
                <p><strong>Tono:</strong> {formData.tone}</p>
                <p><strong>Hook:</strong> {formData.hook.substring(0, 50)}...</p>
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
              className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700"
            >
              Siguiente
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button 
              onClick={generatePrompt}
              disabled={!canProceed()}
              className="bg-pink-600 hover:bg-pink-700 flex items-center gap-2"
            >
              <Video className="h-4 w-4" />
              Generar Script
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}