import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    volume: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "문의가 접수되었습니다",
      description: "빠른 시일 내에 연락드리겠습니다.",
    });
    
    setFormData({ company: "", email: "", volume: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light border border-indigo/20 text-indigo text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>상담 문의</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="gradient-text">문의하기</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My Agent 도입에 대해 궁금한 점이 있으시면 언제든 문의해 주세요
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Info */}
            <div>
              <p className="text-muted-foreground mb-8">
                전문 컨설턴트가 귀사에 맞춤형 솔루션을 제안해 드립니다.
                도입 비용, 예상 효과, 구축 기간 등 무엇이든 물어보세요.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-light rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-indigo" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">이메일</p>
                    <p className="font-medium text-foreground">contact@myagent.ai</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-light rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-indigo" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">전화</p>
                    <p className="font-medium text-foreground">02-1234-5678</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-light rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-indigo" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">주소</p>
                    <p className="font-medium text-foreground">서울시 강남구 테헤란로 123</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    회사명 *
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="회사명을 입력하세요"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="focus-visible:ring-indigo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    이메일 *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="업무용 이메일을 입력하세요"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="focus-visible:ring-indigo"
                  />
                </div>

                <div>
                  <label htmlFor="volume" className="block text-sm font-medium text-foreground mb-2">
                    월간 CS 문의량
                  </label>
                  <Input
                    id="volume"
                    name="volume"
                    placeholder="예: 월 1,000건"
                    value={formData.volume}
                    onChange={handleChange}
                    className="focus-visible:ring-indigo"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    문의 내용
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="도입 관련 문의 사항을 자유롭게 작성해 주세요"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="focus-visible:ring-indigo"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="gradient" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "전송 중..." : "문의하기"}
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
