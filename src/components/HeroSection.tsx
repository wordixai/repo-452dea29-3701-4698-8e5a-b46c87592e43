import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [copied, setCopied] = useState(false);

  const terminalLines = [
    {
      command: "$ xpander agent new",
      status: [
        "select runtime : OpenAI , Agno, Antropic",
        "Available templates: chat-support, code-reviewer, data-pipeline"
      ]
    },
    {
      command: "$ xpander init chat-support",
      status: [
        "Initialized agent: chat-support",
        "Agent Environment is ready with DB, MCP Tools and CI/CD",
        "test your agent at https://app.xpander.ai/agent/chat-support"
      ]
    },
    {
      command: "$ xpander deploy",
      status: [
        "🚀 Deployed chat-support"
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine(prev => (prev + 1) % terminalLines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("npm install -g xpander-cli");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient pt-32 pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://xpander.ai/wp-content/themes/xpander/assets/src/images/hero/hero_dots.png"
          alt="Background Pattern"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Real Agents in Production
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Memory, Tools, MCP, storage, Slack integration – the ultimate agent toolbox.<br />
              All wrapped in a production-ready backend for your agents.
            </p>
          </div>

          {/* Install Command */}
          <div className="space-y-4">
            <div 
              className="bg-gray-900 rounded-lg p-4 flex items-center justify-between cursor-pointer group hover:bg-gray-800 transition-colors"
              onClick={copyToClipboard}
            >
              <code className="text-primary font-mono">npm install -g xpander-cli</code>
              <div className="flex items-center gap-2">
                <Copy className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-muted-foreground">
                  <path d="M10.6667 8.60016V11.4002C10.6667 13.7335 9.73334 14.6668 7.40001 14.6668H4.60001C2.26668 14.6668 1.33334 13.7335 1.33334 11.4002V8.60016C1.33334 6.26683 2.26668 5.3335 4.60001 5.3335H7.40001C9.73334 5.3335 10.6667 6.26683 10.6667 8.60016Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14.6667 4.60016V7.40016C14.6667 9.7335 13.7333 10.6668 11.4 10.6668H10.6667V8.60016C10.6667 6.26683 9.73334 5.3335 7.40001 5.3335H5.33334V4.60016C5.33334 2.26683 6.26668 1.3335 8.60001 1.3335H11.4C13.7333 1.3335 14.6667 2.26683 14.6667 4.60016Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Need more information? <a href="https://docs.xpander.ai/" className="text-primary underline font-bold">Documentation</a>
            </p>
          </div>
        </div>

        {/* Right Terminal */}
        <div className="relative">
          {/* Gradient Overlays for Terminal */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 z-10 pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background/50 to-transparent z-10 pointer-events-none" />
          
          <div className="terminal-window max-w-2xl mx-auto">
            {/* Terminal Header */}
            <div className="terminal-header">
              <div className="terminal-dots">
                <div className="terminal-dot bg-white" />
                <div className="terminal-dot bg-gray-400" />
                <div className="terminal-dot bg-gray-600" />
              </div>
            </div>

            {/* Terminal Content */}
            <div className="terminal-content space-y-6">
              {terminalLines.map((line, index) => (
                <div key={index} className="space-y-3">
                  <div className={`terminal-line ${index <= currentLine ? 'opacity-100' : 'opacity-30'}`}>
                    {line.command}
                  </div>
                  {index <= currentLine && line.status.map((status, statusIndex) => (
                    <div key={statusIndex} className="terminal-success animate-fade-in-up">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M9.80948 3.10986L4.63349 8.28586L2.28076 5.93313" stroke="currentColor" strokeWidth="1.05873" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-sm">{status}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image Background */}
          <div className="absolute inset-0 -z-10">
            <picture>
              <source 
                srcSet="https://xpander.ai/wp-content/themes/xpander/assets/src/images/hero/hero-desktop.png 1x, https://xpander.ai/wp-content/themes/xpander/assets/src/images/hero/hero-desktop@2x.png 2x" 
                media="(min-width: 1200px)" 
              />
              <source 
                srcSet="https://xpander.ai/wp-content/themes/xpander/assets/src/images/hero/hero-tablet.png 1x, https://xpander.ai/wp-content/themes/xpander/assets/src/images/hero/hero-tablet@2x.png 2x" 
                media="(min-width: 768px)" 
              />
              <img 
                src="https://xpander.ai/wp-content/themes/xpander/assets/src/images/hero/hero-mobile.png" 
                alt="Hero Background" 
                className="w-full h-full object-cover opacity-40"
              />
            </picture>
          </div>
        </div>
      </div>

      {copied && (
        <div className="fixed bottom-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg">
          Copied to clipboard!
        </div>
      )}
    </section>
  );
};

export default HeroSection;