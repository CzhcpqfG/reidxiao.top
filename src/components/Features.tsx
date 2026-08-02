import { WordsPullUpMultiStyle, type TextSegment } from './WordsPullUpMultiStyle'
import { FeatureCard } from './FeatureCard'

const FEATURES_HEADER: TextSegment[] = [
  { text: 'AI-native engineering, end to end.', className: 'text-primary' },
  { text: 'From architecture to delivery — powered by AI.', className: 'text-gray-500' },
]

const FEATURE_CARDS = [
  {
    title: '',
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4',
    bottomText: 'Building the Moat of Intelligence.',
  },
  {
    title: 'AI Agent.',
    number: '01',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
    checklist: [
      'From answering questions to solving problems.',
      'Tool calling and long-horizon planning.',
      'Multi-step reasoning over complex tasks.',
      'Persistent memory across sessions.',
    ],
  },
  {
    title: 'Enterprise AI.',
    number: '02',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
    checklist: [
      'Smart office and knowledge assistants.',
      'Automated business workflows.',
      'AI digital employees in production.',
    ],
  },
  {
    title: 'AI Native.',
    number: '03',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
    checklist: [
      'Product forms only AI makes possible.',
      'Redefining human-machine collaboration.',
      'Exploring the next interface.',
    ],
  },
]

export function Features() {
  return (
    <section className="relative min-h-screen bg-black px-4 py-24 md:px-6 md:py-32">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />

      <div className="relative mx-auto max-w-7xl">
        <WordsPullUpMultiStyle
          segments={FEATURES_HEADER}
          className="mb-12 block text-xl font-normal sm:mb-16 sm:text-2xl md:text-3xl lg:text-4xl"
        />

        <div className="grid grid-cols-1 gap-3 sm:gap-2 md:grid-cols-2 md:gap-1 lg:h-[480px] lg:grid-cols-4">
          {FEATURE_CARDS.map((card, i) => (
            <FeatureCard key={i} index={i} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
