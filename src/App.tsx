import {
  About,
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
    </main>
  )
}

export default App
