"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import z from "zod"

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

  console.log("Analyzing website:", url)

  // Revalidate the cache for the result page and redirect the user.
  revalidatePath("/result")
  redirect("/result")
}
