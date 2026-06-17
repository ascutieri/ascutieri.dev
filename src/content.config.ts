import { defineCollection } from "astro/content/config";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
    loader: glob({ base: './content/posts', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updateDate: z.coerce.date().optional(),
        draft: z.boolean().default(false),
    }),
});

export const collections = { blog };