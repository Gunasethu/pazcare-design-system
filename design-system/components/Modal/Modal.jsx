import { useEffect, useId, useRef } from 'react';
import { Button } from '../Button';
import './Modal.css';

export function Modal({ open, onClose, title, children, footer, variant = 'modal' }) {
  const ref = useRef(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      className={`ds-modal ds-modal--${variant}`}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose?.();
      }}
    >
      <div className="ds-modal__panel">
        <div className="ds-modal__header">
          <h2 id={titleId}>{title}</h2>
          <Button variant="ghost" size="sm" aria-label="Close" onClick={onClose}>
            ✕
          </Button>
        </div>
        <div className="ds-modal__body">{children}</div>
        {footer && <div className="ds-modal__footer">{footer}</div>}
      </div>
    </dialog>
  );
}