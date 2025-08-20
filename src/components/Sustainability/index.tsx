import { twMerge } from 'tailwind-merge'

export default function index() {
  return (
    <div
      id="sustainability"
      className={twMerge([
        'min-h-screen',
        'px-3 md:px-10 lg:px-15',
        'pt-28 pb-8',
        'bg-solutions bg-center bg-no-repeat bg-cover md:bg-none'
      ])}
    >
      <div className="mb-12">
        <p className="font-bold text-xl text-right">
          <span className="text-white md:text-black">02</span>
          <span className="text-secondary-1">/</span>
        </p>
      </div>
      <div
        className={twMerge([
          'min-h-[68dvh]',
          'flex flex-col items-center justify-center'
        ])}
      >
        <div
          className={twMerge([
            'hidden md:block relative z-[1]',
            'h-[68dvh] md:h-80 w-full md:w-4/5 lg:w-2/3 xl:w-1/2',
            'md:rounded-full overflow-hidden',
            'bg-none bg-center bg-no-repeat bg-cover md:bg-solutions'
          ])}
        >
          <h6
            className={twMerge([
              'text-5xl sm:text-7xl md:text-8xl lg:text-9xl',
              'font-semibold text-white',
              'absolute top-1/2 left-1/2 translate-[-50%]'
            ])}
          >
            Sustainability
          </h6>
        </div>
        <h6
          className={twMerge([
            'text-5xl sm:text-7xl md:text-8xl lg:text-9xl',
            'font-semibold text-white md:text-secondary-1',
            'absolute'
          ])}
        >
          Sustainability
        </h6>
      </div>
    </div>
  )
}
