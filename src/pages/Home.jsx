import { Link } from 'react-router-dom'
import { Heart, Church, BookOpen, ArrowDown } from 'lucide-react'

const projects = [
  {
    to: '/food-bank',
    icon: Heart,
    title: 'Food Bank & Donations',
    description: 'Providing meals and essential supplies to families in need. Join us in the fight against hunger.',
    color: 'warm',
  },
  {
    to: '/church',
    icon: Church,
    title: 'Church Project',
    description: 'Building a place of worship and community in Alicante, Spain. A dream becoming reality.',
    color: 'sage',
  },
  {
    to: '/recipes',
    icon: BookOpen,
    title: 'Book of Recipes',
    description: 'Cherished family recipes passed down through generations. From our kitchen to yours.',
    color: 'earth',
  },
]

const colorMap = {
  warm: {
    bg: 'bg-warm-50',
    icon: 'bg-warm-100 text-warm-600',
    hover: 'hover:border-warm-300',
    link: 'text-warm-600',
  },
  sage: {
    bg: 'bg-sage-50',
    icon: 'bg-sage-100 text-sage-600',
    hover: 'hover:border-sage-300',
    link: 'text-sage-600',
  },
  earth: {
    bg: 'bg-earth-50',
    icon: 'bg-earth-100 text-earth-600',
    hover: 'hover:border-earth-400',
    link: 'text-earth-600',
  },
}

const milestones = [
  { year: 'Our Roots', text: 'A family built on faith, hard work, and love for community. The Rovalino Guevara name carries a legacy of service and togetherness.' },
  { year: 'Giving Back', text: 'From organizing neighborhood food drives to supporting local families, we have always believed that generosity starts at home and grows outward.' },
  { year: 'Building Forward', text: 'Properties developed, charities organized, and lives touched. Our journey has been one of building — not just structures, but connections between people.' },
  { year: 'The Future', text: 'A church in Alicante, a thriving food bank, and recipes shared with the world. The next chapter is our biggest yet, and we want you to be part of it.' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-warm-50 via-cream to-earth-50 opacity-80" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(232,141,42,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(107,138,76,0.08) 0%, transparent 50%)'
        }} />

        <div className="relative z-10 max-w-3xl">
          <p className="text-earth-400 text-sm uppercase tracking-[0.3em] mb-6 font-medium">
            A Family Legacy
          </p>
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold text-earth-800 leading-[0.95] mb-4">
            Narcisa<br />Ernestina
          </h1>
          <div className="w-20 h-0.5 bg-warm-400 mx-auto my-6" />
          <p className="font-serif text-xl sm:text-2xl text-earth-500 italic">
            Rovalino Guevara
          </p>
          <p className="mt-6 text-earth-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Faith, family, and community. Dedicated to feeding the hungry,
            building places of worship, and sharing the warmth of home-cooked meals.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/sponsor"
              className="inline-flex items-center gap-2 bg-warm-500 hover:bg-warm-600 text-white font-semibold px-8 py-3.5 rounded-full transition-all shadow-lg shadow-warm-200 hover:shadow-warm-300"
            >
              <Heart className="w-5 h-5" />
              Support Our Mission
            </Link>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-earth-500 hover:text-earth-700 font-medium transition-colors"
            >
              Explore Projects
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-5 h-5 text-earth-300" />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-warm-500 text-sm uppercase tracking-[0.2em] font-semibold mb-2">What We Do</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-earth-800">Our Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map(p => {
              const c = colorMap[p.color]
              return (
                <Link
                  key={p.to}
                  to={p.to}
                  className={`group block ${c.bg} border border-earth-100 ${c.hover} rounded-2xl p-8 transition-all hover:shadow-lg hover:-translate-y-1`}
                >
                  <div className={`w-14 h-14 rounded-xl ${c.icon} flex items-center justify-center mb-5`}>
                    <p.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-earth-800 mb-3">{p.title}</h3>
                  <p className="text-earth-500 text-sm leading-relaxed mb-4">{p.description}</p>
                  <span className={`text-sm font-semibold ${c.link} group-hover:underline`}>
                    Learn more &rarr;
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Family Story */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sage-500 text-sm uppercase tracking-[0.2em] font-semibold mb-2">Who We Are</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-earth-800">Our Story</h2>
            <p className="mt-4 text-earth-500 max-w-2xl mx-auto">
              The Rovalino Guevara family has been dedicated to community service,
              charitable work, and bringing people together for generations.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-warm-400" />
                <div>
                  <h3 className="font-serif text-lg font-bold text-earth-700 mb-1">{m.year}</h3>
                  <p className="text-earth-500 leading-relaxed">{m.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 bg-gradient-to-r from-warm-50 to-sage-50 rounded-2xl p-8 sm:p-10 text-center">
            <h3 className="font-serif text-2xl font-bold text-earth-800 mb-3">
              Be Part of Our Journey
            </h3>
            <p className="text-earth-500 mb-6 max-w-lg mx-auto">
              Whether through donations, sponsorship, or simply sharing our recipes
              with your loved ones — every act of kindness grows the legacy.
            </p>
            <Link
              to="/sponsor"
              className="inline-flex items-center gap-2 bg-earth-700 hover:bg-earth-800 text-white font-semibold px-7 py-3 rounded-full transition-colors"
            >
              <Heart className="w-4 h-4" />
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
