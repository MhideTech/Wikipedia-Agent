import { createTool } from "@mastra/core";
import z from "zod";

export const getWikipediaArticleTool = createTool({
  id: "get-todays-featured-wikipedia-article",
  description: "Get the featured Wikipedia article of the day.",
  inputSchema: z.object({}),
  outputSchema: z.object({
    article: z
      .string()
      .describe("The content of the featured Wikipedia article of the day."),
  }),
  execute: async ({ context }) => {
    try {
      const article = await getArticle();
      return { article };
    } catch (e) {
      throw new Error("Failed to fetch Wikipedia article");
    }
  },
});

async function getArticle() {
  let today = new Date();
  let year = today.getFullYear();
  let month = String(today.getMonth() + 1).padStart(2, "0");
  let day = String(today.getDate()).padStart(2, "0");
  let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/featured/${year}/${month}/${day}`;

  let response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      "Api-User-Agent": "Wikipedia Agent",
    },
  });
  const data = await response.json();
  // The featured article body is in the 'extract' property of the 'tfa' object.
  return data.tfa.extract;
}
