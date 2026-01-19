import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Building2, ShoppingCart } from "lucide-react";

const carrierData = [
  { name: "SKT", 매장방문: 45, 온라인상담: 32 },
  { name: "KT", 매장방문: 38, 온라인상담: 28 },
  { name: "LG U+", 매장방문: 25, 온라인상담: 18 },
];

export function CarrierChannelChart() {
  return (
    <div className="bento-card h-full animate-fade-in">
      <div className="flex items-center gap-2 mb-5">
        <div className="p-2 rounded-xl bg-accent">
          <Building2 className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">통신사 및 채널 선호도</h3>
          <p className="text-xs text-muted-foreground">이번 주 문의 기준</p>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={carrierData}
            margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="hsl(var(--border))"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "12px",
                boxShadow: "0 4px 6px -1px hsl(0 0% 0% / 0.05)",
              }}
              labelStyle={{ color: "hsl(var(--foreground))" }}
            />
            <Legend
              iconType="circle"
              wrapperStyle={{ fontSize: "12px", paddingTop: "10px" }}
            />
            <Bar
              dataKey="매장방문"
              fill="#006155"
              radius={[8, 8, 0, 0]}
              name="매장 방문"
            />
            <Bar
              dataKey="온라인상담"
              fill="#80d4c2"
              radius={[8, 8, 0, 0]}
              name="온라인 상담"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex items-center gap-4 pt-4 border-t border-border">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#006155]" />
          <span className="text-xs text-muted-foreground">매장 방문</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#80d4c2]" />
          <span className="text-xs text-muted-foreground">온라인 상담</span>
        </div>
      </div>
    </div>
  );
}

