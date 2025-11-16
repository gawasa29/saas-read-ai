"use server"

import { anthropic } from "@ai-sdk/anthropic"
import { generateText } from "ai"
import z from "zod"
import { ANALYZE_AI_PROMPT } from "./prompt/analyze-ai-prompt"

const websiteSchema = z.object({
  url: z.httpUrl(),
})

const AnalysisWebsite = websiteSchema

export type State = {
  errors?: {
    url?: string[]
  }
  message?: string | null
}

export async function analysisWebsite(prevState: State, formData: FormData) {
  // Validate form fields using Zod
  const validatedFields = AnalysisWebsite.safeParse({
    url: formData.get("websiteurl"),
  })

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    const { fieldErrors } = z.flattenError(validatedFields.error)
    console.log("Validation errors:", fieldErrors)
    return {
      errors: fieldErrors,
      message: "Missing Fields. Failed to Analysis Website.",
    }
  }

  const { url } = validatedFields.data

  try {
    const model = anthropic("claude-sonnet-4-5-20250929")

    const userPrompt: string = await ANALYZE_AI_PROMPT(url)

    const result = await generateText({
      model: model,
      prompt: userPrompt,
      tools: {
        web_fetch: anthropic.tools.webFetch_20250910({ maxUses: 1 }),
      },
    })

    console.log("Anthropic result:", result)
    console.log("Anthropic result:", result.response)
    console.log("Anthropic result:", result.text)
    return { errors: {}, message: result.text }
  } catch (error) {
    return {
      message: "Error during website analysis. Please try again later.",
    }
  }
}
