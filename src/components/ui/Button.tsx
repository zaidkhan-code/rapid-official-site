import { ReactNode, ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import { motion, HTMLMotionProps } from 'motion/react';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  children?: ReactNode;
  className?: string;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: ButtonProps) => {
  const variants = {
    primary: 'bg-brand-primary text-white hover:brightness-110 shadow-lg shadow-brand-primary/20',
    secondary: 'bg-white text-brand-dark hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]',
    outline: 'border border-white/20 text-white hover:bg-white/5 backdrop-blur-sm',
    ghost: 'text-white/80 hover:text-white hover:bg-white/5',
    whatsapp: 'bg-[#25D366] text-white hover:scale-110 shadow-lg shadow-[#25D366]/30',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs font-bold uppercase tracking-widest',
    md: 'px-8 py-4 text-sm font-bold',
    lg: 'px-10 py-5 text-base font-extrabold',
    icon: 'p-2.5 rounded-full',
  };

  const baseStyles = 'inline-flex items-center justify-center rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};
