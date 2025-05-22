// Sets up Langbase Memory RAG for storing and retrieving context.

import "dotenv/config";
import { Langbase } from "langbase";

const langbase = new Langbase({
	apiKey: process.env.LANGBASE_API_KEY!,
});

async function main() {
	const memory = await langbase.memories.create({
		name: "knowledge-base",
		description: "An AI memory for agentic memory workshop",
		embedding_model: "openai:text-embedding-3-large",
	});

	console.log("AI Memory: ", memory);
}

main();
