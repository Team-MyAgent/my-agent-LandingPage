import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="absolute bottom-20 right-0 w-[380px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-[#006155] px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">My Agent AI 상담원</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white/80 text-xs">온라인</span>
                  </div>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Body */}
            <div className="h-[320px] p-5 bg-gray-50 overflow-y-auto">
              {/* AI Welcome Message */}
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-[#006155] rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-gray-100">
                    <p className="text-gray-800 text-sm leading-relaxed">
                      안녕하세요! 휴대폰 구매 및 상담을 도와드리는 My Agent입니다. 무엇을 도와드릴까요?
                    </p>
                  </div>
                  <span className="text-xs text-gray-400 mt-1.5 block">방금 전</span>
                </div>
              </div>

              {/* Example User Message */}
              <div className="flex gap-3 mt-4 justify-end">
                <div className="flex-1 flex justify-end">
                  <div>
                    <div className="bg-[#006155] text-white rounded-2xl rounded-tr-sm px-4 py-3">
                      <p className="text-sm leading-relaxed">
                        최신 갤럭시 S24 가격이 궁금해요
                      </p>
                    </div>
                    <span className="text-xs text-gray-400 mt-1.5 block text-right">방금 전</span>
                  </div>
                </div>
              </div>

              {/* AI Response */}
              <div className="flex gap-3 mt-4">
                <div className="w-8 h-8 bg-[#006155] rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-gray-100">
                    <p className="text-gray-800 text-sm leading-relaxed">
                      갤럭시 S24 시리즈 가격을 안내해 드릴게요! 📱
                    </p>
                    <div className="mt-3 space-y-2">
                      <div className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg">
                        <span className="text-sm text-gray-600">S24 256GB</span>
                        <span className="text-sm font-semibold text-[#006155]">1,155,000원</span>
                      </div>
                      <div className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg">
                        <span className="text-sm text-gray-600">S24+ 256GB</span>
                        <span className="text-sm font-semibold text-[#006155]">1,353,000원</span>
                      </div>
                      <div className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg">
                        <span className="text-sm text-gray-600">S24 Ultra 256GB</span>
                        <span className="text-sm font-semibold text-[#006155]">1,698,400원</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mt-3">
                      추가 할인 및 프로모션 정보도 확인해 드릴까요?
                    </p>
                  </div>
                  <span className="text-xs text-gray-400 mt-1.5 block">방금 전</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="메시지를 입력하세요..."
                  className="flex-1 px-4 py-2.5 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#006155]/20 transition-all"
                />
                <Button
                  size="icon"
                  className="w-10 h-10 rounded-full bg-[#006155] hover:bg-[#004d42] transition-colors"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-400 text-center mt-2">
                AI가 생성한 응답은 참고용입니다
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? "bg-gray-700 hover:bg-gray-800"
            : "bg-[#006155] hover:bg-[#004d42] hover:shadow-[0_0_30px_rgba(0,97,85,0.5)]"
        }`}
        style={{
          boxShadow: isOpen
            ? "0 4px 20px rgba(0,0,0,0.2)"
            : "0 4px 20px rgba(0,97,85,0.4)",
        }}
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
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default ChatWidget;
