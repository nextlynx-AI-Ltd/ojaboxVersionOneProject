import { Suspense } from "react"
import Customise from "./Customise"

export const dynamic = "force-dynamic"

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="container py-20 text-center">
          <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin mx-auto" />
        </div>
      }
    >
      <Customise />
    </Suspense>
  )
}