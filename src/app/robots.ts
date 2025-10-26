import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "localhost";
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/about/", "/api/"]
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}