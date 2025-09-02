import { Button } from "@/components/ui/button";
import { ArrowUpRight, Database, Workflow, Rocket } from "lucide-react";

const ForDevelopersSection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-background via-background/50 to-background relative noise-texture">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 space-y-8">
          <span className="text-secondary text-sm font-bold uppercase tracking-wider bg-secondary/10 px-4 py-2 rounded-full">
            Speedrun the agent development lifecycle
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">PAVED PATH TO PRODUCTION</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-4xl mx-auto font-light leading-relaxed">
            Start from a production-grade blueprint of your favorite agent framework. Add tools, memory, 
            MCPs, orchestrate complex multi-agent systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Code Example */}
          <div className="border-gradient animate-pulse-glow">
            <div className="border-gradient-inner p-1">
              <div className="rounded-2xl overflow-hidden font-mono text-sm">
                {/* Terminal Header */}
                <div className="flex items-center justify-between p-6 bg-gray-900/90 border-b border-gray-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-gray-400 font-medium">main.py</span>
                </div>

                {/* Code Content */}
                <div className="p-8 space-y-4 text-base bg-gradient-to-br from-gray-900/95 to-gray-800/95">
                  <div>
                    <span className="text-blue-400">from</span>{" "}
                    <span className="text-white">xpander_sdk</span>{" "}
                    <span className="text-blue-400">import</span>{" "}
                    <span className="text-teal-300">Task</span>,{" "}
                    <span className="text-teal-300">Backend</span>,{" "}
                    <span className="text-yellow-300">on_task</span>
                  </div>
                  <div>
                    <span className="text-blue-400">from</span>{" "}
                    <span className="text-white">agno.agent</span>{" "}
                    <span className="text-blue-400">import</span>{" "}
                    <span className="text-teal-300">Agent</span>
                  </div>
                  <div className="py-3" />
                  <div className="text-primary font-medium"># Stateful agent, zero infrastructure overhead</div>
                  <div>
                    <span className="text-yellow-300">@on_task</span>
                  </div>
                  <div>
                    <span className="text-blue-400">async def</span>{" "}
                    <span className="text-yellow-300">handle_task</span>
                    (<span className="text-cyan-300">task</span>: <span className="text-teal-300">Task</span>):
                  </div>
                  <div className="pl-6 space-y-3">
                    <div className="text-primary font-medium"># DB, MCP tools, system prompt</div>
                    <div>
                      <span className="text-white">backend</span>{" "}
                      <span className="text-orange-400">=</span>{" "}
                      <span className="text-teal-300">Backend</span>()
                    </div>
                    <div>
                      <span className="text-white">agent</span>{" "}
                      <span className="text-orange-400">=</span>{" "}
                      <span className="text-teal-300">Agent</span>(**
                      <span className="text-blue-400">await</span>{" "}
                      <span className="text-white">backend</span>.
                      <span className="text-yellow-300">aget_args</span>())
                    </div>
                    <div className="py-2" />
                    <div className="text-secondary font-medium"># Task includes user data + events from Slack, webhooks, agents</div>
                    <div>
                      <span className="text-white">result</span>{" "}
                      <span className="text-orange-400">=</span>{" "}
                      <span className="text-blue-400">await</span>{" "}
                      <span className="text-white">agent</span>.
                      <span className="text-yellow-300">arun</span>
                      (<span className="text-white">message</span>
                      <span className="text-orange-400">=</span>
                      <span className="text-white">task</span>.
                      <span className="text-yellow-300">to_message</span>())
                    </div>
                    <div>
                      <span className="text-white">task</span>.
                      <span className="text-cyan-300">result</span>{" "}
                      <span className="text-orange-400">=</span>{" "}
                      <span className="text-white">result</span>.
                      <span className="text-cyan-300">content</span>
                    </div>
                    <div>
                      <span className="text-blue-400">return</span>{" "}
                      <span className="text-white">task</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-12">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                <Database className="w-10 h-10 text-primary" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Unified event streaming</h3>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  One AI-Ready event from any source: Slack, Web UIs, Webhooks, or your own application (via SDK). 
                  <span className="text-primary font-medium"> Your agent gets prompts while the platform handles all the heavy-lifting.</span>
                </p>
                <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80 font-medium text-base group">
                  See docs <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-secondary/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Workflow className="w-10 h-10 text-secondary" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Agentic tools repo</h3>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  <span className="text-secondary font-medium">MCP Connectors: Access 2000+ tools</span> or create custom tools for any private API.
                </p>
                <Button variant="link" className="p-0 h-auto text-secondary hover:text-secondary/80 font-medium text-base group">
                  Tools & Connectors <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Rocket className="w-10 h-10 text-primary" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Ship to prod instantly</h3>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  <span className="text-primary font-medium">Run your agents with one command</span> – self-host or use xpander-hosting when you're ready.
                </p>
                <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80 font-medium text-base group">
                  xpander deploy <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForDevelopersSection;