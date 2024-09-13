import { google } from "@ai-sdk/google"
import { CoreMessage, streamText } from "ai"

export async function POST(request: Request) {
    const { messages }: { messages: CoreMessage[] } = await request.json()

    const result = await streamText({
        model: google("gemini-1.5-flash"),
        messages
    })
    return result.toDataStreamResponse()
}