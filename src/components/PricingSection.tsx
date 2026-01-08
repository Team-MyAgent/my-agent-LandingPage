import { Button } from "@/components/ui/button";
import { Check, Sparkles, Building, Rocket, Building2 } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Standard",
      icon: Rocket,
      monthlyPrice: "8~20만 원",
      setupPrice: "300~500만 원",
      description: "50인 이하 스타트업 & SMB용",
      target: "소규모 팀의 첫 AI 상담 도입에 최적화",
      features: [
        "월 3,000회 채팅",
        "기본 문서 업로드 (PDF, 노션)",
        "표준 RAG 인덱싱",
        "기본 분석 대시보드",
        "이메일 기술 지원",
        "1주 내 도입 완료",
      ],
      cta: "Standard 시작하기",
      popular: false,
    },
    {
      name: "Professional",
      icon: Building,
      monthlyPrice: "20~50만 원",
      setupPrice: "300~700만 원",
      description: "데이터량이 많은 중견기업용",
      target: "복잡한 CS 시나리오와 대량 데이터 처리",
      features: [
        "월 15,000회 채팅",
        "무제한 문서 업로드",
        "하이브리드 검색 + 고급 RAG",
        "실행형 에이전트 (API 연동)",
        "고급 분석 및 인사이트",
        "우선 기술 지원",
        "커스텀 브랜딩",
      ],
      cta: "Professional 시작하기",
      popular: true,
    },
    {
      name: "Enterprise",
      icon: Building2,
      monthlyPrice: "개별 협의",
      setupPrice: "프로젝트 단위 견적",
      description: "대형 및 규제 산업용 커스텀",
      target: "금융, 의료 등 규제 산업 맞춤 솔루션",
      features: [
        "무제한 채팅",
        "전용 인프라 (On-premise 옵션)",
        "SLA 보장 (99.9% 가동률)",
        "전담 어카운트 매니저",
        "커스텀 AI 모델 학습",
        "개인정보 마스킹 엔진",
        "보안 감사 지원",
      ],
      cta: "문의하기",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light border border-indigo/20 text-indigo text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>투명한 가격 정책</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="gradient-text">합리적인 가격</span>으로 시작하세요
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            숨겨진 비용 없이, 명확한 가격으로 AI 상담을 도입하세요
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-8 border transition-all duration-300 card-hover ${
                plan.popular
                  ? "border-indigo shadow-xl shadow-indigo/10 scale-105"
                  : "border-border"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="gradient-indigo text-white text-sm font-medium px-4 py-1 rounded-full">
                    가장 인기
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    plan.popular ? "gradient-indigo" : "bg-muted"
                  }`}>
                    <plan.icon className={`w-6 h-6 ${plan.popular ? "text-white" : "text-indigo"}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-6">
                  {plan.target}
                </p>

                {/* Pricing */}
                <div className="space-y-2 p-4 bg-muted/50 rounded-xl">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm text-muted-foreground">월 구독료</span>
                    <span className="text-xl font-bold text-foreground">{plan.monthlyPrice}</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm text-muted-foreground">초기 도입비</span>
                    <span className={`text-lg font-semibold ${plan.popular ? "text-indigo" : "text-foreground"}`}>
                      {plan.setupPrice}
                    </span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.popular ? "bg-emerald/10" : "bg-muted"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? "text-emerald" : "text-indigo"}`} />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={plan.popular ? "gradient" : "outline"}
                className="w-full"
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            모든 플랜에 <span className="font-medium text-foreground">14일 무료 체험</span>이 포함됩니다. 
            신용카드 없이 시작하세요.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
