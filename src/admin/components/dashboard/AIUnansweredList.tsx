import { HelpCircle, BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface UnansweredQuestion {
  id: string;
  question: string;
  timestamp: string;
  customerName?: string;
}

const mockUnansweredQuestions: UnansweredQuestion[] = [
  {
    id: "1",
    question: "아이폰 16 프로맥스 1TB 모델 재고가 언제 들어오나요?",
    timestamp: "2시간 전",
    customerName: "김민수",
  },
  {
    id: "2",
    question: "갤럭시 S24 울트라 공시지원금 최대 얼마까지 받을 수 있나요?",
    timestamp: "3시간 전",
    customerName: "박지영",
  },
  {
    id: "3",
    question: "5G 요금제와 LTE 요금제의 실제 속도 차이가 얼마나 되나요?",
    timestamp: "5시간 전",
  },
  {
    id: "4",
    question: "기기변경 시 기존 번호 유지하면서 통신사 변경 가능한가요?",
    timestamp: "어제",
    customerName: "이준호",
  },
];

export function AIUnansweredList() {
  return (
    <div className="bento-card h-full animate-fade-in">
      <div className="flex items-center gap-2 mb-5">
        <div className="p-2 rounded-xl bg-accent">
          <HelpCircle className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">AI 미응답 리스트</h3>
          <p className="text-xs text-muted-foreground">상담원 전환 필요 질문</p>
        </div>
      </div>

      <div className="space-y-3 max-h-[400px] overflow-y-auto">
        {mockUnansweredQuestions.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "p-4 rounded-xl border border-slate-100 bg-white hover:bg-gray-50 transition-colors",
              index !== mockUnansweredQuestions.length - 1 && "mb-3"
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">{item.timestamp}</span>
                  {item.customerName && (
                    <>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">{item.customerName}</span>
                    </>
                  )}
                </div>
                <p className="text-sm font-medium text-foreground leading-relaxed">
                  {item.question}
                </p>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="flex-shrink-0 h-8 px-3 text-xs border-primary/20 text-primary hover:bg-primary/5"
              >
                <BookOpen className="h-3.5 w-3.5 mr-1.5" />
                지식베이스 업데이트
              </Button>
            </div>
          </div>
        ))}
      </div>

      {mockUnansweredQuestions.length === 0 && (
        <div className="text-center py-12">
          <HelpCircle className="h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-50" />
          <p className="text-sm text-muted-foreground">미응답 질문이 없습니다</p>
        </div>
      )}
    </div>
  );
}

