import { twMerge } from 'tailwind-merge'
import { BoxGlass, Button } from '@/ui'

const NAV_ITEMS = [
  { title: 'volt', url: 'volt' },
  { title: 'about', url: 'about' },
  { title: 'solutions', url: 'solutions' },
  { title: 'impact', url: 'impact' },
  { title: 'projects', url: 'projects' }
]

export default function index() {
  return (
    <header
      className={twMerge([
        'w-full fixed inset-x-0 top-8 z-[1]',
        'flex flex-row items-center justify-between',
        'px-3 md:px-10 lg:px-15'
      ])}
    >
      <nav>
        <BoxGlass className="flex flex-row gap-0">
          {NAV_ITEMS?.map((i, idx) => {
            const isFirst = idx === 0
            const className = twMerge([
              'capitalize hover:bg-inherit text-sm',
              'py-2 px-4 rounded-full font-medium',
              isFirst ? 'bg-white font-bold italic' : 'bg-transparent'
            ])

            return (
              <a key={idx} href={`#${i.url}`} className={className}>
                {i.title}
              </a>
            )
          })}
        </BoxGlass>
      </nav>

      <Button
        type="button"
        variant={'primary'}
        size={'md'}
        className="capitalize"
      >
        Get in Touch
      </Button>
    </header>
  )
}
