import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowLeft, Zap, Building2, Rocket } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plans = [
  {
    name: "스타터",
    description: "스타트업 및 소규모 팀을 위한 플랜",
    price: "49",
    priceUnit: "만원",
    period: "/월",
    icon: Rocket,
    features: [
      "최대 5개 AI 에이전트",
      "월 10,000건 처리",
      "기본 대시보드",
      "이메일 지원",
      "API 액세스",
      "99.5% SLA",
    ],
    cta: "무료 체험 시작",
    popular: false,
  },
  {
    name: "프로",
    description: "성장하는 기업을 위한 최적의 선택",
    price: "149",
    priceUnit: "만원",
    period: "/월",
    icon: Zap,
    features: [
      "최대 20개 AI 에이전트",
      "월 100,000건 처리",
      "고급 분석 대시보드",
      "24/7 채팅 지원",
      "커스텀 연동 지원",
      "99.9% SLA",
      "전담 온보딩",
      "팀 협업 기능",
    ],
    cta: "프로 시작하기",
    popular: true,
  },
  {
    name: "엔터프라이즈",
    description: "대규모 조직을 위한 맞춤형 솔루션",
    price: "맞춤",
    priceUnit: "",
    period: "",
    icon: Building2,
    features: [
      "무제한 AI 에이전트",
      "무제한 처리량",
      "엔터프라이즈 대시보드",
      "전담 Customer Success",
      "온프레미스 배포 옵션",
      "99.99% SLA",
      "맞춤형 개발 지원",
      "보안 감사 리포트",
    ],
    cta: "상담 요청",
    popular: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        {/* Back Button */}
        <div className="container mx-auto px-6 lg:px-8 pt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>홈으로 돌아가기</span>
          </Link>
        </div>

        {/* Hero */}
        <section ref={ref} className="section-spacing-sm">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-emerald-50 text-primary text-sm font-medium mb-6">
                요금제
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                투명하고 합리적인
                <br />
                <span className="text-primary">요금 정책</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                숨겨진 비용 없이, 사용한 만큼만 지불하세요.
                <br />
                모든 플랜에서 14일 무료 체험이 가능합니다.
              </p>
            </motion.div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative rounded-3xl p-8 ${
                    plan.popular
                      ? "bg-primary text-primary-foreground ring-4 ring-emerald-200"
                      : "bg-white border border-border"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-block px-4 py-1.5 bg-emerald-700 text-white text-sm font-semibold rounded-full">
                        가장 인기
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      plan.popular ? "bg-white/20" : "bg-emerald-50"
                    }`}>
                      <plan.icon className={`w-6 h-6 ${plan.popular ? "text-white" : "text-primary"}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <p className={`text-sm ${plan.popular ? "text-white/80" : "text-muted-foreground"}`}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className={plan.popular ? "text-white/80" : "text-muted-foreground"}>
                        {plan.priceUnit}{plan.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.popular ? "text-white" : "text-primary"
                        }`} />
                        <span className={`text-sm ${plan.popular ? "text-white/90" : "text-foreground"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-white text-primary hover:bg-gray-100"
                        : "bg-primary text-primary-foreground hover:bg-emerald-600"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </motion.div>
              ))}
            </div>

            {/* FAQ Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mt-16"
            >
              <p className="text-muted-foreground">
                요금제에 대해 더 궁금한 점이 있으신가요?{" "}
                <Link to="/#faq" className="text-primary font-medium hover:underline">
                  자주 묻는 질문
                </Link>
                을 확인해보세요.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="section-spacing-sm bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                왜 My Agent인가요?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                경쟁사 대비 압도적인 가격 경쟁력과 기술력을 확인하세요.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl border border-border overflow-hidden max-w-4xl mx-auto"
            >
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-6 font-semibold text-foreground">비교 항목</th>
                    <th className="p-6 font-semibold text-primary">My Agent</th>
                    <th className="p-6 font-semibold text-muted-foreground">경쟁사 평균</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "초기 구축 비용", us: "80% 절감", them: "표준" },
                    { label: "정확도", us: "99.2%", them: "94.5%" },
                    { label: "배포 기간", us: "2-4주", them: "8-12주" },
                    { label: "기술 지원", us: "24/7", them: "업무 시간" },
                    { label: "커스터마이징", us: "완전 지원", them: "제한적" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border last:border-0">
                      <td className="p-6 text-foreground">{row.label}</td>
                      <td className="p-6 text-center font-semibold text-primary">{row.us}</td>
                      <td className="p-6 text-center text-muted-foreground">{row.them}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}