
import { getDb } from "./db";
import {
  leads,
  posts,
  type InsertLead,
  type Lead,
  type Post,
  type InsertPost
} from "@shared/schema";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  createLead(lead: InsertLead): Promise<Lead>;
  getPosts(): Promise<Post[]>;
  getPostBySlug(slug: string): Promise<Post | undefined>;
  createPost(post: InsertPost): Promise<Post>;
}

// Fallback blog posts for when database is not available
const fallbackBlogPosts: Post[] = [
  {
    id: 1,
    title: "The Day I Discovered Why My Client's ₹5 Lakh Marketing Budget Was Completely Wasted",
    slug: "marketing-budget-wasted-lessons-learned",
    category: "Marketing Strategy",
    excerpt: "A successful restaurant owner was spending ₹5 lakhs monthly on marketing with zero results. What we discovered changed everything about how I approach marketing strategy.",
    content: `The phone call came at 11 PM on a Tuesday.

"I need help. I'm spending ₹5 lakhs every month on marketing and I'm getting nothing. My restaurant is empty while my competitor across the street is packed every night."

Vikram owned a premium restaurant in Bandra. Beautiful interiors, excellent food, great location. But despite spending more on marketing than most restaurants earn in profit, his tables were empty.

His competitor? A smaller place with average food and no marketing budget. Yet customers lined up outside every evening.

I agreed to investigate. What I found shocked me and completely changed how I think about marketing effectiveness.

## The Marketing Checklist That Wasn't Working

Vikram was doing everything businesses are "supposed" to do:

✓ Facebook ads targeting food lovers within 5km  
✓ Instagram posts with professional food photography  
✓ Google Ads for restaurant-related keywords  
✓ Influencer collaborations with local food bloggers  
✓ Email marketing to his customer database

On paper, it looked perfect. In reality, it was a disaster.

His Facebook ads were getting clicks but no customers. The Instagram posts looked beautiful but generated zero engagement from actual locals. Google Ads were burning money on irrelevant searches. Influencers brought followers who never converted to customers.

Meanwhile, his competitor was doing none of this. No social media presence. No paid advertising. No fancy photography.

So what was the difference?

## The One Thing His Competitor Had (That He Didn't)

I spent three evenings observing both restaurants. What I discovered was embarrassingly simple.

**Vikram's competitor had something Vikram didn't: a reason for people to choose them over everyone else.**

The competitor specialized in authentic Maharashtrian home-style cooking. Their menu was small - just 12 dishes. But each dish told a story:

- The owner's grandmother's recipes
- Ingredients sourced from specific villages
- Cooking methods passed down through generations

Customers didn't just eat there. They experienced something they couldn't get anywhere else.

Vikram's restaurant, despite its premium positioning, was generic. Great food, but nothing unique. Nothing that made people say "I have to eat there."

**His marketing was trying to convince people to choose him without giving them a compelling reason why.**

## The Biggest Marketing Mistake Most Businesses Make

This is the mistake I see everywhere. Businesses spend thousands on marketing tactics without first answering the fundamental question:

> "Why should someone choose us over everyone else?"

Most businesses don't have a traffic problem. They have a clarity problem.

## What We Changed (And Why It Worked)

Instead of marketing "great food and ambiance," we repositioned Vikram's restaurant around something unique:

**"The only place in Mumbai serving authentic Konkani coastal cuisine using traditional clay pot cooking methods."**

We stopped all paid advertising for 30 days. Instead, we focused on building the story:

- Sourced traditional clay pots from Goa
- Trained chefs in authentic Konkani cooking techniques
- Created a menu featuring dishes you couldn't find anywhere else in Mumbai
- Documented the story behind each recipe

Then we started marketing again. But this time, we had something unique to talk about.

## The Results Were Immediate

**Week 1:** First food blogger discovered us and wrote about the "hidden gem serving authentic Konkani food"

**Week 2:** Local Konkani community started visiting and sharing with friends

**Week 3:** Food enthusiasts began traveling from other parts of Mumbai specifically for our unique dishes

**Week 4:** We had our first waiting list on a weekday

Within 90 days:
- Empty tables → Fully booked weekends
- Revenue increased 340%
- Marketing spend reduced by 60%
- Word-of-mouth driving most new customers

## What You Should Do Next

Before you spend another rupee on marketing, ask yourself:

**"What do we offer that no one else does?"**

If you can't answer that clearly, fix your positioning first. Then market.

The lesson? Marketing tactics don't fix positioning problems. Your marketing budget will thank you.`,
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1600",
    publishedAt: new Date("2025-01-15"),
  },
  {
    id: 2,
    title: "How I Helped a Struggling Local Business Generate ₹50 Lakhs in 6 Months Using One Simple Strategy",
    slug: "local-business-50-lakhs-revenue-simple-strategy",
    category: "Local Business Marketing",
    excerpt: "A small electronics store was on the verge of closing. One overlooked marketing strategy not only saved the business but made it the most successful store in the area.",
    content: `The owner was packing boxes when I walked into his electronics store.

"I'm done," Suresh said, barely looking up. "Twenty-three years in business, and I can't compete anymore. Everyone buys online now."

His store in Jayanagar, Bangalore, had been the go-to place for electronics for over two decades. But in the past three years, revenue had dropped 70%.

Online retailers and big-box stores were killing his business.

## Why Small Electronics Stores Are Closing

I understood his frustration. Small electronics stores across India were closing every month.

Amazon, Flipkart, and large retail chains were offering lower prices, convenient delivery, massive selection, and easy returns.

Why would anyone visit a small local store?

But I had a different perspective. I'd seen similar businesses not just survive but thrive by focusing on one thing online retailers couldn't provide:

**Immediate, personalized service for urgent needs.**

## The Strategy: Become the Emergency Solution

We repositioned Suresh's store as the "Emergency Electronics Solution" for the neighborhood.

When your laptop charger breaks before an important presentation. When your phone screen cracks. When your TV remote stops working.

Suresh's store became the instant solution.

Within 6 months, revenue reached ₹11.4 lakhs monthly - the highest in the store's history.

The lesson? Don't compete where you can't win. Compete where you have natural advantages.`,
    imageUrl: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=1600",
    publishedAt: new Date("2025-01-20"),
  },
  {
    id: 3,
    title: "The Website Mistake That's Costing You 60% of Your Potential Customers",
    slug: "website-mistake-costing-60-percent-customers",
    category: "Website & Conversion Optimization",
    excerpt: "Most business websites make the same critical mistake that drives away more than half of their visitors. Here's how to fix it and dramatically increase your conversions.",
    content: `I was reviewing a client's website analytics when I noticed something alarming.

Their website was getting 15,000 visitors per month, but only 2,400 were staying longer than 10 seconds.

The rest were leaving immediately.

This wasn't a traffic quality problem. These were people actively searching for their services. They were the perfect target audience.

Yet 84% of visitors were bouncing within seconds of arriving.

## The Problem: A Generic Homepage

The client was a successful CA firm in Pune. They had great reviews, satisfied clients, and steady business through referrals. But their website was failing to convert online visitors into leads.

Their homepage looked like every other CA website in India with generic statements about "excellence" and "integrity."

**The website told visitors nothing about why they should choose this firm over hundreds of others.**

## What We Changed

We replaced the generic "Welcome to ABC Associates" with:

**"Pune CAs Who Actually Respond to Your Calls and Explain Things in Plain English"**

This immediately differentiated them from competitors and addressed two major pain points: responsiveness and communication clarity.

Within a month, bounce rate dropped from 84% to 52%, and new client acquisition increased 150%.

The lesson? Your website has seconds to communicate value and direction. Make them count.`,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
    publishedAt: new Date("2025-02-01"),
  },
];

