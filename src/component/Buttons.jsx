import React from 'react';
import { cn } from '@/lib/utils';

const Button = ({ children, variant = 'filled', icon: Icon = null, className, ...props }) => {
  const baseClasses = 'px-4 py-2 rounded-2xl text-sm font-medium transition duration-200 flex items-center justify-center';
  const variants = {
    filled: 'bg-blue-500 text-white hover:bg-blue-600',
    outline: 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
    text: 'text-blue-500 hover:text-blue-600',
  };

  return (
    <button {...props} className={cn(baseClasses, variants[variant], className)}>
      {Icon && <Icon className="mr-2" />}
      {children}
    </button>
  );
};

export default Button;
