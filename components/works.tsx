"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { url } from "inspector"

const works = [
  {
    title: "株式会社SAIMON コーポレートサイト",
    description: "ワイヤーフレーム作成からディレクション、コーディングまでを担当。HTML / CSSを使用したレスポンシブ対応のコーポレートサイトを制作。JavaScriptはAIツールや参考資料を活用しながら実装。",
    tags: ["HTML", "CSS", "JavaScript", "Claude", "Figma",],
    color: "bg-primary/10",
    url: "https://sa-imon.com/",
    wireframeImages: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PC-EvsiIVEM4SL8LC9ambbZklkdPpMZgu.png",
        alt: "トップページ",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PC-pem7shJvv7v4GGl4Vni72MUggi1fFr.png",
        alt: "サービスページ",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PC-Agv0qmQ4wIyEvDkR96L5tlAy8Jmk5t.png",
        alt: "Web Servicesページ",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PC-XZnHaovX84a8MrNmU0vSZUstvJNgDq.png",
        alt: "Import & Exportページ",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PC-cumF7JTEA62tKPa7FpNG4FDndH9aa0.png",
        alt: "Collaboration Businessページ",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PC-TnfZFFoGdoTj8KYzHtqJttNU0yGaxW.png",
        alt: "Aboutページ",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PC-JKjOkDyiaekYAxob1YN1mN49RwN6jE.png",
        alt: "お問い合わせ入力ページ",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PC-1-yveJDdaaXhXsMJh7s6qC1QPRYx4gTT.png",
        alt: "お問い合わせエラー表示",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PC-2-sPn1GwLa1sRGEIOekg2DClLQ5OhFT6.png",
        alt: "お問い合わせ確認ページ",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PC-3-1JXcIR3YzI2c73pHWE95xF3SUrLwOo.png",
        alt: "お問い合わせ完了ページ",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PC-1-4gdeGkjg5CrFDdv6vndEjWIgscKyhv.png",
        alt: "プライバシーポリシーページ",
      },
    ],
    commentImages: [
      { 
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20248-uMDYsVWWBfFqGZ9YW0J5hqvcvPbJG4.png", 
        alt: "トップページ（コメント付き）" 
      },
      { 
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20249-hlC6hGgpLoeRE5b7D5OAECDQcrPwEO.png", 
        alt: "Serviceページ（コメント付き）" 
      },
      { 
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20250-fFVVc87b7ntgTMxKJaPVciP871iNiE.png", 
        alt: "Web Servicesページ（コメント付き）" 
      },
      { 
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20251-VEueDRkEEdN90t7jCqN3gFcBt8SxwW.png", 
        alt: "Import & Exportページ（コメント付き）" 
      },
      { 
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20252-wwRIp9kJJ9alBrLd8A2nIl8GpePFWy.png", 
        alt: "Collaboration Businessページ（コメント付き）" 
      },
      { 
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20253-fWaCeQdoHnO9RXXl8Wz8BXQf8Xu681.png", 
        alt: "Aboutページ（コメント付き）" 
      },
      { 
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20255-ddxzowjXSk6kAB1DuscbpkQeDCX4XE.png", 
        alt: "Privacy Policyページ（コメント付き）" 
      },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

type TabType = "wireframe" | "comment"

export function Works() {
  const [selectedWork, setSelectedWork] = useState<typeof works[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState<TabType>("wireframe")

  const openModal = (work: typeof works[0]) => {
    setSelectedWork(work)
    setCurrentImageIndex(0)
    setActiveTab("wireframe")
  }

  const closeModal = () => {
    setSelectedWork(null)
    setCurrentImageIndex(0)
    setActiveTab("wireframe")
  }

  const getCurrentImages = () => {
    if (!selectedWork) return []
    return activeTab === "wireframe" 
      ? selectedWork.wireframeImages 
      : selectedWork.commentImages.filter(img => img.src !== "")
  }

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    const images = getCurrentImages()
    if (images.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    const images = getCurrentImages()
    if (images.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? images.length - 1 : prev - 1
      )
    }
  }

  const currentImages = getCurrentImages()

  return (
    <>
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          {/* セクションタイトル */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="inline-block text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="relative">
                WORKS
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-primary/20 -z-10 rounded-full" />
              </span>
            </h2>
            <p className="text-muted-foreground">制作実績</p>
          </motion.div>

          {/* カード一覧 */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 max-w-xl mx-auto"
          >
            {works.map((work, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card 
                  className="group relative overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl cursor-pointer h-full"
                  onClick={() => openModal(work)}
                >
                  <CardContent className="p-6">
                    {/* デコレーション */}
                    <div className={`absolute top-0 right-0 w-24 h-24 ${work.color} rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity`} />
                    
                    {/* コンテンツ */}
                    <div className="relative">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {work.title}
                        </h3>
                        <a href={work.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </a>
                      </div>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {work.description}
                      </p>
                      
                      {/* タグ */}
                      <div className="flex flex-wrap gap-2">
                        {work.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-background text-foreground text-xs font-medium rounded-full border border-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* モーダル */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* ヘッダー */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div>
                  <h3 className="text-lg font-bold text-foreground">{selectedWork.title}</h3>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                >
                  <X className="w-6 h-6 text-foreground" />
                </button>
              </div>

              {/* タブ */}
              <div className="flex border-b border-border bg-secondary/30">
                <button
                  onClick={() => handleTabChange("wireframe")}
                  className={`flex-1 py-3 px-4 text-sm font-semibold transition-all relative ${
                    activeTab === "wireframe"
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  ワイヤーフレーム
                  {activeTab === "wireframe" && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-full"
                    />
                  )}
                </button>
                <button
                  onClick={() => handleTabChange("comment")}
                  className={`flex-1 py-3 px-4 text-sm font-semibold transition-all relative ${
                    activeTab === "comment"
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  コメント付き
                  {activeTab === "comment" && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-full"
                    />
                  )}
                </button>
              </div>

              {/* 画像エリア */}
              <div className="relative bg-muted">
                {currentImages.length > 0 ? (
                  <>
                    <div className="relative w-full h-[55vh] overflow-y-auto">
                      <Image
                        src={currentImages[currentImageIndex].src}
                        alt={currentImages[currentImageIndex].alt}
                        width={800}
                        height={1200}
                        className="w-full h-auto object-contain"
                        priority
                      />
                    </div>

                    {/* 画像タイトル */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-card/90 px-3 py-1 rounded-full shadow-md">
                      <p className="text-xs text-foreground font-medium">
                        {currentImages[currentImageIndex].alt}
                      </p>
                    </div>

                    {/* ナビゲーションボタン */}
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-card/90 rounded-full shadow-lg hover:bg-card transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6 text-foreground" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-card/90 rounded-full shadow-lg hover:bg-card transition-colors"
                    >
                      <ChevronRight className="w-6 h-6 text-foreground" />
                    </button>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-[55vh]">
                    <p className="text-muted-foreground">画像がまだアップロードされていません</p>
                  </div>
                )}
              </div>

              {/* サムネイルとページネーション */}
              {currentImages.length > 0 && (
                <div className="p-4 border-t border-border">
                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    {currentImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          idx === currentImageIndex 
                            ? "bg-primary w-6" 
                            : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-2">
                    {currentImageIndex + 1} / {currentImages.length}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
