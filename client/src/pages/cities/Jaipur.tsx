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
  Rocket, Heart, Gem, Palette, Camera, Landmark
} from "lucide-react";

export default function Jaipur() {
  const services = [
    {
      icon: TrendingUp,
      title: "Market Trend Intelligence",
      description: "Deep insights into Jaipur's vibrant market. From MI Road's commercial hub to Malviya Nagar's modern businesses, we track trends that drive growth in the Pink City.",
      features: ["Trend forecasting", "Consumer insights", "Market research", "Competitive intelligence"]
    },
    {
      icon: Target,
      title: "Brand Strategy & Development",
      description: "Build brands that resonate with Jaipur's rich heritage and modern aspirations. Navigate Rajasthan's capital with strategies that command respect and loyalty.",
      features: ["Brand positioning", "Identity design", "Brand messaging", "Cultural adaptation"]
    },
    {
      icon: BarChart3,
      title: "Data Analytics & Insights",
      description: "Transform Jaipur market data into actionable insights. Advanced analytics tailored for the city's tourism-driven and traditional business landscape.",
      features: ["Custom dashboards", "Predictive analytics", "Customer segmentation", "ROI tracking"]
    },
    {
      icon: Search,
      title: "Local SEO Jaipur",
      description: "Dominate local search across Jaipur. From C-Scheme to Vaishali Nagar, Mansarovar to Jagatpura - get found by customers searching in every locality.",
      features: ["Google My Business", "Local keyword optimization", "Citation building", "Review management"]
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Engage Jaipur's active social audience. Create campaigns that blend the city's cultural richness with modern digital trends to drive business results.",
      features: ["Content strategy", "Community management", "Influencer partnerships", "Paid social campaigns"]
    },
    {
      icon: Megaphone,
      title: "Performance Marketing",
      description: "ROI-focused advertising campaigns across all platforms. Precision targeting for Jaipur's diverse market from traditional artisans to modern startups.",
      features: ["Google Ads", "Facebook advertising", "Instagram campaigns", "LinkedIn B2B"]
    },
    {
      icon: Video,
      title: "Video Production & Marketing",
      description: "Professional video content that captures Jaipur's royal heritage and modern energy. From corporate videos to tourism content, we produce videos that convert.",
      features: ["Video production", "YouTube optimization", "Video advertising", "Social video content"]
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Build lasting customer relationships through strategic email campaigns. Segment Jaipur audiences and deliver personalized messages that drive action.",
      features: ["Campaign design", "Marketing automation", "List segmentation", "A/B testing"]
    },
    {
      icon: Users,
      title: "Influencer Marketing",
      description: "Connect with Jaipur's influential voices. From travel bloggers to local influencers, we manage authentic partnerships that build trust and drive conversions.",
      features: ["Influencer identification", "Campaign management", "Content collaboration", "Performance tracking"]
    },
    {
      icon: ShoppingBag,
      title: "E-commerce Solutions",
      description: "Scale your online store in Jaipur's growing digital market. From handicrafts to modern retail, optimize every step of the customer journey.",
      features: ["Platform optimization", "Conversion optimization", "Cart recovery", "Marketplace strategy"]
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      description: "Modernize your Jaipur business with cutting-edge digital solutions. From traditional crafts to digital-first strategies that drive global reach.",
      features: ["Technology consulting", "Process automation", "Digital strategy", "Change management"]
    },
    {
      icon: Lightbulb,
      title: "Growth Strategy Consulting",
      description: "Scale your Jaipur business with proven growth frameworks. Whether you're in Sitapura or C-Scheme, we fuel sustainable growth.",
      features: ["Market expansion", "Growth hacking", "Funnel optimization", "Retention strategies"]
    }
  ];

  const industries = [
    { name: "Tourism & Hospitality", icon: Camera, desc: "Tourism industry expertise" },
    { name: "Gems & Jewelry", icon: Gem, desc: "Jewelry marketing" },
    { name: "Handicrafts & Textiles", icon: Palette, desc: "Artisan marketing" },
    { name: "Real Estate", icon: Building2, desc: "Property marketing" },
    { name: "Healthcare & Medical", icon: Heart, desc: "Medical services marketing" },
    { name: "Education & Coaching", icon: Landmark, desc: "Educational institutions" },
    { name: "Retail & E-commerce", icon: ShoppingBag, desc: "Retail solutions" },
    { name: "Professional Services", icon: Briefcase, desc: "B2B services marketing" }
  ];

  const stats = [
    { number: "420+", label: "Jaipur Clients", icon: Users },
    { number: "₹50Cr+", label: "Revenue Generated", icon: TrendingUp },
    { number: "10+", label: "Years in Jaipur", icon: Award },
    { number: "95%", label: "Client Satisfaction", icon: Star }
  ];

  const locations = [
    "C-Scheme", "MI Road", "Malviya Nagar", "Vaishali Nagar", "Mansarovar",
    "Jagatpura", "Sitapura", "Tonk Road", "Ajmer Road", "JLN Marg",
    "Bani Park", "Raja Park", "Bapu Nagar", "Sodala", "Pratap Nagar",
    "Nirman Nagar", "Vidyadhar Nagar", "Sanganer", "Jhotwara", "Amer"
  ];

  const testimonials = [
    {
      name: "Vikram Singh",
      company: "Hotel Chain, C-Scheme",
      text: "Dekhe Trends transformed our online presence. Our direct bookings increased 300% in 6 months. Their understanding of Jaipur's tourism industry and digital marketing is exceptional.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      company: "Jewelry Boutique, MI Road",
      text: "Our Instagram following grew from 8K to 200K in 8 months. Their content strategy and influencer partnerships brought us customers from across India. Best investment we made.",
      rating: 5
    },
    {
      name: "Rajesh Rathore",
      company: "Real Estate Developer, Vaishali Nagar",
      text: "We went from 20 leads per month to 250+ qualified leads. Their local SEO and paid advertising campaigns were game-changing for our business. Highly recommend!",
      rating: 5
    }
  ];

  return (
    <>
      <SEO 
        title="Digital Marketing Agency in Jaipur | Dekhe Trends Jaipur"
        description="Leading digital marketing agency in Jaipur offering SEO, social media, branding, and growth strategies. Serving C-Scheme, Malviya Nagar, Vaishali Nagar, and all Jaipur locations."
        canonical="https://dekhetrends.com/digital-marketing-agency-jaipur"
      />

      <div className="flex flex-col min-h-screen">
        {/* HERO SECTION */}
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
                <span className="text-primary font-semibold">Jaipur's Premier Digital Marketing Agency</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight mb-6"
              >
                Elevate Your <br />
                <span className="gradient-text">Jaipur Business</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed"
              >
                From C-Scheme to Vaishali Nagar, MI Road to Mansarovar - we help Jaipur businesses grow with data-driven digital marketing strategies that honor tradition while embracing innovation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Link href="/audit">
                  <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent hover:shadow-lg">
                    Get Free Jaipur Market Audit
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

        {/* STATS */}
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

        {/* WHY CHOOSE US */}
        <section className="py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Why Jaipur Businesses Choose Dekhe Trends
              </h2>
              <p className="text-xl text-muted-foreground">
                We understand Jaipur's unique blend of royal heritage and modern business. Our strategies honor your cultural richness while driving contemporary growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <MapPin className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Deep Local Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We understand Jaipur's unique market dynamics - from the tourism-driven economy to traditional handicrafts and modern businesses. Our strategies are tailored to each sector's characteristics.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <Users className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Extensive Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Access our vast network of Jaipur influencers, travel bloggers, media contacts, and business associations. From tourism boards to trade organizations, we open doors that accelerate growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <BarChart3 className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Results-Driven Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every campaign is backed by Jaipur market data and analytics. We track 420+ local metrics, analyze competitor movements, and use AI-powered insights to ensure measurable ROI.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <Clock className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Fast Turnaround</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Jaipur's dynamic market demands quick action. Get campaign launches in 48 hours, strategy revisions within 24 hours, and real-time support during peak tourism seasons.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <Award className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Proven Track Record</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Over 420 successful campaigns across Jaipur's diverse industries. From helping traditional artisans go digital to scaling modern hospitality businesses, we deliver consistent results.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <Shield className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Transparent Partnership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No hidden costs, no surprises. Clear, upfront pricing with flexible packages designed for Jaipur businesses of all sizes. ROI-focused investment you can trust.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-24 md:py-32 bg-white/[0.02]">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Complete Digital Marketing Services in Jaipur
              </h2>
              <p className="text-xl text-muted-foreground">
                End-to-end digital marketing solutions tailored for Jaipur's unique market. Every service customized to your business goals and cultural context.
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

        {/* INDUSTRIES */}
        <section className="py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Industries We Serve in Jaipur
              </h2>
              <p className="text-xl text-muted-foreground">
                Specialized expertise across Jaipur's key industries. We understand your sector's unique challenges and opportunities in the Pink City.
              </p>
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

        {/* LOCATIONS */}
        <section className="py-24 md:py-32 bg-white/[0.02]">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Serving All of Jaipur
              </h2>
              <p className="text-xl text-muted-foreground">
                From C-Scheme to Vaishali Nagar, MI Road to Mansarovar - we're your local digital marketing partner across Jaipur.
              </p>
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

        {/* TESTIMONIALS */}
        <section className="py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Success Stories from Jaipur
              </h2>
              <p className="text-xl text-muted-foreground">
                Real results from real Jaipur businesses. See how we've helped companies achieve remarkable growth.
              </p>
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

        {/* PROCESS */}
        <section className="py-24 md:py-32 bg-white/[0.02]">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Our Proven Process
              </h2>
              <p className="text-xl text-muted-foreground">
                A systematic approach that has delivered results for 420+ Jaipur businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Analysis",
                  description: "Comprehensive audit of your digital presence, competitors, and Jaipur market opportunities with actionable insights.",
                  icon: Search
                },
                {
                  step: "02",
                  title: "Strategy Development",
                  description: "Custom strategy tailored to your goals, audience, and budget. Clear roadmap with timelines and KPIs.",
                  icon: Lightbulb
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Expert execution across all channels. Quality implementation with cultural sensitivity and attention to detail.",
                  icon: Rocket
                },
                {
                  step: "04",
                  title: "Optimize & Scale",
                  description: "Continuous monitoring, testing, and optimization. Scale winners, eliminate losers. Transparent reporting.",
                  icon: LineChart
                }
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
                      <CardDescription className="text-base">{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]" />
          
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
                  Join 420+ successful Jaipur businesses. Get your free consultation and market audit today.
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

        {/* FAQ */}
        <section className="py-24 md:py-32 bg-white/[0.02]">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: "What are your pricing packages for Jaipur businesses?",
                  a: "We offer flexible packages starting from ₹18,000/month for small businesses to comprehensive enterprise solutions. Pricing is customized based on your needs, business size, and goals. Contact us for a detailed quote tailored to your Jaipur business."
                },
                {
                  q: "How quickly can we see results?",
                  a: "Timeline varies by service. Paid ads show results within days, SEO takes 3-6 months for significant rankings. We provide realistic timelines and show progress through weekly reports. Most Jaipur clients see meaningful results within 90 days."
                },
                {
                  q: "Do you work with tourism and hospitality businesses?",
                  a: "Absolutely! We have extensive experience with Jaipur's tourism and hospitality sector. From hotels to tour operators, we understand the seasonal nature and unique marketing needs of tourism businesses."
                },
                {
                  q: "Can you help with handicraft and artisan businesses?",
                  a: "Yes! We specialize in helping traditional Jaipur businesses go digital. From handicrafts to jewelry, we create strategies that showcase your craftsmanship to global audiences while preserving authenticity."
                },
                {
                  q: "Do you create content in Hindi?",
                  a: "Yes! We have Hindi content creators on our team who can create authentic Hindi content for your campaigns. We understand the importance of regional language marketing in Rajasthan."
                },
                {
                  q: "What makes you different from other Jaipur agencies?",
                  a: "Three key differentiators: (1) Deep understanding of Jaipur's tourism-driven economy and traditional businesses, (2) Data-driven approach with transparent reporting, (3) Proven track record with 420+ successful campaigns."
                }
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

