import { Card, CardContent } from "@/components/ui/card";
import { Zap, Layers } from "lucide-react";

const WhyXpanderSection = () => {
  return (
    <section className="py-32 bg-background relative noise-texture">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 space-y-8">
          <span className="text-primary text-sm font-bold uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
            Invisible agent infrastructure
          </span>
          <h2 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
            Version, Test & Deploy Agents{" "}
            <span className="text-gradient">without managing infrastructure</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-4xl mx-auto font-light leading-relaxed">
            Building autonomous agents requires fast iterations.<br />
            <span className="text-primary font-medium">You need the platform that increases your development speed.</span>
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <Card className="card-gradient border-0 hover:scale-[1.02] transition-all duration-500 group">
            <CardContent className="p-10 space-y-8">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Build, Deploy, Test, and release a new Agent Version{" "}
                <span className="text-primary">in under an hour</span>
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Use your preferred AI framework – we provide the missing MCP tools and run in your VPC with 
                pre-configured environments. <span className="text-primary font-medium">Your development lifecycle is now 90% faster.</span>
              </p>
            </CardContent>
          </Card>

          <Card className="card-gradient border-0 hover:scale-[1.02] transition-all duration-500 group">
            <CardContent className="p-10 space-y-8">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-2xl flex items-center justify-center group-hover:from-secondary/40 group-hover:to-primary/40 transition-all duration-300">
                <Layers className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Focus on your business logic while{" "}
                <span className="text-secondary">we do the infrastructure</span> around it
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Agents live where your users are – with natural authentication, organization-wide access control, 
                and deep integration into communication channels like Slack or Teams. <span className="text-secondary font-medium">We handle the complexity so you don't have to.</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyXpanderSection;