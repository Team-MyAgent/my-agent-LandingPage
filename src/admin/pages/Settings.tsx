import { Bell, User, Shield, Palette } from "lucide-react";
import { DashboardLayout } from "@/admin/components/layout/DashboardLayout";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function Settings() {
  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">설정</h1>
          <p className="text-muted-foreground mt-1">관리자 설정을 관리하세요</p>
        </div>

        <div className="space-y-6">
          {/* Profile Settings */}
          <div className="bento-card animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-accent">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="font-semibold text-foreground">프로필 설정</h2>
                <p className="text-sm text-muted-foreground">계정 정보를 관리합니다</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-border">
                <div>
                  <p className="font-medium text-foreground">이름</p>
                  <p className="text-sm text-muted-foreground">관리자</p>
                </div>
                <button className="text-sm text-primary font-medium hover:underline">
                  수정
                </button>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-border">
                <div>
                  <p className="font-medium text-foreground">이메일</p>
                  <p className="text-sm text-muted-foreground">admin@example.com</p>
                </div>
                <button className="text-sm text-primary font-medium hover:underline">
                  수정
                </button>
              </div>
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium text-foreground">비밀번호</p>
                  <p className="text-sm text-muted-foreground">••••••••</p>
                </div>
                <button className="text-sm text-primary font-medium hover:underline">
                  변경
                </button>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bento-card animate-fade-in" style={{ animationDelay: "50ms" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-accent">
                <Bell className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="font-semibold text-foreground">알림 설정</h2>
                <p className="text-sm text-muted-foreground">알림 수신 방법을 설정합니다</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-border">
                <div>
                  <Label htmlFor="new-inquiry" className="font-medium text-foreground">새 문의 알림</Label>
                  <p className="text-sm text-muted-foreground">새로운 고객 문의 시 알림</p>
                </div>
                <Switch id="new-inquiry" defaultChecked />
              </div>
              <div className="flex items-center justify-between py-3 border-b border-border">
                <div>
                  <Label htmlFor="unanswered" className="font-medium text-foreground">미응답 알림</Label>
                  <p className="text-sm text-muted-foreground">30분 이상 미응답 시 알림</p>
                </div>
                <Switch id="unanswered" defaultChecked />
              </div>
              <div className="flex items-center justify-between py-3">
                <div>
                  <Label htmlFor="email-report" className="font-medium text-foreground">일일 리포트</Label>
                  <p className="text-sm text-muted-foreground">매일 저녁 요약 리포트 발송</p>
                </div>
                <Switch id="email-report" />
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="bento-card animate-fade-in" style={{ animationDelay: "100ms" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-accent">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="font-semibold text-foreground">보안 설정</h2>
                <p className="text-sm text-muted-foreground">계정 보안을 강화합니다</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-border">
                <div>
                  <Label htmlFor="2fa" className="font-medium text-foreground">2단계 인증</Label>
                  <p className="text-sm text-muted-foreground">로그인 시 추가 인증 요구</p>
                </div>
                <Switch id="2fa" />
              </div>
              <div className="flex items-center justify-between py-3">
                <div>
                  <Label htmlFor="session" className="font-medium text-foreground">세션 타임아웃</Label>
                  <p className="text-sm text-muted-foreground">30분 비활동 시 자동 로그아웃</p>
                </div>
                <Switch id="session" defaultChecked />
              </div>
            </div>
          </div>

          {/* Display Settings */}
          <div className="bento-card animate-fade-in" style={{ animationDelay: "150ms" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-accent">
                <Palette className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="font-semibold text-foreground">화면 설정</h2>
                <p className="text-sm text-muted-foreground">UI 환경을 설정합니다</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-3">
                <div>
                  <Label htmlFor="compact" className="font-medium text-foreground">컴팩트 모드</Label>
                  <p className="text-sm text-muted-foreground">더 많은 정보를 한 화면에 표시</p>
                </div>
                <Switch id="compact" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
