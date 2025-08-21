import { twMerge } from 'tailwind-merge'

export default function index() {
  return (
    <div
      className={twMerge([
        'lg:min-h-[40dvh]',
        'bg-primary-1 text-white',
        'rounded-4xl overflow-hidden',
        'mx-3 md:mx-10 lg:mx-15',
        'px-5 py-8 md:px-8 md:py-12',
        'grid grid-cols-1  gap-8 md:gap-14 lg:gap-52'
      ])}
    >
      <div className="col-span-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14">
          <div className="col-span-1">
            <div>
              <h1
                className={twMerge([
                  'text-3xl sm:text-5xl md:text-7xl lg:text-9xl',
                  'font-neue-machina-inktrap font-black italic',
                  'text-white'
                ])}
              >
                Volt<span className="text-secondary-1">z</span>
              </h1>
            </div>
          </div>
          <div className="col-span-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              <div className="col-span-1">
                <div>
                  <p className="text-base lg:text-lg font-medium capitalize mb-2">
                    Company
                  </p>
                  <p className="text-gray-400 text-base lg:text-lg">About Us</p>
                  <p className="text-gray-400 text-base lg:text-lg">Careers</p>
                  <p className="text-gray-400 text-base lg:text-lg">
                    Commitment
                  </p>
                  <p className="text-gray-400 text-base lg:text-lg">
                    Resources
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div>
                  <p className="text-base lg:text-lg font-medium capitalize mb-2">
                    Solutions
                  </p>
                  <p className="text-gray-400 text-base lg:text-lg">Solar</p>
                  <p className="text-gray-400 text-base lg:text-lg">Wind</p>
                  <p className="text-gray-400 text-base lg:text-lg">Hybrid</p>
                </div>
              </div>
              <div className="col-span-1">
                <div>
                  <p className="text-base lg:text-lg font-medium capitalize mb-2">
                    Contact Us
                  </p>
                  <p className="text-gray-400 text-base lg:text-lg">
                    Contact Form
                  </p>
                  <p className="text-gray-400 text-base lg:text-lg">
                    Partnerships
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14">
          <div className="col-span-1">
            <div>
              <p className="text-base lg:text-lg font-medium capitalize mb-2">
                About Voltz
              </p>
              <p
                className={twMerge([
                  'text-gray-400 text-balance',
                  'text-base lg:text-lg',
                  'w-full md:w-4/5 xl:w-2/3'
                ])}
              >
                Voltz delivers renewable energy solutions that are accessible,
                measurable, and community-powered.
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div
              className={twMerge([
                'h-full w-full',
                'flex flex-row flex-wrap gap-3',
                'items-end justify-start lg:justify-end'
              ])}
            >
              <p className="text-base lg:text-lg font-medium capitalize">
                &copy; Voltz
              </p>
              <p className="text-base lg:text-lg font-medium capitalize">
                Privacy Policy
              </p>
              <p className="text-base lg:text-lg font-medium capitalize">
                Term of Use
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
