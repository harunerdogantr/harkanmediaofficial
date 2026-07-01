import RouteFallback from './RouteFallback';

// Short text pages: Gizlilik/Cerez/Kullanim Kosullari + NotFound. Neutral
// background since these pages' own hero/body colors aren't consistent
// enough to match exactly (dark gradient vs. plain white).
export default function LegalPageFallback() {
  return <RouteFallback minHeight="600px" background="#f4f4f5" />;
}
