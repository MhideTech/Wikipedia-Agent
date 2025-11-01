# 📰 Wikipedia Agent

An intelligent assistant powered by Mastra AI that fetches Wikipedia's featured article of the day.

Wikipedia Agent is an AI-powered assistant that provides you with Wikipedia's featured article of the day directly in a conversational interface. Built with the Mastra.ai framework, it uses Google's Gemini 2.5 Flash model to deliver daily educational content through natural language queries.

## ✨ Features

- 🤖 **AI-Powered**: Leverages Google Gemini 2.5 Flash for intelligent conversation.
- 📅 **Daily Content**: Fetches the official "Featured Article of the Day" from Wikipedia's API.
- 💬 **Natural Conversation**: Chat naturally with the agent to get the featured article.
- 🧠 **Memory System**: Maintains conversation context using LibSQL for persistent storage.
- 🌐 **Agent-to-Agent Protocol**: Supports A2A (Agent-to-Agent) communication via JSON-RPC 2.0.
- 📊 **Observability**: Comes with Mastra's built-in AI tracing and monitoring.

## 🏗️ Architecture

The project is structured around the Mastra framework:

```
src/mastra/
├── index.ts              # Main Mastra configuration
├── agents/
│   └── wikipedia-agent.ts# The Wikipedia analysis agent
├── tools/
│   └── wikipedia-tool.ts # Tool for fetching data from Wikipedia API
└── routes/
    └── a2aRoutes.ts      # Agent-to-Agent API endpoint
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 20.9.0 or higher.
- **pnpm**: Recommended package manager for faster installs.
- **Wikimedia Access Token**: Required to authenticate with the Wikipedia API. You can [generate one here](https://meta.wikimedia.org/wiki/Special:BotPasswords).

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/MhideTech/Wikipedia-Agent
    cd Wikipedia-Agent
    ```

2.  **Install dependencies**

    ```bash
    pnpm install
    ```

    _Don't have pnpm? Install it first: `npm install -g pnpm`_

3.  **Configure environment**

    Create a `.env` file in the root directory and add your Wikimedia access token:

    ```env
    # Wikimedia API Access Token
    ACCESS_TOKEN=your_wikimedia_access_token_here
    ```

### Running the Application

1.  **Development Mode**

    Start the development server with hot-reload:

    ```bash
    pnpm dev
    ```

    The server will start on `http://localhost:4111`.

2.  **Production Build**

    Build the application for production:

    ```bash
    pnpm build
    ```

    Run the production server:

    ```bash
    pnpm start
    ```

## 📖 Usage

### Interactive Chat (Mastra Playground)

When you run `pnpm dev`, Mastra automatically opens a playground interface in your browser where you can:

1.  Select the `wikipediaAgent` from the agents dropdown.
2.  Start a conversation.
3.  Ask for the featured article.

**Example Conversation:**

> **You:** What is the featured article of the day?

> **Agent:** [Responds with the full text of today's featured Wikipedia article.]

### Agent-to-Agent API

The Wikipedia Agent supports the A2A protocol for programmatic interaction.

**Endpoint**: `POST /a2a/agent/wikipediaAgent`

**Request Format (JSON-RPC 2.0):**

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-id",
  "method": "generate",
  "params": {
    "message": {
      "role": "user",
      "parts": [
        {
          "kind": "text",
          "text": "What is the featured article for today?"
        }
      ]
    }
  }
}
```

**cURL Example:**

```bash
curl -X POST http://localhost:4111/a2a/agent/wikipediaAgent \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "id": "test-1",
    "method": "generate",
    "params": {
      "message": {
        "role": "user",
        "parts": [{"kind": "text", "text": "Tell me about the featured article."}]
      }
    }
  }'
```

## 🛠️ Technology Stack

- **Mastra.ai**: The AI agent framework.
- **Google Gemini 2.5 Flash**: LLM for natural language understanding.
- **LibSQL**: Embedded SQL database for memory/storage.
- **Zod**: TypeScript-first schema validation.
- **TypeScript**: For type-safe development.
- **Wikimedia Feed API**: Data source for the featured article.

## 📝 License

This project is licensed under the ISC License.

---

Made with ❤️ using Mastra.ai
