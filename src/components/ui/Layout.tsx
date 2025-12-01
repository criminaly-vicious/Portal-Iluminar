import React from 'react';
import { cn } from './Button';

export const Container = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)} {...props}>
      {children}
    </div>
  );
};

export const Section = ({ className, children, id, ...props }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <section 
      id={id}
      className={cn('py-16 md:py-24', className)} 
      {...props}
    >
      {children}
    </section>
  );
};

