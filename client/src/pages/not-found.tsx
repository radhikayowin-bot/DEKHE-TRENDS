import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home, Search, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 px-4">
      <Card className="w-full max-w-2xl border-primary/20 shadow-xl">
        <CardContent className="pt-12 pb-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <AlertCircle className="h-24 w-24 text-primary" />
              <div className="absolute -top-2 -right-2 bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                404
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Page Not Found
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90">
                <Home className="mr-2 h-5 w-5" />
                Go to Homepage
              </Button>
            </Link>
            <Link href="/sitemap">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary/30 hover:bg-primary/10">
                <Search className="mr-2 h-5 w-5" />
                View Sitemap
              </Button>
            </Link>
          </div>

          <div className="border-t border-primary/20 pt-6 mt-6">
            <p className="text-sm text-muted-foreground mb-4">Popular Pages:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link href="/services">
                <Button variant="ghost" size="sm" className="hover:text-primary">
                  Services
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="ghost" size="sm" className="hover:text-primary">
                  About Us
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost" size="sm" className="hover:text-primary">
                  Contact
                </Button>
              </Link>
              <Link href="/audit">
                <Button variant="ghost" size="sm" className="hover:text-primary">
                  Free Audit
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="ghost" size="sm" className="hover:text-primary">
                  Blog
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
