import { Check, X, Sparkles } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ComparisonSection = () => {
  const comparisonData = [
    {
      category: "월 구독료",
      myAgent: "8~50만 원",
      domestic: "수십만 원",
      global: "수십만 원 이상",
      highlight: false,
    },
    {
      category: "초기 도입비 (전처리/RAG 튜닝)",
      myAgent: "300~700만 원",
      domestic: "수천만 원 (컨설팅/SI)",
      global: "수천만 원 (커스텀 개발)",
      highlight: true,
    },
    {
      category: "주요 타깃",
      myAgent: "50인 이하 스타트업 & SMB",
      domestic: "대형 고객사 위주",
      global: "대형 고객사 위주",
      highlight: false,
    },
    {
      category: "도입 소요 기간",
      myAgent: "1~2주",
      domestic: "1~3개월",
      global: "2~6개월",
      highlight: false,
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light border border-indigo/20 text-indigo text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>경쟁력 비교</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            왜 <span className="gradient-text">My Agent</span>인가?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            스타트업과 중소기업에 최적화된 합리적인 가격으로 
            엔터프라이즈급 AI 상담 솔루션을 제공합니다
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate hover:bg-slate">
                  <TableHead className="text-slate-foreground font-semibold py-4 text-white">비교 항목</TableHead>
                  <TableHead className="text-center py-4">
                    <div className="flex flex-col items-center gap-1">
                      <span className="gradient-text font-bold text-lg">My Agent</span>
                      <span className="text-xs text-slate-300">(Standard/Professional)</span>
                    </div>
                  </TableHead>
                  <TableHead className="text-center text-white py-4">
                    <div className="flex flex-col items-center gap-1">
                      <span className="font-semibold">국내 경쟁사</span>
                      <span className="text-xs text-slate-300">(C사 등)</span>
                    </div>
                  </TableHead>
                  <TableHead className="text-center text-white py-4">
                    <div className="flex flex-col items-center gap-1">
                      <span className="font-semibold">글로벌 경쟁사</span>
                      <span className="text-xs text-slate-300">(I사 등)</span>
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow 
                    key={index} 
                    className={`transition-colors hover:bg-muted/50 ${
                      row.highlight ? "bg-accent-light border-l-4 border-l-indigo" : ""
                    }`}
                  >
                    <TableCell className="font-medium text-foreground py-5">
                      {row.category}
                      {row.highlight && (
                        <span className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald/10 text-emerald text-xs font-medium">
                          <Check className="w-3 h-3" />
                          핵심 차별점
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="text-center py-5">
                      <div className="flex flex-col items-center gap-1">
                        <span className="font-bold text-indigo text-lg">{row.myAgent}</span>
                        {row.highlight && (
                          <span className="text-xs text-emerald font-medium">전처리 포함</span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-center text-muted-foreground py-5">
                      <div className="flex flex-col items-center gap-1">
                        <span>{row.domestic}</span>
                        {row.highlight && (
                          <span className="flex items-center gap-1 text-xs text-destructive">
                            <X className="w-3 h-3" />
                            별도 계약 필요
                          </span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-center text-muted-foreground py-5">
                      <div className="flex flex-col items-center gap-1">
                        <span>{row.global}</span>
                        {row.highlight && (
                          <span className="flex items-center gap-1 text-xs text-destructive">
                            <X className="w-3 h-3" />
                            별도 계약 필요
                          </span>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Bottom highlight */}
          <div className="mt-8 p-6 bg-gradient-to-r from-indigo/5 via-violet/5 to-emerald/5 rounded-2xl border border-indigo/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 gradient-indigo rounded-xl flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">합리적인 초기 도입비</p>
                  <p className="text-sm text-muted-foreground">컨설팅/SI 없이 바로 시작 가능</p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-center">
                <div>
                  <p className="text-2xl font-bold gradient-text">~90%</p>
                  <p className="text-xs text-muted-foreground">도입비 절감</p>
                </div>
                <div className="w-px h-10 bg-border"></div>
                <div>
                  <p className="text-2xl font-bold gradient-text">1~2주</p>
                  <p className="text-xs text-muted-foreground">빠른 도입</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
