import { ReactNode } from 'react';
import './button.scss';

interface ButtonProps {
  children: ReactNode;
  appName: string;
}

export const Button = ({ children, appName }: ButtonProps) => {
  return (
    <button
      className={'button'}
      onClick={() => console.log(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};
