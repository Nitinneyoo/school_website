import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '../components/Hero'
import { Features } from '../components/Features'
import { GradesOverview } from '../components/GradesOverview'
import { Testimonials } from '../components/Testimonials'
import { CTA } from '../components/CTA'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div>
      <Hero />
      <Features />
      <GradesOverview />
      <Testimonials />
      <CTA />
    </div>
  )
}
