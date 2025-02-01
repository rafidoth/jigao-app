import { groq } from '@ai-sdk/groq';
import { wrapLanguageModel, extractReasoningMiddleware } from 'ai';
import { generateText } from 'ai'

class Ai {
  model: any
  constructor() {
    this.model = null
  }

  init() {
    this.model = wrapLanguageModel({
      model: groq('deepseek-r1-distill-llama-70b'),
      middleware: extractReasoningMiddleware({ tagName: 'think' }),
    });
  }

  async generate_text() {
    const { text } = await generateText({
      model: this.model,
      prompt: "Tell me a joke",
    })
    return text
  }
}

const ai = new Ai()
ai.init()

export { ai }

