import './Button.css';
import { Icon } from '../Icon/Icon';

export function Button({ variant = 'primary', size = 'md', icon, iconOnly = false, children, ...props }) {
  const iconName = icon || (variant === 'ghost' ? 'arrow-right' : undefined);
  return (
    <button className={`ds-button ds-button--${variant} ds-button--${size}${iconOnly ? ' ds-button--icon-only' : ''}`} {...props}>
      {iconName && <Icon name={iconName} />}
      {!iconOnly && children}
    </button>
  );
}
