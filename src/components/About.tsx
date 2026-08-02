import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import { WordsPullUpMultiStyle, type TextSegment } from './WordsPullUpMultiStyle'
import { AnimatedLetter } from './AnimatedLetter'

const HEADING_SEGMENTS: TextSegment[] = [
  { text: 'I am Reid,', className: 'font-normal' },
  { text: 'founder of MOAT.', className: 'font-serif italic' },
  {
    text: 'We build the moat of intelligence.',
    className: 'font-normal',
  },
]

const BODY_TEXT =
  'I founded MOAT in Shenzhen to turn intelligence into a durable advantage. Across three parallel lines — AI agents that solve problems, enterprise AI that enters real workflows, and AI-native products — we turn every practice into reusable assets, compounding long-term moats step by step. Intelligence is built, not born.'

export function About() {
  const bodyRef = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: bodyRef,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = Array.from(BODY_TEXT)

  return (
    <section className="bg-black px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-6xl rounded-3xl bg-[#101010] px-6 py-16 text-center md:px-16 md:py-24">
        <p className="text-primary mb-8 text-[10px] sm:text-xs md:mb-12">Profile</p>

        <WordsPullUpMultiStyle
          segments={HEADING_SEGMENTS}
          className="text-white text-3xl font-normal leading-[0.95] sm:leading-[0.9] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        />

        <p
          ref={bodyRef}
          className="text-white mx-auto mt-10 max-w-2xl text-xs leading-relaxed sm:text-sm md:mt-14 md:text-base"
        >
          {chars.map((char, i) => (
            <AnimatedLetter
              key={i}
              char={char}
              scrollYProgress={scrollYProgress}
              index={i}
              total={chars.length}
            />
          ))}
        </p>
      </div>
    </section>
  )
}
