import RouteFallback from './RouteFallback';

// Homepage's own hero is min-height:100vh, so the fallback matches that
// exactly rather than the shorter pl-template height.
export default function HomepageFallback() {
  return <RouteFallback minHeight="100vh" background="#fafafa" />;
}
