import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { StickyCallButton } from "@/components/StickyCallButton";
import { 
  Phone, ArrowRight, Search, Target, MessageSquare, 
  TrendingUp, BarChart3, Globe, CheckCircle2, AlertCircle
} from "lucide-react";

export default function Services() {
  return (
    <>
      <SEO 
        title="Digital Marketing Services That Actually Work | DekheTrends"
        description="No fluff, no jargon. Just proven digital marketing services that bring customers to your door. SEO, Google Ads, Social Media, and more."
        canonical="https://dekhetrends.com/services"
      />
      
      <StickyCallButton />

      <div className="pt-24 pb-12 min-h-screen">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-6 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-semibold text-sm">
              Our Services
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-8 leading-tight">
              Marketing Services That <span className="gradient-text">Actually Deliver</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              We don't do "brand awareness" campaigns. We do campaigns that bring you customers, sales, and revenue. Here's exactly what we offer and how we do it.
            </p>

            <a href="tel:8077583921">
              <Button size="lg" className="h-14 px-8 rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 font-bold">
                <Phone className="w-5 h-5 mr-2" />
                Call: 8077583921
              </Button>
            </a>
          </motion.div>

          {/* SEO Service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-card to-card/50 border border-accent/20"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Search className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">SEO (Search Engine Optimization)</h2>
                <p className="text-xl text-muted-foreground">Get found by people who are actively searching for what you sell</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  What Exactly We Do
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  We make your website show up on Google when people search for products or services like yours. Not on page 5. On page 1, in the top 3 results.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-white">Real example:</strong> A Mumbai-based interior designer was getting 2-3 inquiries a month from Google. After 4 months of SEO work, they're now getting 40-50 inquiries monthly. Same business, same services—just better visibility.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  How We Do It (Step-by-Step)
                </h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-background/50 border border-white/10">
                    <p className="font-semibold text-white mb-2">Month 1: Foundation</p>
                    <p className="text-muted-foreground">We audit your website, fix technical issues, research what your customers are actually searching for, and create a keyword strategy. No guesswork—we use real search data.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50 border border-white/10">
                    <p className="font-semibold text-white mb-2">Month 2-3: Content & Optimization</p>
                    <p className="text-muted-foreground">We optimize your existing pages and create new content targeting high-value keywords. Every piece is written for humans first, search engines second.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50 border border-white/10">
                    <p className="font-semibold text-white mb-2">Month 4-6: Authority Building</p>
                    <p className="text-muted-foreground">We build high-quality backlinks from relevant websites. No spam, no shortcuts. Just legitimate links that Google actually values.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50 border border-white/10">
                    <p className="font-semibold text-white mb-2">Ongoing: Monitoring & Improvement</p>
                    <p className="text-muted-foreground">We track rankings, traffic, and conversions. If something's not working, we pivot. If something's working well, we double down on it.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  Real Expected Outcomes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                    <p className="text-2xl font-bold text-green-500 mb-2">3-6 Months</p>
                    <p className="text-sm text-muted-foreground">First page rankings for 5-10 keywords, 2-3X increase in organic traffic</p>
                  </div>
                  <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                    <p className="text-2xl font-bold text-green-500 mb-2">6-12 Months</p>
                    <p className="text-sm text-muted-foreground">Top 3 rankings for main keywords, 5-10X traffic increase, steady lead flow</p>
                  </div>
                  <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                    <p className="text-2xl font-bold text-green-500 mb-2">12+ Months</p>
                    <p className="text-sm text-muted-foreground">Dominant market position, consistent 50-100+ leads monthly from organic search</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  Who This Is Best For
                </h3>
                <div className="space-y-3">
                  <p className="text-lg text-muted-foreground flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong className="text-white">Local businesses</strong> (restaurants, salons, clinics, gyms) who want customers in their area</span>
                  </p>
                  <p className="text-lg text-muted-foreground flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong className="text-white">Service providers</strong> (lawyers, consultants, agencies) who need a steady stream of inquiries</span>
                  </p>
                  <p className="text-lg text-muted-foreground flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong className="text-white">E-commerce stores</strong> who want to reduce dependency on paid ads</span>
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-yellow-500 mb-2">Important: SEO Takes Time</p>
                    <p className="text-muted-foreground">If someone promises you "first page rankings in 30 days," they're lying. Good SEO takes 3-6 months minimum. Anyone who says otherwise is either using black-hat tactics (which will get you penalized) or just taking your money.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Paid Advertising Service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-card to-card/50 border border-accent/20"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">Google & Facebook Ads</h2>
                <p className="text-xl text-muted-foreground">Stop burning money on ads that don't convert</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  What Exactly We Do
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  We run Google Ads, Facebook Ads, and Instagram campaigns that actually generate sales—not just clicks and impressions.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-white">Real example:</strong> An online clothing store was spending ₹80,000/month on Facebook ads and getting a 1.5X return. We took over, restructured everything, and now they're spending ₹1,20,000/month but getting a 5.2X return. More spend, but way more profit.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  How We Do It
                </h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-background/50 border border-white/10">
                    <p className="font-semibold text-white mb-2">Week 1: Research & Strategy</p>
                    <p className="text-muted-foreground">We study your competitors' ads, analyze your target audience, and create a campaign strategy. We also audit your website to make sure it can actually convert the traffic we send.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50 border border-white/10">
                    <p className="font-semibold text-white mb-2">Week 2-3: Campaign Setup & Testing</p>
                    <p className="text-muted-foreground">We create multiple ad variations, set up proper tracking, and launch campaigns with a conservative budget. We test different audiences, ad copy, and creatives to see what works.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50 border border-white/10">
                    <p className="font-semibold text-white mb-2">Week 4+: Optimization & Scaling</p>
                    <p className="text-muted-foreground">We kill what's not working, double down on what is, and gradually increase budget on winning campaigns. Every rupee is tracked and accounted for.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  Real Expected Outcomes
                </h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                    <p className="font-semibold text-white mb-2">Month 1: Testing Phase</p>
                    <p className="text-muted-foreground">2-3X ROAS (Return on Ad Spend). We're still figuring out what works, so returns are modest but positive.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                    <p className="font-semibold text-white mb-2">Month 2-3: Optimization Phase</p>
                    <p className="text-muted-foreground">4-5X ROAS. We've identified winning campaigns and are scaling them up while cutting losers.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                    <p className="font-semibold text-white mb-2">Month 4+: Scaling Phase</p>
                    <p className="text-muted-foreground">5-7X ROAS consistently. At this point, ads are a reliable revenue channel, not a gamble.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  Who This Is Best For
                </h3>
                <div className="space-y-3">
                  <p className="text-lg text-muted-foreground flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong className="text-white">E-commerce businesses</strong> who need immediate sales and can't wait for SEO</span>
                  </p>
                  <p className="text-lg text-muted-foreground flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong className="text-white">Service businesses</strong> with high-ticket offerings (coaching, consulting, B2B services)</span>
                  </p>
                  <p className="text-lg text-muted-foreground flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong className="text-white">Local businesses</strong> who want to dominate their area quickly</span>
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-yellow-500 mb-2">Minimum Ad Budget Required</p>
                    <p className="text-muted-foreground">You need at least ₹30,000-50,000/month in ad spend to see meaningful results. Less than that and we're just testing with no room to scale. If your budget is lower, focus on SEO first.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Media Service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-card to-card/50 border border-accent/20"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">Social Media Marketing</h2>
                <p className="text-xl text-muted-foreground">Turn followers into paying customers</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  What Exactly We Do
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  We build and manage your Instagram, Facebook, and LinkedIn presence. But we don't just post pretty pictures—we create content that actually drives business results.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-white">Real example:</strong> A fitness coach had 3,000 Instagram followers but was getting maybe 1-2 clients a month from it. We revamped their content strategy, and now they're getting 15-20 inquiries monthly from Instagram alone. Same follower count, completely different results.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  How We Do It
                </h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-background/50 border border-white/10">
                    <p className="font-semibold text-white mb-2">Content Strategy</p>
                    <p className="text-muted-foreground">We create a content calendar that mixes educational posts, behind-the-scenes content, customer stories, and direct offers. Every post has a purpose—not just "engagement."</p>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50 border border-white/10">
                    <p className="font-semibold text-white mb-2">Content Creation</p>
                    <p className="text-muted-foreground">We write captions, design graphics, and edit videos. You provide raw material (photos, videos, ideas), we turn it into scroll-stopping content.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50 border border-white/10">
                    <p className="font-semibold text-white mb-2">Community Management</p>
                    <p className="text-muted-foreground">We respond to comments and DMs (within reason—we're not your 24/7 customer service). We also engage with your target audience to increase visibility.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50 border border-white/10">
                    <p className="font-semibold text-white mb-2">Performance Tracking</p>
                    <p className="text-muted-foreground">We track what content drives the most inquiries and sales, then create more of that. Simple.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  Real Expected Outcomes
                </h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                    <p className="font-semibold text-white mb-2">Month 1-2</p>
                    <p className="text-muted-foreground">Content quality improves dramatically, engagement increases 2-3X, first few inquiries start coming in</p>
                  </div>
                  <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                    <p className="font-semibold text-white mb-2">Month 3-6</p>
                    <p className="text-muted-foreground">Consistent 10-20 inquiries monthly, follower growth accelerates, social media becomes a reliable lead source</p>
                  </div>
                  <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                    <p className="font-semibold text-white mb-2">Month 6+</p>
                    <p className="text-muted-foreground">30-50+ inquiries monthly, strong brand presence, customers finding you through social media regularly</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  Who This Is Best For
                </h3>
                <div className="space-y-3">
                  <p className="text-lg text-muted-foreground flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong className="text-white">Visual businesses</strong> (fashion, food, beauty, fitness, interior design)</span>
                  </p>
                  <p className="text-lg text-muted-foreground flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong className="text-white">Personal brands</strong> (coaches, consultants, freelancers, creators)</span>
                  </p>
                  <p className="text-lg text-muted-foreground flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong className="text-white">Local businesses</strong> who want to build community and trust</span>
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-yellow-500 mb-2">Social Media Isn't Magic</p>
                    <p className="text-muted-foreground">If your product or service sucks, social media won't save you. We can make you look good online, but we can't fix fundamental business problems. Make sure your offering is solid first.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Services Quick Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-8 text-center">
              Other Services We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Globe,
                  title: "Website Design & Development",
                  description: "We build websites that actually convert visitors into customers. No fancy animations that slow everything down—just clean, fast, conversion-focused design."
                },
                {
                  icon: BarChart3,
                  title: "Conversion Rate Optimization",
                  description: "Your website is getting traffic but not sales? We analyze user behavior, identify bottlenecks, and fix them. Small changes, big impact."
                },
                {
                  icon: TrendingUp,
                  title: "Email Marketing",
                  description: "Build a list, nurture it, and turn subscribers into customers. We set up automated email sequences that sell while you sleep."
                },
                {
                  icon: MessageSquare,
                  title: "Content Marketing",
                  description: "Blogs, videos, podcasts—whatever format works for your audience. We create content that educates, entertains, and ultimately sells."
                }
              ].map((service, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-accent/20 hover:border-primary/50 transition-all"
                >
                  <service.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-12 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Call us. We'll have an honest conversation about your business, your goals, and what will actually work for you. No sales pitch, just real advice.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:8077583921">
                <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-white text-black hover:bg-gray-100 font-bold">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 8077583921
                </Button>
              </a>
              <Link href="/audit">
                <Button size="lg" variant="outline" className="h-16 px-10 text-lg rounded-full border-2 border-white/50 hover:bg-white/10 font-semibold">
                  Get Free Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
