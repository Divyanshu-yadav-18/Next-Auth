import { getCurrentUser } from "@/auth/nextjs/currentuser"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ToggleRoleButton } from "./ToggleRoleButton"

export default async function PrivatePage() {
  const currentuser = await getCurrentUser({redirectIfNotFound: true})
  return (
   <div className="container mx-auto p-4">
      <h1 className="text-4xl mb-8">Private: {currentuser.role}</h1>
      <div className="flex gap-2">
        <ToggleRoleButton />
        <Button asChild>
          <Link href="/">Home</Link>
        </Button>
      </div>
    </div>)
}