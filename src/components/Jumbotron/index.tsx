import { BoxGlass, Button } from '@/ui'
import { ArrowDownIcon } from '@heroicons/react/16/solid'
import { twMerge } from 'tailwind-merge'

export default function index() {
  return (
    <div
      className={twMerge([
        'min-h-screen px-3 md:px-10 lg:px-15',
        'bg-jumbotron bg-no-repeat bg-center bg-cover'
      ])}
    >
      <div
        className={twMerge([
          'relative min-h-screen w-full',
          'flex items-center justify-center'
        ])}
      >
        <h1
          className={twMerge([
            'text-center text-pretty',
            'text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[13rem] 2xl:15rem',
            'font-semibold text-white/50 leading-none'
          ])}
        >
          New Energy
        </h1>

        <BoxGlass
          className={twMerge([
            'absolute bottom-16',
            'flex items-center justify-center gap-3',
            'hover:cursor-default'
          ])}
        >
          <p className="capitalize font-medium ml-5">our mission</p>
          <Button
            asLink
            href={'#about'}
            variant={'primary'}
            rounded={'full'}
            size={'sm'}
          >
            <ArrowDownIcon className="size-5 text-secondary-1" />
          </Button>
        </BoxGlass>
      </div>
    </div>
  )
}
