import RouteFallback from './RouteFallback';

// ContactPage / TeklifPage: shorter hero but a much taller form section
// below it, so this needs a taller min-height than the pl-template pages.
export default function FormPageFallback() {
  return <RouteFallback minHeight="1200px" background="#fff" />;
}
