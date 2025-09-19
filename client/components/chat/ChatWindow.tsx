import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "agent" | "user";
  text: string;
  time?: string;
}

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "m1",
      role: "agent",
      text:
        "Hello, I am a virtual assistant. I can help you connect with a live agent or display some self-help options. Please let me know your query.",
      time: new Date().toLocaleString(),
    },
  ]);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages.length]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = input.trim();
    if (!value) return;
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), role: "user", text: value },
    ]);
    setInput("");
    // lightweight simulated agent reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "agent",
          text: "Thanks! A specialist will review and get back to you shortly.",
        },
      ]);
    }, 600);
  };

  return (
    <section className="rounded-lg border bg-card shadow-sm">
      <header className="flex items-center justify-between border-b px-4 py-3">
        <h1 className="text-lg font-semibold">New chat</h1>
      </header>
      <div ref={listRef} className="h-[58vh] sm:h-[60vh] overflow-y-auto px-4 py-4 space-y-4 bg-gradient-to-b from-background to-muted/30">
        {messages.map((m) => (
          <div key={m.id} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}> 
            <div className={cn("max-w-[85%] rounded-xl px-3 py-2 text-sm shadow-sm", m.role === "user" ? "bg-primary text-primary-foreground rounded-br-sm" : "bg-secondary text-secondary-foreground rounded-bl-sm")}> 
              <p>{m.text}</p>
              {m.time && (
                <p className="mt-1 text-[10px] opacity-70">{m.time}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={onSubmit} className="border-t p-3">
        <div className="relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your query here"
            className="min-h-[92px] w-full resize-none rounded-md border bg-background px-3 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-ring"
          />
          <div className="absolute bottom-3 right-3 flex items-center gap-2">
            <Button type="submit" className="shadow" aria-label="Submit">
              <Send className="h-4 w-4" /> Submit
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
}
