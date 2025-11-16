"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Spinner } from "@/components/ui/spinner"
import { analysisWebsite, State } from "@/lib/actions"
import { useActionState } from "react"
import { Button } from "./ui/button"
import { Field, FieldGroup, FieldLabel } from "./ui/field"
import { Input } from "./ui/input"

export function UrlCard() {
  const initialState: State = { message: null, errors: {} }
  const [state, formAction, isPending] = useActionState(
    analysisWebsite,
    initialState
  )

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
              <Button type="submit" disabled={isPending}>
                {isPending ? (
                  <>
                    <Spinner />
                    Analyzing...
                  </>
                ) : (
                  "Analysis"
                )}
              </Button>
            </Field>
          </FieldGroup>
        </form>
        <div id="result" aria-live="polite" aria-atomic="true">
          {state.message && (
            <p className="whitespace-pre-wrap pt-4">{state.message}</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
