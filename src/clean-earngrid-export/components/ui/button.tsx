import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'destructive';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50";
    
    const variantClasses = {
      default: "bg-[#39E19D] text-[#FFF9F0] hover:bg-[#64F2C6]",
      outline: "border border-[#FFF9F0] bg-transparent text-[#FFF9F0] hover:bg-[#FFF9F0] hover:text-[#1B2240]",
      secondary: "bg-[#6C7280] text-[#FFF9F0] hover:bg-[#6C7280]/80",
      ghost: "hover:bg-[#39E19D]/10 hover:text-[#39E19D]",
      link: "text-[#39E19D] underline-offset-4 hover:underline",
      destructive: "bg-red-500 text-white hover:bg-red-600"
    };
    
    const sizeClasses = {
      default: "h-9 px-4 py-2",
      sm: "h-8 px-3 py-1",
      lg: "h-10 px-6 py-2",
      icon: "h-9 w-9"
    };
    
    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
    
    return (
      <button
        className={combinedClasses}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };