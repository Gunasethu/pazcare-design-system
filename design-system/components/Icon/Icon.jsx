const paths = {
  plus: <><path d="M12 5v14M5 12h14" /></>,
  pencil: <><path d="m15 5 4 4M4 20l4-.8L19.2 8a2.1 2.1 0 0 0-3-3L5 16.2 4 20Z" /></>,
  send: <><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></>,
  book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 1 4 17.5Z" /><path d="M4 16a2 2 0 0 1 2-2h14M8 7h7" /></>,
  search: <><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 5 5" /></>,
  more: <><circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /></>,
  'arrow-right': <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  'chevron-down': <><path d="m6 9 6 6 6-6" /></>,
  check: <><path d="m5 12 4 4L19 6" /></>,
};

export function Icon({ name, size = 16, className = '', ...props }) {
  return <svg className={`ds-icon${className ? ` ${className}` : ''}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>{paths[name]}</svg>;
}
