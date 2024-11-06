import clsx from 'clsx';
import "./styles.css";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'base_button',
        className,
      )}
    >
      {children}
    </button>
  );
}
