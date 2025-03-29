import React from "react"

interface AvatarProps {
  src?: string
  alt?: string
  fallback?: string
  size?: "small" | "medium" | "large"
  className?: string
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, fallback, size = "medium", className }) => {
  const sizeClasses = {
    small: "h-8 w-8",
    medium: "h-12 w-12",
    large: "h-16 w-16",
  }

  return (
    <div
      className={`relative flex items-center justify-center rounded-full bg-gray-200 text-gray-600 ${sizeClasses[size]} ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt || "Avatar"}
          className="h-full w-full rounded-full object-cover"
        />
      ) : (
        <AvatarFallback>{fallback || "?"}</AvatarFallback>
      )}
    </div>
  )
}

export const AvatarFallback: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`flex items-center justify-center h-full w-full rounded-full bg-gray-400 text-white font-bold ${className}`}
    >
      {children}
    </div>
  )
}