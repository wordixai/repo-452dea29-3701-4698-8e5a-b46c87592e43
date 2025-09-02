const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <img 
                src="https://xpander.ai/wp-content/themes/xpander/assets/src/images/header/logo-medium.svg"
                alt="Xpander AI"
                className="h-8"
              />
            </div>
            <div className="space-y-4">
              <label className="text-sm font-medium">Stay updated</label>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Sign up for updates"
                  className="flex-1 px-3 py-2 bg-muted border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                  Submit
                </button>
              </div>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-medium">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://app.xpander.ai/" className="hover:text-foreground transition-colors">Get Started</a></li>
              <li><a href="/pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="https://docs.xpander.ai/" className="hover:text-foreground transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-medium">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/press" className="hover:text-foreground transition-colors">Press</a></li>
              <li><a href="/events" className="hover:text-foreground transition-colors">Events</a></li>
              <li><a href="/careers" className="hover:text-foreground transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-medium">Social</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://www.linkedin.com/company/xpander-ai" className="hover:text-foreground transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com/xpander-ai" className="hover:text-foreground transition-colors">Github</a></li>
              <li><a href="https://x.com/xpander_ai" className="hover:text-foreground transition-colors">X</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-8 border-t border-border text-sm text-muted-foreground">
          <div className="flex gap-4 mb-4 md:mb-0">
            <a href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-foreground transition-colors">Terms & Conditions</a>
          </div>
          <div className="text-center md:text-right">
            <div>Copyright © xpander.ai 2025. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;