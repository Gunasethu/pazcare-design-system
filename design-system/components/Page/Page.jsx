import './Page.css';

export function Page({ children, className = '', ...props }) {
  const classes = ['ds-page', className].filter(Boolean).join(' ');

  return <div className={classes} {...props}>{children}</div>;
}
