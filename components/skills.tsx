"use client"

import { motion } from "framer-motion"

const codingTools = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "EJS",
  "レスポンシブデザイン",
  "VS Code",
]

const designTools = [
  "Figma",
  "Photoshop",
]

const aiTools = [
  "V0",
  "Claude",
  "ClaudeCode",
  "NotebookLM",
]

const otherTools = [
  "GitHub",
  "Googleスプレッドシート",
]

const chatTools = [
  "Slack",
  "Chatwork",
]

const businessSkills = [
  "マニュアル作成",
  "請求書・見積書作成",
  "データ集計・分析",
  "進行管理",
  "四則演算",
  "VLOOKUP",
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

interface SkillCategoryProps {
  title: string
  skills: string[]
  dotStyle?: string
}

function SkillCategory({ title, skills, dotStyle = "bg-primary" }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
        <span className={`w-3 h-3 rounded-full ${dotStyle}`} />
        {title}
      </h3>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap gap-3"
      >
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-4 py-2 bg-card border-2 border-border text-foreground text-sm font-medium rounded-full shadow-sm hover:border-primary hover:shadow-md transition-all cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  )
}

export function Skills() {
  return (
    <section className="py-20 md:py-28">
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
              SKILLS
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-primary/20 -z-10 rounded-full" />
            </span>
          </h2>
          <p className="text-muted-foreground">スキル一覧</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          <SkillCategory 
            title="コーディング" 
            skills={codingTools} 
            dotStyle="bg-primary/70"
          />
          
          <SkillCategory 
            title="デザインツール" 
            skills={designTools} 
            dotStyle="bg-primary/70"
          />
          
          <SkillCategory 
            title="AIツール" 
            skills={aiTools} 
            dotStyle="bg-primary/70"
          />
          
          <SkillCategory 
            title="その他ツール" 
            skills={otherTools} 
            dotStyle="bg-primary/70"
          />
          
          <SkillCategory 
            title="チャットツール" 
            skills={chatTools} 
            dotStyle="bg-primary/70"
          />
          
          <SkillCategory 
            title="業務スキル" 
            skills={businessSkills} 
            dotStyle="bg-primary/70"
          />
        </div>
      </div>
    </section>
  )
}
