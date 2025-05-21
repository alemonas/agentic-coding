import 'dotenv/config';
import { runLLM } from './src/utils/llm';

const userMessage = process.argv[2];

if (!userMessage) {
  console.error('Please provide a user message as a command line argument.');
  process.exit(1);
}

const response = await runLLM({ userMessage });

console.log(response);
