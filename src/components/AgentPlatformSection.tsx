import { Button } from "@/components/ui/button";

const AgentPlatformSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://xpander.ai/wp-content/themes/xpander/assets/imgs/agent-pattern.svg"
          alt="Background Pattern"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            BUILDING AUTONOMOUS AGENTS HAS NEVER BEEN EASIER
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            All-in-one platform for all your agent-development needs
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Agent memory, runtime environments, multi-agent orchestration, tool repository and monitoring – 
            all handled for you, so you don't have to build it.
          </p>
          
          <Button size="lg" className="glow-effect" asChild>
            <a href="https://app.xpander.ai/">Start Today</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AgentPlatformSection;