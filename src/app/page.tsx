
import { LogOutButton } from "@/auth/nextjs/components/LogOutButton"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default async function HomePage() {
  const fullUser = null

  return (
    <div className="container mx-auto p-4">
      {fullUser == null ? (
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div> 
      ) : (
        <Card className="max-w-[500px] mt-4">
            
            <LogOutButton />
        </Card>
      )}
    </div>
  )
}