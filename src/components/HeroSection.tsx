import { Button } from "@/components/ui/button";
import { Copy, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [copied, setCopied] = useState(false);

  const terminalLines = [
    {
      command: "$ xpander agent new",
      status: [
        "✓ select runtime : OpenAI , Agno, Antropic",
        "✓ Available templates: chat-support, code-reviewer, data-pipeline"
      ]
    },
    {
      command: "$ xpander init chat-support",
      status: [
        "✓ Initialized agent: chat-support",
        "✓ Agent Environment is ready with DB, MCP Tools and CI/CD",
        "✓ test your agent at https://app.xpander.ai/agent/chat-support"
      ]
    },
    {
      command: "$ xpander deploy",
      status: [
        "🚀 Deployed chat-support successfully"
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine(prev => (prev + 1) % terminalLines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("npm install -g xpander-cli");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16 noise-texture">
      {/* Hero Background with proper gradient */}
      <div className="hero-gradient absolute inset-0" />
      
      {/* Animated background dots */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-32 right-20 w-1 h-1 bg-secondary rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-2000" />
        <div className="absolute bottom-60 right-10 w-1 h-1 bg-secondary rounded-full animate-pulse delay-3000" />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-10">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-gradient">Real Agents</span>
              <br />
              <span className="text-white">in Production</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed font-light">
              Memory, Tools, MCP, storage, Slack integration – the ultimate agent toolbox.<br />
              <span className="text-primary font-medium">All wrapped in a production-ready backend for your agents.</span>
            </p>
          </div>

          {/* Install Command */}
          <div className="space-y-6">
            <div 
              className="glass-card rounded-xl p-5 flex items-center justify-between cursor-pointer group hover:border-primary/30 transition-all duration-300"
              onClick={copyToClipboard}
            >
              <code className="text-primary font-mono text-lg font-medium">npm install -g xpander-cli</code>
              <div className="flex items-center gap-3">
                {copied ? (
                  <CheckCircle className="h-5 w-5 text-primary" />
                ) : (
                  <Copy className="h-5 w-5 text-foreground/40 group-hover:text-primary transition-colors" />
                )}
              </div>
            </div>
            <p className="text-foreground/60">
              Need more information? {" "}
              <a href="https://docs.xpander.ai/" className="text-primary hover:text-primary/80 underline font-semibold transition-colors">
                Documentation →
              </a>
            </p>
          </div>
        </div>

        {/* Right Terminal */}
        <div className="relative">
          <div className="terminal-window max-w-2xl mx-auto animate-pulse-glow">
            {/* Terminal Header */}
            <div className="terminal-header">
              <div className="terminal-dots">
                <div className="terminal-dot" />
                <div className="terminal-dot" />
                <div className="terminal-dot" />
              </div>
              <span className="text-foreground/60 text-sm font-mono">xpander-cli</span>
            </div>

            {/* Terminal Content */}
            <div className="terminal-content space-y-8">
              {terminalLines.map((line, index) => (
                <div key={index} className="space-y-4">
                  <div className={`terminal-line text-lg transition-opacity duration-500 ${index <= currentLine ? 'opacity-100' : 'opacity-40'}`}>
                    {line.command}
                  </div>
                  {index <= currentLine && line.status.map((status, statusIndex) => (
                    <div key={statusIndex} className="terminal-success animate-fade-in-up pl-4">
                      <span className="text-base">{status}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {copied && (
        <div className="fixed bottom-8 right-8 glass-card px-6 py-3 rounded-lg text-primary font-medium animate-fade-in-up">
          ✓ Copied to clipboard!
        </div>
      )}
    </section>
  );
};

export default HeroSection;