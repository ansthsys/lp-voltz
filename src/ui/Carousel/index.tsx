import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { twMerge } from 'tailwind-merge'
import { BoxGlass } from '..'
import { ArrowRightIcon } from '@heroicons/react/16/solid'

export type ItemCarousel = {
  tags?: string[]
  image: string
  date: string
  title: string
  description: string
}

type Props = {
  items: ItemCarousel[]
}

export default function Index({ items }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps'
  })

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaApi || !emblaThumbsApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi || !emblaThumbsApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaApi.selectedScrollSnap())
  }, [emblaApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return

    onSelect()

    emblaApi.on('select', onSelect).on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="embla">
      <div ref={emblaRef} className="embla__viewport overflow-hidden">
        <div className="embla__container flex">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={twMerge([
                'embla__slide',
                'grow-0 shrink-0 basis-full',
                'min-h-[30dvh] md:min-h-[50dvh] lg:min-h-[60dvh] xl:min-h-[70dvh]',
                'flex flex-col md:flex-row gap-5',
                'px-3'
              ])}
            >
              <div
                className={twMerge([
                  'order-last md:order-first',
                  'md:basis-5/12'
                ])}
              >
                <div>
                  <p className="text-gray-400 text-lg">{item.date}</p>
                  <p
                    className={twMerge([
                      'mt-3 mb-5 md:mt-5 md:mb-8',
                      'text-left text-balance font-semibold capitalize',
                      'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl',
                      'line-clamp-5'
                    ])}
                  >
                    {item.title}
                  </p>
                  <p className="line-clamp-3 text-balance text-xl text-black mb-8">
                    {item.description}
                  </p>
                  <div className="w-full">
                    <a
                      href="#"
                      className={twMerge([
                        'inline-flex items-center justify-center gap-3',
                        'text-xl font-medium',
                        'border-b-[3px] border-transparent hover:border-secondary-1',
                        'transition-all duration-150 ease-in-out delay-75'
                      ])}
                    >
                      Learn More
                      <ArrowRightIcon className="size-7 text-secondary-1" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className={twMerge([
                  'md:basis-7/12',
                  'h-56 sm:h-72 md:h-full w-full'
                ])}
              >
                <div
                  className={twMerge([
                    'relative',
                    'rounded-3xl overflow-hidden',
                    'h-full w-full'
                  ])}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />

                  <div className={twMerge(['absolute top-0 inset-x-0 p-5'])}>
                    <div
                      className={twMerge([
                        'md:w-4/5 lg:w-2/3 ml-auto',
                        'flex flex-wrap items-center justify-end',
                        'gap-2 md:gap-3'
                      ])}
                    >
                      {item.tags?.map((i, idx) => (
                        <BoxGlass key={idx} className="px-2 md:py-1 md:px-3">
                          <span className="text-xs md:text-sm font-medium">
                            {i}
                          </span>
                        </BoxGlass>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs my-8">
        <div
          ref={emblaThumbsRef}
          className="embla-thumbs__viewport overflow-hidden"
        >
          <div
            className={twMerge([
              'embla-thumbs__container',
              'flex flex-row items-center justify-center gap-2'
            ])}
          >
            {items.map((_, idx) => (
              <div key={idx} className={''}>
                <button
                  onClick={() => onThumbClick(idx)}
                  type="button"
                  className={twMerge([
                    'embla-thumbs__slide__number',
                    'rounded-full',
                    'transition-all duration-300 ease-in-out delay-100',
                    selectedIndex !== idx && 'hover:cursor-pointer',
                    selectedIndex === idx ? 'bg-primary-1' : 'bg-gray-200',
                    selectedIndex === idx ? 'w-10 h-3' : 'size-3'
                  ])}
                ></button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
