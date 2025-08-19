import type { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  glasses?: boolean
  className?: string
}

export default function index({
  children,
  glasses = true,
  className
}: PropsWithChildren<Props>) {
  return (
    <div
      className={twMerge([
        'p-[2px] rounded-full',
        glasses ? 'bg-white/30 backdrop-blur-sm' : 'bg-white',
        'shadow-xs shadow-gray-100/80',
        'border-2 border-white/75',
        className
      ])}
    >
      {children}
    </div>
  )
}
