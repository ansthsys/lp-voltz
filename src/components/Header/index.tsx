import { twMerge } from 'tailwind-merge'
import { Button } from '@/ui'

const NAV_ITEMS = [
  { title: 'volt', url: 'volt' },
  { title: 'about', url: 'about' },
  { title: 'solutions', url: 'solutions' },
  { title: 'impact', url: 'impact' },
  { title: 'projects', url: 'projects' }
]

export default function index() {
  return (
    <header className="w-full flex flex-row items-center justify-between fixed inset-x-0 top-8 px-3 md:px-10 lg:px-15">
      <nav className="flex flex-row gap-0 bg-white/70 backdrop-blur-md p-[2px] border-2 border-white/75 shadow-xs shadow-gray-100/80 rounded-full">
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
