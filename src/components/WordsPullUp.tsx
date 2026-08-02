import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface WordsPullUpProps {
  text: string
  className?: string
  showAsterisk?: boolean
}

const EASE = [0.16, 1, 0.3, 1] as const

export function WordsPullUp({ text, className, showAsterisk = false }: WordsPullUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const words = text.split(' ')

  return (
    <span ref={ref} className={className} style={{ display: 'inline-block' }}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1
        return (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ y: 20 }}
            animate={inView ? { y: 0 } : { y: 20 }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
          >
            {word}
            {isLast && showAsterisk ? (
              <span className="relative inline-block">
                <span
                  className="absolute leading-none text-[0.31em]"
                  style={{ top: '0.65em', right: '-0.3em' }}
                >
                  *
                </span>
              </span>
            ) : (
              '\u00A0'
            )}
          </motion.span>
        )
      })}
    </span>
  )
}
