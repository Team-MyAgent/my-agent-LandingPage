import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Home, Users, Settings, LogOut, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { title: "홈", url: "/admin/dashboard", icon: Home },
  { title: "리드 관리", url: "/admin/leads", icon: Users },
  { title: "설정", url: "/admin/settings", icon: Settings },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile overlay */}
      {!collapsed && (
        <div 
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setCollapsed(true)}
        />
      )}
      
      {/* Mobile toggle button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-xl bg-card border border-border shadow-bento"
      >
        {collapsed ? <Menu className="h-5 w-5" /> : <X className="h-5 w-5" />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out",
          collapsed ? "-translate-x-full lg:translate-x-0 lg:w-20" : "w-72 translate-x-0"
        )}
      >
        <div className="flex flex-col h-full p-4">
          {/* Logo */}
          <div className={cn(
            "flex items-center gap-3 px-3 py-4 mb-6",
            collapsed && "lg:justify-center"
          )}>
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            {!collapsed && (
              <div className="animate-fade-in">
                <h1 className="font-semibold text-foreground">Agent Admin</h1>
                <p className="text-xs text-muted-foreground">Phone Retail MVP</p>
              </div>
            )}
          </div>

          {/* Collapse button - Desktop only */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:flex items-center justify-center mb-6 p-2 rounded-xl hover:bg-accent transition-colors"
          >
            <Menu className="h-5 w-5 text-muted-foreground" />
          </button>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.url || 
                (item.url === "/admin/leads" && location.pathname.startsWith("/admin/leads"));
              
              return (
                <NavLink
                  key={item.title}
                  to={item.url}
                  className={cn(
                    "flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-bento"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                    collapsed && "lg:justify-center lg:px-3"
                  )}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!collapsed && (
                    <span className="animate-fade-in font-medium">{item.title}</span>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Logout */}
          <NavLink
            to="/"
            className={cn(
              "flex items-center gap-3 px-3 py-3 rounded-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all duration-200",
              collapsed && "lg:justify-center lg:px-3"
            )}
          >
            <LogOut className="h-5 w-5 flex-shrink-0" />
            {!collapsed && <span className="font-medium">로그아웃</span>}
          </NavLink>
        </div>
      </aside>

      {/* Spacer for content */}
      <div className={cn(
        "hidden lg:block transition-all duration-300",
        collapsed ? "w-20" : "w-72"
      )} />
    </>
  );
}
