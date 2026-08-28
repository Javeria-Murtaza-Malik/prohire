/**
 * Generates a 1536-dim embedding for a given text.
 * - LLM_PROVIDER=mock: deterministic pseudo-embedding derived from word
 *   hashing, so cosine similarity still behaves sensibly for the demo
 *   (similar text -> similar vectors) without any network call.
 * - LLM_PROVIDER=dashscope: calls DashScope's text-embedding-v3 model.
 */

const DIM = 1536;

export async function generateEmbedding(text: string): Promise<number[]> {
  const provider = process.env.LLM_PROVIDER || "mock";
  if (provider === "mock") {
    return mockEmbedding(text);
  }
  return dashscopeEmbedding(text);
}

function mockEmbedding(text: string): number[] {
  const vector = new Array(DIM).fill(0);
  const words = text.toLowerCase().split(/\W+/).filter(Boolean);

  for (const word of words) {
    const hash = simpleHash(word);
    for (let i = 0; i < 8; i++) {
      const idx = (hash + i * 97) % DIM;
      vector[idx] += 1;
    }
  }

  // normalize
  const magnitude = Math.sqrt(vector.reduce((sum, v) => sum + v * v, 0)) || 1;
  return vector.map((v) => v / magnitude);
}

function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

async function dashscopeEmbedding(text: string): Promise<number[]> {
  const apiKey = process.env.DASHSCOPE_API_KEY;
  const baseUrl =
    process.env.DASHSCOPE_BASE_URL || "https://dashscope-intl.aliyuncs.com/compatible-mode/v1";

  const response = await fetch(`${baseUrl}/embeddings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "text-embedding-v3",
      input: text
    })
  });

  if (!response.ok) {
    throw new Error(`DashScope embedding request failed: ${await response.text()}`);
  }

  const data = await response.json();
  return data.data?.[0]?.embedding ?? mockEmbedding(text);
}

export function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) return 0;
  let dot = 0;
  let magA = 0;
  let magB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    magA += a[i] * a[i];
    magB += b[i] * b[i];
  }
  if (magA === 0 || magB === 0) return 0;
  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}
