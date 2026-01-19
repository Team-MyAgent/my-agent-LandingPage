import { Link } from "react-router-dom";
import { Smartphone, Clock, MessageSquare, Calendar, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Lead {
  id: string;
  name: string;
  model: string;
  inquiryType: "가격문의" | "재고확인" | "상담예약" | "기타";
  lastResponseTime: string;
  status: "상담중" | "미응답" | "방문예약" | "구매완료" | "이탈";
}

interface LeadCardProps {
  lead: Lead;
}

const statusStyles: Record<Lead["status"], { bg: string; text: string }> = {
  "상담중": { bg: "bg-primary/10", text: "text-primary" },
  "미응답": { bg: "bg-amber-100", text: "text-amber-700" },
  "방문예약": { bg: "bg-emerald-light", text: "text-primary" },
  "구매완료": { bg: "bg-cool-gray-100", text: "text-cool-gray-500" },
  "이탈": { bg: "bg-destructive/10", text: "text-destructive" },
};

const inquiryTypeIcons: Record<Lead["inquiryType"], typeof Smartphone> = {
  "가격문의": MessageSquare,
  "재고확인": Smartphone,
  "상담예약": Calendar,
  "기타": MessageSquare,
};

export function LeadCard({ lead }: LeadCardProps) {
  const InquiryIcon = inquiryTypeIcons[lead.inquiryType];
  const statusStyle = statusStyles[lead.status];

  return (
    <Link
      to={`/admin/leads/${lead.id}`}
      className="block bento-card group hover:shadow-bento-lg transition-all duration-200 animate-fade-in"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <span className="text-lg font-semibold text-primary">
              {lead.name.charAt(0)}
            </span>
          </div>
          <div>
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {lead.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <Smartphone className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{lead.model}</span>
            </div>
          </div>
        </div>
        
        <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
      </div>
      
      <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <InquiryIcon className="h-4 w-4" />
            <span className="text-sm">{lead.inquiryType}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{lead.lastResponseTime}</span>
          </div>
        </div>
        
        <span className={cn(
          "px-3 py-1 rounded-full text-xs font-medium",
          statusStyle.bg,
          statusStyle.text
        )}>
          {lead.status}
        </span>
      </div>
    </Link>
  );
}
