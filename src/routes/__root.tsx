import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ScrollToTop } from "../components/ScrollToTop";
import { AuthProvider } from "../contexts/AuthContext";
import { FloatingGameButton } from "../components/FloatingGameButton";
import { OfflineIndicator } from "../components/OfflineIndicator";
import { Toaster } from "sonner";

export const Route = createRootRoute({
  component: () => (
    <AuthProvider>
      <div className="min-h-screen relative overflow-hidden bg-[#050510] text-white">
        <ScrollToTop />
        <Toaster 
          position="bottom-right"
          expand={true}
          richColors
          closeButton
          toastOptions={{
            className: 'glass-card',
            style: {
              background: 'rgba(10, 10, 15, 0.95)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: 'white',
              backdropFilter: 'blur(12px)',
            },
          }}
        />
        
        {/* Global Persistent Background Animation */}
        <div className="fixed inset-0 z-0 pointer-events-none">
           <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
           <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>

        <div className="relative z-10">
          <Header />
          <main className="min-h-[calc(100vh-160px)]">
            <Outlet />
          </main>
          <Footer />
        </div>
        
        <FloatingGameButton />
        <OfflineIndicator />
      </div>
    </AuthProvider>
  ),
});
