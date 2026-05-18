import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-earth-800 text-earth-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-3">Rovalino Guevara</h3>
            <p className="text-sm text-earth-300 leading-relaxed">
              A family dedicated to community, faith, and nourishing others.
              Building a legacy of generosity and love.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Projects</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/food-bank" className="hover:text-warm-300 transition-colors">Food Bank & Donations</Link></li>
              <li><Link to="/church" className="hover:text-warm-300 transition-colors">Church Project — Alicante</Link></li>
              <li><Link to="/recipes" className="hover:text-warm-300 transition-colors">Book of Recipes</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Support</h4>
            <Link
              to="/sponsor"
              className="inline-flex items-center gap-1.5 bg-warm-500 hover:bg-warm-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              <Heart className="w-4 h-4" />
              Become a Sponsor
            </Link>
          </div>
        </div>
        <div className="border-t border-earth-700 mt-8 pt-6 text-center text-xs text-earth-400">
          &copy; {new Date().getFullYear()} Rovalino Guevara Family. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
