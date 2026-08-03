import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Quilombolas } from '@/components/quilombolas'
import { SolarEnergy } from '@/components/solar-energy'
import { WaterReuse } from '@/components/water-reuse'
import { Preservation } from '@/components/preservation'
import { Benefits } from '@/components/benefits'
import { Maquete } from '@/components/maquete'
import { Gallery } from '@/components/gallery'
import { Impact } from '@/components/impact'
import { HowToHelp } from '@/components/how-to-help'
import { Conclusion } from '@/components/conclusion'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Quilombolas />
      <SolarEnergy />
      <WaterReuse />
      <Preservation />
      <Benefits />
      <Maquete />
      <Gallery />
      <Impact />
      <HowToHelp />
      <Conclusion />
      <Footer />
    </main>
  )
}
