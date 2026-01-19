import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Message {
  id: string;
  role: "user" | "bot";
  content: string;
  timestamp: string;
}

interface ConversationTimelineProps {
  messages: Message[];
}

export function ConversationTimeline({ messages }: ConversationTimelineProps) {
  return (
    <div className="space-y-4">
      {messages.map((message, index) => (
        <div
          key={message.id}
          className={cn(
            "flex gap-3 animate-fade-in",
            message.role === "user" ? "flex-row-reverse" : ""
          )}
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <div className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
            message.role === "user" 
              ? "bg-primary/10" 
              : "bg-accent"
          )}>
            {message.role === "user" ? (
              <User className="h-4 w-4 text-primary" />
            ) : (
              <Bot className="h-4 w-4 text-primary" />
            )}
          </div>
          
          <div className={cn(
            "flex-1 max-w-[80%]",
            message.role === "user" ? "text-right" : ""
          )}>
            <div className={cn(
              "inline-block p-4 rounded-2xl",
              message.role === "user"
                ? "bg-primary text-primary-foreground rounded-tr-sm"
                : "bg-card border border-border rounded-tl-sm"
            )}>
              <p className="text-sm leading-relaxed">{message.content}</p>
            </div>
            <p className="text-xs text-muted-foreground mt-1.5 px-1">
              {message.timestamp}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
