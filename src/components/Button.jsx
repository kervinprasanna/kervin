import React from 'react';

const Button = ({ children, variant = 'primary', className = '', href, ...props }) => {
  // Base structural classes for all buttons
  const baseClasses = "flex items-center justify-center gap-2 w-full sm:w-auto";
  
  // Style classes based on the variant prop
  const variantClasses = variant === 'primary' ? 'btn-primary' : 'btn-outline';
  
  // Combine all classes
  const combinedClasses = `${variantClasses} ${baseClasses} ${className}`.trim();

  // Render an <a> tag if an href is provided
  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  // Otherwise render a standard <button>
  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
