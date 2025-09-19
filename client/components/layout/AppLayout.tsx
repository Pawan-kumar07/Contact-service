import { Outlet, Link, useLocation } from "react-router-dom";
import { Menu, Plus, MessageSquare, History, Clock, MessageCircle, LogOut } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function AppLayout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[radial-gradient(1000px_600px_at_10%_-20%,hsl(var(--accent)/0.6),transparent),radial-gradient(800px_400px_at_90%_20%,hsl(var(--accent)/0.5),transparent)]">
      <header className="sticky top-0 z-30 w-full border-b bg-background/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button aria-label="Toggle menu" className="md:hidden -ml-1 p-2 rounded-md hover:bg-accent" onClick={() => setOpen((s) => !s)}>
              <Menu className="h-5 w-5" />
            </button>
            <Link to="/" className="inline-flex items-center gap-2 font-semibold tracking-tight text-xl">
              <span className="inline-block rounded-md bg-primary/10 px-2 py-1 text-primary">CS</span>
              <span>Contact Service</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link to="/">
                <Plus className="h-4 w-4" /> New chat
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-[260px_1fr] gap-6 px-4 py-6">
        <aside className={cn("border bg-card rounded-lg md:sticky md:top-20 h-fit", open ? "block" : "hidden md:block")}> 
          <nav className="p-3">
            <p className="px-2 pb-2 text-xs font-medium text-muted-foreground uppercase">Dashboard</p>
            <ul className="space-y-1">
              <li>
                <button className={cn("w-full flex items-center gap-2 rounded-md px-2 py-2 text-left hover:bg-accent", location.pathname === "/" && "bg-accent")}> 
                  <MessageSquare className="h-4 w-4" />
                  <span>New chat</span>
                </button>
              </li>
              <li>
                <Link to="/history" className={cn("flex items-center gap-2 rounded-md px-2 py-2 hover:bg-accent", location.pathname === "/history" && "bg-accent")}> 
                  <History className="h-4 w-4" />
                  <span>Interaction history</span>
                </Link>
              </li>
              <li>
                <button className="w-full flex items-center gap-2 rounded-md px-2 py-2 text-left hover:bg-accent" disabled>
                  <Clock className="h-4 w-4" />
                  <span>Scheduled calls</span>
                </button>
              </li>
              <li>
                <button className="w-full flex items-center gap-2 rounded-md px-2 py-2 text-left hover:bg-accent" disabled>
                  <MessageCircle className="h-4 w-4" />
                  <span>Chat history</span>
                </button>
              </li>
            </ul>
            <div className="mt-6 border-t pt-3">
              <button className="w-full flex items-center gap-2 rounded-md px-2 py-2 text-left hover:bg-accent">
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </nav>
        </aside>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
