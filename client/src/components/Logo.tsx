import carLogoPath from "@assets/image_1748240080982.png";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Your custom car logo */}
      <div className="bg-white p-2 rounded-lg shadow-lg border-2 border-primary">
        <img 
          src={carLogoPath} 
          alt="Lang Fahrzeugtechnik Logo" 
          className="w-8 h-8"
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
