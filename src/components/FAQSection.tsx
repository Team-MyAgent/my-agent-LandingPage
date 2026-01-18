import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Sparkles } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "어떤 기업에 적합한가요?",
      answer: "My Agent는 고객 상담 업무가 있는 모든 기업에 적합합니다. 특히 월 1,000건 이상의 반복적인 문의를 처리하는 전자상거래, SaaS, 교육, 금융, 헬스케어 기업에서 높은 효과를 보입니다. 스타트업부터 대기업까지 규모에 맞는 플랜을 제공하여 부담 없이 도입할 수 있습니다.",
    },
    {
      question: "챗봇 도입까지는 얼마나 걸리나요?",
      answer: "문서 업로드와 기본 설정만으로 1시간 내 즉시 통합이 가능합니다. PDF, 노션, FAQ 문서를 업로드하면 자동으로 학습이 완료되어 별도의 개발 과정 없이 바로 현장에 투입할 수 있습니다. 복잡한 API 연동이나 커스터마이징이 필요한 경우에도 1~2주 내 완료됩니다.",
    },
    {
      question: "개발자가 없어도 챗봇 도입이 가능한가요?",
      answer: "네, 전혀 문제없습니다. My Agent는 코드 작성 없이 문서 업로드만으로 작동합니다. 직관적인 관리자 대시보드에서 문서 관리, 답변 품질 모니터링, 성능 분석까지 모든 작업을 비개발자도 쉽게 수행할 수 있습니다. 필요시 전담 컨설턴트가 도입부터 운영까지 전 과정을 지원합니다.",
    },
    {
      question: "도입 가격은 어느정도인가요?",
      answer: "월 8만원부터 시작하는 합리적인 가격으로 제공됩니다. Standard 플랜은 월 3,000회 채팅 기준 8~20만원, Professional 플랜은 월 15,000회 채팅 기준 20~50만원입니다. 초기 도입비는 300~700만원 수준이며, 기업 규모와 요구사항에 따라 맞춤 견적을 제공합니다. 모든 플랜에 14일 무료 체험이 포함되어 있습니다.",
    },
    {
      question: "고객 데이터 보안은 어떻게 관리하나요?",
      answer: "엔터프라이즈급 보안 체계를 갖추고 있습니다. 모든 데이터는 AES-256 암호화로 저장되며, 개인정보 마스킹 엔진을 통해 민감 정보가 자동으로 보호됩니다. SOC 2 Type II 인증을 준수하며, 필요시 On-premise 배포도 가능합니다. 정기적인 보안 감사와 침투 테스트를 통해 지속적으로 보안 수준을 점검합니다.",
    },
    {
      question: "도입 이후에도 성능 개선이 이루어지나요?",
      answer: "네, 지속적인 성능 개선이 이루어집니다. AI 모델은 사용할수록 더 정확해지며, 대화 로그를 분석하여 답변 품질을 자동으로 개선합니다. 또한 정기적인 업데이트를 통해 최신 RAG 기술과 검색 알고리즘을 반영하며, 전담 성공 매니저가 귀사의 비즈니스 목표에 맞춰 최적화 방안을 제안합니다.",
    },
    {
      question: "도입 시 어떤 효과가 있나요?",
      answer: "단순 반복 문의의 80%를 자동화하여 상담팀의 업무 부담을 대폭 줄입니다. 평균 응답 시간이 24시간에서 즉시 응답으로 단축되며, 고객 만족도가 평균 30% 이상 향상됩니다. 상담팀은 더 중요한 고객 경험 개선과 복잡한 문의 처리에 집중할 수 있어 전체적인 CS 품질이 향상됩니다. ROI는 평균 6개월 내 달성됩니다.",
    },
    {
      question: "기존 챗봇과는 어떤 차이점이 있나요?",
      answer: "My Agent는 RAG(Retrieval-Augmented Generation) 기술을 기반으로 하여 환각(Hallucination) 문제를 해결합니다. 기존 챗봇이 학습 데이터에 없는 정보를 만들어내는 문제가 있었지만, My Agent는 회사 문서에 기반한 검증된 정보만 제공하여 95% 이상의 정확도를 보장합니다.",
    },
    {
      question: "도입 문의 이후에는 어떤 절차로 진행되나요?",
      answer: "1. 상담 요청 접수(도입 문의 접수) -> 2. 매니저 배정 및 사전 질문 수집 -> 3. 상담 미팅 -> 4. 고객 맞춤 플랜 설계 및 견적 안내 -> 5. 도입 확정 및 운영 진행 순으로 진행됩니다.",
    },
  ];

  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light border border-indigo/20 text-indigo text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>자주 묻는 질문</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="gradient-text">FAQ</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My Agent에 대해 궁금하신 점을 확인해보세요
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 hover:border-indigo/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-indigo transition-colors py-6">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-indigo shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
