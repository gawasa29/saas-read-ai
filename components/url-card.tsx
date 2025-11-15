"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { analysisWebsite, State } from "@/lib/actions"
import { useActionState } from "react"
import { Button } from "./ui/button"
import { Field, FieldGroup, FieldLabel } from "./ui/field"
import { Input } from "./ui/input"

export function UrlCard() {
  const initialState: State = { message: null, errors: {} }
  const [state, formAction] = useActionState(analysisWebsite, initialState)

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>input to your website</CardTitle>
        <CardDescription>
          Please enter the URL of the website you wish to read.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="website">Website</FieldLabel>
              <Input
                id="website"
                name="websiteurl"
                type="url"
                placeholder="https://example.com"
                required
              />
            </Field>
            <div id="url-error" aria-live="polite" aria-atomic="true">
              {state.errors?.url &&
                state.errors.url.map((error: string) => (
                  <p className="text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
            <Field>
              <Button type="submit">analysis</Button>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
