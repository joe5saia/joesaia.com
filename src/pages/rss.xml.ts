import rss from "@astrojs/rss";
import type { APIContext } from "astro";

export function GET(context: APIContext) {
  return rss({
    title: "Joe Saia — Writing",
    description:
      "Musings on data engineering, analytics, leadership, and technology.",
    site: context.site!,
    items: [],
  });
}
