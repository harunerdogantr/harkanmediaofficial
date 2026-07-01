import { lazy, Suspense } from 'react';

// Wraps a lazy import in its own Suspense boundary with a tailored fallback,
// so App.jsx's route table stays a plain list of components (no per-route
// <Suspense> noise) while each page group still gets a fallback shaped to
// its own layout instead of one global one-size-fits-all placeholder.
// Fallback IS used below, in <Fallback />. ESLint's core no-unused-vars doesn't
// track JSX usage of a parameter referenced inside a nested closure (only
// top-level import bindings), hence the disable below.
// eslint-disable-next-line no-unused-vars
export function withFallback(importFn, Fallback) {
  const LazyComponent = lazy(importFn);
  return function SuspendedRoute(props) {
    return (
      <Suspense fallback={<Fallback />}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
}
