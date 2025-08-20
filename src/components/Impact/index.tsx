import { useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { ArrowRightIcon, PauseIcon, PlayIcon } from '@heroicons/react/16/solid'
import { BoxGlass, Button } from '@/ui'
import AvatarImage from '@/assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg'
import ImpactVideoCover from '@/assets/44370-438662051_medium.jpg'
import ImpactVideo from '@/assets/44370-438662051_small.webm'

export default function Index() {
  const [playVideo, setPlayVideo] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const buttonVideoHandler = () => {
    setPlayVideo(prev => {
      const val = !prev

      if (!!videoRef.current && val) {
        videoRef.current.play()
      } else {
        videoRef.current?.pause()
      }

      return val
    })
  }

  return (
    <div
      id="impact"
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
          'mb-8'
        ])}
      >
        <div className="min-w-10">
          <p className="font-bold text-xl">
            04 <span className="text-secondary-1">/</span>
          </p>
        </div>
        <div className={twMerge(['flex gap-5 flex-col md:flex-row'])}>
          <div className="basis-1/2">
            <p
              className={twMerge([
                'text-left text-pretty font-medium',
                'text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'
              ])}
            >
              Every number here represents a step toward a sustainable future
              and the communities we serve.
            </p>
          </div>
          <div className="basis-1/2">
            <div
              className={twMerge([
                'bg-zinc-100 text-black rounded-3xl',
                'p-2 sm:p-4 md:p-6 lg:p-8',
                'flex flex-row items-start justify-start',
                'gap-3 lg:gap-5'
              ])}
            >
              <div>
                <div className="bg-secondary-1 rounded-lg">
                  <svg
                    viewBox="-2.4 -2.4 28.80 28.80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#000000"
                    strokeWidth="0.00024000000000000003"
                    transform="rotate(0)"
                    className="size-8 md:size-10 lg:size-14"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#CCCCCC"
                      strokeWidth="0.048"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.9861 9.98212C16.5475 9.98211 16.169 9.9821 15.8557 10.0035C15.5259 10.026 15.196 10.0755 14.8701 10.2105C14.135 10.515 13.551 11.099 13.2465 11.8341C13.1115 12.16 13.062 12.4899 13.0395 12.8197C12.9905 13.5374 13.0181 14.2631 13.0181 14.9821C13.0181 16.639 14.3613 17.9821 16.0181 17.9821H17.0181V18.229C17.0181 19.7668 18.8774 20.537 19.9649 19.4496C20.1938 19.2206 20.4226 18.9914 20.6519 18.7627C21.1326 18.2835 21.5593 17.8582 21.7898 17.3017C22.0202 16.7453 22.0193 16.1429 22.0183 15.4641C22.0169 14.5582 22.0626 13.6399 21.9708 12.7378C21.9207 12.2446 21.8091 11.7593 21.5125 11.3154C21.2936 10.9878 21.0124 10.7066 20.6848 10.4877C20.2409 10.1911 19.7556 10.0796 19.2624 10.0294C18.5081 9.95266 17.7435 9.98212 16.9861 9.98212Z"
                        fill="#040000"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.97575 4.00556C5.5371 4.00555 5.15861 4.00554 4.84535 4.02691C4.51553 4.04941 4.18562 4.09892 3.85969 4.23392C3.1246 4.5384 2.54058 5.12243 2.2361 5.85751C2.10109 6.18344 2.05159 6.51335 2.02909 6.84318C1.98012 7.56087 2.00774 8.28654 2.00774 9.00556C2.00774 10.6624 3.35088 12.0056 5.00774 12.0056H6.00774V12.2524C6.00774 13.7903 7.86707 14.5604 8.95449 13.473C9.18347 13.244 9.4122 13.0148 9.64153 12.7862C10.1223 12.3069 10.5489 11.8816 10.7794 11.3252C11.0098 10.7688 11.0089 10.1663 11.0079 9.48753C11.0065 8.58163 11.0522 7.66333 10.9605 6.76128C10.9103 6.26804 10.7988 5.78277 10.5021 5.33885C10.2833 5.01128 10.002 4.73003 9.67445 4.51115C9.23053 4.21453 8.74526 4.103 8.25202 4.05283C7.49772 3.97609 6.73317 4.00556 5.97575 4.00556Z"
                        fill="#040000"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <p
                  className={twMerge([
                    'text-left text-pretty font-medium',
                    'text-base md:text-lg lg:text-xl xl:text-2xl'
                  ])}
                >
                  "Voltz's technology and expertise helped us transition 60% of
                  our operations to renewable energy. A milestone we thought
                  would take years to achieve."
                </p>
                <div className="flex flex-row gap-3 mt-5">
                  <div
                    className={twMerge([
                      'size-10 lg:size-14',
                      'rounded-lg overflow-hidden'
                    ])}
                  >
                    <img
                      src={AvatarImage}
                      alt="Avatar"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-base font-medium">Jhonatan Moore</p>
                    <p className="text-sm md:text-xs lg:text-sm text-gray-400">
                      Sustainability Director, SolaraTech
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className={twMerge([
                    'flex items-center justify-center',
                    'size-8 md:size-10 lg:size-14',
                    'text-xl md:text-2xl lg:text-3xl',
                    'font-neue-machina-inktrap font-bold'
                  ])}
                >
                  Z
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={twMerge([
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
          'mb-8'
        ])}
      >
        <div
          className={twMerge([
            'bg-primary-1 text-secondary-1 p-10 rounded-3xl',
            'flex flex-col justify-start gap-16'
          ])}
        >
          <div>
            <h6
              className={twMerge([
                'text-secondary-1 text-left text-pretty font-bold',
                'text-3xl sm:text-4xl md:text-5xl xl:text-6xl',
                'mb-3'
              ])}
            >
              85,000+ tons
            </h6>
            <p className="text-lg text-white">
              Carbon emission avoided through clean energy generation
            </p>
          </div>
          <div>
            <div className="size-14 ml-auto">
              <Button
                asLink
                href={'#'}
                variant={'secondary'}
                rounded={'full'}
                size={'sm'}
              >
                <ArrowRightIcon className="size-5" />
              </Button>
            </div>
          </div>
        </div>
        <div
          className={twMerge([
            'bg-zinc-100 text-black p-10 rounded-3xl',
            'flex flex-col gap-3'
          ])}
        >
          <h6
            className={twMerge([
              'text-left text-pretty font-bold',
              'text-3xl sm:text-4xl md:text-5xl xl:text-6xl',
              'flex flex-col justify-end basis-8/12'
            ])}
          >
            120+MW
          </h6>
          <p className="text-lg text-pretty">
            Produced fromwind, solar, and hybrid systems annually
          </p>
        </div>
        <div
          className={twMerge([
            'bg-zinc-100 text-black p-10 rounded-3xl',
            'flex flex-col gap-3',
            'col-span-1 md:col-span-2 lg:col-span-1'
          ])}
        >
          <div
            className={twMerge(['min-h-14', 'hidden md:block lg:hidden'])}
          ></div>
          <h6
            className={twMerge([
              'text-left text-pretty font-bold',
              'text-3xl sm:text-4xl md:text-5xl xl:text-6xl',
              'flex flex-col justify-end basis-8/12'
            ])}
          >
            50+
          </h6>
          <p className="text-lg text-pretty">
            Fromremote villages tourban neighborhoods
          </p>
        </div>
      </div>

      <div className="aspect-video rounded-3xl overflow-hidden relative">
        <img
          src={ImpactVideoCover}
          alt="Video Cover"
          className={twMerge([
            'h-full w-full object-cover',
            !playVideo ? 'block' : 'hidden'
          ])}
        />

        <video
          ref={videoRef}
          controls={false}
          autoPlay={true}
          loop={true}
          playsInline={true}
          disablePictureInPicture={true}
          className={twMerge([
            'h-full w-full object-cover',
            playVideo ? 'block' : 'hidden'
          ])}
        >
          <source src={ImpactVideo} type="video/webm" />
          Your browser does not support the video tag.
        </video>

        <BoxGlass
          className={twMerge([
            'absolute top-1/2 left-1/2 translate-[-50%]',
            'flex items-center justify-center gap-3',
            'hover:cursor-default'
          ])}
        >
          <p className="capitalize font-medium ml-5">our mission</p>
          <Button
            onClick={() => buttonVideoHandler()}
            variant={'primary'}
            rounded={'full'}
            size={'sm'}
          >
            {!playVideo ? (
              <PlayIcon className="size-5 text-secondary-1" />
            ) : (
              <PauseIcon className="size-5 text-secondary-1" />
            )}
          </Button>
        </BoxGlass>
      </div>
    </div>
  )
}
