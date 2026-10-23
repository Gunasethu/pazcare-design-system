import './Card.css';

export function Card({ as: Component = 'div', children, className = '', ...props }) {
  return (
    <Component className={`ds-card${className ? ` ${className}` : ''}`} {...props}>
      {children}
    </Component>
  );
}
