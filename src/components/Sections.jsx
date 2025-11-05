import { motion } from 'framer-motion'
import { Users, Sparkles, Wallet, Calendar, CheckCircle2, MessageSquare } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
  viewport: { once: true, amount: 0.3 }
})

function Features() {
  const items = [
    {
      icon: <Sparkles className="h-5 w-5" />, title: 'Learn any skill',
      desc: 'From Python and DSA to guitar and public speaking — if a peer can teach it, you can learn it.'
    },
    {
      icon: <Users className="h-5 w-5" />, title: 'Peer matching',
      desc: 'Find peers in your college by topic, level, and schedule to collaborate during free periods.'
    },
    {
      icon: <Wallet className="h-5 w-5" />, title: 'Earn from expertise',
      desc: 'Exchange skills directly or offer money as compensation — flexible and fair.'
    },
    {
      icon: <Calendar className="h-5 w-5" />, title: 'Project collabs',
      desc: 'Form teams for hackathons, mini-projects, portfolios, and competitions.'
    }
  ]
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-48 w-[60%] rounded-full bg-gradient-to-b from-fuchsia-200/40 to-transparent blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 {...fadeUp()} className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-center">
          Why students love PeerMate
        </motion.h2>
        <motion.p {...fadeUp(0.05)} className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
          Designed for real campus life — fast matching, flexible sessions, and meaningful outcomes.
        </motion.p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group rounded-2xl bg-white shadow-lg ring-1 ring-black/5 p-5 hover:shadow-xl hover:-translate-y-0.5 transition"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white grid place-items-center shadow-md">
                {f.icon}
              </div>
              <div className="mt-4 font-semibold text-gray-900">{f.title}</div>
              <div className="mt-2 text-sm text-gray-600">{f.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Story() {
  const steps = [
    { title: 'Post what you need', desc: 'Share the skill you want to learn or teach — add level, timing, and your campus.', icon: <MessageSquare className="h-5 w-5" /> },
    { title: 'Match with peers', desc: 'Get suggestions for students nearby with the right skills and availability.', icon: <Users className="h-5 w-5" /> },
    { title: 'Learn & collaborate', desc: 'Meet during free periods or online, collaborate on projects, and build together.', icon: <CheckCircle2 className="h-5 w-5" /> },
    { title: 'Exchange or earn', desc: 'Swap skills or offer fair compensation — your choice.', icon: <Wallet className="h-5 w-5" /> }
  ]
  return (
    <section id="story" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 {...fadeUp()} className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-center">
          How PeerMate works
        </motion.h2>
        <motion.p {...fadeUp(0.05)} className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
          From posting a learning goal to collaborating on real outcomes — it’s simple and student-friendly.
        </motion.p>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5"
            >
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-500 to-pink-500 text-white grid place-items-center shadow-md">
                  {s.icon}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{s.title}</div>
                  <div className="mt-1 text-sm text-gray-600">{s.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const quotes = [
    {
      name: 'Ananya • CSE 3rd year',
      text: 'Found a peer mentor for DSA and ended up building a portfolio project together. Best part? We met during free periods.',
    },
    {
      name: 'Rohan • ECE 2nd year',
      text: 'I taught basic guitar and earned enough to upgrade my strings. Loved the flexibility and friendly vibe.',
    },
    {
      name: 'Meera • IT 4th year',
      text: 'PeerMate made public speaking practice fun. Weekly sessions with peers boosted my confidence big time.',
    }
  ]
  return (
    <section id="testimonials" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-indigo-300/30 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 {...fadeUp()} className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-center">
          What students are saying
        </motion.h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={q.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5"
            >
              <p className="text-gray-800">“{q.text}”</p>
              <footer className="mt-4 text-sm text-gray-500">{q.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactBanner() {
  return (
    <section id="cta" className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-3xl bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-600 text-white p-8 sm:p-12 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Bring PeerMate to your campus</h3>
              <p className="mt-2 text-white/90">Be the first to try our beta or partner with us for a campus launch. We’ll get back to you within 24 hours.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
              <a href="mailto:team@peermate.app" className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-6 py-3 text-sm font-semibold shadow-lg hover:bg-gray-100">Contact us</a>
              <button className="inline-flex items-center justify-center rounded-full bg-white/15 text-white px-6 py-3 text-sm font-semibold ring-1 ring-inset ring-white/30 hover:bg-white/20">Join waitlist</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function Sections() {
  return (
    <>
      <Features />
      <Testimonials />
      <Story />
      <ContactBanner />
    </>
  )
}
