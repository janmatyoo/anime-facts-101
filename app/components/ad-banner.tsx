interface AdBannerProps {
  className?: string
  size?: "horizontal" | "rectangle"
}

export default function AdBanner({ className = "", size = "horizontal" }: AdBannerProps) {
  const sizeClasses = {
    horizontal: "h-24 w-full",
    rectangle: "h-64 w-full max-w-sm",
  }

  return (
    <div
      className={`${sizeClasses[size]} bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center ${className}`}
    >
      <div className="text-gray-500 text-center">
        <div className="text-sm font-medium">Advertisement</div>
        <div className="text-xs">Ad Space - {size}</div>
      </div>
    </div>
  )
}