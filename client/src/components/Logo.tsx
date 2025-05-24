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
          viewBox="0 0 48 48"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Circle with Shadow */}
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="#374151"
            opacity="0.3"
          />
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="url(#gradient)"
            stroke="#1E40AF"
            strokeWidth="3"
          />
          
          {/* Modern Car silhouette */}
          <path
            d="M10 26h3c0-1.5 1.3-3 3-3s3 1.5 3 3h10c0-1.5 1.3-3 3-3s3 1.5 3 3h3v-3c0-1-.8-2-2-2h-4l-3-5h-8v-1c0-.5-.4-1-1-1h-2c-.5 0-1 .4-1 1v1h-8l-3 5h-4c-1 0-2 .8-2 2v3z"
            fill="white"
          />
          
          {/* Modern Wheels */}
          <circle cx="16" cy="28" r="2.5" fill="white" />
          <circle cx="32" cy="28" r="2.5" fill="white" />
          <circle cx="16" cy="28" r="1" fill="#1E40AF" />
          <circle cx="32" cy="28" r="1" fill="#1E40AF" />
          
          {/* Gear icon */}
          <g transform="translate(30, 10)">
            <circle cx="4" cy="4" r="2" fill="white" stroke="#1E40AF" strokeWidth="1"/>
            <path d="M4 1L4.5 2L5.5 2L4.5 3L5 4L4 3.5L3 4L3.5 3L2.5 2L3.5 2Z" fill="#1E40AF"/>
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
          <h1 className="text-2xl md:text-3xl font-bold text-neutral bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Lang Fahrzeugtechnik
          </h1>
          <p className="text-base md:text-lg text-gray-600 font-medium">Professioneller KFZ-Service</p>
        </div>
      )}
    </div>
  );
}
