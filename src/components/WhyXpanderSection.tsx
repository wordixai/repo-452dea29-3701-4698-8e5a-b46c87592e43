import { Card, CardContent } from "@/components/ui/card";

const WhyXpanderSection = () => {
  return (
    <section className="py-24 bg-background noise-overlay">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Invisible agent infrastructure
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Version, Test & Deploy Agents without managing infrastructure
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building autonomous agents requires fast iterations.<br />
            You need the platform that increases your development speed.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="relative overflow-hidden bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700">
            <div className="absolute inset-0 noise-overlay" />
            <CardContent className="p-8 relative z-10 space-y-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">
                Build, Deploy, Test, and release a new Agent Version in under an hour
              </h3>
              <p className="text-muted-foreground">
                Use your preferred AI framework – we provide the missing MCP tools and run in your VPC with 
                pre-configured environments. Your development lifecycle is now 90% faster.
              </p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-700/50">
            <div className="absolute inset-0 noise-overlay" />
            <CardContent className="p-8 relative z-10 space-y-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-secondary">
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">
                Focus on your business logic while we do the infrastructure around it
              </h3>
              <p className="text-muted-foreground">
                Agents live where your users are – with natural authentication, organization-wide access control, 
                and deep integration into communication channels like Slack or Teams. We handle the complexity so you don't have to.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyXpanderSection;