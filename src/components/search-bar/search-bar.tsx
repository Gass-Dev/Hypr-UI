import * as React from "react"
import { cn } from "../../lib/utils"
import { Input } from "../input/input"

export interface SearchBarProps extends React.HTMLAttributes<HTMLDivElement> {
  placeholder?: string;
  onSearch?: (value: string) => void;
}

const SearchBar = React.forwardRef<HTMLDivElement, SearchBarProps>(
  ({ className, placeholder = "Rechercher", onSearch, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative flex items-center", className)}
        {...props}
      >
        <Input
          type="search"
          placeholder={placeholder}
          className="pr-10"
          onChange={(e) => onSearch?.(e.target.value)}
        />
        <svg
          className="absolute right-3 h-5 w-5 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    )
  }
)
SearchBar.displayName = "SearchBar"

export { SearchBar } 