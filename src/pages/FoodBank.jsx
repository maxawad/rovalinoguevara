import { Link } from 'react-router-dom'
import { Heart, Users, Package, Truck } from 'lucide-react'

const stats = [
  { icon: Package, label: 'Meals Provided', value: '5,000+' },
  { icon: Users, label: 'Families Served', value: '200+' },
  { icon: Truck, label: 'Food Drives', value: '15+' },
  { icon: Heart, label: 'Volunteers', value: '50+' },
]

export default function FoodBank() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-warm-50 to-cream py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-warm-500 text-sm uppercase tracking-[0.2em] font-semibold mb-3">Community Support</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-earth-800 mb-4">
            Food Bank & Donations
          </h1>
          <p className="text-earth-500 text-lg max-w-2xl mx-auto leading-relaxed">
            No family should go hungry. Our food bank initiative connects generous
            donors with families in need, one meal at a time.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="bg-white rounded-xl p-6 text-center border border-earth-100">
              <div className="w-12 h-12 mx-auto mb-3 bg-warm-50 text-warm-500 rounded-xl flex items-center justify-center">
                <s.icon className="w-6 h-6" />
              </div>
              <p className="font-serif text-2xl font-bold text-earth-800">{s.value}</p>
              <p className="text-earth-400 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-earth-800 mb-4">
                How We Help
              </h2>
              <div className="space-y-4 text-earth-500 leading-relaxed">
                <p>
                  The Rovalino Guevara Food Bank was born from a simple belief:
                  when you have more than enough, you share. What started as
                  neighborhood food drives has grown into an organized effort
                  serving hundreds of families.
                </p>
                <p>
                  We collect non-perishable goods, fresh produce, and prepared
                  meals, distributing them to families, shelters, and community
                  centers. Every donation — no matter the size — makes a
                  difference.
                </p>
              </div>
            </div>
            <div className="bg-warm-50 rounded-2xl p-8 border border-warm-100">
              <h3 className="font-serif text-xl font-bold text-earth-800 mb-4">What We Accept</h3>
              <ul className="space-y-3 text-earth-600">
                {[
                  'Canned goods & non-perishables',
                  'Fresh fruits & vegetables',
                  'Rice, beans, pasta & grains',
                  'Baby food & formula',
                  'Hygiene products',
                  'Monetary donations',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-warm-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-earth-800 mb-4">
            Make a Donation
          </h2>
          <p className="text-earth-500 mb-8 max-w-xl mx-auto">
            Your generosity helps us keep the food bank running. Every dollar
            provides meals to families who need it most.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://gofundme.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00b964] hover:bg-[#00a357] text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg"
            >
              <Heart className="w-5 h-5" />
              Donate on GoFundMe
            </a>
            <Link
              to="/sponsor"
              className="inline-flex items-center gap-2 border-2 border-earth-300 hover:border-earth-400 text-earth-700 font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
