import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, Filter, Users } from "lucide-react";
import { DashboardLayout } from "@/admin/components/layout/DashboardLayout";
import { LeadCard, Lead } from "@/admin/components/leads/LeadCard";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const mockLeads: Lead[] = [
  { id: "1", name: "김민수", model: "iPhone 15 Pro Max", inquiryType: "가격문의", lastResponseTime: "15분 전", status: "미응답" },
  { id: "2", name: "박지영", model: "Galaxy S24 Ultra", inquiryType: "재고확인", lastResponseTime: "32분 전", status: "미응답" },
  { id: "3", name: "이준호", model: "Galaxy Z Flip 5", inquiryType: "상담예약", lastResponseTime: "1시간 전", status: "방문예약" },
  { id: "4", name: "최서연", model: "iPhone 15", inquiryType: "가격문의", lastResponseTime: "2시간 전", status: "상담중" },
  { id: "5", name: "정현우", model: "Galaxy S24+", inquiryType: "기타", lastResponseTime: "3시간 전", status: "구매완료" },
  { id: "6", name: "한소희", model: "iPhone 15 Pro", inquiryType: "상담예약", lastResponseTime: "4시간 전", status: "방문예약" },
  { id: "7", name: "윤성민", model: "Galaxy Z Fold 5", inquiryType: "가격문의", lastResponseTime: "5시간 전", status: "이탈" },
  { id: "8", name: "강예은", model: "iPhone 15 Plus", inquiryType: "재고확인", lastResponseTime: "어제", status: "상담중" },
];

type FilterType = "all" | "unanswered" | "reservation";

const filters: { value: FilterType; label: string }[] = [
  { value: "all", label: "전체" },
  { value: "unanswered", label: "미응답 전용" },
  { value: "reservation", label: "방문 예약" },
];

export default function LeadList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFilter = (searchParams.get("filter") as FilterType) || "all";
  const [activeFilter, setActiveFilter] = useState<FilterType>(initialFilter);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLeads = useMemo(() => {
    let result = mockLeads;

    // Apply status filter
    if (activeFilter === "unanswered") {
      result = result.filter((lead) => lead.status === "미응답");
    } else if (activeFilter === "reservation") {
      result = result.filter((lead) => lead.status === "방문예약");
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (lead) =>
          lead.name.toLowerCase().includes(query) ||
          lead.model.toLowerCase().includes(query)
      );
    }

    return result;
  }, [activeFilter, searchQuery]);

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
    if (filter === "all") {
      searchParams.delete("filter");
    } else {
      searchParams.set("filter", filter);
    }
    setSearchParams(searchParams);
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">리드 관리</h1>
          <p className="text-muted-foreground mt-1">고객 문의 목록을 관리하세요</p>
        </div>

        {/* Search & Filters */}
        <div className="bento-card mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="고객명 또는 기종으로 검색"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-11 rounded-xl bg-secondary/50 border-border"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => handleFilterChange(filter.value)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                    activeFilter === filter.value
                      ? "bg-primary text-primary-foreground shadow-bento"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                  )}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center gap-2 mb-4 text-muted-foreground">
          <Users className="h-4 w-4" />
          <span className="text-sm">
            {filteredLeads.length}건의 리드
          </span>
        </div>

        {/* Lead Cards */}
        <div className="space-y-4">
          {filteredLeads.length > 0 ? (
            filteredLeads.map((lead) => (
              <LeadCard key={lead.id} lead={lead} />
            ))
          ) : (
            <div className="bento-card text-center py-12">
              <div className="w-16 h-16 rounded-2xl bg-secondary mx-auto flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground">
                검색 결과가 없습니다
              </h3>
              <p className="text-muted-foreground mt-1">
                다른 검색어나 필터를 사용해보세요
              </p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
