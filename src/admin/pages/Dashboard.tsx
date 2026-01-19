import { MessageSquare, AlertCircle, TrendingUp } from "lucide-react";
import { DashboardLayout } from "@/admin/components/layout/DashboardLayout";
import { SummaryCard } from "@/admin/components/dashboard/SummaryCard";
import { InquiryChart } from "@/admin/components/dashboard/InquiryChart";
import { PopularModels } from "@/admin/components/dashboard/PopularModels";
import { UnansweredAlerts } from "@/admin/components/dashboard/UnansweredAlerts";
import { SubscriptionTypeChart } from "@/admin/components/dashboard/SubscriptionTypeChart";
import { CarrierChannelChart } from "@/admin/components/dashboard/CarrierChannelChart";
import { AIUnansweredList } from "@/admin/components/dashboard/AIUnansweredList";
import { ModelStockStatus } from "@/admin/components/dashboard/ModelStockStatus";
import { CustomerPersonaAnalysis } from "@/admin/components/dashboard/CustomerPersonaAnalysis";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">대시보드</h1>
          <p className="text-muted-foreground mt-1">오늘의 매장 현황을 한눈에 확인하세요</p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Top Row - Summary Cards */}
          <div className="lg:col-span-4">
            <SummaryCard
              title="오늘의 새 문의"
              value={24}
              subtitle="어제 대비 +5건"
              icon={MessageSquare}
              trend={{ value: 26, isPositive: true }}
              variant="highlight"
            />
          </div>
          <div className="lg:col-span-4">
            <SummaryCard
              title="미응답 알람"
              value={3}
              subtitle="30분 이상 대기 중"
              icon={AlertCircle}
            />
          </div>
          <div className="lg:col-span-4">
            <SummaryCard
              title="상담 성공률"
              value="68%"
              subtitle="이번 주 평균"
              icon={TrendingUp}
              trend={{ value: 8, isPositive: true }}
            />
          </div>

          {/* Middle Row - Chart */}
          <div className="lg:col-span-8">
            <InquiryChart />
          </div>

          {/* Right Column - Popular Models */}
          <div className="lg:col-span-4">
            <PopularModels />
          </div>

          {/* Bottom Row - Unanswered Alerts */}
          <div className="lg:col-span-12">
            <UnansweredAlerts />
          </div>

          {/* Sales Insights Row 1 - Subscription Type & Carrier Channel */}
          <div className="lg:col-span-6">
            <SubscriptionTypeChart />
          </div>
          <div className="lg:col-span-6">
            <CarrierChannelChart />
          </div>

          {/* Sales Insights Row 2 - AI Unanswered & Model Stock */}
          <div className="lg:col-span-6">
            <AIUnansweredList />
          </div>
          <div className="lg:col-span-6">
            <ModelStockStatus />
          </div>

          {/* Sales Insights Row 3 - Customer Persona */}
          <div className="lg:col-span-12">
            <CustomerPersonaAnalysis />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
