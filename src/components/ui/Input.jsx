import '../../styles/ui.css';

// Shared keystroke filters, previously duplicated verbatim in
// ContactPage.jsx and TeklifPage.jsx for the name/phone fields.
const FILTERS = {
  name: /[a-zA-ZğüşıöçĞÜŞİÖÇ\s\b]/,
  phone: /[\d\s+()\b-]/,
};

export default function Input({
  label,
  name,
  id,
  error,
  as = 'input',
  filter,
  className = '',
  ...rest
}) {
  const fieldId = id || `field-${name}`;
  const Tag = as;

  function handleKeyDown(e) {
    const pattern = filter && FILTERS[filter];
    if (pattern && !pattern.test(e.key) && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
    }
    rest.onKeyDown?.(e);
  }

  return (
    <div className={`ui-field${error ? ' ui-field-error' : ''}${className ? ` ${className}` : ''}`}>
      {label && <label htmlFor={fieldId}>{label}</label>}
      <Tag id={fieldId} name={name} {...rest} onKeyDown={filter ? handleKeyDown : rest.onKeyDown} />
      {error && <span className="ui-field-err">{error}</span>}
    </div>
  );
}
