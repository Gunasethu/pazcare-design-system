import './Tag.css';

export function Tag({ tint = 'neutral', children }) {
  return <span className={`ds-tag ds-tag--${tint}`}>{children}</span>;
}