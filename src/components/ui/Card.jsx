import { Link } from 'react-router-dom';
import '../../styles/ui.css';

export default function Card({
  icon,
  title,
  description,
  to,
  href,
  arrowLabel,
  className = '',
  style,
}) {
  const classes = `ui-card${className ? ` ${className}` : ''}`;

  const content = (
    <>
      {icon && <div className="ui-card-icon">{icon}</div>}
      {title && <h3 className="ui-card-title">{title}</h3>}
      {description && <p className="ui-card-desc">{description}</p>}
      {arrowLabel && (
        <span className="ui-card-arrow">
          {arrowLabel}
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} style={style}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} style={style}>
        {content}
      </a>
    );
  }

  return (
    <div className={classes} style={style}>
      {content}
    </div>
  );
}
