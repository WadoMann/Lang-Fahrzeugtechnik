import { Wrench } from "lucide-react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Custom SVG Logo */}
      <div className="relative w-20 h-20">
        <svg
          viewBox="0 0 64 48"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Modern background with subtle gradient */}
          <rect
            x="2"
            y="2"
            width="60"
            height="44"
            rx="12"
            fill="url(#modernGradient)"
            stroke="url(#borderGradient)"
            strokeWidth="2"
          />
          
          {/* Modern car silhouette based on your design */}
          <path
            d="M8 28 C8 26 10 24 12 24 L14 24 C16 22 18 20 20 18 C22 16 24 15 26 15 L38 15 C40 15 42 16 44 18 C46 20 48 22 50 24 L52 24 C54 24 56 26 56 28 L56 30 C56 31 55 32 54 32 L52 32 C52 35 49 38 46 38 C43 38 40 35 40 32 L24 32 C24 35 21 38 18 38 C15 38 12 35 12 32 L10 32 C9 32 8 31 8 30 L8 28 Z"
            fill="white"
            opacity="0.95"
          />
          
          {/* Modern car windows */}
          <path
            d="M22 18 C23 17 24 16 26 16 L38 16 C40 16 41 17 42 18 L44 22 L20 22 L22 18 Z"
            fill="#E5E7EB"
            opacity="0.8"
          />
          
          {/* Sleek wheels */}
          <circle
            cx="18"
            cy="32"
            r="6"
            fill="url(#wheelGradient)"
            stroke="#374151"
            strokeWidth="1"
          />
          <circle
            cx="18"
            cy="32"
            r="3"
            fill="#1E40AF"
          />
          
          <circle
            cx="46"
            cy="32"
            r="6"
            fill="url(#wheelGradient)"
            stroke="#374151"
            strokeWidth="1"
          />
          <circle
            cx="46"
            cy="32"
            r="3"
            fill="#1E40AF"
          />
          
          {/* Modern detail lines */}
          <path
            d="M26 20 L38 20"
            stroke="#9CA3AF"
            strokeWidth="1"
            opacity="0.7"
          />
          
          {/* Tech accent */}
          <circle
            cx="32"
            cy="18"
            r="1"
            fill="#1E40AF"
          />
          
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="modernGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E40AF" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
            <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
            <radialGradient id="wheelGradient" cx="50%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#F3F4F6" />
              <stop offset="100%" stopColor="#9CA3AF" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      
      {showText && (
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-neutral bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Lang Fahrzeugtechnik
          </h1>
          <p className="text-base md:text-lg text-gray-600 font-medium">Professioneller KFZ-Service</p>
        </div>
      )}
    </div>
  );
}
