import Link from "next/link"
import { ShoppingBasket } from "lucide-react"
import { Button } from "@/components/ui/button"

const NotFound = () => (
  <div className="flex min-h-[60vh] items-center justify-center">
    <div className="text-center">
      <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
        <ShoppingBasket className="h-10 w-10 text-primary" />
      </div>
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-xl font-semibold mb-2">Page not found</p>
      <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
        Looks like this page doesn't exist. Let's get you back to restocking your kitchen.
      </p>
      <Button asChild size="lg">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  </div>
)

export default NotFound