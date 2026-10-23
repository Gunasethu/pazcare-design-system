import './Cover.css';
import { useState } from 'react';

export function Cover({ size = 'md', className = '', src, alt = '', ...props }) {
  const [failed, setFailed] = useState(false);
  const classes = ['ds-cover', `ds-cover--${size}`, className].filter(Boolean).join(' ');

  return <span className={classes} aria-hidden={!src || failed ? 'true' : undefined} {...props}>
    {src && !failed && <img src={src} alt={alt} onError={() => setFailed(true)} />}
  </span>;
}
