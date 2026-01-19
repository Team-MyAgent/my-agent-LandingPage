import { Smartphone, AlertTriangle, CheckCircle2, Package } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ModelStock {
  id: string;
  name: string;
  inquiries: number;
  stockStatus: "low" | "normal" | "out";
  stockCount?: number;
}

const mockModels: ModelStock[] = [
  {
    id: "1",
    name: "iPhone 16 Pro Max",
    inquiries: 47,
    stockStatus: "low",
    stockCount: 3,
  },
  {
    id: "2",
    name: "Galaxy S24 Ultra",
    inquiries: 38,
    stockStatus: "normal",
    stockCount: 12,
  },
  {
    id: "3",
    name: "iPhone 16 Pro",
    inquiries: 32,
    stockStatus: "out",
  },
  {
    id: "4",
    name: "Galaxy Z Flip 5",
    inquiries: 24,
    stockStatus: "normal",
    stockCount: 8,
  },
];

const getStockBadge = (status: ModelStock["stockStatus"], count?: number) => {
  switch (status) {
    case "low":
      return (
        <Badge className="bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-100">
          <AlertTriangle className="h-3 w-3 mr-1" />
          재고 부족 ({count}개)
        </Badge>
      );
    case "out":
      return (
        <Badge className="bg-red-100 text-red-700 border-red-200 hover:bg-red-100">
          <Package className="h-3 w-3 mr-1" />
          재고 없음
        </Badge>
      );
    default:
      return (
        <Badge className="bg-emerald-light text-primary border-primary/20 hover:bg-emerald-light">
          <CheckCircle2 className="h-3 w-3 mr-1" />
          재고 확인 필요
        </Badge>
      );
  }
};

export function ModelStockStatus() {
  return (
    <div className="bento-card h-full animate-fade-in">
      <div className="flex items-center gap-2 mb-5">
        <div className="p-2 rounded-xl bg-accent">
          <Smartphone className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">인기 모델 재고 상태</h3>
          <p className="text-xs text-muted-foreground">실시간 문의량 기준</p>
        </div>
      </div>

      <div className="space-y-3">
        {mockModels.map((model) => (
          <div
            key={model.id}
            className="p-4 rounded-xl border border-slate-100 bg-white hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Smartphone className="h-4 w-4 text-primary flex-shrink-0" />
                  <h4 className="font-semibold text-foreground text-sm truncate">
                    {model.name}
                  </h4>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-muted-foreground">문의량:</span>
                  <span className="text-sm font-bold text-primary">{model.inquiries}건</span>
                </div>
              </div>
              {getStockBadge(model.stockStatus, model.stockCount)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

