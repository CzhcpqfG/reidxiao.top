import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export interface TextSegment {
  text: string
  className?: string
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[]
  className?: string
}

const EASE = [0.16, 1, 0.3, 1] as const

export function WordsPullUpMultiStyle({ segments, className }: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  let wordIndex = 0

  return (
    <motion.span ref={ref} className={`inline-flex flex-wrap justify-center ${className ?? ''}`}>
      {segments.map((seg, si) => {
        const words = seg.text.split(' ')
        return (
          <span key={si} className="inline-flex flex-wrap justify-center">
            {words.map((word, wi) => {
              const delay = wordIndex * 0.08
              wordIndex++
              return (
                <motion.span
                  key={wi}
                  className={`inline-block ${seg.className ?? ''}`}
                  style={{ marginRight: '0.25em' }}
                  initial={{ y: 20 }}
                  animate={inView ? { y: 0 } : { y: 20 }}
                  transition={{ duration: 0.7, delay, ease: EASE }}
                >
                  {word}
                </motion.span>
              )
            })}
          </span>
        )
      })}
    </motion.span>
  )
}
