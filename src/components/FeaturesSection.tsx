import { Target, Zap, Wrench, Shield } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Target,
      title: "95% 정확도",
      description: "의미 기반 검색과 하이브리드 검색을 통한 정교한 답변. 환각 없이 회사 문서에 기반한 신뢰할 수 있는 정보만 제공합니다.",
      highlight: "Semantic + Hybrid Search",
    },
    {
      icon: Zap,
      title: "빠른 통합",
      description: "PDF, 노션, 정책 문서를 업로드하는 즉시 학습 완료. 복잡한 개발 과정 없이 1시간 내에 서비스를 시작할 수 있습니다.",
      highlight: "1-Hour Setup",
    },
    {
      icon: Wrench,
      title: "실행형 에이전트",
      description: "단순 답변을 넘어 배송 조회, 예약 변경 등 실제 업무 처리를 지원합니다. API 연동으로 완전한 자동화를 경험하세요.",
      highlight: "Action-Based AI",
    },
    {
      icon: Shield,
      title: "엔터프라이즈 보안",
      description: "데이터 암호화 및 개인정보 마스킹 엔진을 탑재하여 민감한 고객 정보를 안전하게 보호합니다.",
      highlight: "SOC 2 Compliant",
    },
  ];

  return (
    <section id="features" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="gradient-text">강력한 기능</span>으로 CS를 혁신하세요
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My Agent는 단순한 챗봇이 아닙니다. 실제 업무를 처리하는 AI 상담원입니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-blue-accent/30 transition-all duration-300 card-hover"
            >
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              
              <div className="inline-block px-3 py-1 rounded-full bg-blue-light text-blue-accent text-xs font-medium mb-3">
                {feature.highlight}
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
