import { motion } from "framer-motion";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { Home, Building2, Briefcase, FileText, Info, Phone, Shield, MapPin, TrendingUp, Target, BarChart3, Users, Zap, Globe, ShoppingBag, Megaphone, Search, Mail, Video, Share2, Award, Lightbulb, Rocket } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Sitemap() {
  const mainPages = [
    { icon: Home, title: "Home", path: "/", description: "Main homepage" },
    { icon: Info, title: "About Us", path: "/about", description: "Learn about Dekhe Trends" },
    { icon: Briefcase, title: "Services", path: "/services", description: "Our digital marketing services" },
    { icon: Building2, title: "Industries", path: "/industries", description: "Industries we serve" },
    { icon: FileText, title: "Blog", path: "/blog", description: "Blog and articles" },
    { icon: Award, title: "Free Audit", path: "/audit", description: "Get your free marketing audit" },
    { icon: Phone, title: "Contact", path: "/contact", description: "Get in touch with us" },
  ];

  const servicePages = [
    { icon: TrendingUp, title: "Trend Reporting", path: "/services/trend-reporting" },
    { icon: Target, title: "Competitor Intelligence", path: "/services/competitor-intelligence" },
    { icon: Lightbulb, title: "Product Validation", path: "/services/product-validation" },
    { icon: Rocket, title: "Growth Strategy", path: "/services/growth-strategy" },
    { icon: Award, title: "Brand Strategy", path: "/services/brand-strategy" },
    { icon: FileText, title: "Content Marketing", path: "/services/content-marketing" },
    { icon: Share2, title: "Social Media Strategy", path: "/services/social-media-strategy" },
    { icon: Search, title: "SEO Strategy", path: "/services/seo-strategy" },
    { icon: Mail, title: "Email Marketing", path: "/services/email-marketing" },
    { icon: Users, title: "Influencer Marketing", path: "/services/influencer-marketing" },
    { icon: Megaphone, title: "Paid Advertising", path: "/services/paid-advertising" },
    { icon: Zap, title: "Conversion Optimization", path: "/services/conversion-optimization" },
    { icon: Users, title: "Customer Retention", path: "/services/customer-retention" },
    { icon: BarChart3, title: "Market Research", path: "/services/market-research" },
    { icon: Globe, title: "Digital Transformation", path: "/services/digital-transformation" },
    { icon: ShoppingBag, title: "E-commerce Strategy", path: "/services/ecommerce-strategy" },
    { icon: Users, title: "Community Building", path: "/services/community-building" },
    { icon: Video, title: "Video Marketing", path: "/services/video-marketing" },
    { icon: BarChart3, title: "Data Analytics", path: "/services/data-analytics" },
    { icon: Shield, title: "Crisis Management", path: "/services/crisis-management" },
  ];

  const cityPages = [
    { name: "Mumbai", path: "/mumbai", state: "Maharashtra" },
    { name: "Delhi", path: "/delhi", state: "Delhi NCR" },
    { name: "Bangalore", path: "/bangalore", state: "Karnataka" },
    { name: "Hyderabad", path: "/hyderabad", state: "Telangana" },
    { name: "Chennai", path: "/chennai", state: "Tamil Nadu" },
    { name: "Kolkata", path: "/kolkata", state: "West Bengal" },
    { name: "Pune", path: "/pune", state: "Maharashtra" },
    { name: "Ahmedabad", path: "/ahmedabad", state: "Gujarat" },
    { name: "Jaipur", path: "/jaipur", state: "Rajasthan" },
    { name: "Surat", path: "/surat", state: "Gujarat" },
    { name: "Lucknow", path: "/lucknow", state: "Uttar Pradesh" },
    { name: "Kanpur", path: "/kanpur", state: "Uttar Pradesh" },
    { name: "Nagpur", path: "/nagpur", state: "Maharashtra" },
    { name: "Indore", path: "/indore", state: "Madhya Pradesh" },
    { name: "Thane", path: "/thane", state: "Maharashtra" },
    { name: "Bhopal", path: "/bhopal", state: "Madhya Pradesh" },
    { name: "Visakhapatnam", path: "/visakhapatnam", state: "Andhra Pradesh" },
    { name: "Patna", path: "/patna", state: "Bihar" },
    { name: "Vadodara", path: "/vadodara", state: "Gujarat" },
    { name: "Ludhiana", path: "/ludhiana", state: "Punjab" },
  ];

  const legalPages = [
    { icon: Shield, title: "Privacy Policy", path: "/privacy-policy", description: "How we protect your data" },
    { icon: FileText, title: "Terms of Service", path: "/terms-of-service", description: "Terms and conditions" },
  ];

  return (
    <>
      <SEO 
        title="Sitemap - All Pages | Dekhe Trends"
        description="Complete sitemap of Dekhe Trends website. Find all pages including services, city pages, and resources."
        canonical="https://dekhetrends.com/sitemap"
      />
      
      <div className="min-h-screen pt-24 pb-12 bg-background">
        <div className="container px-4 md:px-6">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary font-medium text-sm"
            >
              Website Sitemap
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold font-display mb-6"
            >
              Explore Our <span className="gradient-text">Website</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Complete directory of all pages, services, and city locations we serve.
            </motion.p>
          </div>

          {/* Main Pages */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold font-display mb-8 flex items-center gap-3">
              <Home className="w-8 h-8 text-primary" />
              Main Pages
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainPages.map((page, index) => (
                <motion.div
                  key={page.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={page.path}>
                    <Card className="h-full border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all cursor-pointer group">
                      <CardHeader>
                        <page.icon className="w-10 h-10 text-primary mb-3 group-hover:scale-110 transition-transform" />
                        <CardTitle className="text-lg">{page.title}</CardTitle>
                        <CardDescription>{page.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Service Pages */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold font-display mb-8 flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-primary" />
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {servicePages.map((service, index) => (
                <motion.div
                  key={service.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.02 }}
                >
                  <Link href={service.path}>
                    <div className="p-4 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all cursor-pointer group flex items-center gap-3">
                      <service.icon className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">{service.title}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          {/* City Pages */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold font-display mb-8 flex items-center gap-3">
              <MapPin className="w-8 h-8 text-primary" />
              Cities We Serve
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {cityPages.map((city, index) => (
                <motion.div
                  key={city.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.02 }}
                >
                  <Link href={city.path}>
                    <div className="p-4 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all cursor-pointer group">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-bold text-white mb-1 group-hover:text-primary transition-colors">{city.name}</h3>
                          <p className="text-xs text-muted-foreground">{city.state}</p>
                        </div>
                        <MapPin className="w-4 h-4 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Legal Pages */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold font-display mb-8 flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary" />
              Legal & Policies
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {legalPages.map((page, index) => (
                <motion.div
                  key={page.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={page.path}>
                    <Card className="h-full border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all cursor-pointer group">
                      <CardHeader>
                        <page.icon className="w-10 h-10 text-primary mb-3 group-hover:scale-110 transition-transform" />
                        <CardTitle className="text-lg">{page.title}</CardTitle>
                        <CardDescription>{page.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Summary Stats */}
          <section className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 border border-primary/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">{mainPages.length}</div>
                <div className="text-sm text-muted-foreground">Main Pages</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">{servicePages.length}</div>
                <div className="text-sm text-muted-foreground">Services</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">{cityPages.length}</div>
                <div className="text-sm text-muted-foreground">Cities</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">{mainPages.length + servicePages.length + cityPages.length + legalPages.length}</div>
                <div className="text-sm text-muted-foreground">Total Pages</div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}