// Initialize in-memory posts with fallback data
const inMemoryPosts = new Map<string, Post>(
  fallbackBlogPosts.map(post => [post.slug, post])
);

export class DatabaseStorage implements IStorage {
  async createLead(insertLead: InsertLead): Promise<Lead> {
    const db = getDb();
    if (!db) {
      return {
        id: Date.now(),
        ...insertLead,
        createdAt: new Date(),
      } as Lead;
    }
    try {
      const [lead] = await db.insert(leads).values(insertLead).returning();
      return lead;
    } catch (error) {
      console.warn("Database error, returning mock lead:", error);
      return {
        id: Date.now(),
        ...insertLead,
        createdAt: new Date(),
      } as Lead;
    }
  }

  async getPosts(): Promise<Post[]> {
    const db = getDb();
    if (!db) {
      return Array.from(inMemoryPosts.values()).sort((a, b) => {
        const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
        const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
        return dateB - dateA;
      });
    }
    try {
      const dbPosts = await db.select().from(posts).orderBy(desc(posts.publishedAt));
      const memoryPosts = Array.from(inMemoryPosts.values());
      const allPosts = [...dbPosts, ...memoryPosts];
      const uniquePosts = Array.from(
        new Map(allPosts.map(post => [post.slug, post])).values()
      );
      return uniquePosts.sort((a, b) => {
        const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
        const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
        return dateB - dateA;
      });
    } catch (error) {
      console.warn("Database error, using in-memory posts:", error);
      return Array.from(inMemoryPosts.values()).sort((a, b) => {
        const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
        const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
        return dateB - dateA;
      });
    }
  }

  async getPostBySlug(slug: string): Promise<Post | undefined> {
    const db = getDb();
    if (db) {
      try {
        const [post] = await db.select().from(posts).where(eq(posts.slug, slug));
        if (post) return post;
      } catch (error) {
        console.warn("Database error checking post by slug:", error);
      }
    }
    return inMemoryPosts.get(slug);
  }

  async createPost(insertPost: InsertPost): Promise<Post> {
    const db = getDb();
    if (!db) {
      const post: Post = {
        id: Date.now(),
        ...insertPost,
        publishedAt: new Date(),
      } as Post;
      inMemoryPosts.set(post.slug, post);
      return post;
    }
    try {
      const [post] = await db.insert(posts).values(insertPost).returning();
      inMemoryPosts.set(post.slug, post);
      return post;
    } catch (error) {
      console.warn("Database error, storing post in memory:", error);
      const post: Post = {
        id: Date.now(),
        ...insertPost,
        publishedAt: new Date(),
      } as Post;
      inMemoryPosts.set(post.slug, post);
      return post;
    }
  }
}

export const storage = new DatabaseStorage();
