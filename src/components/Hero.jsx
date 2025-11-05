import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[620px] w-full overflow-hidden">
      {/* 3D animated background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient glows - do not block Spline interactions */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-10 h-[32rem] w-[32rem] rounded-full bg-fuchsia-400/25 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 h-[36rem] w-[36rem] rounded-full bg-indigo-400/20 blur-3xl" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 h-full">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/20 backdrop-blur-md px-3 py-1 text-xs text-white/90 shadow-lg"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Peer-to-peer learning for campus creators
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.9 }}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.25)]"
            >
              Learn. Collaborate. Earn — with your peers
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.9 }}
              className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90"
            >
              Post what you want to learn, teach what you know, and meet during free periods to grow together. Exchange skills or offer money — flexible, friendly, and campus-first.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.9 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <button className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-6 py-3 text-sm font-semibold shadow-xl shadow-black/20 hover:bg-gray-100">
                Get early access
              </button>
              <button className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-white/10 text-white px-6 py-3 text-sm font-semibold shadow-xl ring-1 ring-inset ring-white/20 hover:bg-white/15">
                Watch demo
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.9 }}
              className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-white/90"
            >
              {['Python', 'Web Dev', 'Public Speaking', 'Guitar'].map((k) => (
                <div key={k} className="pointer-events-none rounded-lg bg-white/10 backdrop-blur-md border border-white/15 px-3 py-2 text-center">
                  {k}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
