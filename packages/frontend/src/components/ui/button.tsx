import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
