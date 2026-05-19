"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* デコレーション要素 */}
      <div className="absolute top-10 left-10 w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary/10" />
      <div className="absolute top-32 right-20 w-8 h-8 md:w-12 md:h-12 rounded-full bg-secondary" />
      <div className="absolute bottom-20 left-1/4 w-6 h-6 rounded-full bg-primary/20" />
      <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-muted" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* 名前のバッジ */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              <span className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />
              Webコーダー
            </span>
          </motion.div>
          
          {/* 名前 */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-4 tracking-tight">
            <span className="text-primary">Your</span> Name
          </h1>
          
          {/* キャッチコピー */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 font-semibold"
          >
            丁寧なコーディングで、
            <br className="md:hidden" />
            イメージを形に。
          </motion.p>
          
          {/* 自己紹介 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
              Webサイトのコーディングをメインに行っているWebコーダーです。
              <br />
              HTML / CSSを得意とし、JavaScriptやEJSはAI等を活用しながら対応できます。
              <br />
              ClaudeやClaudeCodeを実務で活用しており、AIを取り入れながらデザインとコーディング両方に関わっていけるクリエイターを目指しています。
            </p>
          </motion.div>
          
          {/* スクロールインジケーター */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16"
          >
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <span className="text-sm">Scroll</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
