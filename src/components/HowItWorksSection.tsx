import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Settings, Wand2, Rocket, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "요구사항 분석",
    description: "비즈니스 목표와 기존 워크플로우를 분석하여 최적의 자동화 전략을 수립합니다.",
    icon: Settings,
  },
  {
    number: "02",
    title: "AI 에이전트 설정",
    description: "노코드 인터페이스로 에이전트를 설정하고, 필요한 데이터 소스와 연동합니다.",
    icon: Wand2,
  },
  {
    number: "03",
    title: "자동화 배포",
    description: "테스트를 거쳐 프로덕션 환경에 안전하게 배포합니다. 다운타임 없이 진행됩니다.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "성과 분석",
    description: "실시간 대시보드로 성과를 측정하고, AI가 지속적으로 최적화합니다.",
    icon: BarChart3,
  },
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section id="how-it-works" ref={ref} className="section-spacing bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-50 text-primary text-sm font-medium mb-6">
            이용 방법
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            4단계로 완성되는
            <br />
            <span className="text-primary">AI 자동화</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            복잡한 설정 없이 시작하세요. 전문가의 도움 없이도 강력한 AI 에이전트를 구축할 수 있습니다.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 border border-border/50 shadow-sm relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8">
                    <span className="inline-block px-4 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 mt-2">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>

                  {/* Arrow (except last) */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20">
                      <div className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="btn-primary group">
            지금 시작하기
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}