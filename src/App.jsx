import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TopicsTicker from './components/TopicsTicker'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-blue-50">
      <Navbar />
      <main>
        <Hero />
        <TopicsTicker />
      </main>
      <Footer />
    </div>
  )
}

export default App
