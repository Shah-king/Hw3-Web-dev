import Header  from './components/Header'
import Hero    from './components/Hero'
import Menu    from './components/Menu'
import Gallery from './components/Gallery'
import About   from './components/About'
import Contact from './components/Contact'
import Footer  from './components/Footer'
import Cart from './components/Cart'
import './App.css';


export default function App() {
  return (
    <div className="bg-yellow-100 min-h-screen">
      <Header />

      {/* ← this makes the “inner frame” centered and aligned */}
      <div className="max-w-5xl mx-auto px-4">
        <Hero />
        <Menu />
        <Gallery />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
