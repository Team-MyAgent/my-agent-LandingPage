import { Target, Zap, Wrench, Shield, Bot, BarChart3, MessageSquare, Globe } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Target,
      title: "95% 정확도",
      description: "의미 기반 검색과 하이브리드 검색을 통한 정교한 답변. 환각 없이 회사 문서에 기반한 신뢰할 수 있는 정보만 제공합니다.",
      highlight: "Semantic + Hybrid Search",
      span: "md:col-span-2",
      mockup: (
        <div className="mt-6 p-4 bg-muted/50 rounded-xl border border-border/40">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-emerald"></div>
            <span className="text-xs text-muted-foreground">실시간 검색 중...</span>
          </div>
          <div className="space-y-2">
            <div className="h-2 bg-emerald/20 rounded-full w-full"></div>
            <div className="h-2 bg-emerald/15 rounded-full w-3/4"></div>
            <div className="h-2 bg-emerald/10 rounded-full w-1/2"></div>
          </div>
        </div>
      ),
    },
    {
      icon: Zap,
      title: "빠른 통합",
      description: "PDF, 노션, 정책 문서를 업로드하는 즉시 학습 완료. 복잡한 개발 과정 없이 1시간 내에 서비스를 시작할 수 있습니다.",
      highlight: "Quick Indexing",
      span: "",
      mockup: null,
    },
    {
      icon: Wrench,
      title: "실행형 에이전트",
      description: "단순 답변을 넘어 배송 조회, 예약 변경 등 실제 업무 처리를 지원합니다.",
      highlight: "Actionable Agent",
      span: "",
      mockup: null,
    },
    {
      icon: Shield,
      title: "엔터프라이즈 보안",
      description: "데이터 암호화 및 개인정보 마스킹 엔진을 탑재하여 민감한 고객 정보를 안전하게 보호합니다.",
      highlight: "SOC 2 Compliant",
      span: "md:col-span-2",
      mockup: (
        <div className="mt-6 flex items-center gap-4">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-emerald-muted border-2 border-card flex items-center justify-center">
                <Shield className="w-4 h-4 text-emerald" />
              </div>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">3개 레이어 보안</span>
        </div>
      ),
    },
  ];

  return (
    <section id="features" className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-20">
          <p className="text-emerald text-sm font-medium tracking-wide uppercase mb-4">핵심 기능</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            <span className="gradient-text">강력한 기능</span>으로
            <br />
            CS를 혁신하세요
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My Agent는 단순한 챗봇이 아닙니다. 실제 업무를 처리하는 AI 상담원입니다
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bento-card ${feature.span}`}
            >
              <div className="w-12 h-12 bg-emerald-muted rounded-xl flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-emerald" />
              </div>
              
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-muted text-emerald text-xs font-medium mb-4">
                {feature.highlight}
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              {feature.mockup}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
