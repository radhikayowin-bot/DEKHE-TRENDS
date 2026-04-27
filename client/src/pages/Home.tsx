import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { StickyCallButton } from "@/components/StickyCallButton";
import { 
  Phone, ArrowRight, Sparkles, TrendingUp, Target, Zap, 
  CheckCircle2, Star, BarChart3, Users, Rocket, Shield
} from "lucide-react";

export default function Home() {
  return (
    <>
      <SEO 
        title="Premium Digital Marketing Agency | Grow Your Business Online"
        description="Transform your business with data-driven digital marketing strategies. SEO, Ads, Social Media - Results that matter."
        canonical="https://dekhetrends.com"
      />
      
      <StickyCallButton />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#7B2FF7]/20 to-[#00C6FF]/20 rounded-full blur-3xl" />
          
          <div className="container max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-5xl mx-auto"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
                <Sparkles className="w-4 h-4 text-[#7B2FF7]" />
                <span className="text-sm font-medium">Trusted by 500+ Growing Businesses</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[1.1]">
                Digital Marketing
                <br />
                That <span className="gradient-text">Actually Works</span>
              </h1>

              {/* Subheading */}
              <p className="text-xl md:text-2xl text-[#B0B0B0] mb-12 max-w-3xl mx-auto leading-relaxed">
                Stop wasting money on marketing that doesn't convert. We build data-driven strategies that generate real revenue.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <a href="tel:8077583921">
                  <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-[#7B2FF7] to-[#00C6FF] hover:opacity-90 btn-glow transition-all duration-300">
                    <Phone className="w-5 h-5 mr-2" />
                    Get Started Now
                  </Button>
                </a>
                <Link href="/audit">
                  <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white/10 hover:bg-white/5 transition-all duration-300">
                    Free Strategy Call
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-[#B0B0B0]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C6FF]" />
                  <span>No Long-term Contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C6FF]" />
                  <span>Results in 60 Days</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C6FF]" />
                  <span>Money-back Guarantee</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "500+", label: "Active Clients", icon: Users },
                { number: "₹50Cr+", label: "Revenue Generated", icon: TrendingUp },
                { number: "4.9/5", label: "Client Rating", icon: Star },
                { number: "60", label: "Days to Results", icon: Zap }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-transform duration-300 card-glow"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-[#7B2FF7]" />
                  <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text">{stat.number}</div>
                  <div className="text-sm text-[#B0B0B0]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="container max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Services That <span className="gradient-text">Drive Growth</span>
              </h2>
              <p className="text-xl text-[#B0B0B0] max-w-2xl mx-auto">
                Comprehensive digital marketing solutions tailored to your business goals
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Target,
                  title: "SEO & Content",
                  description: "Dominate search results and attract qualified traffic that converts",
                  features: ["Keyword Research", "On-page SEO", "Content Strategy"]
                },
                {
                  icon: BarChart3,
                  title: "Paid Advertising",
                  description: "ROI-focused campaigns on Google, Facebook, and LinkedIn",
                  features: ["Google Ads", "Social Ads", "Retargeting"]
                },
                {
                  icon: Rocket,
                  title: "Social Media",
                  description: "Build engaged communities and convert followers into customers",
                  features: ["Content Creation", "Community Management", "Influencer Marketing"]
                }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="gradient-border group cursor-pointer"
                >
                  <div className="p-8 h-full hover:bg-white/[0.02] transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#7B2FF7] to-[#00C6FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-[#B0B0B0] mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-[#B0B0B0]">
                          <CheckCircle2 className="w-4 h-4 text-[#00C6FF]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Process Section */}
        <section className="py-20 px-4">
          <div className="container max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Our <span className="gradient-text">Proven Process</span>
              </h2>
              <p className="text-xl text-[#B0B0B0] max-w-2xl mx-auto">
                A systematic approach to scaling your business online
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Audit", desc: "Deep analysis of your current marketing" },
                { step: "02", title: "Strategy", desc: "Custom plan based on your goals" },
                { step: "03", title: "Execute", desc: "Implementation with precision" },
                { step: "04", title: "Scale", desc: "Optimize and grow what works" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-8 rounded-2xl text-center relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 text-8xl font-bold text-white/[0.02] group-hover:text-white/[0.05] transition-colors duration-300">
                    {item.step}
                  </div>
                  <div className="relative z-10">
                    <div className="text-5xl font-bold gradient-text mb-4">{item.step}</div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-[#B0B0B0]">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="container max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Trusted by <span className="gradient-text">Industry Leaders</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Rajesh Kumar",
                  role: "CEO, TechStart India",
                  feedback: "Increased our qualified leads by 340% in just 4 months. Best investment we made.",
                  rating: 5
                },
                {
                  name: "Priya Sharma",
                  role: "Founder, StyleHub",
                  feedback: "From ₹2L to ₹18L monthly revenue. Their strategies actually work.",
                  rating: 5
                },
                {
                  name: "Amit Patel",
                  role: "Director, GrowthCo",
                  feedback: "Finally, a marketing agency that understands ROI. Highly recommended.",
                  rating: 5
                }
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-[#7B2FF7] text-[#7B2FF7]" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 leading-relaxed">{testimonial.feedback}</p>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-[#B0B0B0]">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-20 px-4">
          <div className="container max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Latest <span className="gradient-text">Insights</span>
              </h2>
              <p className="text-xl text-[#B0B0B0] max-w-2xl mx-auto">
                Real-world tests, honest reviews, and actionable insights on AI tools and tech trends
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  slug: "ai-build-website-10-minutes",
                  title: "Can AI Build a Full Website in 10 Minutes?",
                  excerpt: "We tested if AI can actually build a full website in 10 minutes. Real experiment with honest results.",
                  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop",
                  date: "April 26, 2026",
                  readTime: "8 min"
                },
                {
                  slug: "best-vibe-coding-tools-2026",
                  title: "Best Vibe Coding Tools 2026 Compared",
                  excerpt: "Deep comparison of Claude, Cursor, GitHub Copilot, Windsurf, Cline & RooCode for developers.",
                  image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*nOd4xby-JPQsQy-_",
                  date: "April 26, 2026",
                  readTime: "12 min"
                }
              ].map((post, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <div className="glass-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-all card-glow">
                      <div className="aspect-[16/9] relative overflow-hidden">
                        <img 
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-8">
                        <div className="flex items-center gap-4 text-sm text-[#B0B0B0] mb-4">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime} read</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-[#7B2FF7] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-[#B0B0B0] mb-6 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <span className="text-[#00C6FF] font-semibold inline-flex items-center">
                          Read Article <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/blog">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white/10 hover:bg-white/5 transition-all duration-300">
                  View All Articles
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12 md:p-16 rounded-3xl text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#7B2FF7]/10 to-[#00C6FF]/10" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  Ready to <span className="gradient-text">Scale Your Business?</span>
                </h2>
                <p className="text-xl text-[#B0B0B0] mb-8 max-w-2xl mx-auto">
                  Book a free strategy call and discover how we can 3X your revenue
                </p>
                <a href="tel:8077583921">
                  <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-gradient-to-r from-[#7B2FF7] to-[#00C6FF] hover:opacity-90 btn-glow transition-all duration-300">
                    <Phone className="w-6 h-6 mr-2" />
                    Call: 8077583921
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}