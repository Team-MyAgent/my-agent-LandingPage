import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const mockData = [
  { time: "09시", inquiries: 4 },
  { time: "10시", inquiries: 8 },
  { time: "11시", inquiries: 12 },
  { time: "12시", inquiries: 6 },
  { time: "13시", inquiries: 9 },
  { time: "14시", inquiries: 15 },
  { time: "15시", inquiries: 18 },
  { time: "16시", inquiries: 14 },
  { time: "17시", inquiries: 11 },
  { time: "18시", inquiries: 7 },
];

export function InquiryChart() {
  return (
    <div className="bento-card-lg h-full animate-fade-in">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">시간대별 문의 현황</h3>
        <p className="text-sm text-muted-foreground mt-1">오늘 고객 문의 추이</p>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mockData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="hsl(var(--border))" 
              vertical={false}
            />
            <XAxis 
              dataKey="time" 
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
            <Line 
              type="monotone" 
              dataKey="inquiries" 
              stroke="hsl(var(--primary))"
              strokeWidth={3}
              dot={{ fill: "hsl(var(--primary))", strokeWidth: 0, r: 4 }}
              activeDot={{ r: 6, fill: "hsl(var(--primary))" }}
              name="문의 수"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
