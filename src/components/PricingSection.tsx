import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "무료",
      period: "",
      description: "소규모 팀을 위한 시작 플랜",
      features: [
        "월 100회 채팅",
        "1개 문서 업로드",
        "기본 분석 대시보드",
        "이메일 지원",
      ],
      cta: "무료로 시작하기",
      popular: false,
    },
    {
      name: "Pro",
      price: "200,000",
      period: "원/월",
      description: "성장하는 기업을 위한 프로 플랜",
      features: [
        "월 5,000회 채팅",
        "무제한 문서 업로드",
        "고급 분석 및 인사이트",
        "API 연동 지원",
        "우선 기술 지원",
        "커스텀 브랜딩",
      ],
      cta: "Pro 시작하기",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "맞춤",
      period: "견적",
      description: "대기업을 위한 맞춤형 솔루션",
      features: [
        "무제한 채팅",
        "전용 인프라",
        "SLA 보장",
        "전담 어카운트 매니저",
        "온프레미스 배포 옵션",
        "커스텀 AI 모델 학습",
      ],
      cta: "문의하기",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="gradient-text">합리적인 가격</span>으로 시작하세요
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            스타트업부터 대기업까지, 모든 규모에 맞는 플랜을 제공합니다
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-8 border transition-all duration-300 card-hover ${
                plan.popular
                  ? "border-blue-accent shadow-xl scale-105"
                  : "border-border"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="gradient-bg text-accent-foreground text-sm font-medium px-4 py-1 rounded-full">
                    가장 인기
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-600" />
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
      </div>
    </section>
  );
};

export default PricingSection;
