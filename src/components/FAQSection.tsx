import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "My Agent는 어떤 기업에 적합한가요?",
    answer: "My Agent는 스타트업부터 대기업까지 모든 규모의 기업에 적합합니다. 특히 반복적인 업무가 많거나, 고객 응대, 데이터 분석, 문서 처리 등의 작업을 자동화하고자 하는 기업에 최적화되어 있습니다. 우리의 유연한 요금제는 기업 규모에 맞게 조정됩니다.",
  },
  {
    question: "데이터 보안은 어떻게 보장되나요?",
    answer: "ISO 27001, SOC 2 Type II 인증을 보유하고 있으며, 모든 데이터는 AES-256 암호화로 보호됩니다. 국내 클라우드 센터에서 데이터를 처리하며, GDPR 및 개인정보보호법을 완벽히 준수합니다. 또한 정기적인 보안 감사와 침투 테스트를 실시합니다.",
  },
  {
    question: "기존 시스템과의 연동이 가능한가요?",
    answer: "네, 가능합니다. My Agent는 REST API, Webhook, SDK 등 다양한 연동 방식을 지원합니다. Slack, Microsoft Teams, Salesforce, SAP 등 주요 엔터프라이즈 툴과의 네이티브 연동을 제공하며, 커스텀 연동도 지원합니다.",
  },
  {
    question: "AI 모델의 정확도는 어느 정도인가요?",
    answer: "현재 평균 99.2%의 정확도를 달성하고 있습니다. 이는 업계 최고 수준이며, 지속적인 학습과 최적화를 통해 향상되고 있습니다. 특히 도메인 특화 학습을 통해 각 기업의 비즈니스 컨텍스트에 맞춤화된 성능을 제공합니다.",
  },
  {
    question: "도입 및 구축 기간은 얼마나 걸리나요?",
    answer: "기본 설정은 1일 이내에 완료되며, 전체 시스템 연동 및 맞춤화까지 평균 2-4주가 소요됩니다. 복잡한 엔터프라이즈 환경의 경우에도 최대 8주 이내에 완전한 배포가 가능합니다. 전담 온보딩 팀이 전 과정을 지원합니다.",
  },
  {
    question: "기술 지원은 어떻게 받을 수 있나요?",
    answer: "24/7 기술 지원 센터를 운영하고 있으며, 이메일, 전화, 실시간 채팅을 통해 지원받으실 수 있습니다. 엔터프라이즈 고객에게는 전담 Customer Success Manager가 배정되어 proactive한 지원을 제공합니다.",
  },
  {
    question: "비용 절감 효과는 어느 정도인가요?",
    answer: "평균적으로 기존 대비 80%의 비용 절감 효과를 경험하고 계십니다. 이는 인건비 절감, 처리 시간 단축, 오류 감소 등 복합적인 요인에 의한 것입니다. 도입 첫 달부터 ROI를 측정할 수 있는 대시보드를 제공합니다.",
  },
  {
    question: "무료 체험이 가능한가요?",
    answer: "네, 14일간 무료 체험이 가능합니다. 신용카드 등록 없이 모든 기능을 체험해보실 수 있으며, 체험 기간 중에도 전문 컨설턴트의 지원을 받으실 수 있습니다. 체험 후 결제 의무는 전혀 없습니다.",
  },
  {
    question: "계약 조건은 어떻게 되나요?",
    answer: "월 단위 구독부터 연간 계약까지 유연하게 선택 가능합니다. 연간 계약 시 20% 할인 혜택이 적용되며, 언제든지 플랜 변경이 가능합니다. 별도의 해지 위약금은 없으며, 사용량에 따른 합리적인 과금 방식을 채택하고 있습니다.",
  },
];

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section id="faq" ref={ref} className="section-spacing bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:h-fit"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-emerald-50 text-primary text-sm font-medium mb-6">
              자주 묻는 질문
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              궁금한 점이
              <br />
              있으신가요?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              My Agent에 대해 자주 묻는 질문들을 모았습니다.
              더 궁금한 점이 있다면 언제든 문의해주세요.
            </p>
            <button className="btn-primary">
              상담 문의하기
            </button>
          </motion.div>

          {/* Right: FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <AccordionItem
                    value={`item-${i}`}
                    className="bg-white border border-border/50 rounded-2xl px-6 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground py-5 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}