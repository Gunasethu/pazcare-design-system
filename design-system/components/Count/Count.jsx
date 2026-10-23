import './Count.css';

export function Count({ children, label, ...props }) {
  return <span className="ds-count" aria-label={label} {...props}>{children}</span>;
}
