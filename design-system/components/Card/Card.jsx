import './Card.css';

export function Card({ tint, as: Component = 'div', children, className = '', ...props }) {
  return (
    <Component className={`ds-card${tint ? ` ds-card--${tint}` : ''}${className ? ` ${className}` : ''}`} {...props}>
      {children}
    </Component>
  );
}
