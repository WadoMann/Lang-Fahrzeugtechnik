interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Custom car logo SVG based on your design */}
      <div className="p-2">
        <svg 
          width="80" 
          height="80" 
          viewBox="0 0 100 100" 
          className="w-20 h-20 lg:w-24 lg:h-24"
        >
          {/* Car body outline */}
          <path
            d="M15 60 C15 55 20 50 25 50 L30 50 C35 45 40 40 50 40 L75 40 C80 40 85 45 90 50 L85 50 C85 55 85 60 85 60 L75 65 C75 70 70 75 65 75 C60 75 55 70 55 65 L45 65 C45 70 40 75 35 75 C30 75 25 70 25 65 L15 60 Z"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Front wheel */}
          <circle
            cx="35"
            cy="65"
            r="8"
            fill="none"
            stroke="black"
            strokeWidth="2"
          />
          
          {/* Rear wheel */}
          <circle
            cx="65"
            cy="65"
            r="8"
            fill="none"
            stroke="black"
            strokeWidth="2"
          />
          
          {/* Car window/roof line */}
          <path
            d="M35 50 C40 45 45 42 50 42 L70 42 C75 42 80 45 82 50"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
          
          {/* Side detail lines */}
          <line
            x1="45"
            y1="55"
            x2="70"
            y2="55"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
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
