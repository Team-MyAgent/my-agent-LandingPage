import { Upload, Database, MessageCircle, ArrowRight, Sparkles } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Upload,
      step: "01",
      title: "데이터 업로드",
      description: "PDF, 노션, FAQ 문서를 드래그 앤 드롭으로 간편하게 업로드하세요.",
      details: ["PDF, DOCX, TXT 지원", "노션 연동", "실시간 문서 동기화"],
      gradient: "from-indigo to-violet",
    },
    {
      icon: Database,
      step: "02",
      title: "RAG 인덱싱",
      description: "AI가 자동으로 문서를 분석하고 검색 가능한 형태로 인덱싱합니다.",
      details: ["의미 기반 벡터 검색", "하이브리드 검색 엔진", "자동 청킹 & 임베딩"],
      gradient: "from-violet to-indigo-light",
    },
    {
      icon: MessageCircle,
      step: "03",
      title: "AI 상담 시작",
      description: "웹사이트에 위젯을 삽입하고 고객 문의에 즉시 대응하세요.",
      details: ["웹/앱 위젯 제공", "다국어 지원", "24/7 자동 응대"],
      gradient: "from-emerald to-emerald-light",
    },
  ];

  return (
    <section id="process" className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light border border-indigo/20 text-indigo text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>간단한 도입 과정</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="gradient-text">3단계</span>로 시작하세요
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            복잡한 개발 과정 없이, 문서 업로드만으로 AI 상담원을 구축할 수 있습니다
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-20 left-1/3 right-1/3 h-0.5">
              <div className="w-full h-full bg-gradient-to-r from-indigo via-violet to-emerald"></div>
            </div>

            {steps.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-2xl p-8 border border-border hover:border-indigo/30 hover:shadow-xl transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8">
                    <div className={`w-8 h-8 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center text-white text-sm font-bold`}>
                      {item.step}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-accent-light rounded-2xl flex items-center justify-center mb-6 mt-2">
                    <item.icon className="w-8 h-8 text-indigo" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {item.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-2">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="w-3 h-3 text-indigo" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
