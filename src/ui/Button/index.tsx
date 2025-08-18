import { type ComponentProps, type PropsWithChildren } from 'react'
import { type VariantProps } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'
import { buttonVariants } from './variant'

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  asLink?: boolean
}

type ButtonAsButton = ButtonBaseProps &
  ComponentProps<'button'> & {
    asLink?: false
  }

type ButtonAsLink = ButtonBaseProps &
  ComponentProps<'a'> & {
    asLink: true
  }

export type ButtonProps = ButtonAsButton | ButtonAsLink

const Button = ({
  asLink,
  variant,
  size,
  disabled,
  className,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const linkProps = props as ComponentProps<'a'>
  const buttonProps = props as ComponentProps<'button'>

  if (asLink) {
    return (
      <a
        {...linkProps}
        className={twMerge(
          buttonVariants({ variant, size, disabled }),
          className
        )}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      {...buttonProps}
      className={twMerge(
        buttonVariants({ variant, size, disabled }),
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button
