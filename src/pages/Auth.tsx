import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const { toast } = useToast();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: isLogin ? "로그인 기능 준비 중" : "회원가입 기능 준비 중",
      description: "백엔드 연동 후 이용 가능합니다.",
    });
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left - Branding */}
      <div className="hidden lg:flex lg:w-1/2 gradient-emerald items-center justify-center p-12">
        <div className="max-w-md text-white">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <Bot className="w-7 h-7 text-white" />
            </div>
            <span className="font-semibold text-2xl tracking-tight">My Agent</span>
          </div>
          <h1 className="text-4xl font-bold mb-6 leading-tight">
            AI 상담 솔루션으로<br />CS를 혁신하세요
          </h1>
          <p className="text-white/70 leading-relaxed">
            RAG 기반의 정확한 답변으로 고객 만족도를 높이고,
            상담팀의 업무 부담을 줄이세요.
          </p>
        </div>
      </div>

      {/* Right - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            홈으로 돌아가기
          </Link>

          <div className="lg:hidden flex items-center gap-3 mb-8">
            <div className="w-10 h-10 gradient-emerald rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-xl tracking-tight">My Agent</span>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-2">
            {isLogin ? "로그인" : "회원가입"}
          </h2>
          <p className="text-muted-foreground mb-8">
            {isLogin ? "계정에 로그인하여 대시보드에 접근하세요" : "새 계정을 만들어 시작하세요"}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">이메일</label>
              <Input
                type="email"
                placeholder="email@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">비밀번호</label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11"
                required
              />
            </div>
            <Button type="submit" variant="gradient" className="w-full" size="lg">
              {isLogin ? "로그인" : "회원가입"}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            {isLogin ? "계정이 없으신가요?" : "이미 계정이 있으신가요?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-emerald hover:underline font-medium"
            >
              {isLogin ? "회원가입" : "로그인"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
