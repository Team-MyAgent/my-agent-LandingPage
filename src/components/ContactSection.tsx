import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Building2, User, Phone, Mail, MessageSquare } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="section-spacing"
      style={{ backgroundColor: "hsl(138, 76%, 97%)" }}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-white text-primary text-sm font-medium mb-6 shadow-sm">
              도입 문의
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              지금 바로{" "}
              <span className="text-primary">My Agent</span>를<br />
              도입해보세요
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              전문 컨설턴트가 귀사에 최적화된 AI 에이전트 도입 방안을 안내해 드립니다.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-border/30"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <User className="w-4 h-4 text-primary" />
                  성함
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="홍길동"
                  className="w-full px-4 py-3.5 rounded-xl border border-border bg-gray-50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  required
                />
              </div>

              {/* Company */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Building2 className="w-4 h-4 text-primary" />
                  회사명
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="주식회사 OOO"
                  className="w-full px-4 py-3.5 rounded-xl border border-border bg-gray-50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  연락처
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="010-1234-5678"
                  className="w-full px-4 py-3.5 rounded-xl border border-border bg-gray-50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  이메일
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@company.com"
                  className="w-full px-4 py-3.5 rounded-xl border border-border bg-gray-50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2 mb-8">
              <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                <MessageSquare className="w-4 h-4 text-primary" />
                문의 내용
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="도입하고자 하는 서비스나 문의사항을 자유롭게 작성해주세요."
                rows={5}
                className="w-full px-4 py-3.5 rounded-xl border border-border bg-gray-50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn-primary py-4 text-base group"
            >
              도입 문의하기
              <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <p className="text-center text-sm text-muted-foreground mt-6">
              제출된 정보는 상담 목적으로만 사용되며, 개인정보처리방침에 따라 안전하게 관리됩니다.
            </p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}