import './Stack.css';

export function Stack({ as: Component = 'div', gap = 2, className = '', children, ...props }) {
  const classes = ['ds-stack', `ds-stack--gap-${gap}`, className].filter(Boolean).join(' ');

  return <Component className={classes} {...props}>{children}</Component>;
}
