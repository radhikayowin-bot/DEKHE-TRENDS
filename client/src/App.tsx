import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { CookieConsent } from "./components/CookieConsent";
import { StickyCallButton } from "./components/StickyCallButton";
import { ScrollToTop } from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogPost2 from "./pages/BlogPost2";
import BlogPost3 from "./pages/BlogPost3";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Audit from "./pages/Audit";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/not-found";
import BrandStrategy from "./pages/services/BrandStrategy";
import CommunityBuilding from "./pages/services/CommunityBuilding";
import CompetitorIntelligence from "./pages/services/CompetitorIntelligence";
import ContentMarketing from "./pages/services/ContentMarketing";
import EmailMarketing from "./pages/services/EmailMarketing";
import InfluencerMarketing from "./pages/services/InfluencerMarketing";
import MarketResearch from "./pages/services/MarketResearch";
import PaidAdvertising from "./pages/services/PaidAdvertising";
import SEOStrategy from "./pages/services/SEOStrategy";
import SocialMediaStrategy from "./pages/services/SocialMediaStrategy";
import VideoMarketing from "./pages/services/VideoMarketing";
import { Ahmedabad, Bangalore, Bhopal, Chennai, Delhi, Hyderabad, Indore, Jaipur, Kanpur, Kolkata, Lucknow, Ludhiana, Mumbai, Nagpur, Patna, Pune, Surat, Thane, Vadodara, Visakhapatnam } from "./pages/cities";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground">
        <ScrollToTop />
        <Navigation />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Services} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/best-vibe-coding-tools-2026" component={BlogPost} />
          <Route path="/blog/ai-build-website-10-minutes" component={BlogPost2} />
          <Route path="/blog/build-mobile-apps-with-ai-2026" component={BlogPost3} />
          <Route path="/industries" component={Industries} />
          <Route path="/audit" component={Audit} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/refund-policy" component={RefundPolicy} />
          <Route path="/cookie-policy" component={CookiePolicy} />
          <Route path="/disclaimer" component={Disclaimer} />
          <Route path="/services/brand-strategy" component={BrandStrategy} />
          <Route path="/services/community-building" component={CommunityBuilding} />
          <Route path="/services/competitor-intelligence" component={CompetitorIntelligence} />
          <Route path="/services/content-marketing" component={ContentMarketing} />
          <Route path="/services/email-marketing" component={EmailMarketing} />
          <Route path="/services/influencer-marketing" component={InfluencerMarketing} />
          <Route path="/services/market-research" component={MarketResearch} />
          <Route path="/services/paid-advertising" component={PaidAdvertising} />
          <Route path="/services/seo-strategy" component={SEOStrategy} />
          <Route path="/services/social-media-strategy" component={SocialMediaStrategy} />
          <Route path="/services/video-marketing" component={VideoMarketing} />
          <Route path="/digital-marketing-agency-ahmedabad" component={Ahmedabad} />
          <Route path="/digital-marketing-agency-bangalore" component={Bangalore} />
          <Route path="/digital-marketing-agency-bhopal" component={Bhopal} />
          <Route path="/digital-marketing-agency-chennai" component={Chennai} />
          <Route path="/digital-marketing-agency-delhi" component={Delhi} />
          <Route path="/digital-marketing-agency-hyderabad" component={Hyderabad} />
          <Route path="/digital-marketing-agency-indore" component={Indore} />
          <Route path="/digital-marketing-agency-jaipur" component={Jaipur} />
          <Route path="/digital-marketing-agency-kanpur" component={Kanpur} />
          <Route path="/digital-marketing-agency-kolkata" component={Kolkata} />
          <Route path="/digital-marketing-agency-lucknow" component={Lucknow} />
          <Route path="/digital-marketing-agency-ludhiana" component={Ludhiana} />
          <Route path="/digital-marketing-agency-mumbai" component={Mumbai} />
          <Route path="/digital-marketing-agency-nagpur" component={Nagpur} />
          <Route path="/digital-marketing-agency-patna" component={Patna} />
          <Route path="/digital-marketing-agency-pune" component={Pune} />
          <Route path="/digital-marketing-agency-surat" component={Surat} />
          <Route path="/digital-marketing-agency-thane" component={Thane} />
          <Route path="/digital-marketing-agency-vadodara" component={Vadodara} />
          <Route path="/digital-marketing-agency-visakhapatnam" component={Visakhapatnam} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
        <StickyCallButton />
        <CookieConsent />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;