import { Hero } from "@/components/hero"
import { Works } from "@/components/works"
import { Skills } from "@/components/skills"
import { GitHubButton } from "@/components/github-button"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Works />
      <Skills />
      <GitHubButton />
      <Footer />
    </main>
  )
}
