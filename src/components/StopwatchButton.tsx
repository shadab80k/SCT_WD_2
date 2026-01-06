import { memo, ReactNode } from 'react';

interface StopwatchButtonProps {
  onClick: () => void;
  disabled?: boolean;
  variant: 'primary' | 'secondary' | 'destructive';
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'w-16 h-16 text-sm',
  md: 'w-20 h-20 md:w-24 md:h-24 text-base md:text-lg',
  lg: 'w-24 h-24 md:w-28 md:h-28 text-lg md:text-xl',
};

const variantClasses = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  destructive: 'btn-destructive',
};

export const StopwatchButton = memo(({ 
  onClick, 
  disabled = false, 
  variant, 
  children,
  size = 'md'
}: StopwatchButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        stopwatch-button
        ${sizeClasses[size]}
        ${variantClasses[variant]}
      `}
    >
      {children}
    </button>
  );
});

StopwatchButton.displayName = 'StopwatchButton';
