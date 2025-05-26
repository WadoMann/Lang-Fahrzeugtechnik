import carLogoPath from "@assets/site_logo.jpeg";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Your custom car logo */}
      <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
        <img 
          src={carLogoPath} 
          alt="Lang Fahrzeugtechnik Logo" 
          className="w-24 h-24 lg:w-32 lg:h-32 object-contain"
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
