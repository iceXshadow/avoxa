// Entry point of typescript application.

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
