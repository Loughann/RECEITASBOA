"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Brain, Zap, Shield, Leaf, Star } from "lucide-react"

export function HealthBenefits() {
  const healthBenefits = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "SAÚDE CARDIOVASCULAR",
      description: "Ingredientes ricos em ômega-3 e antioxidantes que protegem seu coração",
      color: "from-red-100 to-pink-100",
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: "FUNÇÃO CEREBRAL",
      description: "Nutrientes que melhoram memória, foco e concentração",
      color: "from-purple-100 to-indigo-100",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "ENERGIA SUSTENTADA",
      description: "Sem picos de insulina, energia constante durante todo o dia",
      color: "from-yellow-100 to-orange-100",
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "SISTEMA IMUNOLÓGICO",
      description: "Vitaminas e minerais que fortalecem suas defesas naturais",
      color: "from-green-100 to-emerald-100",
    },
    {
      icon: <Leaf className="w-8 h-8 text-teal-500" />,
      title: "DETOX NATURAL",
      description: "Ingredientes que ajudam na eliminação de toxinas do organismo",
      color: "from-teal-100 to-cyan-100",
    },
    {
      icon: <Star className="w-8 h-8 text-indigo-500" />,
      title: "ANTI-ENVELHECIMENTO",
      description: "Antioxidantes poderosos que combatem o envelhecimento celular",
      color: "from-indigo-100 to-purple-100",
    },
  ]

  return (
    <section className="px-4 py-8 bg-gradient-to-b from-blue-50 to-green-50">
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-black text-gray-800">BENEFÍCIOS CIENTÍFICOS COMPROVADOS</h2>

        <p className="text-base text-gray-600">
          Cada receita foi desenvolvida com ingredientes funcionais que trazem benefícios reais para sua saúde
        </p>

        <div className="space-y-4">
          {healthBenefits.slice(0, 3).map((benefit, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <div className={`bg-gradient-to-r ${benefit.color} p-4 text-center`}>
                  <div className="flex justify-center mb-3">{benefit.icon}</div>
                  <h3 className="font-black text-base mb-2 text-gray-800">{benefit.title}</h3>
                  <p className="text-sm text-gray-700">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-white">
          <CardContent className="p-4 text-center">
            <h3 className="text-lg font-black text-gray-800 mb-2">🧬 BASEADO EM CIÊNCIA</h3>
            <p className="text-sm text-gray-600">
              Todas as receitas são desenvolvidas com base em estudos científicos sobre nutrição funcional.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-4 text-center">
            <h3 className="text-xl font-black mb-4">🎯 SOLUÇÃO COMPLETA</h3>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-black text-yellow-300">150</div>
                <p className="text-xs font-semibold">Sobremesas</p>
              </div>
              <div>
                <div className="text-2xl font-black text-yellow-300">50</div>
                <p className="text-xs font-semibold">Marmitas</p>
              </div>
              <div>
                <div className="text-2xl font-black text-yellow-300">60</div>
                <p className="text-xs font-semibold">Airfryer</p>
              </div>
              <div>
                <div className="text-2xl font-black text-yellow-300">35</div>
                <p className="text-xs font-semibold">Bolos</p>
              </div>
            </div>

            <p className="text-base font-bold mt-4">
              = <span className="text-yellow-300">295 RECEITAS</span> completas!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
