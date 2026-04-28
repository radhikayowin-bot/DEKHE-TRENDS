import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";
import { 
  TrendingUp, Target, BarChart3, Users, Zap, Globe, Building2, ShoppingBag,
  Megaphone, Search, Mail, Video, Share2, Award, Clock, MapPin, Phone,
  ArrowRight, CheckCircle2, Star, Briefcase, LineChart, Lightbulb, Shield,
  Rocket, Heart, GraduationCap, Landmark, Utensils, Home
} from "lucide-react";

export default function Lucknow() {
  const services = [
    {
      icon: TrendingUp,
      title: "Market Trend Analysis",
      description: "Deep insights into Lucknow's evolving market. From Hazratganj's commercial hub to Gomti Nagar's modern businesses, we track trends that drive growth in the City of Nawabs.",
      features: ["Trend forecasting", "Consumer insights", "Market research", "Competitive intelligence"]
    },
    {
      icon: Target,
      title: "Brand Strategy & Development",
      description: "Build brands that resonate with Lucknow's rich cultural heritage and modern aspirations. Navigate UP's capital with strategies that command respect.",
      features: ["Brand positioning", "Identity design", "Brand messaging", "Cultural adaptation"]
    },
    {
      icon: BarChart3,
      title: "Data Analytics & Insights",
      description: "Transform Lucknow market data into actionable insights. Advanced analytics tailored for the city's diverse demographics and growing business landscape.",
      features: ["Custom dashboards", "Predictive analytics", "Customer segmentation", "ROI tracking"]
    },
    {
      icon: Search,
      title: "Local SEO Lucknow",
      description: "Dominate local search across Lucknow. From Hazratganj to Gomti Nagar, Alambagh to Indira Nagar - get found by customers searching in every locality.",
      features: ["Google My Business", "Local keyword optimization", "Citation building", "Review management"]
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Engage Lucknow's active social audience. Create campaigns that blend cultural richness with modern digital trends to drive business results.",
      features: ["Content strategy", "Community management", "Influencer partnerships", "Paid social campaigns"]
    },
    {
      icon: Megaphone,
      title: "Performance Marketing",
      description: "ROI-focused advertising campaigns across all platforms. Precision targeting for Lucknow's diverse market from traditional businesses to modern startups.",
      features: ["Google Ads", "Facebook advertising", "Instagram campaigns", "LinkedIn B2B"]
    },
    {
      icon: Video,
      title: "Video Production & Marketing",
      description: "Professional video content that captures Lucknow's essence. From corporate videos to cultural content, we produce videos that engage and convert.",
      features: ["Video production", "YouTube optimization", "Video advertising", "Social video content"]
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Build lasting customer relationships through strategic email campaigns. Segment Lucknow audiences and deliver personalized messages that drive action.",
      features: ["Campaign design", "Marketing automation", "List segmentation", "A/B testing"]
    },
    {
      icon: Users,
      title: "Influencer Marketing",
      description: "Connect with Lucknow's influential voices. From local influencers to content creators, we manage authentic partnerships that build trust.",
      features: ["Influencer identification", "Campaign management", "Content collaboration", "Performance tracking"]
    },
    {
      icon: ShoppingBag,
      title: "E-commerce Solutions",
      description: "Scale your online store in Lucknow's growing digital market. From strategy to execution, optimize every step of the customer journey.",
      features: ["Platform optimization", "Conversion optimization", "Cart recovery", "Marketplace strategy"]
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      description: "Modernize your Lucknow business with cutting-edge digital solutions. From traditional operations to digital-first strategies that drive growth.",
      features: ["Technology consulting", "Process automation", "Digital strategy", "Change management"]
    },
    {
      icon: Lightbulb,
      title: "Growth Strategy Consulting",
      description: "Scale your Lucknow business with proven growth frameworks. Whether you're in Gomti Nagar or Hazratganj, we fuel sustainable growth.",
      features: ["Market expansion", "Growth hacking", "Funnel optimization", "Retention strategies"]
    }
  ];

  const industries = [
    { name: "Government & Public Sector", icon: Landmark, desc: "Government marketing" },
    { name: "Education & E-learning", icon: GraduationCap, desc: "Educational institutions" },
    { name: "Real Estate", icon: Home, desc: "Property marketing" },
    { name: "Healthcare & Medical", icon: Heart, desc: "Medical services marketing" },
    { name: "Food & Hospitality", icon: Utensils, desc: "Restaurant and hotel marketing" },
    { name: "Retail & E-commerce", icon: ShoppingBag, desc: "Retail solutions" },
    { name: "IT & Services", icon: Globe, desc: "Tech company marketing" },
    { name: "Professional Services", icon: Briefcase, desc: "B2B services marketing" }
  ];

  const stats = [
    { number: "320+", label: "Lucknow Clients", icon: Users },
    { number: "₹38Cr+", label: "Revenue Generated", icon: TrendingUp },
    { number: "8+", label: "Years in Lucknow", icon: Award },
    { number: "93%", label: "Client Satisfaction", icon: Star }
  ];

  const locations = [
    "Hazratganj", "Gomti Nagar", "Alambagh", "Indira Nagar", "Aliganj",
    "Mahanagar", "Rajajipuram", "Chinhat", "Jankipuram", "Ashiyana",
    "Vikas Nagar", "Amar Shaheed Path", "Kanpur Road", "Faizabad Road", "Sitapur Road",
    "Lucknow Cantt", "Chowk", "Aminabad", "Nishatganj", "Telibagh"
  ];

  const testimonials = [
    {
      name: "Rajesh Verma",
      company: "Real Estate Developer, Gomti Nagar",
      text: "Dekhe Trends helped us generate 200+ qualified leads per month. Our property sales increased 250% in 8 months. Their understanding of Lucknow's real estate market is exceptional.",
      rating: 5
    },
    {
      name: "Priya Singh",
      company: "Educational Institute, Alambagh",
      text: "Our student enrollment increased 180% after working with Dekhe Trends. Their digital marketing strategies helped us reach parents across Lucknow. Best decision we made.",
      rating: 5
    },
    {
      name: "Amit Srivastava",
      company: "Restaurant Chain, Hazratganj",
      text: "We went from 2 outlets to 10 across Lucknow using their growth strategies. Their local SEO work brings us 200+ daily orders. ROI has been phenomenal.",
      rating: 5
    }
  ];

  return (
    <>
      <SEO 
        title="Digital Marketing Agency in Lucknow | Dekhe Trends Lucknow"
        description="Leading digital marketing agency in Lucknow offering SEO, social media, branding, and growth strategies. Serving Hazratganj, Gomti Nagar, Alambagh, and all Lucknow locations."
        canonical="https://dekhetrends.com/digital-marketing-agency-lucknow"
      />

      <div className="flex flex-col min-h-screen">
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />
          
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-primary/30 bg-primary/10"
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold">Lucknow's Premier Digital Marketing Agency</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight mb-6"
              >
                Transform Your <br />
                <span className="gradient-text">Lucknow Business</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed"
              >
                From Hazratganj to Gomti Nagar, Alambagh to Indira Nagar - we help Lucknow businesses grow with data-driven digital marketing strategies that honor tradition while embracing innovation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Link href="/audit">
                  <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent hover:shadow-lg">
                    Get Free Lucknow Market Audit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full">
                    <Phone className="mr-2 w-5 h-5" />
                    Schedule Consultation
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-3"
              >
                {locations.slice(0, 10).map((location) => (
                  <Badge key={location} variant="secondary" className="px-3 py-1">
                    {location}
                  </Badge>
                ))}
                <Badge variant="secondary" className="px-3 py-1">+10 More</Badge>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 border-y border-white/5 bg-white/[0.02]">
          <div className="container px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Why Lucknow Businesses Choose Dekhe Trends
              </h2>
              <p className="text-xl text-muted-foreground">
                We understand Lucknow's unique blend of cultural heritage and modern business. Our strategies honor your values while driving contemporary growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: MapPin, title: "Deep Local Expertise", desc: "We understand Lucknow's unique market dynamics from Hazratganj to Gomti Nagar. Our strategies are tailored to each area's specific characteristics." },
                { icon: Users, title: "Extensive Network", desc: "Access our vast network of Lucknow influencers, media contacts, and business partners across the city." },
                { icon: BarChart3, title: "Results-Driven", desc: "Every campaign backed by Lucknow market data. We track 320+ local metrics for measurable ROI." },
                { icon: Clock, title: "Fast Turnaround", desc: "Campaign launches in 48 hours, strategy revisions within 24 hours, real-time support." },
                { icon: Award, title: "Proven Success", desc: "Over 320 successful campaigns across Lucknow's diverse industries with consistent results." },
                { icon: Shield, title: "Transparent Pricing", desc: "Clear, upfront pricing with flexible packages. ROI-focused investment you can trust." }
              ].map((item, index) => (
                <Card key={index} className="border-primary/20 hover:border-primary/40 transition-all">
                  <CardHeader>
                    <item.icon className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-white/[0.02]">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Complete Digital Marketing Services in Lucknow
              </h2>
              <p className="text-xl text-muted-foreground">
                End-to-end digital marketing solutions tailored for Lucknow's market.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all group">
                    <CardHeader>
                      <service.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/services">
                <Button size="lg" className="h-12 px-8">
                  Explore All Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Industries We Serve in Lucknow
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center h-full border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all group cursor-pointer">
                    <CardHeader>
                      <industry.icon className="w-16 h-16 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform" />
                      <CardTitle className="text-lg">{industry.name}</CardTitle>
                      <CardDescription>{industry.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-white/[0.02]">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Serving All of Lucknow
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 p-4 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all"
                >
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{location}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Success Stories from Lucknow
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-primary/20">
                    <CardHeader>
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        "{testimonial.text}"
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-white/[0.02]">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Our Proven Process
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery & Analysis", icon: Search },
                { step: "02", title: "Strategy Development", icon: Lightbulb },
                { step: "03", title: "Implementation", icon: Rocket },
                { step: "04", title: "Optimize & Scale", icon: LineChart }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-primary/20 hover:border-primary/40 transition-all">
                    <CardHeader>
                      <div className="text-6xl font-bold text-primary/20 mb-4">{item.step}</div>
                      <item.icon className="w-12 h-12 text-primary mb-4" />
                      <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
          <div className="container relative z-10 px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                  Join 320+ successful Lucknow businesses. Get your free consultation today.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Link href="/audit">
                    <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent hover:shadow-xl">
                      Get Free Market Audit
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full">
                      <Phone className="mr-2 w-5 h-5" />
                      Talk to Our Team
                    </Button>
                  </Link>
                </div>

                <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span>Free Consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span>No Contracts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span>ROI Guarantee</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-white/[0.02]">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { q: "What are your pricing packages for Lucknow businesses?", a: "We offer flexible packages starting from ₹15,000/month for small businesses to comprehensive enterprise solutions. Contact us for a detailed quote." },
                { q: "How quickly can we see results?", a: "Timeline varies by service. Paid ads show results within days, SEO takes 3-6 months. Most Lucknow clients see meaningful results within 90 days." },
                { q: "Do you work with government and educational institutions?", a: "Yes! We have extensive experience with Lucknow's government and education sectors." },
                { q: "Can you create content in Hindi?", a: "Yes! We have Hindi content creators who can create authentic Hindi content for your campaigns." },
                { q: "Do you serve all areas of Lucknow?", a: "Yes! We serve the entire Lucknow region including all major localities." },
                { q: "What makes you different from other Lucknow agencies?", a: "Deep local market knowledge, data-driven approach, and proven track record with 320+ successful campaigns." }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.q}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

