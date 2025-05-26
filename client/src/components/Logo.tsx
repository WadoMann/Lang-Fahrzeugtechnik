interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Your original site logo - direct path from public folder */}
      <div className="p-2">
        <img 
          src="/site_logo.jpeg" 
          alt="Lang Fahrzeugtechnik Logo" 
          className="w-20 h-20 lg:w-24 lg:h-24 object-contain"
          style={{ imageRendering: 'auto' }}
        />
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
