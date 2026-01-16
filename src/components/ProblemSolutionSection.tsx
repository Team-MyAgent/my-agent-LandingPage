import { X, Check, AlertTriangle, DollarSign, Clock, Target, Coins, Timer, Sparkles } from "lucide-react";

const ProblemSolutionSection = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "환각(Hallucination) 문제",
      description: "사실이 아닌 정보를 마치 사실인 것처럼 답변하여 고객 신뢰 하락",
    },
    {
      icon: DollarSign,
      title: "높은 도입 비용",
      description: "커스텀 개발과 유지보수에 막대한 인력과 예산 필요",
    },
    {
      icon: Clock,
      title: "복잡한 구축 과정",
      description: "수 주에서 수 개월이 소요되는 긴 도입 기간",
    },
  ];

  const solutions = [
    {
      icon: Target,
      title: "95%+ 정확도 보장",
      description: "RAG 기술로 회사 문서 기반의 검증된 답변만 제공",
    },
    {
      icon: Coins,
      title: "합리적인 가격",
      description: "스타트업도 부담 없는 월 8만원부터 시작",
    },
    {
      icon: Timer,
      title: "1~2주 내 도입",
      description: "문서 업로드 기반 빠른 RAG 인덱싱으로 신속 구축",
    },
  ];

  return (
    <section id="problem-solving" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light border border-indigo/20 text-indigo text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>문제 해결</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            기존 챗봇의 한계, <span className="gradient-text">My Agent</span>로 해결하세요
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            기존 AI 챗봇의 문제점을 정확히 파악하고, 실질적인 솔루션을 제공합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Problems Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="w-4 h-4 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">기존 챗봇의 문제점</h3>
            </div>
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-5 border border-border hover:border-destructive/30 transition-colors card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <problem.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{problem.title}</h4>
                    <p className="text-sm text-muted-foreground">{problem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Solutions Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-emerald/10 flex items-center justify-center">
                <Check className="w-4 h-4 text-emerald" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">My Agent 솔루션</h3>
            </div>
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-5 border border-border hover:border-emerald/30 transition-colors card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald/10 flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-5 h-5 text-emerald" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{solution.title}</h4>
                    <p className="text-sm text-muted-foreground">{solution.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
