import './Inline.css';

export function Inline({ as: Component = 'div', gap = 2, className = '', children, ...props }) {
  return <Component className={`ds-inline ds-inline--gap-${gap}${className ? ` ${className}` : ''}`} {...props}>{children}</Component>;
}
