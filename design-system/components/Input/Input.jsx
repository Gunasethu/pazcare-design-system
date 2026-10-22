import { useId } from 'react';
import './Input.css';

export function Input({ label, hint, error, id, ...props }) {
  const autoId = useId();
  const inputId = id || autoId;
  const messageId = error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined;

  return (
    <div className="ds-input">
      {label && <label className="ds-input__label" htmlFor={inputId}>{label}</label>}
      <input
        id={inputId}
        className={`ds-input__field${error ? ' ds-input__field--error' : ''}`}
        aria-invalid={error ? true : undefined}
        aria-describedby={messageId}
        {...props}
      />
      {error ? (
        <p id={messageId} className="ds-input__message ds-input__message--error">{error}</p>
      ) : hint ? (
        <p id={messageId} className="ds-input__message">{hint}</p>
      ) : null}
    </div>
  );
}