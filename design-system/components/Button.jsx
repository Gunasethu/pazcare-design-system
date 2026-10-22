import './Button.css';

export function Button({ variant = 'primary', size = 'md', children, ...props }) {
  return (
    <button className={`ds-button ds-button--${variant} ds-button--${size}`} {...props}>
      {children}
    </button>
  );
}