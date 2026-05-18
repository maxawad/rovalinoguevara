import { Heart, Star, Gem, Crown, Copy, Check } from 'lucide-react'
import { useState } from 'react'

const USDC_ADDRESS = '0x742d35Cc6634C0532925a3b844Bc9e7595f5bD91'

const tiers = [
  {
    icon: Heart,
    name: 'Friend',
    amount: '$25+',
    color: 'warm',
    perks: [
      'Name on our supporters page',
      'Monthly newsletter updates',
      'Our heartfelt gratitude',
    ],
  },
  {
    icon: Star,
    name: 'Builder',
    amount: '$100+',
    color: 'sage',
    perks: [
      'Everything in Friend',
      'Name on church dedication wall',
      'Quarterly progress reports with photos',
      'Invitation to groundbreaking ceremony',
    ],
    featured: true,
  },
  {
    icon: Gem,
    name: 'Pillar',
    amount: '$500+',
    color: 'earth',
    perks: [
      'Everything in Builder',
      'Personalized thank-you video',
      'VIP seat at grand opening',
      'Family name on permanent plaque',
    ],
  },
  {
    icon: Crown,
    name: 'Founding Patron',
    amount: '$1,000+',
    color: 'warm',
    perks: [
      'Everything in Pillar',
      'Named space in the church',
      'Lifetime honorary membership',
      'Direct line to the family',
      'Annual dinner invitation',
    ],
  },
]

const tierColors = {
  warm: { bg: 'bg-warm-50', border: 'border-warm-200', icon: 'bg-warm-100 text-warm-600', btn: 'bg-warm-500 hover:bg-warm-600' },
  sage: { bg: 'bg-sage-50', border: 'border-sage-200', icon: 'bg-sage-100 text-sage-600', btn: 'bg-sage-600 hover:bg-sage-700' },
  earth: { bg: 'bg-earth-50', border: 'border-earth-200', icon: 'bg-earth-100 text-earth-600', btn: 'bg-earth-700 hover:bg-earth-800' },
}

export default function Sponsor() {
  const [copied, setCopied] = useState(false)

  const copyAddress = async () => {
    await navigator.clipboard.writeText(USDC_ADDRESS)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-warm-50 via-cream to-cream py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-6 bg-warm-100 text-warm-500 rounded-2xl flex items-center justify-center">
            <Heart className="w-8 h-8" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-earth-800 mb-4">
            Become a Sponsor
          </h1>
          <p className="text-earth-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Your sponsorship directly funds our food bank, church construction in
            Alicante, and community programs. Choose how you'd like to contribute.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tiers.map(t => {
              const c = tierColors[t.color]
              return (
                <div
                  key={t.name}
                  className={`rounded-2xl border ${t.featured ? c.border + ' ring-2 ring-sage-200' : 'border-earth-100'} bg-white p-6 flex flex-col relative`}
                >
                  {t.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sage-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <div className={`w-12 h-12 ${c.icon} rounded-xl flex items-center justify-center mb-4`}>
                    <t.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-earth-800">{t.name}</h3>
                  <p className="text-2xl font-bold text-earth-700 mt-1 mb-4">{t.amount}</p>
                  <ul className="space-y-2 flex-1 mb-6">
                    {t.perks.map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-earth-500">
                        <span className="w-1 h-1 mt-2 rounded-full bg-earth-300 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://gofundme.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center ${c.btn} text-white text-sm font-semibold py-3 rounded-full transition-colors`}
                  >
                    Sponsor Now
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Crypto */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold text-earth-800 mb-3">
            Prefer Crypto?
          </h2>
          <p className="text-earth-500 mb-6">
            Send USDC on the Base network directly to our wallet.
          </p>
          <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100 max-w-lg mx-auto">
            <code className="text-xs sm:text-sm text-earth-600 flex-1 overflow-hidden text-ellipsis">
              {USDC_ADDRESS}
            </code>
            <button
              onClick={copyAddress}
              className="flex-shrink-0 p-2 hover:bg-blue-100 rounded-lg transition-colors"
            >
              {copied
                ? <Check className="w-4 h-4 text-green-500" />
                : <Copy className="w-4 h-4 text-earth-400" />
              }
            </button>
          </div>
          <p className="text-xs text-earth-400 mt-3">Base Network &middot; USDC only</p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold text-earth-800 mb-3">
            Questions About Sponsoring?
          </h2>
          <p className="text-earth-500 mb-6">
            For larger donations, corporate sponsorships, or in-kind contributions,
            reach out and we'll work together to make the biggest impact.
          </p>
          <a
            href="mailto:contact@rovalinoguevara.com"
            className="inline-flex items-center gap-2 border-2 border-earth-300 hover:border-earth-400 text-earth-700 font-semibold px-7 py-3 rounded-full transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  )
}
