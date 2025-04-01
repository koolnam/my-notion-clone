import React from "react";
import { cn } from "@/lib/utils";

const Button = ({
  children,
  variant = "filled", // 'filled', 'outline', 'text'
  size = "md", // 'sm', 'md', 'lg'
  icon: Icon,
  iconPosition = "left", // 'left' or 'right'
  className,
  onClick,
  disabled,
}) => {
  const baseStyles =
    "flex items-center justify-center gap-2 rounded-lg transition-all duration-200 font-medium focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantStyles = {
    filled: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-100",
    text: "text-blue-600 hover:bg-blue-100",
  };

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && iconPosition === "left" && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="w-5 h-5" />}
    </button>
  );
};

export default Button;
