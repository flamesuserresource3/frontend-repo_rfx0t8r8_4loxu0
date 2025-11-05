import { Rocket, Star } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 grid place-items-center text-white shadow-sm">
            <Rocket size={18} />
          </div>
          <span className="font-semibold tracking-tight text-gray-900">PeerMate</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition">Features</a>
          <a href="#topics" className="hover:text-gray-900 transition">Topics</a>
          <a href="#cta" className="hover:text-gray-900 transition">Get Started</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
            <Star size={16} />
            Star us
          </button>
          <button className="inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow-lg hover:bg-gray-800">
            Join waitlist
          </button>
        </div>
      </div>
    </header>
  )
}
