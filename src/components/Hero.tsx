import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Navbar } from './Navbar'
import { WordsPullUp } from './WordsPullUp'

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4'

const EASE = [0.16, 1, 0.3, 1] as const

export function Hero() {
  return (
    <section className="h-screen w-full p-4 md:p-6">
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="noise-overlay pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.7]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        <Navbar />

        <div className="absolute bottom-0 left-0 right-0 grid grid-cols-12 items-end gap-4 px-6 pb-8 md:px-10 md:pb-12">
          <div className="col-span-12 lg:col-span-8">
            <WordsPullUp
              text="MOAT"
              showAsterisk
              className="block font-art italic leading-[0.85] tracking-[-0.03em] text-[#E1E0CC] text-[16vw] sm:text-[15vw] md:text-[14vw] lg:text-[13vw] xl:text-[12vw] 2xl:text-[13vw]"
            />
          </div>

          <div className="col-span-12 flex flex-col items-start gap-6 lg:col-span-4 lg:items-end">
            <motion.p
              className="text-primary/70 text-xs leading-[1.2] sm:text-sm md:text-base"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
            >
              I'm Reid — an AI-native developer and full-stack engineer. I drive the full
              workflow from tech selection and architecture to delivery, shipping products that
              weave AI into real business scenarios.
            </motion.p>

            <motion.a
              href="https://moat.best"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full bg-primary py-2 pl-5 pr-2 font-medium text-sm text-black transition-all hover:gap-3 sm:text-base"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
            >
              <span>Join the Lab</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-all duration-300 group-hover:scale-110 sm:h-10 sm:w-10">
                <ArrowRight className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
