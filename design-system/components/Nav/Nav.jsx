import './Nav.css';

export function Nav({ items, orientation = 'horizontal', label = 'Main', ...props }) {
  return (
    <nav className={`ds-nav ds-nav--${orientation}`} aria-label={label} {...props}>
      <ul className="ds-nav__list">
        {items.map((item) => (
          <li key={item.label}>
            <a
              className={`ds-nav__item${item.active ? ' ds-nav__item--active' : ''}`}
              href={item.href || '#'}
              title={item.description}
              aria-current={item.active ? 'page' : undefined}
              onClick={item.onClick}
            >
              <span>{item.label}</span>
              {item.trailing}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
