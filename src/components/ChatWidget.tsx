import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronDown, X, Send, RefreshCw, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial",
      type: "ai",
      content: "해당 챗봇에서 My Agent의 주요 기능을 직접 확인하실 수 있습니다",
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // 채팅창이 열릴 때 입력창에 포커스
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  };

  const handleRefresh = () => {
    setMessages([
      {
        id: "initial",
        type: "ai",
        content: "해당 챗봇에서 My Agent의 주요 기능을 직접 확인하실 수 있습니다",
        timestamp: new Date(),
      },
    ]);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!message.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: message.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);

    try {
      // API 베이스 URL 설정 (환경 변수 또는 기본값)
      // 프로덕션 기본값: HTTPS 도메인 사용
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "https://api.myagent.ai.kr";
      const response = await fetch(`${apiBaseUrl}/api/chat/faq`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: userMessage.content,
        }),
        // CORS 문제 디버깅을 위한 옵션
        mode: "cors",
        credentials: "omit",
      });

      // CORS 에러 체크
      if (!response.ok) {
        const errorText = await response.text().catch(() => "알 수 없는 오류");
        console.error("API 응답 오류:", response.status, errorText);
        throw new Error(`서버 오류: ${response.status}`);
      }

      const data = await response.json();
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: data.answer || data.response || "응답을 처리하는 중 오류가 발생했습니다.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("API 호출 오류:", error);
      
      // CORS 에러인지 확인
      let errorContent = "죄송합니다. 일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
      if (error instanceof TypeError && error.message.includes("fetch")) {
        console.error("CORS 또는 네트워크 오류 가능성:", error);
        errorContent = "서버 연결에 문제가 발생했습니다. CORS 설정을 확인해주세요.";
      }
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: errorContent,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    
    if (minutes < 1) return "방금 전";
    if (minutes < 60) return `${minutes}분 전`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}시간 전`;
    return date.toLocaleDateString("ko-KR");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 sm:bottom-6 sm:right-6">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="absolute bottom-20 right-0 w-[420px] max-w-[calc(100vw-1.5rem)] sm:max-w-[calc(100vw-3rem)] max-h-[85vh] sm:max-h-[80vh] h-[600px] sm:h-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col"
          >
            {/* Header */}
            <div className="bg-primary px-6 py-4 flex items-center justify-between flex-shrink-0">
              <h3 className="text-white font-semibold text-base">My Agent 데모 챗봇</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleRefresh}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  title="새로고침"
                >
                  <RefreshCw className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={toggleChat}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  title="닫기"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-6 bg-gray-50 overflow-y-auto chat-scrollbar">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 mb-4 ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.type === "ai" && (
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div className={`flex flex-col ${msg.type === "user" ? "items-end max-w-[75%]" : "items-start max-w-[75%]"}`}>
                    <div
                      className={`px-4 py-3 rounded-2xl ${
                        msg.type === "user"
                          ? "bg-primary text-white rounded-tr-sm"
                          : "bg-white text-gray-800 rounded-tl-sm border border-gray-100 shadow-sm"
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                    </div>
                    <span className="text-xs text-gray-400 mt-1.5">
                      {formatTime(msg.timestamp)}
                    </span>
                  </div>
                  {msg.type === "user" && (
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-600 text-xs font-semibold">U</span>
                    </div>
                  )}
                </div>
              ))}
              
              {/* Loading Indicator */}
              {isLoading && (
                <div className="flex gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex flex-col items-start max-w-[75%]">
                    <div className="bg-white text-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 border border-gray-100 shadow-sm">
                      <div className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 text-primary animate-spin" />
                        <p className="text-sm text-gray-600">AI가 답변을 준비 중입니다...</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100 flex-shrink-0">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="메시지를 입력하세요..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-2.5 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <Button
                  onClick={handleSend}
                  disabled={!message.trim() || isLoading}
                  size="icon"
                  className="w-10 h-10 rounded-full bg-primary hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        onClick={toggleChat}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary hover:bg-emerald-600 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
        style={{
          boxShadow: "0 4px 20px rgba(0, 97, 85, 0.4)",
        }}
        aria-label={isOpen ? "채팅창 닫기" : "채팅창 열기"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Custom Scrollbar Styles */}
      <style>{`
        .chat-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .chat-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .chat-scrollbar::-webkit-scrollbar-thumb {
          background: hsl(168 100% 19% / 0.3);
          border-radius: 3px;
        }
        .chat-scrollbar::-webkit-scrollbar-thumb:hover {
          background: hsl(168 100% 19% / 0.5);
        }
      `}</style>
    </div>
  );
};

export default ChatWidget;