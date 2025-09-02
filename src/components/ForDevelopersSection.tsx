import { Button } from "@/components/ui/button";

const ForDevelopersSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Speedrun the agent development lifecycle
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            PAVED PATH TO PRODUCTION
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start from a production-grade blueprint of your favorite agent framework. Add tools, memory, 
            MCPs, orchestrate complex multi-agent systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Code Example */}
          <div className="border-gradient">
            <div className="border-gradient-inner p-1">
              <div className="code-gradient rounded-lg overflow-hidden font-mono text-sm">
                {/* Terminal Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-white" />
                    <div className="w-3 h-3 rounded-full bg-gray-400" />
                    <div className="w-3 h-3 rounded-full bg-gray-600" />
                  </div>
                  <span className="text-gray-400">python</span>
                </div>

                {/* Code Content */}
                <div className="p-6 space-y-3 text-sm">
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
                  <div className="py-2" />
                  <div className="text-primary"># Stateful agent, zero infrastructure overhead</div>
                  <div>
                    <span className="text-yellow-300">@on_task</span>
                  </div>
                  <div>
                    <span className="text-blue-400">async def</span>{" "}
                    <span className="text-yellow-300">handle_task</span>
                    (<span className="text-cyan-300">task</span>: <span className="text-teal-300">Task</span>):
                  </div>
                  <div className="pl-4 space-y-2">
                    <div className="text-primary"># DB, MCP tools, system prompt</div>
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
                    <div className="py-1" />
                    <div className="text-primary"># Task includes user data + events from Slack, webhooks, agents</div>
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
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <path d="M21 16V8A2 2 0 0 0 19 6H5A2 2 0 0 0 3 8V16A2 2 0 0 0 5 18H19A2 2 0 0 0 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Unified event streaming</h3>
                  <p className="text-muted-foreground">
                    One AI-Ready event from any source: Slack, Web UIs, Webhooks, or your own application (via SDK). 
                    Your agent gets prompts while the platform handles all the heavy-lifting.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary" asChild>
                    <a href="https://docs.xpander.ai/Examples/06-async-task-handling">See docs</a>
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-secondary">
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Agentic tools repo</h3>
                  <p className="text-muted-foreground">
                    MCP Connectors: Access 2000+ tools or create custom tools for any private API.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary" asChild>
                    <a href="https://docs.xpander.ai/connectors">Tools & Connectors</a>
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Ship to prod instantly</h3>
                  <p className="text-muted-foreground">
                    Run your agents with one command – self-host or use xpander-hosting when you're ready.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary" asChild>
                    <a href="https://docs.xpander.ai/Examples/00-setup-deployment">xpander deploy</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForDevelopersSection;