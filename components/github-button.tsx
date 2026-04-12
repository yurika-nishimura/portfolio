"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GitHubButton() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* デコレーションライン */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-0.5 bg-border rounded-full" />
            <div className="w-3 h-3 rounded-full bg-primary/30" />
            <div className="w-16 h-0.5 bg-border rounded-full" />
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
            コードを見てみる
          </h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            GitHubでソースコードや過去のプロジェクトを
            <br className="hidden md:block" />
            公開しています
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-shadow bg-foreground text-background hover:bg-foreground/90"
            >
              <a
                href="https://github.com/yurika-nishimura"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Github className="w-6 h-6" />
                GitHubを見る
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
