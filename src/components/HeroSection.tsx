import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Bot, MessageSquare, Zap, TrendingDown, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient pt-20">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light border border-indigo/20 text-indigo text-sm font-medium mb-8 animate-fade-up">
            <Zap className="w-4 h-4" />
            <span>RAG 기반 AI 솔루션</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            거품을 뺀 구축비,
            <br />
            <span className="gradient-text">압도적인 정확도.</span>
            <br />
            우리 회사 전용 RAG 챗봇.
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            수천만 원의 컨설팅 비용 없이,
            <br className="hidden md:block" />
            스타트업도 즉시 도입 가능한 지능형 CS 에이전트를 만나보세요.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="gradient" size="lg" className="w-full sm:w-auto">
              무료로 시작하기
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline-light" size="lg" className="w-full sm:w-auto">
              <Play className="w-5 h-5" />
              데모 시연 예약
            </Button>
          </div>

          {/* Hero Visual */}
          <div className="relative max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="relative bg-card rounded-2xl shadow-2xl border border-border p-6 md:p-8">
              {/* Chat Interface Mockup */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="w-10 h-10 gradient-indigo rounded-xl flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">My Agent</h3>
                  <p className="text-sm text-muted-foreground">AI 고객 상담 어시스턴트</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald"></span>
                  <span className="text-xs text-muted-foreground">온라인</span>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4">
                <div className="flex justify-end">
                  <div className="bg-indigo text-white rounded-2xl rounded-br-sm px-4 py-3 max-w-[80%]">
                    <p className="text-sm">반품 정책이 어떻게 되나요?</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-muted rounded-2xl rounded-bl-sm px-4 py-3 max-w-[80%]">
                    <p className="text-sm text-foreground">
                      안녕하세요! 저희 반품 정책에 대해 안내드립니다. 📦
                      <br /><br />
                      <strong>14일 이내 무료 반품</strong>이 가능하며, 제품에 하자가 있는 경우 <strong>30일까지 교환/환불</strong>이 가능합니다.
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                      <MessageSquare className="w-3 h-3" />
                      <span>반품정책.pdf 기반 답변</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div className="mt-6 flex items-center gap-2 bg-muted rounded-xl p-2">
                <input
                  type="text"
                  placeholder="질문을 입력하세요..."
                  className="flex-1 bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                  disabled
                />
                <Button variant="gradient" size="sm">
                  전송
                </Button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-card rounded-xl shadow-lg border border-border p-3 animate-float hidden md:block">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald/10 rounded-lg flex items-center justify-center">
                  <span className="text-emerald font-bold text-sm">95%</span>
                </div>
                <span className="text-xs font-medium text-foreground">정확도</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg border border-border p-3 animate-float hidden md:block" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-indigo/10 rounded-lg flex items-center justify-center">
                  <TrendingDown className="w-4 h-4 text-indigo" />
                </div>
                <span className="text-xs font-medium text-foreground">합리적 도입비</span>
              </div>
            </div>

            <div className="absolute top-1/2 -right-8 bg-card rounded-xl shadow-lg border border-border p-3 animate-float hidden lg:block" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-violet/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-violet" />
                </div>
                <span className="text-xs font-medium text-foreground">보안</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
