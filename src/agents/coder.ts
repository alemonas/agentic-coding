export async function generateCode(plan: string): Promise<string> {
  return `// server.js\nconst express = require('express');\nconst app = express();\n// ... etc.`;
}
