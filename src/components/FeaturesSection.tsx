import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, MessageSquare, Brain, Shield, TrendingUp, Zap, Users, Clock } from "lucide-react";

const features = [
  {
    title: "실시간 분석 대시보드",
    description: "모든 에이전트의 성능을 실시간으로 모니터링하고 인사이트를 얻으세요.",
    icon: BarChart3,
    size: "large",
    content: "chart",
  },
  {
    title: "AI 채팅 인터페이스",
    description: "자연어로 에이전트와 소통하며 복잡한 작업을 간편하게 수행합니다.",
    icon: MessageSquare,
    size: "medium",
    content: "chat",
  },
  {
    title: "지능형 자동화",
    description: "머신러닝 기반의 지능형 의사결정으로 업무 프로세스를 최적화합니다.",
    icon: Brain,
    size: "medium",
    content: "automation",
  },
  {
    title: "엔터프라이즈 보안",
    description: "ISO 27001 인증, SOC 2 Type II 준수로 기업 데이터를 안전하게 보호합니다.",
    icon: Shield,
    size: "large",
    content: "security",
  },
];

function ChartContent() {
  const hourlyData = [12, 18, 24, 32, 28, 35, 42, 48, 52, 45, 38, 30];
  const hours = ["09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
  
  return (
    <div className="mt-6 space-y-5">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4 }}
          className="p-4 bg-emerald-50 rounded-xl border border-emerald-100"
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs text-muted-foreground">오늘의 새 문의</span>
          </div>
          <div className="text-2xl font-bold text-primary">24건</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="p-4 bg-orange-50 rounded-xl border border-orange-100"
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="text-xs text-muted-foreground">미응답 알람</span>
          </div>
          <div className="text-2xl font-bold text-orange-600">3건</div>
        </motion.div>
      </div>

      {/* Line Chart - 시간대별 문의 현황 */}
      <div className="p-4 bg-gray-50 rounded-xl border border-border/50">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-foreground">시간대별 문의 현황</span>
          <span className="text-xs text-muted-foreground">오늘</span>
        </div>
        
        {/* Chart Area */}
        <div className="relative h-32">
          {/* Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {[0, 1, 2, 3].map((_, i) => (
              <div key={i} className="border-b border-border/30" />
            ))}
          </div>
          
          {/* Line Chart SVG */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            {/* Area Fill */}
            <motion.path
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              d={`M 0 ${128 - (hourlyData[0] / 60) * 128} ${hourlyData.map((val, i) => `L ${(i / (hourlyData.length - 1)) * 100}% ${128 - (val / 60) * 128}`).join(' ')} L 100% 128 L 0 128 Z`}
              fill="url(#chartGradient)"
            />
            
            {/* Line */}
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              d={`M 0 ${128 - (hourlyData[0] / 60) * 128} ${hourlyData.map((val, i) => `L ${(i / (hourlyData.length - 1)) * 100}% ${128 - (val / 60) * 128}`).join(' ')}`}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            {/* Data Points */}
            {hourlyData.map((val, i) => (
              <motion.circle
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.3, delay: 0.1 * i }}
                cx={`${(i / (hourlyData.length - 1)) * 100}%`}
                cy={128 - (val / 60) * 128}
                r="4"
                fill="white"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
              />
            ))}
          </svg>
        </div>
        
        {/* X-axis Labels */}
        <div className="flex justify-between mt-2 px-1">
          {hours.filter((_, i) => i % 3 === 0).map((hour, i) => (
            <span key={i} className="text-xs text-muted-foreground">{hour}시</span>
          ))}
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
        <div>
          <div className="text-lg font-bold text-foreground">156,847</div>
          <div className="text-xs text-muted-foreground">총 처리 건수</div>
        </div>
        <div>
          <div className="text-lg font-bold text-primary">0.28s</div>
          <div className="text-xs text-muted-foreground">평균 응답시간</div>
        </div>
        <div>
          <div className="text-lg font-bold text-foreground">99.9%</div>
          <div className="text-xs text-muted-foreground">가동률</div>
        </div>
      </div>
    </div>
  );
}

function ChatContent() {
  const messages = [
    { role: "user", text: "이번 달 매출 데이터 분석해줘" },
    { role: "agent", text: "분석 완료. 전월 대비 23% 상승했습니다. 주요 성장 요인은 신규 고객 유입입니다." },
    { role: "user", text: "상세 리포트 생성해줘" },
  ];

  return (
    <div className="mt-6 space-y-3">
      {messages.map((msg, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: msg.role === "user" ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4, delay: i * 0.15 }}
          className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
              msg.role === "user"
                ? "bg-primary text-primary-foreground rounded-br-md"
                : "bg-gray-100 text-foreground rounded-bl-md"
            }`}
          >
            {msg.text}
          </div>
        </motion.div>
      ))}
      <div className="flex items-center gap-2 pt-2">
        <div className="flex-1 h-10 bg-gray-100 rounded-full px-4 flex items-center">
          <span className="text-sm text-muted-foreground">메시지를 입력하세요...</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <Zap className="w-4 h-4 text-primary-foreground" />
        </div>
      </div>
    </div>
  );
}

function AutomationContent() {
  const steps = [
    { icon: Users, label: "요청 수신", active: true },
    { icon: Brain, label: "AI 분석", active: true },
    { icon: Zap, label: "자동 처리", active: true },
    { icon: TrendingUp, label: "결과 전달", active: false },
  ];

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex flex-col items-center gap-2"
          >
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                step.active ? "bg-primary" : "bg-gray-100"
              }`}
            >
              <step.icon
                className={`w-5 h-5 ${step.active ? "text-primary-foreground" : "text-muted-foreground"}`}
              />
            </div>
            <span className="text-xs text-muted-foreground">{step.label}</span>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2">
        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "75%" }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full bg-primary rounded-full"
          />
        </div>
        <span className="text-sm font-medium text-primary">75%</span>
      </div>
    </div>
  );
}

function SecurityContent() {
  const badges = [
    { label: "ISO 27001", verified: true },
    { label: "SOC 2 Type II", verified: true },
    { label: "GDPR", verified: true },
    { label: "ISMS-P", verified: true },
  ];

  return (
    <div className="mt-6 space-y-4">
      <div className="grid grid-cols-2 gap-3">
        {badges.map((badge, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-center gap-2 p-3 bg-emerald-50 rounded-xl"
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">{badge.label}</span>
          </motion.div>
        ))}
      </div>
      <div className="p-4 bg-gray-50 rounded-xl">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
            <Clock className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <div className="text-sm font-medium text-foreground">실시간 보안 모니터링</div>
            <div className="text-xs text-muted-foreground">마지막 스캔: 2분 전</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-sm text-green-600">모든 시스템 정상</span>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section id="features" ref={ref} className="section-spacing bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-50 text-primary text-sm font-medium mb-6">
            주요 기능
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            비즈니스를 위한
            <br />
            <span className="text-primary">완벽한 도구</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            복잡한 업무를 단순화하고, 팀의 생산성을 극대화하는 기능들을 제공합니다.
          </p>
        </motion.div>

        <div className="bento-grid grid-cols-1 md:grid-cols-2">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`bento-card ${feature.size === "large" ? "md:col-span-1" : ""}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
              {feature.content === "chart" && <ChartContent />}
              {feature.content === "chat" && <ChatContent />}
              {feature.content === "automation" && <AutomationContent />}
              {feature.content === "security" && <SecurityContent />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}