import { Bell, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const unansweredLeads = [
  { id: "1", name: "김민수", model: "iPhone 15 Pro", time: "15분 전" },
  { id: "2", name: "박지영", model: "Galaxy S24", time: "32분 전" },
  { id: "3", name: "이준호", model: "Z Flip 5", time: "1시간 전" },
];

export function UnansweredAlerts() {
  return (
    <div className="floating-alert animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-primary/10 animate-pulse-soft">
            <Bell className="h-4 w-4 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground text-sm">미응답 알림</h3>
            <p className="text-xs text-muted-foreground">{unansweredLeads.length}건 대기 중</p>
          </div>
        </div>
        <Link 
          to="/admin/leads?filter=unanswered" 
          className="text-xs text-primary font-medium hover:underline flex items-center gap-1"
        >
          전체보기 <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
      
      <div className="space-y-2">
        {unansweredLeads.map((lead) => (
          <Link
            key={lead.id}
            to={`/admin/leads/${lead.id}`}
            className="flex items-center justify-between p-3 rounded-lg bg-card hover:bg-secondary/50 transition-colors border border-border/50"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xs font-medium text-primary">
                  {lead.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{lead.name}</p>
                <p className="text-xs text-muted-foreground">{lead.model}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span className="text-xs">{lead.time}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
