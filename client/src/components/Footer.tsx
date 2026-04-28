import { Link } from "wouter";
import { TrendingUp, Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                Dekhe<span className="text-blue-400">Trends</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
              India's trusted digital marketing agency helping businesses grow with SEO, paid ads, social media, and content marketing.
            </p>
            <div className="space-y-3 text-sm">
              <a href="mailto:dekhetrends@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                dekhetrends@gmail.com
              </a>
              <a href="tel:+918077583921" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                +91 80775 83921
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Bareilly, Uttar Pradesh, India - 243001</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
                { href: "/audit", label: "Free Audit" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/services/seo-strategy", label: "SEO Services" },
                { href: "/services/paid-advertising", label: "Paid Advertising" },
                { href: "/services/social-media-strategy", label: "Social Media" },
                { href: "/services/content-marketing", label: "Content Marketing" },
                { href: "/services/brand-strategy", label: "Brand Strategy" },
                { href: "/services/email-marketing", label: "Email Marketing" },
                { href: "/services/video-marketing", label: "Video Marketing" },
                { href: "/services/influencer-marketing", label: "Influencer Marketing" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities + Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Top Cities</h4>
            <ul className="space-y-2 text-sm mb-6">
              {[
                { href: "/digital-marketing-agency-mumbai", label: "Mumbai" },
                { href: "/digital-marketing-agency-delhi", label: "Delhi" },
                { href: "/digital-marketing-agency-bangalore", label: "Bangalore" },
                { href: "/digital-marketing-agency-hyderabad", label: "Hyderabad" },
                { href: "/digital-marketing-agency-chennai", label: "Chennai" },
                { href: "/digital-marketing-agency-pune", label: "Pune" },
                { href: "/digital-marketing-agency-kolkata", label: "Kolkata" },
                { href: "/digital-marketing-agency-ahmedabad", label: "Ahmedabad" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/disclaimer", label: "Disclaimer" },
                { href: "/cookie-policy", label: "Cookie Policy" },
                { href: "/refund-policy", label: "Refund Policy" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© 2026 Dekhe Trends. All rights reserved. Made with ❤️ in India 🇮🇳</p>
          <div className="flex gap-4">
            {[
              { href: "https://twitter.com/dekhetrends", icon: Twitter, label: "Twitter" },
              { href: "https://linkedin.com/company/dekhetrends", icon: Linkedin, label: "LinkedIn" },
              { href: "https://instagram.com/dekhetrends", icon: Instagram, label: "Instagram" },
              { href: "https://www.youtube.com/@Dekhetrends", icon: Youtube, label: "YouTube" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
