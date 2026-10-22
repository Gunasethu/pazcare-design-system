import { useId } from 'react';
import './Textarea.css';

export function Textarea({ label, hint, error, id, variant = 'standard', ...props }) {
  const autoId = useId();
  const inputId = id || autoId;
  const messageId = error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined;

  return (
    <div className={`ds-textarea ds-textarea--${variant}`}>
      {label && <label className="ds-textarea__label" htmlFor={inputId}>{label}</label>}
      <textarea
        id={inputId}
        className={`ds-textarea__field${error ? ' ds-textarea__field--error' : ''}`}
        aria-invalid={error ? true : undefined}
        aria-describedby={messageId}
        {...props}
      />
      {error ? (
        <p id={messageId} className="ds-textarea__message ds-textarea__message--error">{error}</p>
      ) : hint ? (
        <p id={messageId} className="ds-textarea__message">{hint}</p>
      ) : null}
    </div>
  );
}
