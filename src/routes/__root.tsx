import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-gray-50 font-inter">
      <Header />
      <main className="min-h-[calc(100vh-160px)]">
        <Outlet />
      </main>
      <Footer />
      <TanStackRouterDevtools />
    </div>
  ),
})
