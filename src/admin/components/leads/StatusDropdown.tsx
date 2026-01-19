import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type LeadStatus = "상담중" | "미응답" | "방문예약" | "구매완료" | "이탈";

interface StatusDropdownProps {
  currentStatus: LeadStatus;
  onStatusChange: (status: LeadStatus) => void;
}

const statusOptions: { value: LeadStatus; label: string; description: string }[] = [
  { value: "상담중", label: "상담중", description: "고객과 상담이 진행 중입니다" },
  { value: "미응답", label: "미응답", description: "고객의 응답을 기다리는 중입니다" },
  { value: "방문예약", label: "방문예약", description: "매장 방문 예약이 완료되었습니다" },
  { value: "구매완료", label: "구매완료", description: "구매가 성공적으로 완료되었습니다" },
  { value: "이탈", label: "이탈", description: "고객이 이탈하였습니다" },
];

const statusColors: Record<LeadStatus, string> = {
  "상담중": "bg-primary text-primary-foreground",
  "미응답": "bg-amber-100 text-amber-700",
  "방문예약": "bg-emerald-light text-primary",
  "구매완료": "bg-cool-gray-100 text-cool-gray-500",
  "이탈": "bg-destructive/10 text-destructive",
};

export function StatusDropdown({ currentStatus, onStatusChange }: StatusDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all",
            statusColors[currentStatus],
            "hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          )}
        >
          {currentStatus}
          <ChevronDown className={cn(
            "h-4 w-4 transition-transform",
            open && "rotate-180"
          )} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="start" 
        className="w-64 bg-popover border border-border rounded-xl shadow-float p-2 z-50"
      >
        {statusOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => {
              onStatusChange(option.value);
              setOpen(false);
            }}
            className={cn(
              "flex items-start gap-3 p-3 rounded-lg cursor-pointer",
              "hover:bg-accent focus:bg-accent",
              currentStatus === option.value && "bg-accent"
            )}
          >
            <div className={cn(
              "w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5",
              currentStatus === option.value 
                ? "border-primary bg-primary" 
                : "border-border"
            )}>
              {currentStatus === option.value && (
                <Check className="h-3 w-3 text-primary-foreground" />
              )}
            </div>
            <div className="flex-1">
              <p className="font-medium text-foreground">{option.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {option.description}
              </p>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
