import { BoxGlass, Button } from '@/ui'
import { ArrowRightIcon } from '@heroicons/react/16/solid'
import { twMerge } from 'tailwind-merge'

export default function index() {
  return (
    <div
      id="solutions"
      className={twMerge([
        'lg:min-h-[40dvh]',
        'bg-secondary-1',
        'rounded-4xl overflow-hidden',
        'mx-3 md:mx-10 lg:mx-15 mb-8',
        'px-5 py-8 md:px-8 md:py-12',
        'flex flex-col justify-between gap-12'
      ])}
    >
      <p
        className={twMerge([
          'w-full sm:w-2/3 md:w-1/2',
          'text-left text-pretty font-semibold capitalize',
          'text-2xl md:text-3xl lg:text-4xl xl:text-5xl'
        ])}
      >
        Your Next Step Toward a Sustainable Future Starts Here
      </p>
      <div className="w-max">
        <BoxGlass
          glasses={false}
          className={twMerge([
            'flex items-center justify-center gap-3',
            'hover:cursor-default'
          ])}
        >
          <p className="capitalize font-medium ml-5 text-black">get started</p>
          <Button
            asLink
            href={'#'}
            variant={'primary'}
            rounded={'full'}
            size={'sm'}
          >
            <ArrowRightIcon className="size-5 text-secondary-1" />
          </Button>
        </BoxGlass>
      </div>
    </div>
  )
}
