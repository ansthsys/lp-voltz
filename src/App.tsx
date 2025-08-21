import {
  About,
  CTA,
  Footer,
  Header,
  Impact,
  Jumbotron,
  Project,
  Solutions,
  Sustainability
} from '@/components'
import { twMerge } from 'tailwind-merge'

function App() {
  return (
    <main className="bg-white min-h-screen">
      <Header />

      <Jumbotron />

      <About />

      <Sustainability />

      <Solutions />

      <Impact />

      <Project />

      <div
        className={twMerge([
          'bg-footer bg-bottom bg-cover bg-no-repeat',
          'pt-0 pb-8 md:pb-12 lg:pb-16'
        ])}
      >
        <div
          className={twMerge([
            'h-full w-full',
            'bg-gradient-to-b',
            'from-0% from-white',
            'via-40% via-white/50',
            'via-65% via-orange-300/50',
            'to-100% to-transparent'
          ])}
        >
          <CTA />

          <Footer />
        </div>
      </div>
    </main>
  )
}

export default App
