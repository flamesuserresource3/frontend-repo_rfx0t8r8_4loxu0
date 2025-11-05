const topics = [
  'Python', 'JavaScript', 'Java', 'Cpp', 'CSharp', 'Ruby', 'Swift', 'Kotlin', 'PHP', 'R', 'Go', 'SQL',
  'Web Development', 'Frontend Development', 'Backend Development', 'Full Stack Development', 'Android Development', 'iOS Development', 'Game Development',
  'Data Science', 'Machine Learning', 'Artificial Intelligence', 'Cybersecurity', 'Cloud Computing', 'Blockchain Development', 'DSA', 'Competitive Programming',
  'Guitar', 'Piano/Keyboard', 'Singing', 'Drums', 'Violin', 'Music Production', 'Acting', 'Drawing', 'Painting', 'Sketching', 'Photography', 'Digital Art',
  'Graphic Design', 'Video Editing', 'Animation', 'Dance', 'Public Speaking', 'Writing', 'Assignments', 'Xerox'
]

function Row({ direction = 'left' }) {
  const content = (
    <div className="flex items-center gap-4">
      {topics.map((item, i) => (
        <span
          key={`${item}-${i}`}
          className="px-3 py-1 rounded-full bg-white/70 backdrop-blur text-gray-800 text-sm font-medium shadow-sm border border-black/5"
        >
          {item}
        </span>
      ))}
    </div>
  )
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        className={`inline-flex gap-4 animate-[scroll_40s_linear_infinite] ${direction === 'right' ? 'direction-rtl' : ''}`}
        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        {content}
        {content}
        {content}
      </div>
    </div>
  )
}

export default function TopicsTicker() {
  return (
    <section id="topics" className="relative py-10">
      <style>{`
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .direction-rtl { animation-direction: reverse; }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/5 bg-gradient-to-b from-white to-white/60 backdrop-blur p-4 shadow-lg">
          <Row direction="left" />
          <div className="h-3" />
          <Row direction="right" />
        </div>
      </div>
    </section>
  )
}
