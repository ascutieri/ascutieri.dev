import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { generateSlugFromId } from "../utils";

export async function GET(context) {
    const blog = await getCollection("blog");
    
    return rss({
        title: "Andre Scutieri - Blog",
        description: "Ainda pensando em algo",
        site: context.site,
        items: blog.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.pubDate,
            link: generateSlugFromId(post.id),
        })),
        customData: "<language>pt-br</language>",
    });
}

