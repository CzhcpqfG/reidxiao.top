import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

const CARD_EASE = [0.22, 1, 0.36, 1] as const

export interface FeatureCardProps {
  index: number
  title: string
  number?: string
  icon?: string
  video?: string
  bottomText?: string
  checklist?: string[]
}

export function FeatureCard({
  index,
  title,
  number,
  icon,
  video,
  bottomText,
  checklist,
}: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const delay = index * 0.15

  return (
    <motion.div
      ref={ref}
      className="relative h-full w-full overflow-hidden rounded-2xl bg-[#212121] p-6"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.7, delay, ease: CARD_EASE }}
    >
      {video ? (
        <>
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={video}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <p
            className="absolute bottom-6 left-6 right-6 text-lg font-medium"
            style={{ color: '#E1E0CC' }}
          >
            {bottomText}
          </p>
        </>
      ) : (
        <div className="flex h-full flex-col">
          {icon && (
            <img
              src={icon}
              alt=""
              className="mb-6 h-10 w-10 rounded sm:h-12 sm:w-12"
              loading="lazy"
            />
          )}
          <h3 className="mb-6 text-xl font-medium text-primary">
            {title}
            {number && <span className="ml-2 text-primary/60">{number}</span>}
          </h3>

          <ul className="flex flex-col gap-3" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {checklist?.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-gray-400">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="mt-auto flex items-center gap-2 pt-6 text-sm font-medium text-primary"
          >
            Learn more
            <ArrowRight className="h-4 w-4" style={{ transform: 'rotate(-45deg)' }} />
          </a>
        </div>
      )}
    </motion.div>
  )
}
