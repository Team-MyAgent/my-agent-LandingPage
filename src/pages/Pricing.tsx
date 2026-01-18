import { Button } from "@/components/ui/button";
import { Check, Bot, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Standard",
      price: "8~20",
      unit: "만원/월",
      description: "스타트업 및 소규모 팀을 위한 플랜",
      features: [
        "월 3,000회 채팅",
        "기본 RAG 검색",
        "웹 위젯 제공",
        "이메일 지원",
        "기본 분석 대시보드",
      ],
      highlight: false,
    },
    {
      name: "Professional",
      price: "20~50",
      unit: "만원/월",
      description: "성장하는 비즈니스를 위한 플랜",
      features: [
        "월 15,000회 채팅",
        "하이브리드 RAG 검색",
        "웹/앱 위젯 제공",
        "우선 지원",
        "고급 분석 대시보드",
        "API 연동",
        "다국어 지원",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "맞춤",
      unit: "견적",
      description: "대규모 기업을 위한 맞춤 솔루션",
      features: [
        "무제한 채팅",
        "커스텀 RAG 튜닝",
        "전용 인프라",
        "전담 매니저",
        "SLA 보장",
        "On-premise 배포",
        "SSO 연동",
      ],
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/60 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 gradient-emerald rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-lg text-foreground tracking-tight">My Agent</span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            홈으로
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-20">
            <p className="text-emerald text-sm font-medium tracking-wide uppercase mb-4">가격 안내</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              합리적인 <span className="gradient-text">가격</span>으로 시작하세요
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              모든 플랜에 14일 무료 체험이 포함되어 있습니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bento-card relative ${plan.highlight ? "border-emerald/30 shadow-lg shadow-emerald/5" : ""}`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full bg-emerald text-white text-xs font-medium">
                      가장 인기
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.unit}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-emerald flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.highlight ? "gradient" : "outline"} className="w-full">
                  시작하기
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
