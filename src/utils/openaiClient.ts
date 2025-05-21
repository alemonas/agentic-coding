export async function callOpenAI(
  messages: { role: string; content: string }[],
  model = 'gpt-3.5-turbo',
  temperature = 0.7
): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('OpenAI API key is not set in the environment variables.');
  }

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages,
    }),
  });

  const data = await res.json();
  return data.choices[0].message.content.trim();
}
