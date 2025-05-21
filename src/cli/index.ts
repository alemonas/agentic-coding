import 'dotenv/config';
import { runAgentFlow } from '../agents/agentFlow';

(async () => {
  console.log('Starting the agent flow...');
  await runAgentFlow();
})();
