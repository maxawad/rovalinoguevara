import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Heart } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/food-bank', label: 'Food Bank' },
  { to: '/church', label: 'Church Project' },
  { to: '/recipes', label: 'Recipes' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-earth-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-serif text-xl font-bold text-earth-800 tracking-wide">
            Rovalino Guevara
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm font-medium transition-colors hover:text-warm-600 ${
                  pathname === l.to ? 'text-warm-600' : 'text-earth-600'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/sponsor"
              className="inline-flex items-center gap-1.5 bg-warm-500 hover:bg-warm-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
            >
              <Heart className="w-4 h-4" />
              Sponsor
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-earth-700">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-earth-100 bg-white">
          <div className="px-4 py-3 space-y-2">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                  pathname === l.to
                    ? 'bg-warm-50 text-warm-700'
                    : 'text-earth-600 hover:bg-earth-50'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/sponsor"
              onClick={() => setOpen(false)}
              className="flex items-center gap-1.5 px-3 py-2 text-warm-600 font-semibold text-sm"
            >
              <Heart className="w-4 h-4" />
              Sponsor Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
