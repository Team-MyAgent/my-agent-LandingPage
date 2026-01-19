import { Smartphone, TrendingUp } from "lucide-react";

const popularModels = [
  { 
    rank: 1, 
    name: "iPhone 15 Pro Max", 
    inquiries: 47, 
    trend: "+12%",
    color: "bg-primary" 
  },
  { 
    rank: 2, 
    name: "Galaxy S24 Ultra", 
    inquiries: 38, 
    trend: "+8%",
    color: "bg-primary/80" 
  },
  { 
    rank: 3, 
    name: "Galaxy Z Flip 5", 
    inquiries: 24, 
    trend: "+5%",
    color: "bg-primary/60" 
  },
];

export function PopularModels() {
  return (
    <div className="bento-card h-full animate-fade-in">
      <div className="flex items-center gap-2 mb-5">
        <div className="p-2 rounded-xl bg-accent">
          <TrendingUp className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">인기 상담 기종</h3>
          <p className="text-xs text-muted-foreground">AI 분석 기반 TOP 3</p>
        </div>
      </div>
      
      <div className="space-y-3">
        {popularModels.map((model) => (
          <div 
            key={model.rank}
            className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
          >
            <div className={`w-8 h-8 rounded-lg ${model.color} flex items-center justify-center text-primary-foreground font-bold text-sm`}>
              {model.rank}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <p className="font-medium text-foreground text-sm truncate">{model.name}</p>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">{model.inquiries}건 문의</p>
            </div>
            <span className="text-xs font-medium text-primary bg-emerald-light px-2 py-1 rounded-full">
              {model.trend}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
