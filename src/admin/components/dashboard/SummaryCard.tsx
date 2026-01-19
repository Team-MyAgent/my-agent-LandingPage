import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SummaryCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: "default" | "highlight";
}

export function SummaryCard({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  trend,
  variant = "default" 
}: SummaryCardProps) {
  return (
    <div className={cn(
      "stat-card animate-fade-in",
      variant === "highlight" && "bg-primary text-primary-foreground"
    )}>
      <div className="flex items-start justify-between">
        <div className={cn(
          "p-2.5 rounded-xl",
          variant === "highlight" 
            ? "bg-primary-foreground/20" 
            : "bg-accent"
        )}>
          <Icon className={cn(
            "h-5 w-5",
            variant === "highlight" 
              ? "text-primary-foreground" 
              : "text-primary"
          )} />
        </div>
        {trend && (
          <span className={cn(
            "text-xs font-medium px-2 py-1 rounded-full",
            trend.isPositive 
              ? "bg-emerald-light text-primary" 
              : "bg-destructive/10 text-destructive"
          )}>
            {trend.isPositive ? "+" : ""}{trend.value}%
          </span>
        )}
      </div>
      
      <div className="mt-3">
        <p className={cn(
          "text-sm font-medium",
          variant === "highlight" 
            ? "text-primary-foreground/80" 
            : "text-muted-foreground"
        )}>
          {title}
        </p>
        <p className="text-3xl font-bold mt-1">{value}</p>
        {subtitle && (
          <p className={cn(
            "text-sm mt-1",
            variant === "highlight" 
              ? "text-primary-foreground/70" 
              : "text-muted-foreground"
          )}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
