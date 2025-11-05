import { motion } from 'framer-motion'

function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-sm mx-auto"
    >
      {/* Phone body */}
      <div className="relative rounded-[2.2rem] border border-black/10 shadow-2xl bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 p-2">
        {/* Antenna line */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 h-1 w-24 rounded-full bg-white/10" />
        {/* Camera notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 bg-black/40 rounded-full">
          <div className="h-2 w-2 rounded-full bg-blue-400/80" />
          <div className="h-1.5 w-12 rounded bg-white/10" />
        </div>
        {/* Inner bezel */}
        <div className="rounded-[2rem] overflow-hidden bg-black">
          {/* Screen area where you can drop your screenshots */}
          <div className="relative aspect-[9/19.5] w-full">
            {/* Screen background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400" />
            {/* Subtle grid overlay */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(255,255,255,.6) 1px, transparent 0)',
              backgroundSize: '20px 20px'
            }} />
            {/* Screenshot slots */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-2 text-center text-white shadow-lg">
                <div className="text-xs uppercase tracking-widest opacity-80">Your app here</div>
                <div className="text-[10px] opacity-70">Replace the background with screenshots</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Floating cards */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -6 }}
        animate={{ opacity: 1, y: 0, rotate: -6 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="absolute -left-14 -bottom-6 hidden md:block"
      >
        <div className="rounded-2xl bg-white shadow-xl ring-1 ring-black/5 px-4 py-3 w-44">
          <div className="text-xs text-gray-500">Popular</div>
          <div className="mt-1 font-medium text-gray-800">Web Dev Session</div>
          <div className="mt-2 flex -space-x-2">
            <img alt="" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" className="h-6 w-6 rounded-full object-cover ring-2 ring-white" />
            <img alt="" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop" className="h-6 w-6 rounded-full object-cover ring-2 ring-white" />
            <img alt="" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&auto=format&fit=crop" className="h-6 w-6 rounded-full object-cover ring-2 ring-white" />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: 8 }}
        animate={{ opacity: 1, y: 0, rotate: 8 }}
        transition={{ delay: 0.55, duration: 0.8 }}
        className="absolute -right-10 -top-6 hidden md:block"
      >
        <div className="rounded-2xl bg-gray-900 text-white shadow-xl ring-1 ring-black/10 px-4 py-3 w-44">
          <div className="text-xs text-white/60">Earn</div>
          <div className="mt-1 font-medium">1:1 Python Mentoring</div>
          <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 text-xs">₹500 / hr</div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      {/* Background decorative gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 h-[38rem] w-[38rem] rounded-full bg-fuchsia-400/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-indigo-400/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur px-3 py-1 text-xs text-gray-700"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Built for college students
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.7 }}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900"
            >
              Learn, collaborate, and earn with your peers
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="mt-5 text-lg leading-relaxed text-gray-600"
            >
              PeerMate connects you with students across your campus for peer-to-peer learning. Post what you want to learn, teach what you know, and exchange skills or earn money — all in one supportive community.
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="mt-6 grid sm:grid-cols-2 gap-3 text-sm"
            >
              <li className="flex items-center gap-2 rounded-lg bg-white/80 backdrop-blur p-3 shadow-sm border border-black/5">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                Learn or teach anything: coding, design, music, public speaking, and more
              </li>
              <li className="flex items-center gap-2 rounded-lg bg-white/80 backdrop-blur p-3 shadow-sm border border-black/5">
                <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" />
                Meet during free periods, collaborate on projects, and level up together
              </li>
              <li className="flex items-center gap-2 rounded-lg bg-white/80 backdrop-blur p-3 shadow-sm border border-black/5">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                Exchange skills or offer compensation — flexible and fair
              </li>
              <li className="flex items-center gap-2 rounded-lg bg-white/80 backdrop-blur p-3 shadow-sm border border-black/5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Grow beyond the classroom with real peer-to-peer learning
              </li>
            </motion.ul>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <button className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-semibold shadow-lg hover:bg-gray-800">
                Get early access
              </button>
              <button className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-6 py-3 text-sm font-semibold shadow-lg ring-1 ring-inset ring-black/10 hover:bg-gray-50">
                Watch demo
              </button>
            </motion.div>
          </div>

          {/* Visual */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="relative"
            >
              <PhoneMockup />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
