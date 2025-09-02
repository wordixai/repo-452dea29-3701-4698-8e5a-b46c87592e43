import { Button } from "@/components/ui/button";

const AgentPlatformSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Complex background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/10 to-primary/5" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-secondary/10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-primary/5 rounded-full blur-xl animate-pulse delay-2000 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          <span className="text-primary text-sm font-bold uppercase tracking-wider bg-primary/10 px-6 py-3 rounded-full inline-block">
            BUILDING AUTONOMOUS AGENTS HAS NEVER BEEN EASIER
          </span>
          
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="text-white">All-in-one platform for all your</span>
            <br />
            <span className="text-gradient">agent-development needs</span>
          </h2>
          
          <p className="text-xl text-foreground/70 font-light leading-relaxed max-w-4xl mx-auto">
            Agent memory, runtime environments, multi-agent orchestration, tool repository and monitoring – 
            <span className="text-primary font-medium"> all handled for you, so you don't have to build it.</span>
          </p>
          
          <div className="pt-8">
            <Button size="lg" className="glow-button text-lg px-12 py-6 rounded-full font-semibold" asChild>
              <a href="https://app.xpander.ai/">
                🚀 Start Today
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentPlatformSection;