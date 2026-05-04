import { TextareaHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="relative w-full group">
        <textarea
          className={cn(
            "flex min-h-[120px] w-full border-b border-slate-300 dark:border-white/20 bg-transparent px-0 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 dark:text-white/60 focus:outline-none transition-all duration-300 resize-none",
            className
          )}
          ref={ref}
          {...props}
        />
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-primary scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 origin-center"></div>
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
