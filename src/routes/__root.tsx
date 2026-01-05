import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ScrollToTop } from "../components/ScrollToTop";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-gray-50 font-inter">
      <ScrollToTop />
      <Header />
      <main className="min-h-[calc(100vh-160px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
});
