import './Avatar.css';

function initials(name = '') {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? '')
    .join('');
}

export function Avatar({ src, name = '', size = 'md', tint = 'lavender' }) {
  return (
    <span
      className={`ds-avatar ds-avatar--${size} ds-avatar--${tint}`}
      role="img"
      aria-label={name || 'Avatar'}
    >
      {src ? <img src={src} alt="" /> : initials(name)}
    </span>
  );
}