# Avoxa AI Agents with Langbase

Avoxa is a TypeScript project demonstrating how to build, deploy, and scale serverless AI agents using [Langbase](https://langbase.com). It includes examples of creating AI support agents, setting up semantic memory (RAG), and uploading documents for retrieval-augmented generation.

## Features

- **Serverless AI Agents**: Easily create and run AI agents using Langbase Pipes.
- **Semantic Memory (RAG)**: Store and retrieve contextual knowledge for your agents.
- **Document Upload**: Upload knowledge base documents for agent access.
- **Composable Architecture**: Modular scripts for agent, memory, and document management.

## Project Structure

```
.
├── agents.ts                # Agent creation and management logic
├── create-memory.ts         # Script to create a Langbase memory (RAG)
├── create-pipe.ts           # Script to create a Langbase pipe agent
├── upload-docs.ts           # Script to upload documents to memory
├── index.ts                 # Main entry point: runs a sample agent query
├── docs/
│   ├── agent-architectures.txt  # Example agent architectures
│   └── langbase-faq.txt         # Langbase FAQ and guides
├── .env                     # Environment variables (add your LANGBASE_API_KEY)
├── package.json             # Project dependencies and scripts
└── ...
```

## Getting Started

### 1. Install Dependencies

```sh
npm install
```

### 2. Set Up Environment

Create a `.env` file in the project root:

```
LANGBASE_API_KEY=your_langbase_api_key_here
```

### 3. Create Memory and Pipe

Run the following scripts to set up your memory and agent:

```sh
npx tsx create-memory.ts
npx tsx create-pipe.ts
```

### 4. Upload Documents

Upload your knowledge base documents:

```sh
npx tsx upload-docs.ts
```

### 5. Run the Main Application

Test the agent with a sample query:

```sh
npx tsx index.ts
```

## Example Usage

The main entry point ([index.ts](index.ts)) retrieves relevant context from memory and runs the AI support agent:

```ts
import { runAiSupportAgent, runMemoryAgent } from "./agents";

async function main() {
    const query = "What is agent parallelization?";
    const chunks = await runMemoryAgent(query);

    const completion = await runAiSupportAgent({
        chunks,
        query,
    });

    console.log("Completion:", completion);
}

main();
```

## Documentation

- See [docs/agent-architectures.txt](docs/agent-architectures.txt) for example agent workflows.
- See [docs/langbase-faq.txt](docs/langbase-faq.txt) for Langbase guides and FAQ.

## Formatting

Format code using Prettier:

```sh
npm run format
```

## License

ISC

---

Built with [Langbase](https://langbase.com).
