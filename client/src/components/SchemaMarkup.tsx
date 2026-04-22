import { Helmet } from "react-helmet-async";

interface SchemaMarkupProps {
  type: "organization" | "localBusiness" | "article" | "breadcrumb";
  data?: any;
}

export function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const getSchema = () => {
    switch (type) {
      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Dekhe Trends",
          "alternateName": "Dekhe Trends Digital Marketing",
          "url": "https://dekhetrends.com",
          "logo": "https://dekhetrends.com/favicon.png",
          "description": "India's leading digital marketing agency helping businesses grow across 20+ major cities",
          "email": "dekhetrends@gmail.com",
          "telephone": "+91-80775-83921",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bareilly",
            "addressLocality": "Bareilly",
            "addressRegion": "Uttar Pradesh",
            "postalCode": "243001",
            "addressCountry": "IN"
          },
          "sameAs": [
            "https://twitter.com/dekhetrends",
            "https://linkedin.com/company/dekhetrends",
            "https://instagram.com/dekhetrends",
            "https://www.youtube.com/@Dekhetrends"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-80775-83921",
            "contactType": "customer service",
            "email": "dekhetrends@gmail.com",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi"]
          }
        };

      case "localBusiness":
        return {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Dekhe Trends",
          "image": "https://dekhetrends.com/favicon.png",
          "description": "Digital marketing agency specializing in SEO, social media, paid advertising, and brand strategy",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bareilly",
            "addressLocality": "Bareilly",
            "addressRegion": "Uttar Pradesh",
            "postalCode": "243001",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "28.3670",
            "longitude": "79.4304"
          },
          "url": "https://dekhetrends.com",
          "telephone": "+91-80775-83921",
          "email": "dekhetrends@gmail.com",
          "priceRange": "₹₹",
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "150"
          }
        };

      case "article":
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data?.title || "",
          "description": data?.excerpt || "",
          "image": data?.image || "https://dekhetrends.com/favicon.png",
          "datePublished": data?.publishedAt || new Date().toISOString(),
          "dateModified": data?.updatedAt || new Date().toISOString(),
          "author": {
            "@type": "Organization",
            "name": "Dekhe Trends",
            "url": "https://dekhetrends.com"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Dekhe Trends",
            "logo": {
              "@type": "ImageObject",
              "url": "https://dekhetrends.com/favicon.png"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data?.url || "https://dekhetrends.com"
          }
        };

      case "breadcrumb":
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data?.items?.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          })) || []
        };

      default:
        return null;
    }
  };

  const schema = getSchema();

  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
