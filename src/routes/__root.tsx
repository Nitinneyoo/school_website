import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ScrollToTop } from "../components/ScrollToTop";
import { AuthProvider } from "../contexts/AuthContext";
import { FloatingGameButton } from "../components/FloatingGameButton";

export const Route = createRootRoute({
  component: () => (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50 font-inter">
        <ScrollToTop />
        <Header />
        <main className="min-h-[calc(100vh-160px)]">
          <Outlet />
        </main>
        <Footer />
        <FloatingGameButton />
      </div>
    </AuthProvider>
  ),
});
