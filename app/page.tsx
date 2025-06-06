"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import {
  ChevronDown,
  ChevronUp,
  Star,
  Clock,
  Users,
  Zap,
  Heart,
  CheckCircle,
  MessageCircle,
  Target,
  Trophy,
  AlertTriangle,
  Eye,
  ShoppingCart,
} from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [currentDate, setCurrentDate] = useState("")

  // Link de pagamento
  const PAYMENT_URL = "https://pay.kirvano.com/bcb87495-989d-4173-be8c-bd0776778a13"

  useEffect(() => {
    // Formatar a data atual em português
    const now = new Date()
    const day = now.getDate().toString().padStart(2, "0")

    // Array com nomes dos meses em português
    const months = [
      "JANEIRO",
      "FEVEREIRO",
      "MARÇO",
      "ABRIL",
      "MAIO",
      "JUNHO",
      "JULHO",
      "AGOSTO",
      "SETEMBRO",
      "OUTUBRO",
      "NOVEMBRO",
      "DEZEMBRO",
    ]
    const month = months[now.getMonth()]

    setCurrentDate(`${day} DE ${month}`)

    // Otimizações específicas para mobile
    const viewport = document.querySelector('meta[name="viewport"]')
    if (viewport) {
      viewport.setAttribute(
        "content",
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover",
      )
    }

    // Prevenir zoom no iOS
    document.addEventListener("gesturestart", (e) => {
      e.preventDefault()
    })

    // Otimizar scroll para iOS
    document.body.style.webkitOverflowScrolling = "touch"
  }, [])

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handlePaymentClick = () => {
    // Analytics tracking (opcional)
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "purchase_intent", {
        event_category: "ecommerce",
        event_label: "receitas_fitness",
      })
    }

    // Redirecionar para pagamento
    window.open(PAYMENT_URL, "_blank", "noopener,noreferrer")
  }

  const benefits = [
    {
      icon: <Heart className="w-6 h-6 text-[#E94E77]" />,
      title: "MELHORA SUA SAÚDE INTESTINAL",
      description: "Ingredientes prebióticos que fortalecem sua microbiota",
    },
    {
      icon: <Zap className="w-6 h-6 text-[#7CB342]" />,
      title: "AUMENTA SUA ENERGIA NATURAL",
      description: "Sem picos de glicose, mais disposição o dia todo",
    },
    {
      icon: <Target className="w-6 h-6 text-[#7CB342]" />,
      title: "ACELERA SEU METABOLISMO",
      description: "Ingredientes termogênicos que queimam gordura naturalmente",
    },
    {
      icon: <Trophy className="w-6 h-6 text-[#E94E77]" />,
      title: "FORTALECE SUA IMUNIDADE",
      description: "Antioxidantes e nutrientes que protegem seu corpo",
    },
  ]

  const recipeImages = [
    {
      src: "/brownie fitness.webp",
      title: "BROWNIE FITNESS",
      description: "Chocolate intenso, zero açúcar, textura perfeita!",
      time: "15 min",
      difficulty: "Fácil",
    },
    {
      src: "/public/pudim fitness.webp",
      title: "PUDIM FITNESS",
      description: "Cremoso, nutritivo e irresistível!",
      time: "10 min",
      difficulty: "Super Fácil",
    },
    {
      src: "/public/torta de morango.webp",
      title: "TORTA DE MORANGO",
      description: "Fofinho, saudável e com cobertura de chocolate!",
      time: "25 min",
      difficulty: "Fácil",
    },
    {
      src: "/public/TORTA MARACUJA.webp",
      title: "MOUSSE DE MARACUJÁ",
      description: "Refrescante, cremoso e zero culpa!",
      time: "12 min",
      difficulty: "Fácil",
    },
    {
      src: "/public/bombom de uva.webp",
      title: "BOMBOM DE UVA",
      description: "Crocantes por fora, macios por dentro!",
      time: "20 min",
      difficulty: "Fácil",
    },
    {
      src: "/public/brigadeiro de travessa.webp",
      title: "TRAVESSA DE BRIGADEIRO",
      description: "Cremoso, gelado e com base crocante!",
      time: "30 min",
      difficulty: "Médio",
    },
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      message: "Minha digestão melhorou 100%! E ainda perdi 6kg sem sofrimento 😍",
      time: "14:32",
      avatar: "MS",
    },
    {
      name: "Ana Costa",
      message: "Não tenho mais aquela sonolência depois do almoço! Energia total! 💪",
      time: "15:45",
      avatar: "AC",
    },
    {
      name: "Carla Mendes",
      message: "Meus exames de sangue melhoraram muito! Médico ficou impressionado!",
      time: "16:12",
      avatar: "CM",
    },
    {
      name: "Juliana Santos",
      message: "Pele mais bonita, cabelo mais forte... e 8kg a menos! Receitas milagrosas! ✨",
      time: "17:28",
      avatar: "JS",
    },
  ]

  const faqs = [
    {
      question: "As receitas são realmente gostosas?",
      answer:
        "SIM! Todas as receitas foram testadas e aprovadas por centenas de pessoas. Você não vai sentir diferença do doce tradicional, mas com ZERO açúcar, glúten e lactose!",
    },
    {
      question: "Funciona mesmo para emagrecer?",
      answer:
        "ABSOLUTAMENTE! As receitas são formuladas com ingredientes termogênicos que aceleram o metabolismo. Você come doce e ainda queima gordura!",
    },
    {
      question: "Os ingredientes são caros?",
      answer:
        "NÃO! Todos os ingredientes são facilmente encontrados em qualquer supermercado. Gastamos em média R$15-20 para fazer 10 sobremesas!",
    },
    {
      question: "Quanto tempo demora para fazer?",
      answer:
        "A maioria das receitas leva entre 10-15 minutos! Perfeito para quem tem rotina corrida mas não quer abrir mão do doce.",
    },
    {
      question: "Tem garantia?",
      answer: "SIM! 7 dias de garantia total. Se não gostar, devolvemos 100% do seu dinheiro, sem perguntas!",
    },
  ]

  return (
    <div className="relative min-h-screen bg-[#FEF7E6] overflow-x-hidden">
      {/* Bolhas animadas de fundo */}
      <div className="bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      <div className="relative z-10">
        {/* Fixed Date Scarcity Bar - Mobile Optimized */}
        <div className="sticky top-0 z-50 bg-red-600 text-white py-3 px-4 flex items-center justify-center gap-2 mobile-safe-top">
          <AlertTriangle className="w-4 h-4 flex-shrink-0" />
          <p className="font-bold text-sm text-center">
            ⏰ OFERTA VÁLIDA ATÉ DIA <span className="underline">{currentDate}</span> ⏰
          </p>
        </div>

        {/* Hero Section - Mobile First */}
        <section className="bg-[#FEF7E6] px-4 py-6 mobile-safe-horizontal">
          <div className="text-center space-y-4 max-w-sm mx-auto">
            <Badge className="bg-[#FFC107] text-[#2D2D2D] font-bold text-xs px-3 py-2 animate-pulse rounded-full">
              🔥 OFERTA LIMITADA! 🔥
            </Badge>

            <h1 className="text-2xl sm:text-3xl font-black leading-tight text-[#2D2D2D]">
              TRANSFORME SUA SAÚDE
              <br />
              <span className="text-[#7CB342]">SEM ABRIR MÃO DO DOCE!</span>
            </h1>

            <p className="text-base sm:text-lg font-semibold text-[#2D2D2D]">
              +150 RECEITAS FITNESS
              <br />
              <span className="text-[#7CB342]">ZERO AÇÚCAR • ZERO GLÚTEN</span>
              <br />
              <span className="text-[#E94E77]">SABOR IDENTICO AO TRADICIONAL</span>
            </p>

            <p className="text-sm sm:text-base font-bold text-[#7CB342]">+ BÔNUS: +145 RECEITAS EXTRAS!</p>

            <Card className="card-cream rounded-xl p-4 my-6 border-2 border-[#FFC107]/30 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="text-xl font-black line-through text-gray-400">R$ 67</div>
                  <div className="text-3xl sm:text-4xl font-black text-[#FFC107]">R$ 9,90</div>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-[#2D2D2D]">Menos de R$ 0,07 por receita! 🤯</p>
              </CardContent>
            </Card>

            <Button
              onClick={handlePaymentClick}
              size="lg"
              className="w-full bg-[#FFC107] hover:bg-[#FFC107]/90 text-[#2D2D2D] font-bold text-base py-4 px-6 rounded-xl border-0 shadow-lg btn-cta btn-pulse touch-action-manipulation"
            >
              <Star className="w-5 h-5 mr-2" />
              QUERO MINHAS RECEITAS AGORA!
            </Button>

            <div className="grid grid-cols-3 gap-2 text-xs mt-4">
              <div className="flex items-center gap-1 justify-center">
                <CheckCircle className="w-3 h-3 text-[#7CB342]" />
                <span className="text-[#2D2D2D]">Acesso Imediato</span>
              </div>
              <div className="flex items-center gap-1 justify-center">
                <CheckCircle className="w-3 h-3 text-[#7CB342]" />
                <span className="text-[#2D2D2D]">7 Dias Garantia</span>
              </div>
              <div className="flex items-center gap-1 justify-center">
                <CheckCircle className="w-3 h-3 text-[#7CB342]" />
                <span className="text-[#2D2D2D]">Suporte 24h</span>
              </div>
            </div>
          </div>
        </section>

        {/* Authority Section - Mobile */}
        <section className="px-4 py-6 bg-[#F5F0E8] mobile-safe-horizontal">
          <div className="text-center space-y-6 max-w-sm mx-auto">
            <Badge className="bg-[#E94E77] text-white font-bold text-xs px-3 py-2 rounded-full">
              👩‍⚕️ CRIADO POR ESPECIALISTA
            </Badge>

            <h2 className="text-xl sm:text-2xl font-black text-[#2D2D2D]">
              CONHEÇA A ESPECIALISTA POR TRÁS DAS
              <span className="text-[#7CB342]"> RECEITAS</span>
            </h2>

            <div className="relative w-72 h-64 mx-auto">
              <Image
                src="/DRA.webp"
                alt="Dra. Paula Fernanda - Nutricionista"
                fill
                className="rounded-xl shadow-xl object-cover"
              />
              <div className="absolute -bottom-2 -right-2 bg-[#7CB342] text-white rounded-full p-2">
                <CheckCircle className="w-4 h-4" />
              </div>
            </div>

            <Card className="text-left card-cream-alt rounded-xl border-2 border-[#7CB342]/20">
              <CardContent className="p-4 space-y-3">
                <h3 className="text-lg font-black text-[#2D2D2D]">Dra. Paula Fernanda</h3>
                <div className="space-y-2 text-sm text-[#2D2D2D]">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#7CB342] rounded-full mt-2"></div>
                    <p>
                      <strong>Nutricionista Clínica</strong> - CRN-3 48192/P
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#7CB342] rounded-full mt-2"></div>
                    <p>
                      <strong>Especialista</strong> em Nutrição Funcional
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#7CB342] rounded-full mt-2"></div>
                    <p>
                      <strong>+8 anos</strong> transformando vidas
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#7CB342] rounded-full mt-2"></div>
                    <p>
                      <strong>+15.000 pacientes</strong> atendidos
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-100 to-green-50 text-[#2D2D2D] border-0 rounded-xl">
              <CardContent className="p-4">
                <h4 className="text-base font-black mb-2">💬 MENSAGEM DA DRA.PAULA:</h4>
                <p className="text-sm leading-relaxed italic">
                  "Desenvolvi essas receitas após anos de pesquisa. Cada ingrediente foi selecionado para maximizar os
                  benefícios à saúde, sem abrir mão do sabor!"
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-xl font-black text-[#7CB342]">15K+</div>
                <p className="text-xs text-[#2D2D2D]">Pacientes</p>
              </div>
              <div>
                <div className="text-xl font-black text-[#7CB342]">8+</div>
                <p className="text-xs text-[#2D2D2D]">Anos</p>
              </div>
              <div>
                <div className="text-xl font-black text-[#7CB342]">295</div>
                <p className="text-xs text-[#2D2D2D]">Receitas</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recipe Gallery Carousel - Mobile */}
        <section className="px-4 py-6 bg-gradient-to-br from-amber-50 to-orange-50 mobile-safe-horizontal">
          <div className="text-center space-y-6 max-w-sm mx-auto">
            <Badge className="bg-[#FFC107] text-[#2D2D2D] font-bold text-xs px-3 py-2 animate-pulse rounded-full">
              👀 VEJA AS RECEITAS! 👀
            </Badge>

            <h2 className="text-xl sm:text-2xl font-black text-[#2D2D2D]">
              OLHA SÓ QUE <span className="text-[#E94E77]">DELÍCIAS</span> VOCÊ VAI FAZER!
            </h2>

            <p className="text-sm sm:text-base text-[#2D2D2D] font-semibold">
              Receitas que parecem <strong>PECADO</strong>, mas são{" "}
              <strong className="text-[#7CB342]">100% SAUDÁVEIS!</strong>
            </p>

            <div className="relative">
              <Carousel className="w-full max-w-xs mx-auto">
                <CarouselContent>
                  {recipeImages.map((recipe, index) => (
                    <CarouselItem key={index}>
                      <Card className="overflow-hidden border-2 border-[#FFC107] shadow-xl rounded-xl">
                        <CardContent className="p-0">
                          <div className="relative">
                            <Image
                              src={recipe.src || "/placeholder.svg"}
                              alt={recipe.title}
                              width={280}
                              height={240}
                              className="w-full h-56 object-cover"
                            />
                            <div className="absolute top-2 right-2 bg-[#FFC107] text-[#2D2D2D] px-2 py-1 rounded-full text-xs font-bold">
                              {recipe.difficulty}
                            </div>
                            <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {recipe.time}
                            </div>
                          </div>
                          <div className="p-4 bg-gradient-to-r from-[#FFC107]/10 to-[#E94E77]/10">
                            <h3 className="text-base font-black text-[#2D2D2D] mb-2">{recipe.title}</h3>
                            <p className="text-sm text-[#2D2D2D] font-semibold">{recipe.description}</p>
                            <div className="flex items-center justify-center mt-3">
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 fill-[#FFC107] text-[#FFC107]" />
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <Card className="card-cream-alt rounded-xl border-2 border-[#7CB342]/30">
                <CardContent className="p-3">
                  <div className="text-xl font-black text-[#7CB342]">150</div>
                  <p className="text-xs font-semibold text-[#2D2D2D]">Sobremesas Fitness</p>
                </CardContent>
              </Card>
              <Card className="card-cream-alt rounded-xl border-2 border-[#E94E77]/30">
                <CardContent className="p-3">
                  <div className="text-xl font-black text-[#E94E77]">145</div>
                  <p className="text-xs font-semibold text-[#2D2D2D]">Receitas Bônus</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-[#7CB342] to-[#E94E77] text-white rounded-xl">
              <CardContent className="p-4 text-center">
                <h3 className="text-lg font-black mb-2">🤤 BATEU ÁGUA NA BOCA?</h3>
                <p className="text-sm font-semibold mb-3">
                  Essas são apenas algumas das <strong>295 RECEITAS</strong> que você vai receber!
                </p>
                <Button
                  onClick={handlePaymentClick}
                  size="lg"
                  className="w-full bg-[#FFC107] hover:bg-[#FFC107]/90 text-[#2D2D2D] font-bold text-base py-3 px-6 rounded-xl border-0 shadow-lg btn-cta btn-pulse touch-action-manipulation"
                >
                  <Star className="w-5 h-5 mr-2" />
                  QUERO TODAS AS RECEITAS AGORA!
                </Button>
              </CardContent>
            </Card>

            <div className="flex items-center justify-center gap-2 text-sm text-[#2D2D2D]">
              <Eye className="w-4 h-4 text-[#E94E77]" />
              <span className="font-semibold">+2.847 pessoas já estão fazendo essas receitas!</span>
            </div>
          </div>
        </section>

        {/* Benefits Section - Mobile */}
        <section className="px-4 py-6 bg-[#FEF7E6] mobile-safe-horizontal">
          <div className="text-center space-y-6 max-w-sm mx-auto">
            <h2 className="text-xl sm:text-2xl font-black text-[#2D2D2D]">
              POR QUE SUA SAÚDE PRECISA DESSAS RECEITAS
              <span className="text-[#E94E77]"> AGORA?</span>
            </h2>

            <p className="text-sm sm:text-base text-[#2D2D2D]">
              Chega de sacrificar sua saúde! Transforme seu corpo de dentro para fora!
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="text-left hover:shadow-lg transition-shadow card-cream-alt rounded-xl border-2 border-orange-200/50"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">{benefit.icon}</div>
                      <div>
                        <h3 className="font-black text-sm mb-1 text-[#2D2D2D]">{benefit.title}</h3>
                        <p className="text-sm text-[#2D2D2D]/80">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Bonus Section - Mobile */}
        <section className="px-4 py-6 bg-[#FEF7E6] mobile-safe-horizontal">
          <div className="text-center space-y-6 max-w-sm mx-auto">
            <Badge className="bg-[#E94E77] text-white font-bold text-xs px-3 py-2 animate-pulse rounded-full">
              🎁 BÔNUS EXCLUSIVOS - HOJE! 🎁
            </Badge>

            <h2 className="text-xl sm:text-2xl font-black text-[#2D2D2D]">
              VOCÊ RECEBE <span className="text-[#E94E77]">+145 RECEITAS</span> DE BÔNUS!
            </h2>

            <div className="space-y-4">
              {[
                {
                  emoji: "🥗",
                  title: "BÔNUS #1",
                  subtitle: "+50 RECEITAS MARMITA FITNESS",
                  value: "R$ 47,00",
                  color: "bg-gradient-to-br from-green-100 to-green-50",
                  textColor: "text-[#2D2D2D]",
                  items: ["Almoços completos", "Praticidade diária", "Semana toda", "Alto valor nutricional"],
                },
                {
                  emoji: "🍰",
                  title: "BÔNUS #2",
                  subtitle: "+60 SOBREMESAS AIRFRYER",
                  value: "R$ 67,00",
                  color: "bg-gradient-to-br from-pink-100 to-pink-50",
                  textColor: "text-[#2D2D2D]",
                  items: ["Receitas rápidas", "Menos óleo", "Lanche da tarde", "Texturas incríveis"],
                },
                {
                  emoji: "🎂",
                  title: "BÔNUS #3",
                  subtitle: "+35 BOLOS CASEIROS FITNESS",
                  value: "R$ 37,00",
                  color: "bg-gradient-to-br from-orange-100 to-orange-50",
                  textColor: "text-[#2D2D2D]",
                  items: ["Bolos fofinhos", "Para aniversários", "Toda família", "Coberturas fitness"],
                },
              ].map((bonus, index) => (
                <Card key={index} className="overflow-hidden border-2 border-[#FFC107] rounded-xl">
                  <CardContent className="p-0">
                    <div className={`${bonus.color} ${bonus.textColor} p-4 text-center`}>
                      <div className="text-2xl mb-2">{bonus.emoji}</div>
                      <h3 className="text-base font-black mb-1">{bonus.title}</h3>
                      <h4 className="text-sm font-bold mb-3">{bonus.subtitle}</h4>
                      <div className="bg-white/80 rounded-lg p-2 mb-3">
                        <p className="text-sm font-semibold">
                          VALOR: <span className="line-through text-red-500">{bonus.value}</span>
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-1 text-xs">
                        {bonus.items.map((item, i) => (
                          <div key={i} className="text-left">
                            ✓ {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="card-cream rounded-xl p-6 text-center border-2 border-[#FFC107]">
              <CardContent className="p-0">
                <p className="text-base font-black mb-1 text-[#2D2D2D]">VOCÊ PAGA APENAS:</p>
                <p className="text-3xl font-black text-[#FFC107]">R$ 9,90</p>
                <p className="text-sm font-semibold mt-1 text-[#2D2D2D]">295 RECEITAS COMPLETAS!</p>
                <p className="text-xs text-[#2D2D2D]/70 mt-2">
                  Menos de <strong>R$ 0,03</strong> por receita!
                </p>
                <Button
                  onClick={handlePaymentClick}
                  size="lg"
                  className="w-full bg-[#FFC107] hover:bg-[#FFC107]/90 text-[#2D2D2D] font-bold text-base py-4 px-6 rounded-xl border-0 shadow-lg btn-cta btn-pulse mt-4 touch-action-manipulation"
                >
                  <Star className="w-5 h-5 mr-2" />
                  QUERO TODOS OS BÔNUS AGORA!
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Social Proof - Mobile */}
        <section className="px-4 py-6 bg-[#F5F0E8] mobile-safe-horizontal">
          <div className="text-center space-y-6 max-w-sm mx-auto">
            <h2 className="text-xl sm:text-2xl font-black text-[#2D2D2D]">O QUE NOSSAS CLIENTES FALAM</h2>

            <p className="text-sm sm:text-base text-[#2D2D2D]">+2.847 mulheres transformaram seus corpos!</p>

            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="card-cream-alt rounded-xl border-l-4 border-[#7CB342]">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#7CB342] rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {testimonial.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-sm text-[#2D2D2D]">{testimonial.name}</h4>
                          <span className="text-xs text-[#2D2D2D]/50">{testimonial.time}</span>
                          <MessageCircle className="w-3 h-3 text-[#7CB342]" />
                        </div>
                        <p className="text-sm text-[#2D2D2D] bg-green-50/80 rounded-lg p-2">{testimonial.message}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFC107] text-[#FFC107]" />
                ))}
                <span className="text-lg font-bold ml-2 text-[#2D2D2D]">4.9/5.0</span>
              </div>
              <p className="text-sm text-[#2D2D2D]">Baseado em +2.847 avaliações</p>
            </div>
          </div>
        </section>

        {/* FAQ - Mobile */}
        <section className="px-4 py-6 bg-[#FEF7E6] mobile-safe-horizontal">
          <div className="text-center space-y-6 max-w-sm mx-auto">
            <h2 className="text-xl sm:text-2xl font-black text-[#2D2D2D]">QUEBRANDO SUAS OBJEÇÕES</h2>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <Card key={index} className="card-cream-alt rounded-xl">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 text-left flex items-center justify-between touch-action-manipulation"
                  >
                    <h3 className="font-bold text-sm text-[#2D2D2D] pr-2">{faq.question}</h3>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-[#E94E77] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#E94E77] flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-4 pb-4">
                      <p className="text-sm text-[#2D2D2D] leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA - Mobile */}
        <section className="px-4 py-6 bg-[#F5F0E8] mobile-safe-horizontal">
          <div className="text-center space-y-6 max-w-sm mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-[#2D2D2D]">SUA SAÚDE NÃO PODE ESPERAR!</h2>

            <p className="text-sm sm:text-base text-[#2D2D2D]">
              Não deixe sua saúde em segundo plano! Milhares já estão vivendo com mais energia com nossas{" "}
              <strong>295 RECEITAS COMPLETAS</strong>.
            </p>

            <Card className="card-cream rounded-xl border-2 border-green-200">
              <CardContent className="p-4 text-center">
                <div className="text-4xl font-black text-[#FFC107] mb-2">R$ 9,90</div>
                <p className="text-base font-semibold mb-1 text-[#2D2D2D]">295 RECEITAS COMPLETAS</p>
                <p className="text-sm font-semibold mb-3 text-[#2D2D2D]">150 Sobremesas + 145 Bônus</p>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="flex items-center gap-1 justify-center">
                    <Clock className="w-3 h-3 text-[#7CB342]" />
                    <span className="text-[#2D2D2D]">Imediato</span>
                  </div>
                  <div className="flex items-center gap-1 justify-center">
                    <Users className="w-3 h-3 text-[#7CB342]" />
                    <span className="text-[#2D2D2D]">+2.847</span>
                  </div>
                  <div className="flex items-center gap-1 justify-center">
                    <Zap className="w-3 h-3 text-[#7CB342]" />
                    <span className="text-[#2D2D2D]">7 Dias</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button
              onClick={handlePaymentClick}
              size="lg"
              className="w-full bg-[#FFC107] hover:bg-[#FFC107]/90 text-[#2D2D2D] font-bold text-lg py-6 px-6 rounded-xl border-0 shadow-lg btn-cta btn-pulse touch-action-manipulation"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              TRANSFORMAR MINHA SAÚDE AGORA!
            </Button>

            <p className="text-xs text-[#2D2D2D]/70">⚠️ Oferta válida apenas hoje • Pagamento seguro • Garantia total</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#F5F0E8] text-[#2D2D2D] py-6 px-4 mobile-safe-horizontal mobile-safe-bottom">
          <div className="text-center space-y-2 max-w-sm mx-auto">
            <p className="text-xs opacity-80">© 2025 Receitas Fitness. Todos os direitos reservados.</p>
            <p className="text-xs opacity-60">Este produto não substitui orientação médica profissional.</p>
          </div>
        </footer>

        {/* Fixed Bottom CTA - Mobile */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#FEF7E6]/95 backdrop-blur-sm border-t border-[#FFC107]/30 p-3 z-40 mobile-safe-horizontal mobile-safe-bottom">
          <Button
            onClick={handlePaymentClick}
            size="lg"
            className="w-full bg-[#FFC107] hover:bg-[#FFC107]/90 text-[#2D2D2D] font-bold text-base py-4 px-6 rounded-xl border-0 shadow-lg btn-cta btn-pulse max-w-sm mx-auto touch-action-manipulation"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            COMPRAR AGORA - R$ 9,90
          </Button>
        </div>

        {/* Bottom Padding for Fixed Button */}
        <div className="h-20 mobile-safe-bottom"></div>
      </div>
    </div>
  )
}
