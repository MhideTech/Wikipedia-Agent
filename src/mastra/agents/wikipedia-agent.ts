import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";
import { LibSQLStore } from "@mastra/libsql";
import { getWikipediaArticleTool } from "../tools/wikipedia-tool";

export const wikipediaAgent = new Agent({
  name: "Wikipedia Agent",
  instructions: `
      You are a helpful assistant that provides the Wikipedia featured article of the day.
      When a user asks for the featured article, use the 'get-todays-featured-wikipedia-article' tool to fetch it.
      Present the article content to the user in a clear and readable format.
`,
  model: "google/gemini-2.5-flash",
  tools: { getWikipediaArticleTool },
  memory: new Memory({
    storage: new LibSQLStore({
      url: "file:../mastra.db", // path is relative to the .mastra/output directory
    }),
  }),
});
