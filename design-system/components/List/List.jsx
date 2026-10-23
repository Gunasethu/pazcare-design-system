import './List.css';

export function List({ children, className = '', bordered = false, ...props }) {
  return (
    <ul className={`ds-list${bordered ? ' ds-list--bordered' : ''}${className ? ` ${className}` : ''}`} {...props}>
      {children}
    </ul>
  );
}

export function ListItem({ leading, title, description, trailing, selected, onClick }) {
  const content = (
    <>
      {leading && <span className="ds-list__leading">{leading}</span>}
      <span className="ds-list__body">
        <span className="ds-list__title">{title}</span>
        {description && <span className="ds-list__description">{description}</span>}
      </span>
      {trailing && <span className="ds-list__trailing">{trailing}</span>}
    </>
  );

  return (
    <li className={`ds-list__item${selected ? ' ds-list__item--selected' : ''}`}>
      {onClick ? (
        <button
          type="button"
          className="ds-list__row ds-list__row--interactive"
          onClick={onClick}
          aria-current={selected ? 'true' : undefined}
        >
          {content}
        </button>
      ) : (
        <div className="ds-list__row">{content}</div>
      )}
    </li>
  );
}
