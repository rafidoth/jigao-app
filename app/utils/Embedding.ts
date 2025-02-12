import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { google } from '@ai-sdk/google';
import { embedMany } from 'ai';



export async function Chunking(text: string): Promise<string[]> {
  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 250,
    chunkOverlap: 50,
  });
  const chunks: string[] = await textSplitter.splitText(text);
  console.log(chunks)
  return chunks;
}

export const generateEmbeddings = async (
  value: string,
): Promise<Array<{ embedding: number[]; content: string }>> => {
  const chunks = await Chunking(value);
  const embeddingModel = google.textEmbeddingModel('text-embedding-004')
  const { embeddings } = await embedMany({
    model: embeddingModel,
    values: chunks,
  });

  return embeddings.map((e, i) => ({ content: chunks[i], embedding: e }));
};
