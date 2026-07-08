import React from 'react';

const IconButton = ({ children, href, className = '', ...props }) => {
  const baseClasses = "p-6 bg-white border-2 border-gray-400 shadow-sm rounded-md text-gray-800 hover:text-blue-700 hover:border-blue-600 hover:shadow-md hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center aspect-square";
  
  const combinedClasses = `${baseClasses} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default IconButton;
