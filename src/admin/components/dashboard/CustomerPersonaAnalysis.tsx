import { Users, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface Keyword {
  id: string;
  label: string;
  count: number;
  trend?: "up" | "down" | "stable";
}

const mockKeywords: Keyword[] = [
  { id: "1", label: "공시지원금", count: 142, trend: "up" },
  { id: "2", label: "24개월 할부", count: 98, trend: "up" },
  { id: "3", label: "가족 결합", count: 76, trend: "stable" },
  { id: "4", label: "5G 요금제", count: 65, trend: "up" },
  { id: "5", label: "기기 보호", count: 54, trend: "down" },
  { id: "6", label: "번호이동", count: 48, trend: "up" },
  { id: "7", label: "재고 확인", count: 42, trend: "stable" },
  { id: "8", label: "할인 프로모션", count: 38, trend: "up" },
];

const getTrendColor = (trend?: Keyword["trend"]) => {
  switch (trend) {
    case "up":
      return "bg-emerald-light text-primary border-primary/20";
    case "down":
      return "bg-gray-100 text-gray-600 border-gray-200";
    default:
      return "bg-gray-50 text-gray-700 border-gray-200";
  }
};

export function CustomerPersonaAnalysis() {
  return (
    <div className="bento-card h-full animate-fade-in">
      <div className="flex items-center gap-2 mb-5">
        <div className="p-2 rounded-xl bg-accent">
          <Users className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">고객 페르소나 분석</h3>
          <p className="text-xs text-muted-foreground">주요 관심사 키워드</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {mockKeywords.map((keyword) => (
          <div
            key={keyword.id}
            className={cn(
              "inline-flex items-center gap-2 px-3 py-2 rounded-full border text-sm font-medium transition-colors",
              getTrendColor(keyword.trend)
            )}
          >
            <span>{keyword.label}</span>
            <span className="text-xs font-bold opacity-80">{keyword.count}</span>
            {keyword.trend === "up" && (
              <TrendingUp className="h-3 w-3 opacity-70" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">총 키워드</span>
          <span className="font-bold text-foreground">{mockKeywords.length}개</span>
        </div>
        <div className="flex items-center justify-between text-xs mt-2">
          <span className="text-muted-foreground">총 언급 횟수</span>
          <span className="font-bold text-foreground">
            {mockKeywords.reduce((sum, k) => sum + k.count, 0)}회
          </span>
        </div>
      </div>
    </div>
  );
}

