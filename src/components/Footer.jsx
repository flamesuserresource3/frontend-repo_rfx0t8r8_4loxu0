export default function Footer() {
  return (
    <footer className="relative border-t border-black/5 bg-white/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} PeerMate — Learn. Collaborate. Earn.</p>
        <div className="text-sm text-gray-500">
          Built for students who love to build together.
        </div>
      </div>
    </footer>
  )
}
