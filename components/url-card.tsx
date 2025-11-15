import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import { Field, FieldGroup, FieldLabel } from "./ui/field"
import { Input } from "./ui/input"

export function UrlCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>input to your website</CardTitle>
        <CardDescription>
          Please enter the URL of the website you wish to read.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="website">Website</FieldLabel>
              <Input
                id="website"
                type="url"
                placeholder="https://example.com"
                required
              />
            </Field>

            <Field>
              <Button type="submit">analysis</Button>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
