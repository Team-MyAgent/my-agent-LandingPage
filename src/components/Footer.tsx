import { Bot, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    product: [
      { label: "기능", href: "#features" },
      { label: "가격", href: "#pricing" },
      { label: "사용 방법", href: "#how-it-works" },
      { label: "API 문서", href: "#" },
    ],
    company: [
      { label: "회사 소개", href: "#" },
      { label: "채용", href: "#" },
      { label: "블로그", href: "#" },
      { label: "문의", href: "#contact" },
    ],
    support: [
      { label: "고객 지원", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "이용약관", href: "#" },
      { label: "개인정보처리방침", href: "#" },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto container-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
                <Bot className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="font-bold text-xl">My Agent</span>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              RAG 기술 기반의 AI 고객 상담 솔루션. 
              정확하고 신뢰할 수 있는 답변으로 CS를 자동화하세요.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors flex items-center justify-center">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors flex items-center justify-center">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors flex items-center justify-center">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">제품</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">회사</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4">지원</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © 2024 My Agent. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Made with ❤️ in Seoul, Korea
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
