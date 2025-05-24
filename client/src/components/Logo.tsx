import { Wrench } from "lucide-react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Custom SVG Logo */}
      <div className="relative w-16 h-16">
        <svg
          viewBox="0 0 48 48"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Circle */}
          <circle
            cx="24"
            cy="24"
            r="22"
            fill="url(#gradient)"
            stroke="#1E40AF"
            strokeWidth="2"
          />
          
          {/* Car silhouette */}
          <path
            d="M12 28h2c0-2.2 1.8-4 4-4s4 1.8 4 4h8c0-2.2 1.8-4 4-4s4 1.8 4 4h2v-4c0-1.1-.9-2-2-2h-3l-2-4h-6v-2c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1v2h-6l-2 4h-3c-1.1 0-2 .9-2 2v4z"
            fill="white"
          />
          
          {/* Wheels */}
          <circle cx="18" cy="30" r="2" fill="white" />
          <circle cx="30" cy="30" r="2" fill="white" />
          
          {/* Wrench icon in top right */}
          <g transform="translate(28, 8)">
            <path
              d="M2 6L6 2L8 4L6 6L8 8L6 10L2 6Z"
              fill="white"
              strokeWidth="1"
              stroke="#1E40AF"
            />
          </g>
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E40AF" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {showText && (
        <div>
          <h1 className="text-xl font-bold text-neutral bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Lang Fahrzeugtechnik
          </h1>
          <p className="text-sm text-gray-600 font-medium">Professioneller KFZ-Service</p>
        </div>
      )}
    </div>
  );
}
