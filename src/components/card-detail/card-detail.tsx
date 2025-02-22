import * as React from "react"
import { cn } from "../../lib/utils"
import { Tag } from "../tag/tag"

export interface CardDetailProps extends React.HTMLAttributes<HTMLDivElement> {
  thumbnail?: string;
  title: string;
  streamer: string;
  category?: string;
  viewers?: number;
  tags?: string[];
  description?: string;
}

const CardDetail = React.forwardRef<HTMLDivElement, CardDetailProps>(
  ({ className, thumbnail, title, streamer, category, viewers, tags, description, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("bg-twitch-gray-dark rounded-lg overflow-hidden", className)}
        {...props}
      >
        {thumbnail && (
          <div className="aspect-video w-full">
            <img
              src={thumbnail}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-bold text-twitch-text">{title}</h2>
              <p className="mt-1 text-twitch-purple hover:text-twitch-purple-dark">
                {streamer}
              </p>
              {category && (
                <p className="mt-1 text-gray-400">{category}</p>
              )}
            </div>
            {viewers && (
              <div className="flex items-center text-red-500">
                <span className="mr-2">●</span>
                <span>{viewers.toLocaleString()} spectateurs</span>
              </div>
            )}
          </div>
          {description && (
            <p className="mt-4 text-twitch-text">{description}</p>
          )}
          {tags && tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
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
CardDetail.displayName = "CardDetail"

export { CardDetail } 