import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Users } from "lucide-react";

const data = [
  { name: "번호이동 (MNP)", value: 45, color: "#006155" },
  { name: "기기변경 (KGB)", value: 35, color: "#00a085" },
  { name: "신규가입", value: 20, color: "#80d4c2" },
];

const COLORS = ["#006155", "#00a085", "#80d4c2"];

export function SubscriptionTypeChart() {
  return (
    <div className="bento-card h-full animate-fade-in">
      <div className="flex items-center gap-2 mb-5">
        <div className="p-2 rounded-xl bg-accent">
          <Users className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">가입 유형 비율</h3>
          <p className="text-xs text-muted-foreground">이번 달 기준</p>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "12px",
                boxShadow: "0 4px 6px -1px hsl(0 0% 0% / 0.05)",
              }}
              labelStyle={{ color: "hsl(var(--foreground))", fontWeight: 600 }}
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="circle"
              wrapperStyle={{ fontSize: "12px", color: "hsl(var(--muted-foreground))" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 space-y-2 pt-4 border-t border-border">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-muted-foreground">{item.name}</span>
            </div>
            <span className="text-sm font-bold text-foreground">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

