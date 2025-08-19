import { twMerge } from 'tailwind-merge'
import PipeImage from '@/assets/brother-yoon-0FTfiueNb8A-unsplash.jpg'
import SolarPanelImage from '@/assets/zbynek-burival-V4ZYJZJ3W4M-unsplash.jpg'

export default function index() {
  return (
    <div
      id="about"
      className={twMerge([
        'min-h-screen',
        'px-3 md:px-10 lg:px-15',
        'pt-28 pb-8'
      ])}
    >
      <div className={twMerge(['grid', 'grid-cols-1 md:grid-cols-5', 'mb-12'])}>
        <div className="col-span-1 md:col-span-2 mb-8 md:mb-0">
          <p className="font-bold text-xl">
            01 <span className="text-secondary-1">/</span>
          </p>
        </div>
        <div className="col-span-1 md:col-span-3">
          <p
            className={twMerge([
              'text-left text-pretty font-medium',
              'text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'
            ])}
          >
            Voltz exists to make clean energy accessible, measurable, and
            community-powered. Because sustainability only works if everyone can
            take part.
          </p>
        </div>
      </div>

      <div className={twMerge(['grid grid-cols-1 md:grid-cols-5 gap-3'])}>
        <div className="col-span-1 md:col-span-3">
          <div
            className={twMerge([
              'bg-pattern-diagonal bg-contain',
              'lg:min-h-72 p-3',
              'flex flex-col sm:flex-row md:flex-row xl:flex-col gap-5'
            ])}
          >
            <div
              className={twMerge([
                'w-full sm:w-1/2',
                'rounded-3xl overflow-hidden',
                'max-h-64 md:max-h-none'
              ])}
            >
              <img
                src={PipeImage}
                className="h-full w-full object-cover"
                alt="Pipe Image"
                loading="lazy"
              />
            </div>
            <div className={twMerge(['w-full sm:w-1/2'])}>
              <h6 className="text-xl font-medium italic">
                "We believe clean energy is not just technology, it's a movement
                for a better world."
              </h6>
              <p className="text-gray-600 font-medium">
                Arhansyah - Founder & CEO, Voltz
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2">
          <div
            className={twMerge([
              'w-full md:mt-40',
              'rounded-3xl overflow-hidden',
              'max-h-64 lg:max-h-none'
            ])}
          >
            <img
              src={SolarPanelImage}
              className="w-full object-cover object-center"
              alt="Solar Panel Image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
