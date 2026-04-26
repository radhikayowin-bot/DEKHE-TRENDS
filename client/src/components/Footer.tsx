import { Link } from "wouter";
import { Zap, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Zap className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold font-display">
                Dekhe<span className="text-primary">Trends</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              India's leading digital marketing agency. Helping businesses grow across 20+ major cities.
            </p>
            
            <div className="mt-6">
              <h4 className="font-bold text-white mb-3 text-sm">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Email</p>
                    <a href="mailto:dekhetrends@gmail.com" className="text-white hover:text-primary transition-colors font-medium">
                      dekhetrends@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Phone</p>
                    <a href="tel:+918077583921" className="text-white hover:text-primary transition-colors font-medium">
                      +91 80775 83921
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Address</p>
                    <p className="text-white font-medium">
                      Bareilly, Uttar Pradesh<br />
                      India - 243001
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/industries" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/audit" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">Our Team</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">Founder</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services/seo-strategy" className="hover:text-primary transition-colors">SEO Services</Link></li>
              <li><Link href="/services/social-media-strategy" className="hover:text-primary transition-colors">Social Media</Link></li>
              <li><Link href="/services/paid-advertising" className="hover:text-primary transition-colors">Paid Advertising</Link></li>
              <li><Link href="/services/content-marketing" className="hover:text-primary transition-colors">Content Marketing</Link></li>
              <li><Link href="/services/brand-strategy" className="hover:text-primary transition-colors">Brand Strategy</Link></li>
              <li><Link href="/services/email-marketing" className="hover:text-primary transition-colors">Email Marketing</Link></li>
              <li><Link href="/services/video-marketing" className="hover:text-primary transition-colors">Video Marketing</Link></li>
              <li><Link href="/services/influencer-marketing" className="hover:text-primary transition-colors">Influencer Marketing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Top Cities</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/mumbai" className="hover:text-primary transition-colors">Mumbai</Link></li>
              <li><Link href="/delhi" className="hover:text-primary transition-colors">Delhi</Link></li>
              <li><Link href="/bangalore" className="hover:text-primary transition-colors">Bangalore</Link></li>
              <li><Link href="/hyderabad" className="hover:text-primary transition-colors">Hyderabad</Link></li>
              <li><Link href="/chennai" className="hover:text-primary transition-colors">Chennai</Link></li>
              <li><Link href="/pune" className="hover:text-primary transition-colors">Pune</Link></li>
              <li><Link href="/kolkata" className="hover:text-primary transition-colors">Kolkata</Link></li>
              <li><Link href="/ahmedabad" className="hover:text-primary transition-colors">Ahmedabad</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
              <li><Link href="/refund-policy" className="hover:text-primary transition-colors">Refund Policy</Link></li>
              <li><Link href="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link></li>
            </ul>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3">
              <a href="https://twitter.com/dekhetrends" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/dekhetrends" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/dekhetrends" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@Dekhetrends" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-center items-center text-xs text-muted-foreground">
          <p>© 2025 Dekhe Trends. All rights reserved. Made with ❤️ in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
