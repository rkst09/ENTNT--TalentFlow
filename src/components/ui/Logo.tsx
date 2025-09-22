import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

<<<<<<< HEAD
const Logo: React.FC<LogoProps> = ({ className = "" }) => {
=======
const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const sizeStyles = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

>>>>>>> 7738358021bb403ddbeb9846b44af15dad35bff0
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
          </svg>
        </div>
      </div>
<<<<<<< HEAD
      <span className="font-bold text-gray-900 text-base sm:text-lg md:text-xl">
=======
      <span className={`font-bold text-gray-900 ${sizeStyles[size]}`}>
>>>>>>> 7738358021bb403ddbeb9846b44af15dad35bff0
        TalentFlow
      </span>
    </div>
  );
};

<<<<<<< HEAD
export default Logo;
=======
export default Logo;
>>>>>>> 7738358021bb403ddbeb9846b44af15dad35bff0
