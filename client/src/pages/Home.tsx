import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import {
  Phone, ArrowRight, CheckCircle2, Star, TrendingUp,
  Target, BarChart3, Rocket, Users, Award, Clock
} from "lucide-react";

const services = [
  { icon: Target, title: "SEO Strategy", desc: "Rank higher and attract customers who are ready to buy.", href: "/services/seo-strategy" },
  { icon: BarChart3, title: "Paid Advertising", desc: "ROI-focused Google and Facebook campaigns that convert.", href: "/services/paid-advertising" },
  { icon: Rocket, title: "Social Media", desc: "Build an engaged audience that turns into paying customers.", href: "/services/social-media-strategy" },
  { icon: TrendingUp, title: "Content Marketing", desc: "Content that ranks on Google and drives organic traffic.", href: "/services/content-marketing" },
];

const stats = [
  { number: "500+", label: "Clients Served", icon: Users },
  { number: "4.9/5", label: "Client Rating", icon: Star },
  { number: "60", label: "Days to Results", icon: Clock },
  { number: "₹50Cr+", label: "Revenue Generated", icon: Award },
];

const posts = [
  {
    slug: "ai-build-website-10-minutes",
    title: "Can AI Build a Full Website in 10 Minutes? Real Test & Results",
    excerpt: "We tested if AI can actually build a full website in 10 minutes using Claude, Cursor, Copilot, and Windsurf. Here are the honest results.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop",
    date: "April 26, 2026",
    category: "AI Tools",
    readTime: "8 min"
  },
  {
    slug: "best-vibe-coding-tools-2026",
    title: "Best Vibe Coding Tools 2026: Claude, Cursor, Copilot & More Compared",
    excerpt: "AI coding tools are changing how developers build software. A deep comparison of the top vibe coding tools available in 2026.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop",
    date: "April 26, 2026",
    category: "Developer Tools",
    readTime: "12 min"
  },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Dekhe Trends — Digital Marketing Agency India | SEO, Ads, Social Media"
        description="India's trusted digital marketing agency. We help businesses grow with SEO, paid ads, social media, and content marketing. Real results, no fluff."
        canonical="https://dekhetrends.com"
      />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <span className="badge mb-4 inline-block">India's Trusted Digital Marketing Agency</span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Digital Marketing That<br />
              <span className="text-blue-600">Actually Grows</span> Your Business
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed">
              Stop wasting money on marketing that doesn't convert. We build data-driven strategies that bring real customers — not just traffic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="tel:8077583921"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call: 8077583921
              </a>
              <Link href="/audit">
                <span className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-blue-600 hover:text-blue-600 text-slate-700 font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer">
                  Get Free Audit
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-slate-500">
              {["No Long-term Contracts", "Results in 60 Days", "Money-back Guarantee"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 section-bg border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">{stat.number}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Services That Drive Growth</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Comprehensive digital marketing solutions tailored to your business goals</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link key={service.href} href={service.href}>
                <div className="bg-white border border-slate-200 rounded-xl p-6 card-shadow hover:card-hover cursor-pointer group">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{service.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services">
              <span className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline cursor-pointer">
                View All Services <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 section-bg">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Latest Insights</h2>
              <p className="text-slate-500">Real-world tests, honest reviews, and actionable insights</p>
            </div>
            <Link href="/blog">
              <span className="hidden sm:inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline cursor-pointer">
                All Articles <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="bg-white rounded-xl overflow-hidden card-shadow hover:card-hover cursor-pointer group">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="badge">{post.category}</span>
                      <span className="text-xs text-slate-400">{post.date} · {post.readTime} read</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <Link href="/blog">
              <span className="inline-flex items-center gap-2 text-blue-600 font-semibold cursor-pointer">
                All Articles <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Businesses Choose Dekhe Trends
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Revenue-focused", desc: "We track what actually matters — customers and revenue, not vanity metrics." },
                  { title: "Transparent reporting", desc: "Clear reports every month. No jargon, no hiding poor performance." },
                  { title: "No long-term lock-in", desc: "Month-to-month contracts. We earn your business every month." },
                  { title: "Real strategy", desc: "Custom plans for your business, not copy-paste templates." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">{item.title}</div>
                      <div className="text-sm text-slate-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/about">
                  <span className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline cursor-pointer">
                    Learn more about us <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Rajesh Kumar", role: "CEO, TechStart India", text: "Increased our qualified leads by 340% in 4 months.", rating: 5 },
                { name: "Priya Sharma", role: "Founder, StyleHub", text: "From ₹2L to ₹18L monthly revenue. Their strategies work.", rating: 5 },
                { name: "Amit Patel", role: "Director, GrowthCo", text: "Finally an agency that understands ROI.", rating: 5 },
                { name: "Neha Singh", role: "Owner, FashionHub", text: "Best decision we made for our online presence.", rating: 5 },
              ].map((t) => (
                <div key={t.name} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 mb-3 leading-relaxed">"{t.text}"</p>
                  <div className="text-xs font-semibold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Get a free strategy call and discover exactly what's holding your marketing back.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8077583921"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call: 8077583921
            </a>
            <Link href="/contact">
              <span className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                Send a Message
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
