import { SelectHTMLAttributes, forwardRef, ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { ChevronDown } from 'lucide-react';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative w-full group">
        <select
          className={cn(
            "flex h-12 w-full appearance-none border-b border-slate-300 dark:border-white/20 bg-transparent px-0 py-2 text-sm text-slate-900 dark:text-white focus:outline-none transition-all duration-300 cursor-pointer [&>option]:bg-slate-100 dark:bg-[#060D1A] [&>option]:text-slate-900 dark:text-white",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 dark:text-white/60 group-hover:text-brand-primary transition-colors">
          <ChevronDown className="w-4 h-4" />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-primary scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 origin-center"></div>
      </div>
    );
  }
);
Select.displayName = "Select";

export { Select };
