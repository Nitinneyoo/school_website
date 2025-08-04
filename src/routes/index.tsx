import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

// Lazy load components
const Hero = lazy(() =>
  import("../components/Hero").then((module) => ({ default: module.Hero })),
);
const Features = lazy(() =>
  import("../components/Features").then((module) => ({
    default: module.Features,
  })),
);
const GradesOverview = lazy(() =>
  import("../components/GradesOverview").then((module) => ({
    default: module.GradesOverview,
  })),
);
const Testimonials = lazy(() =>
  import("../components/Testimonials").then((module) => ({
    default: module.Testimonials,
  })),
);
const CTA = lazy(() =>
  import("../components/CTA").then((module) => ({ default: module.CTA })),
);

// Loading component
const LoadingFallback = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="animate-pulse text-primary-600">Loading...</div>
  </div>
);

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <Suspense fallback={<LoadingFallback />}>
        <Hero />
      </Suspense>

      {/* Defer non-critical components */}
      <Suspense fallback={<LoadingFallback />}>
        <Features />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <GradesOverview />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <CTA />
      </Suspense>
    </div>
  );
}
