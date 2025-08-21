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

      <CTA />

      <Footer />
    </main>
  )
}

export default App
