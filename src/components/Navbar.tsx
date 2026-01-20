import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "주요 기능", href: "#features" },
  { label: "도입 과정", href: "#how-it-works" },
  { label: "자주 묻는 질문", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (!isHome && href.startsWith("#")) {
      window.location.href = "/" + href;
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <nav className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">My Agent</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={isHome ? item.href : `/${item.href}`}
                onClick={() => handleNavClick(item.href)}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/admin">로그인</Link>
            </Button>
            <Button
              variant="gradient"
              size="sm"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                } else if (!isHome) {
                  window.location.href = "/#contact";
                }
              }}
            >
              도입 문의하기
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-6 space-y-4 border-t border-border">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={isHome ? item.href : `/${item.href}`}
                    onClick={() => handleNavClick(item.href)}
                    className="block py-2 text-base font-medium text-foreground"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 space-y-3">
                  <Link
                    to="/pricing"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center btn-outline"
                  >
                    요금제
                  </Link>
                  <Link
                    to="/admin"
                    onClick={() => setIsOpen(false)}
                    className="w-full btn-primary py-3 text-sm text-center block"
                  >
                    로그인
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}