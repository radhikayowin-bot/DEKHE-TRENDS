import { Router } from "express";
import { db } from "../db";
import { posts } from "@db/schema";
import { desc } from "drizzle-orm";

const router = Router();

router.get("/rss.xml", async (req, res) => {
  try {
    const allPosts = await db
      .select()
      .from(posts)
      .orderBy(desc(posts.publishedAt))
      .limit(50);

    const rssItems = allPosts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>https://dekhetrends.com/insights/${post.slug}</link>
      <guid>https://dekhetrends.com/insights/${post.slug}</guid>
      <description><![CDATA[${post.excerpt || post.content.substring(0, 200)}]]></description>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <author>dekhetrends@gmail.com (Dekhe Trends)</author>
      <category>${post.category}</category>
    </item>`
      )
      .join("");

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Dekhe Trends - Digital Marketing Insights</title>
    <link>https://dekhetrends.com</link>
    <description>Latest insights, trends, and strategies in digital marketing from India's leading marketing agency</description>
    <language>en-IN</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://dekhetrends.com/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>https://dekhetrends.com/favicon.png</url>
      <title>Dekhe Trends</title>
      <link>https://dekhetrends.com</link>
    </image>
    ${rssItems}
  </channel>
</rss>`;

    res.set("Content-Type", "application/rss+xml");
    res.send(rss);
  } catch (error) {
    console.error("RSS generation error:", error);
    res.status(500).send("Error generating RSS feed");
  }
});

export default router;
