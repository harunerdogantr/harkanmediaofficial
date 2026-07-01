import { Link } from 'react-router-dom';
import '../../styles/ui.css';

const DEFAULT_ARROW = (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Button({
  variant = 'primary',
  to,
  href,
  icon,
  iconPosition = 'end',
  className = '',
  children,
  ...rest
}) {
  const classes = `ui-btn ui-btn-${variant}${className ? ` ${className}` : ''}`;
  const iconNode = icon === undefined && variant === 'primary' ? DEFAULT_ARROW : icon;

  const content = (
    <>
      {iconPosition === 'start' && iconNode}
      {children}
      {iconPosition === 'end' && iconNode}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
