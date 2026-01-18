import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, MessageSquare, Sparkles, TrendingDown, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient pt-24 pb-16">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-muted border border-emerald/10 text-emerald text-sm font-medium mb-10 animate-fade-up">
            <Sparkles className="w-4 h-4" />
            <span>기업용 RAG 기반 AI 상담 솔루션</span>
          </div>

          {/* Headline - Apple style typography */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-8 animate-fade-up tracking-tight" style={{ animationDelay: "0.1s" }}>
            거품을 뺀 구축비,
            <br />
            <span className="gradient-text">압도적인 정확도.</span>
            <br />
            <span className="text-foreground/90">우리 회사 전용 RAG 챗봇.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            수천만 원의 컨설팅 비용 없이,
            <br className="hidden md:block" />
            스타트업도 즉시 도입 가능한 지능형 CS 에이전트를 만나보세요.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button
              variant="gradient"
              size="lg"
              className="w-full sm:w-auto"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              도입 문의하기
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Hero Visual - Premium Chat Interface */}
          <div className="relative max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="relative bg-card rounded-2xl shadow-2xl shadow-slate/5 border border-border/60 p-6 md:p-8">
              {/* Chat Header */}
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-border/60">
                <div className="w-11 h-11 gradient-emerald rounded-xl flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">My Agent</h3>
                  <p className="text-sm text-muted-foreground">AI 고객 상담 어시스턴트</p>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald"></span>
                  <span className="text-xs text-muted-foreground">온라인</span>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4">
                <div className="flex justify-end">
                  <div className="bg-emerald text-white rounded-2xl rounded-br-md px-5 py-3 max-w-[80%]">
                    <p className="text-sm">반품 정책이 어떻게 되나요?</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-muted rounded-2xl rounded-bl-md px-5 py-4 max-w-[80%]">
                    <p className="text-sm text-foreground leading-relaxed">
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
              <div className="mt-6 flex items-center gap-2 bg-muted/50 rounded-xl p-2 border border-border/40">
                <input
                  type="text"
                  placeholder="질문을 입력하세요..."
                  className="flex-1 bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                  disabled
                />
                <Button variant="gradient" size="sm">
                  전송
                </Button>
              </div>
            </div>

            {/* Floating Stats - Subtle Design */}
            <div className="absolute -top-4 -right-4 bg-card rounded-xl shadow-lg shadow-slate/5 border border-border/60 p-4 animate-float hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-muted rounded-lg flex items-center justify-center">
                  <span className="text-emerald font-bold text-sm">95%</span>
                </div>
                <span className="text-sm font-medium text-foreground">정확도</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg shadow-slate/5 border border-border/60 p-4 animate-float hidden md:block" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-muted rounded-lg flex items-center justify-center">
                  <TrendingDown className="w-5 h-5 text-emerald" />
                </div>
                <span className="text-sm font-medium text-foreground">합리적 비용</span>
              </div>
            </div>

            <div className="absolute top-1/2 -right-8 bg-card rounded-xl shadow-lg shadow-slate/5 border border-border/60 p-4 animate-float hidden lg:block" style={{ animationDelay: "2s" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-muted rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-emerald" />
                </div>
                <span className="text-sm font-medium text-foreground">보안</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
