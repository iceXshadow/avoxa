// Sets up a langbase pipe agent --> a serverless AI Agent with unified API for every LLM.

import "dotenv/config";
import { Langbase } from "langbase";

const langbase = new Langbase({
	apiKey: process.env.LANGBASE_API_KEY!,
});

async function main() {
	const supportAgent = await langbase.pipes.create({
		name: "ai-support-agent",
		description: "An AI agent to support users with their queries.",
		messages: [
			{
				role: `system`,
				content: `You are a helpful AI assistant.
                You will assist users with their queries.
                Always ensure that you provide accurate and to the point information.`,
			},
		],
	});

	console.log("Support Agent", supportAgent);
}

main();
