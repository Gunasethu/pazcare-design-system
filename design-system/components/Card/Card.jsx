import './Card.css';

export function Card({ tint, as: Component = 'div', children, ...props }) {
  return (
    <Component className={`ds-card${tint ? ` ds-card--${tint}` : ''}`} {...props}>
      {children}
    </Component>
  );
}