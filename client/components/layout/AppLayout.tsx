import { Outlet, Link, useLocation } from "react-router-dom";
import { Plus, History, Clock, MessageCircle, HelpCircle, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function AppLayout() {
  const location = useLocation();

  const menuItems = [
    { label: "Interaction history", path: "/history", icon: History },
    { label: "Chat history", path: "/chat-history", icon: MessageCircle },
    { label: "Scheduled calls", path: "/scheduled", icon: Clock },
    { label: "Give user feedback", path: "/feedback", icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-30 w-full border-b bg-background/80 backdrop-blur">
        <div className="mx-auto w-full px-6 py-4">
          <div className="flex items-center justify-between gap-4 mb-4">
            <Button asChild size="sm" variant="outline">
              <Link to="/">
                <Plus className="h-4 w-4" /> New chat
              </Link>
            </Button>
            <h1 className="text-2xl font-bold text-center flex-1">Contact Service</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Repair Pavani</span>
              <button className="text-muted-foreground hover:text-foreground">
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Horizontal Navigation */}
          <nav className="flex items-center gap-6 overflow-x-auto">
            {/* Spacer to push items to right */}
            <div className="flex-1" />

            {/* Menu items on right */}
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors border-b-2 -mb-4 pb-4",
                    isActive
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 mx-auto w-full max-w-7xl px-6 py-6">
        <Outlet />
      </main>
    </div>
  );
}
