import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Smartphone, Calendar, Clock, MessageSquare } from "lucide-react";
import { DashboardLayout } from "@/admin/components/layout/DashboardLayout";
import { ConversationTimeline, Message } from "@/admin/components/leads/ConversationTimeline";
import { StatusDropdown } from "@/admin/components/leads/StatusDropdown";
import { toast } from "sonner";

// Mock data - replace with API call
const mockLeadData = {
  id: "1",
  name: "김민수",
  phone: "010-1234-5678",
  model: "iPhone 15 Pro Max",
  inquiryType: "가격문의",
  createdAt: "2026-01-18 14:30",
  lastResponseTime: "15분 전",
  status: "미응답" as const,
};

const mockMessages: Message[] = [
  { id: "1", role: "user", content: "아이폰 15 프로맥스 가격이 얼마인가요?", timestamp: "14:30" },
  { id: "2", role: "bot", content: "안녕하세요! iPhone 15 Pro Max에 관심 가져주셔서 감사합니다. 현재 저희 매장에서는 256GB 모델 기준 1,550,000원에 판매하고 있습니다. 혹시 원하시는 용량이나 색상이 있으신가요?", timestamp: "14:30" },
  { id: "3", role: "user", content: "블루 티타늄 256GB 재고 있나요?", timestamp: "14:32" },
  { id: "4", role: "bot", content: "네, 블루 티타늄 256GB 모델 현재 재고 보유 중입니다! 추가로 저희 매장에서 구매 시 정품 케이스와 강화유리 필름을 무료로 제공해드리고 있어요. 매장 방문 상담 예약 도와드릴까요?", timestamp: "14:32" },
  { id: "5", role: "user", content: "할부 조건도 알려주세요", timestamp: "14:45" },
];

export default function LeadDetail() {
  const { id } = useParams<{ id: string }>();
  const [status, setStatus] = useState<typeof mockLeadData.status>(mockLeadData.status);

  const handleStatusChange = (newStatus: typeof status) => {
    setStatus(newStatus);
    toast.success(`상태가 "${newStatus}"(으)로 변경되었습니다.`);
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          to="/admin/leads"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm font-medium">리드 목록으로</span>
        </Link>

        {/* Customer Info Card */}
        <div className="bento-card-lg mb-6 animate-fade-in">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-primary">
                  {mockLeadData.name.charAt(0)}
                </span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">{mockLeadData.name}</h1>
                <p className="text-muted-foreground mt-1">{mockLeadData.phone}</p>
              </div>
            </div>
            
            <StatusDropdown
              currentStatus={status}
              onStatusChange={handleStatusChange}
            />
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent">
                <Smartphone className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">관심 기종</p>
                <p className="text-sm font-medium text-foreground">{mockLeadData.model}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent">
                <MessageSquare className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">문의 유형</p>
                <p className="text-sm font-medium text-foreground">{mockLeadData.inquiryType}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent">
                <Calendar className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">최초 문의</p>
                <p className="text-sm font-medium text-foreground">{mockLeadData.createdAt}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent">
                <Clock className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">마지막 응답</p>
                <p className="text-sm font-medium text-foreground">{mockLeadData.lastResponseTime}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Conversation Timeline */}
        <div className="bento-card-lg animate-fade-in" style={{ animationDelay: "100ms" }}>
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 rounded-lg bg-accent">
              <MessageSquare className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">대화 기록</h2>
              <p className="text-xs text-muted-foreground">AI 챗봇과의 대화 내역</p>
            </div>
          </div>

          <ConversationTimeline messages={mockMessages} />
        </div>
      </div>
    </DashboardLayout>
  );
}
