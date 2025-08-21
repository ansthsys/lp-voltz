import { twMerge } from 'tailwind-merge'
import { ArrowRightIcon } from '@heroicons/react/16/solid'
import { BoxGlass, Button, Carousel } from '@/ui'
import type { ItemCarousel } from '@/ui/Carousel'
import Img1 from '@/assets/sheng-hu-0wsMNnEFaTo-unsplash.jpg'
import Img2 from '@/assets/mohd-assharaf-26kWl2Sfgso-unsplash.jpg'
import Img3 from '@/assets/ant-rozetsky-SLIFI67jv5k-unsplash.jpg'

const CAROUSEL_ITEMS: ItemCarousel[] = [
  {
    date: '20 August 2025',
    description:
      'Powering three remote villages with a solar-wind ' +
      'hybrid system, ending years of diesel reliance',
    image: Img1,
    title: 'Hybrid microgrid for energy independence',
    tags: ['Tech', 'Solution']
  },
  {
    date: '20 August 2025',
    description:
      'Qui quis deserunt et cupidatat qui consectetur occaecat non. ' +
      'Laborum Lorem qui ex in voluptate quis deserunt. ' +
      'Adipisicing eu officia non nulla ex.',
    image: Img2,
    title: 'Quisque non lectus vitae lacus porttitor iaculis',
    tags: ['Mine', 'Solution']
  },
  {
    date: '20 August 2025',
    description:
      'Cras non velit in erat hendrerit auctor. ' +
      'Ut ac enim commodo, eleifend nisi eget, congue neque. ' +
      'Nulla at ipsum nec elit cursus suscipit',
    image: Img3,
    title: 'Curabitur nec massa pellentesque, vulputate lectus nec',
    tags: ['Tech', 'Solution']
  }
]

export default function index() {
  return (
    <div
      id="projects"
      className={twMerge([
        'min-h-screen',
        'px-3 md:px-8 lg:px-12',
        'pt-28 pb-8'
      ])}
    >
      <div
        className={twMerge([
          'flex flex-col lg:flex-row',
          'gap-8 md:gap-5',
          'mb-8 md:mb-16 lg:mb-28'
        ])}
      >
        <div className="min-w-10">
          <p className="font-bold text-xl">
            05 <span className="text-secondary-1">/</span>
          </p>
        </div>
        <div className={twMerge(['flex gap-5 flex-col md:flex-row w-full'])}>
          <div className="basis-1/2">
            <p
              className={twMerge([
                'text-left text-pretty font-medium capitalize',
                'text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'
              ])}
            >
              Clean energy across communities
            </p>
          </div>
          <div className="basis-1/2">
            <div
              className={twMerge([
                'w-full h-full',
                'flex items-center justify-start md:justify-end'
              ])}
            >
              <BoxGlass
                glasses={false}
                className={twMerge([
                  'flex items-center justify-center gap-3',
                  'hover:cursor-default',
                  'bg-zinc-100 border-zinc-200/50',
                  'w-max'
                ])}
              >
                <p className="capitalize font-medium ml-5 text-black">
                  All Projects
                </p>
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
        </div>
      </div>

      <div className="h-full">
        <Carousel items={CAROUSEL_ITEMS} />
      </div>
    </div>
  )
}
