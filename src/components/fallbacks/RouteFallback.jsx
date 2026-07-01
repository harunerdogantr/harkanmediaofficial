import '../../styles/ui.css';

// Shared shell for all route-loading fallbacks: a min-height block sized to
// approximate the page it's standing in for, so <main> never collapses to
// zero height and the footer doesn't jump during the chunk fetch.
export default function RouteFallback({ minHeight, background }) {
  return (
    <div className="ui-route-fallback" style={{ minHeight, background }}>
      <span className="ui-route-spinner" aria-hidden="true" />
    </div>
  );
}
