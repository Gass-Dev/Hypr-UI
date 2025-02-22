import * as React from "react"
import { cn } from "../../lib/utils"

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'purple' | 'gray';
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium",
          {
            'bg-twitch-gray-medium text-twitch-text': variant === 'default',
            'bg-twitch-purple text-white': variant === 'purple',
            'bg-twitch-gray-dark text-twitch-text': variant === 'gray',
          },
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)
Tag.displayName = "Tag"

export { Tag } 