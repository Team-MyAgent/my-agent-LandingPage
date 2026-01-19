import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, User } from "lucide-react";

interface ChatMessage {
  id: number;
  type: "user" | "ai";
  content: string;
  buttons?: string[];
}

const chatMessages: ChatMessage[] = [
  {
    id: 1,
    type: "ai",
    content: "안녕하세요! 비즈니스를 위한 완벽한 AI 파트너, My Agent입니다. 😊",
  },
  {
    id: 2,
    type: "ai",
    content: "업장의 운영 효율을 높여주는 RAG 기반 CS 상담을 지금 바로 체험해보세요.",
  },
  {
    id: 3,
    type: "user",
    content: "아이폰 16 Pro 256GB 블랙 모델 재고가 있나요?",
  },
  {
    id: 4,
    type: "ai",
    content: "잠시만요... 네, 현재 매장에 3대 남아있습니다! 바로 방문 예약을 도와드릴까요?",
    buttons: ["방문 예약하기", "할부금 확인", "다른 기종 문의"],
  },
];

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);

  useEffect(() => {
    if (isInView) {
      setVisibleMessages([]);
      const timers: NodeJS.Timeout[] = [];
      
      chatMessages.forEach((msg, index) => {
        const timer = setTimeout(() => {
          setVisibleMessages(prev => [...prev, msg.id]);
        }, (index + 1) * 800);
        timers.push(timer);
      });

      return () => timers.forEach(timer => clearTimeout(timer));
    } else {
      setVisibleMessages([]);
    }
  }, [isInView]);

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
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary group cursor-pointer"
              >
                도입 문의하기
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
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

          {/* Right: Chat UI Mockup */}
          <motion.div variants={itemVariants} className="relative">
            <div className="mockup-container">
              {/* Chat Header */}
              <div className="flex items-center gap-3 px-5 py-4 bg-primary">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <div className="flex-1">
                  <div className="text-white font-semibold text-sm">My Agent AI</div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white/80 text-xs">온라인</span>
                  </div>
                </div>
              </div>

              {/* Chat Body */}
              <div className="p-5 bg-gray-50 min-h-[420px] space-y-4">
                {chatMessages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={visibleMessages.includes(message.id) ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.type === "ai" && (
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-2 flex-shrink-0">
                        <span className="text-white font-bold text-xs">M</span>
                      </div>
                    )}
                    <div className={`max-w-[80%] ${message.type === "user" ? "order-1" : ""}`}>
                      <div
                        className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                          message.type === "user"
                            ? "bg-gray-200 text-foreground rounded-br-md"
                            : "bg-primary text-white rounded-bl-md"
                        }`}
                      >
                        {message.content}
                      </div>
                      {message.buttons && visibleMessages.includes(message.id) && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                          className="flex flex-wrap gap-2 mt-3"
                        >
                          {message.buttons.map((btn, i) => (
                            <button
                              key={i}
                              className="px-4 py-2 text-xs font-medium rounded-full border-2 border-primary text-primary bg-white hover:bg-primary hover:text-white transition-all duration-200"
                            >
                              {btn}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </div>
                    {message.type === "user" && (
                      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center ml-2 flex-shrink-0">
                        <User className="w-4 h-4 text-gray-600" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="px-4 py-3 bg-white border-t border-border/50">
                <div className="flex items-center gap-3">
                  <div className="flex-1 px-4 py-2.5 bg-gray-100 rounded-full text-sm text-muted-foreground">
                    메시지를 입력하세요...
                  </div>
                  <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-emerald-600 transition-colors">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
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