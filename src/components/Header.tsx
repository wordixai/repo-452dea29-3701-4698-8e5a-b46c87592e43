import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      {/* Product Hunt Alert Bar */}
      <div className="bg-primary text-primary-foreground px-4 py-2 text-center text-sm">
        <a 
          href="https://www.producthunt.com/products/xpander-ai/launches/xpander-ai-full-stack-for-ai-engineers" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:underline inline-flex items-center gap-2"
        >
          Click here to support our Product Hunt launch
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img 
                src="https://xpander.ai/wp-content/themes/xpander/assets/src/images/hero/logo-large.svg" 
                alt="Xpander AI" 
                className="h-8"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="https://docs.xpander.ai/" className="text-foreground hover:text-primary transition-colors">
              Documentation
            </a>
            <a href="/pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="/blog" className="text-foreground hover:text-primary transition-colors">
              Blog
            </a>
            <a href="/careers" className="text-foreground hover:text-primary transition-colors">
              Careers
            </a>
            <a href="https://docs.xpander.ai/Examples/templates/01-index" className="text-foreground hover:text-primary transition-colors">
              Agent Templates
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <a href="https://e.xpander.ai/meetings/xpander/book-a-demo-website" target="_blank">
                Schedule a Demo
              </a>
            </Button>
            <Button asChild>
              <a href="https://app.xpander.ai/" target="_blank">
                Console Access
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="https://docs.xpander.ai/" className="text-foreground hover:text-primary transition-colors">
                Documentation
              </a>
              <a href="/pricing" className="text-foreground hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="/blog" className="text-foreground hover:text-primary transition-colors">
                Blog
              </a>
              <a href="/careers" className="text-foreground hover:text-primary transition-colors">
                Careers
              </a>
              <a href="https://docs.xpander.ai/Examples/templates/01-index" className="text-foreground hover:text-primary transition-colors">
                Agent Templates
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" asChild>
                  <a href="https://e.xpander.ai/meetings/xpander/book-a-demo-website" target="_blank">
                    Schedule a Demo
                  </a>
                </Button>
                <Button asChild>
                  <a href="https://app.xpander.ai/" target="_blank">
                    Console Access
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;