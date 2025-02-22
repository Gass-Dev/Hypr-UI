import * as React from "react"
import { cn } from "../../lib/utils"
import { Tag } from "../tag/tag";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  thumbnail?: string;
  title: string;
  subtitle?: string;
  viewers?: number;
  tags?: string[];
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, thumbnail, title, subtitle, viewers, tags, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative overflow-hidden rounded-md bg-twitch-gray-dark transition-all hover:-translate-y-1",
          className
        )}
        {...props}
      >
        {thumbnail && (
          <div className="aspect-video w-full overflow-hidden">
            <img
              src={thumbnail}
              alt={title}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-3">
          <h3 className="font-semibold text-twitch-text">{title}</h3>
          {subtitle && (
            <p className="mt-1 text-sm text-gray-400">{subtitle}</p>
          )}
          {viewers && (
            <p className="mt-2 text-sm text-gray-400">
              {viewers.toLocaleString()} spectateurs
            </p>
          )}
          {tags && tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
)
Card.displayName = "Card"

export { Card } 