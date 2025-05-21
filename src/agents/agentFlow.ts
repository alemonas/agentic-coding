import { planProject } from './planner';
import { generateCode } from './coder';
import { testProject } from './tester';

export async function runAgentFlow() {
  const userGoal = 'Create a RESTful API with Express and MongoDB';
  const plan = await planProject(userGoal);
  console.log('\nPlan:\n', plan);
  const code = await generateCode(plan);
  console.log('\nGenerated Code:\n', code);
  const testResult = await testProject(code);
  console.log('\nTest Result:\n', testResult);
}
