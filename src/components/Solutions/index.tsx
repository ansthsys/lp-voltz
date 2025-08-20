import { BoxGlass, Button } from '@/ui'
import { ArrowRightIcon } from '@heroicons/react/16/solid'
import { twMerge } from 'tailwind-merge'

export default function index() {
  return (
    <div
      id="solutions"
      className={twMerge([
        'bg-primary-1 text-white',
        'rounded-4xl overflow-hidden',
        'mx-3 md:mx-10 lg:mx-15 mt-28 mb-8',
        'px-4 py-10 md:px-8 md:py-14 lg:px-12 lg:py-20',
        'scroll-mt-28'
      ])}
    >
      <div
        className={twMerge([
          'flex flex-col md:flex-row',
          'gap-8 md:gap-5',
          'mb-16'
        ])}
      >
        <div>
          <p className="font-bold text-xl">
            03 <span className="text-secondary-1">/</span>
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <p
            className={twMerge([
              'text-left text-pretty font-medium',
              'text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'
            ])}
          >
            The World Can't Wait. Here's Why We Need Clean Energy Now.
          </p>
        </div>
      </div>

      <div
        className={twMerge([
          'bg-world-map-dotted bg-no-repeat',
          'bg-center md:bg-left-bottom',
          'bg-cover md:bg-contain',
          'grid gap-8 md:gap-12 lg:gap-3 grid-cols-1 lg:grid-cols-2',
          'pt-24 md:pt-52'
        ])}
      >
        <div
          className={twMerge([
            'order-first lg:order-last',
            'grid gap-8 md:gap-16',
            'grid-cols-1 md:grid-cols-3 lg:grid-cols-2'
          ])}
        >
          <div className="lg:col-start-2">
            <h6
              className={twMerge([
                'text-secondary-1 text-left text-pretty font-bold',
                'text-5xl md:text-6xl xl:text-7xl',
                'mb-3'
              ])}
            >
              40.9B tons
            </h6>
            <p className="text-lg">
              Global CO<sub>2</sub> emission in 2023
            </p>
          </div>
          <div>
            <h6
              className={twMerge([
                'text-secondary-1 text-left text-pretty font-bold',
                'text-5xl md:text-6xl xl:text-7xl',
                'mb-3'
              ])}
            >
              80%
            </h6>
            <p className="text-lg">
              Of global energy still comes from coal, oil, and gas.
            </p>
          </div>
          <div>
            <h6
              className={twMerge([
                'text-secondary-1 text-left text-pretty font-bold',
                'text-5xl md:text-6xl xl:text-7xl',
                'mb-3'
              ])}
            >
              -45%
            </h6>
            <p className="text-lg">
              Projected CO<sub>2</sub> Reduction Needed by 2030
            </p>
          </div>
        </div>
        <div
          className={twMerge([
            'grid',
            'items-end justify-start md:justify-end lg:justify-start'
          ])}
        >
          <BoxGlass
            glasses={false}
            className={twMerge([
              'flex items-center justify-center gap-3',
              'hover:cursor-default'
            ])}
          >
            <p className="capitalize font-medium ml-5 text-black">
              our solutions
            </p>
            <Button
              asLink
              href={'#about'}
              variant={'primary'}
              rounded={'full'}
              size={'sm'}
            >
              <ArrowRightIcon className="size-5 text-secondary-1" />
            </Button>
          </BoxGlass>
        </div>
      </div>
    </div>
  )
}
