const Footer = () => {
  return (
    <footer className="bg-background/95 border-t border-white/10 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and Newsletter */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <img 
                src="https://xpander.ai/wp-content/themes/xpander/assets/src/images/header/logo-medium.svg"
                alt="Xpander AI"
                className="h-8 brightness-0 invert"
              />
            </div>
            <div className="space-y-6">
              <label className="text-base font-semibold text-white">Stay updated</label>
              <div className="flex gap-3">
                <input 
                  type="email" 
                  placeholder="Sign up for updates"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent backdrop-blur-sm"
                />
                <button className="px-6 py-3 bg-primary text-black rounded-xl text-sm font-semibold hover:bg-primary/90 transition-all duration-300 glow-button">
                  Submit
                </button>
              </div>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-6">
            <h3 className="font-semibold text-white text-lg">Product</h3>
            <ul className="space-y-3 text-foreground/70">
              <li><a href="https://app.xpander.ai/" className="hover:text-primary transition-colors text-base">Get Started</a></li>
              <li><a href="/pricing" className="hover:text-primary transition-colors text-base">Pricing</a></li>
              <li><a href="https://docs.xpander.ai/" className="hover:text-primary transition-colors text-base">Documentation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="font-semibold text-white text-lg">Company</h3>
            <ul className="space-y-3 text-foreground/70">
              <li><a href="/press" className="hover:text-primary transition-colors text-base">Press</a></li>
              <li><a href="/events" className="hover:text-primary transition-colors text-base">Events</a></li>
              <li><a href="/careers" className="hover:text-primary transition-colors text-base">Careers</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-6">
            <h3 className="font-semibold text-white text-lg">Social</h3>
            <ul className="space-y-3 text-foreground/70">
              <li><a href="https://www.linkedin.com/company/xpander-ai" className="hover:text-primary transition-colors text-base">LinkedIn</a></li>
              <li><a href="https://github.com/xpander-ai" className="hover:text-primary transition-colors text-base">Github</a></li>
              <li><a href="https://x.com/xpander_ai" className="hover:text-primary transition-colors text-base">X</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 mt-12 border-t border-white/10 text-foreground/60">
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-primary transition-colors">Terms & Conditions</a>
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