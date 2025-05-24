import { Car } from "lucide-react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
        <Car className="text-white text-xl" />
      </div>
      {showText && (
        <div>
          <h1 className="text-xl font-bold text-neutral">Lang Fahrzeugtechnik</h1>
          <p className="text-sm text-gray-600">Professioneller KFZ-Service</p>
        </div>
      )}
    </div>
  );
}
