import { groq } from '@ai-sdk/groq';
import { wrapLanguageModel, extractReasoningMiddleware, CoreMessage } from 'ai';
import { streamText } from 'ai'

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

  async generate_text(messages: CoreMessage[]) {
    const result = streamText({
      model: this.model,
      messages,
      onFinish({ response }) {
        messages = response.messages;
      },
    });
    return result.toDataStreamResponse()
  }
}

const ai = new Ai()
ai.init()

export { ai }

