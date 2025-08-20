import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'flex items-center justify-center gap-2 transition-colors duration-200',
  {
    variants: {
      variant: {
        primary: ['bg-primary-1 text-secondary-1 hover:bg-primary-2'],
        secondary: ['bg-secondary-1 text-primary-1 hover:bg-secondary-2'],
        ghost: [
          'bg-transparent text-primary-1 hover:bg-gray-50/50',
          'backdrop-blur-sm'
        ]
      },
      rounded: {
        pill: ['rounded-full'],
        full: [
          'rounded-full',
          'flex items-center justify-center',
          'aspect-square'
        ]
      },
      size: {
        sm: 'px-3 py-1 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-5 py-3 text-lg'
      },
      disabled: {
        false: ['cursor-pointer', 'opacity-100'],
        true: ['cursor-not-allowed', 'pointer-event-none', 'opacity-80']
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      rounded: 'pill',
      disabled: false
    }
  }
)
