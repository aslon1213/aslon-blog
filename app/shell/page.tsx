"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Terminal } from "@/src/components/ui/shadcn-io/terminal";
import { useRouter } from "next/navigation";

type HistoryEntry = {
  id: string;
  text: string;
};

const PROMPT = "guest@aslon.me:~$";

export default function ShellPage() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([{
    id: crypto.randomUUID(),
    text: "Type 'help' to see available commands.",
  }]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const bottomRef = useRef<HTMLSpanElement | null>(null);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);

  const commands = useMemo(() => ({
    help: () => [
      "Available commands:",
      "  help            - show this help message",
      "  about           - info about me",
      "  time/date       - show current time",
      "  whoami          - current user",
      "  echo <text>     - echo text",
      "  clear / cls     - clear the screen",
      "  history         - show command history",
      "  open <path>     - navigate to a path (e.g., /blog)",
      "  blog            - open /blog",
    ],
    about: () => [
      "Hi my name is Aslon Khamidov. I am software engineer from Uzbekistan. For more type 'open about'",
    ],
    time: () => [new Date().toLocaleString()],
    whoami: () => ["guest"],
  }), []);

  function appendToHistory(lines: string[]) {
    setHistory(prev => [
      ...prev,
      ...lines.map(line => ({ id: crypto.randomUUID(), text: line })),
    ]);
  }

  function handleCommand(raw: string) {
    const cmd = raw.trim();
    if (!cmd) return;

    // Echo the entered command
    appendToHistory([`${PROMPT} ${cmd}`]);

    const [name, ...args] = cmd.split(/\s+/);

    // Special commands with side effects or args
    if (name === "clear" || name === "cls") {
      setHistory([]);
      return;
    }
    if (name === "echo") {
      appendToHistory([args.join(" ")]);
      return;
    }
    if (name === "open") {
      const path = args[0] ?? "/";
      appendToHistory([`Opening ${path} ...`]);
      try { router.push(path); } catch {}
      return;
    }
    if (name === "blog") {
      appendToHistory(["Opening /blog ..."]);
      try { router.push("/blog"); } catch {}
      return;
    }
    if (name === "history") {
      appendToHistory(commandHistory.map((c, i) => `${i + 1}  ${c}`));
      return;
    }
    if (name === "date") {
      appendToHistory(commands.time());
      return;
    }

    const handler = (commands as Record<string, () => string[]>)[name];
    if (handler) {
      appendToHistory(handler());
    } else {
      appendToHistory([`Command not found: ${name}. Type 'help'.`]);
    }
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setCommandHistory(prev => [...prev, input.trim()]);
    handleCommand(input);
    setInput("");
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: "end" });
  }, [history.length]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <section className="flex w-full items-start justify-start">
      <Terminal className="w-full max-w-3xl max-h-[640px]">
        <div className="grid gap-y-1">
          {history.map(line => (
            <span key={line.id} className="whitespace-pre-wrap">
              {line.text}
            </span>
          ))}
          <form onSubmit={onSubmit} className="flex items-center gap-2">
            <span className="text-muted-foreground">{PROMPT}</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full bg-transparent outline-none placeholder:text-muted-foreground/60"
              autoComplete="off"
              spellCheck={false}
            />
          </form>
          <span ref={bottomRef} />
        </div>
      </Terminal>
    </section>
  );
}


