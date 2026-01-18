import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, TrendingUp, Users, Zap, Shield } from "lucide-react";

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left: Typography */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">AI 에이전트 자동화 플랫폼</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="hero-headline text-foreground">
              <span className="block">거품을 뺀</span>
              <span className="block text-primary">구축비,</span>
              <span className="block">압도적인</span>
              <span className="block">정확도</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="hero-subheadline">
              복잡한 워크플로우를 AI 에이전트가 자동으로 처리합니다.
              검증된 기술력으로 구축 비용을 80% 절감하세요.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <button className="btn-primary group">
                무료로 시작하기
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="btn-secondary">
                데모 요청
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-foreground">99.2%</div>
                <div className="text-sm text-muted-foreground">정확도</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">80%</div>
                <div className="text-sm text-muted-foreground">비용 절감</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">무중단 운영</div>
              </div>
            </motion.div>
          </div>

          {/* Right: Dashboard Mockup */}
          <motion.div variants={itemVariants} className="relative">
            <div className="mockup-container">
              {/* Browser Header */}
              <div className="mockup-header">
                <div className="mockup-dot bg-red-400" />
                <div className="mockup-dot bg-yellow-400" />
                <div className="mockup-dot bg-green-400" />
                <div className="ml-4 flex-1 h-6 bg-gray-100 rounded-md" />
              </div>

              {/* Dashboard Content */}
              <div className="p-6 bg-gray-50 space-y-4">
                {/* Top Stats Row */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="data-card">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="text-xs text-muted-foreground">처리량</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">12,847</div>
                    <div className="text-xs text-green-600">+23.5%</div>
                  </div>
                  <div className="data-card">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-xs text-muted-foreground">활성 에이전트</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">24</div>
                    <div className="text-xs text-muted-foreground">실행 중</div>
                  </div>
                  <div className="data-card">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-primary" />
                      <span className="text-xs text-muted-foreground">응답 시간</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">0.3s</div>
                    <div className="text-xs text-green-600">-15%</div>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="data-card">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-foreground">실시간 처리 현황</span>
                    <span className="text-xs text-muted-foreground">최근 24시간</span>
                  </div>
                  <div className="h-32 flex items-end gap-2">
                    {[40, 65, 45, 80, 55, 70, 85, 60, 75, 90, 70, 85].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={isInView ? { height: `${height}%` } : { height: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        className="flex-1 bg-gradient-to-t from-primary to-emerald-200 rounded-t"
                      />
                    ))}
                  </div>
                </div>

                {/* Activity List */}
                <div className="data-card">
                  <div className="text-sm font-medium text-foreground mb-3">최근 활동</div>
                  <div className="space-y-3">
                    {[
                      { icon: Shield, label: "보안 검증 완료", time: "방금 전", status: "success" },
                      { icon: Zap, label: "문서 분석 처리", time: "2분 전", status: "success" },
                      { icon: Users, label: "고객 응대 자동화", time: "5분 전", status: "success" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                          <item.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-foreground">{item.label}</div>
                          <div className="text-xs text-muted-foreground">{item.time}</div>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 p-4 bg-white rounded-xl shadow-lg border border-border/50"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-sm font-medium">24개 에이전트 활성</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}