import RouteFallback from './RouteFallback';

// For the pl-hero template pages: 19 service pages + About + Partners +
// Calismalarimiz, all sharing the same hero (400px) + cards-section shape.
export default function PageLayoutFallback() {
  return <RouteFallback minHeight="900px" background="#fff" />;
}
