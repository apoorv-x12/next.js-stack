import dynamic from "next/dynamic"
import { Suspense } from "react"

const Globe = dynamic(() => import("@/components/Globe"))

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <Suspense fallback={<div>Loading...</div>}>
        <Globe />
      </Suspense>
    </main>
  )
}
