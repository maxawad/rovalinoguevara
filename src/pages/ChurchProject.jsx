import { Link } from 'react-router-dom'
import { Church, MapPin, Heart, Copy, Check } from 'lucide-react'
import { useState } from 'react'

const USDC_ADDRESS = '0x742d35Cc6634C0532925a3b844Bc9e7595f5bD91'
const CHAIN = 'Base'

const phases = [
  { title: 'Land Acquisition', description: 'Securing the perfect location in Alicante for our community church.', status: 'in-progress' },
  { title: 'Architecture & Design', description: 'Creating a welcoming space that reflects our values and serves the community.', status: 'upcoming' },
  { title: 'Construction', description: 'Breaking ground and building the church brick by brick, with love.', status: 'upcoming' },
  { title: 'Grand Opening', description: 'Opening the doors to the community — a celebration of faith and unity.', status: 'upcoming' },
]

export default function ChurchProject() {
  const [copied, setCopied] = useState(false)

  const copyAddress = async () => {
    await navigator.clipboard.writeText(USDC_ADDRESS)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-sage-50 to-cream py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sage-500 text-sm uppercase tracking-[0.2em] font-semibold mb-3">Faith & Community</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-earth-800 mb-4">
            Church Project
          </h1>
          <div className="flex items-center justify-center gap-2 text-earth-500 mb-4">
            <MapPin className="w-5 h-5 text-sage-500" />
            <span className="text-lg">Alicante, Spain</span>
          </div>
          <p className="text-earth-500 text-lg max-w-2xl mx-auto leading-relaxed">
            We're building more than a church — we're building a home for faith,
            fellowship, and community in the heart of Alicante.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-earth-800 mb-4">Our Vision</h2>
              <div className="space-y-4 text-earth-500 leading-relaxed">
                <p>
                  Alicante is a city of warmth, culture, and community. We believe
                  it deserves a new place of worship — one that brings people
                  together across backgrounds and generations.
                </p>
                <p>
                  This church will serve not only as a house of prayer, but as a
                  community center: hosting meals, events, educational programs,
                  and support services for those who need it most.
                </p>
              </div>
            </div>
            <div className="bg-sage-50 rounded-2xl p-8 border border-sage-100">
              <Church className="w-12 h-12 text-sage-500 mb-4" />
              <h3 className="font-serif text-xl font-bold text-earth-800 mb-3">The Church Will Include</h3>
              <ul className="space-y-2 text-earth-600 text-sm">
                {[
                  'Main worship hall (200+ capacity)',
                  'Community kitchen & dining area',
                  'Youth education rooms',
                  'Garden & outdoor gathering space',
                  'Food pantry storage',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-sage-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-earth-800">Project Phases</h2>
          </div>
          <div className="space-y-6">
            {phases.map((p, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    p.status === 'in-progress'
                      ? 'bg-sage-400 border-sage-400'
                      : 'bg-white border-earth-300'
                  }`} />
                  {i < phases.length - 1 && <div className="w-0.5 h-12 bg-earth-200 mt-1" />}
                </div>
                <div className={`pb-6 ${p.status === 'in-progress' ? '' : 'opacity-60'}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-serif text-lg font-bold text-earth-800">{p.title}</h3>
                    {p.status === 'in-progress' && (
                      <span className="text-xs bg-sage-100 text-sage-700 px-2 py-0.5 rounded-full font-medium">
                        In Progress
                      </span>
                    )}
                  </div>
                  <p className="text-earth-500 text-sm">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-earth-800 mb-3">Support the Church</h2>
            <p className="text-earth-500 max-w-xl mx-auto">
              Every contribution brings us closer to breaking ground. Donate with
              cryptocurrency or become a sponsor.
            </p>
          </div>

          {/* USDC */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 border border-blue-100 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <span className="font-bold text-blue-600 text-sm">USDC</span>
              </div>
              <div>
                <h3 className="font-semibold text-earth-800">Donate with USDC</h3>
                <p className="text-xs text-earth-400">{CHAIN} Network</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-xl p-3 border border-blue-100">
              <code className="text-xs sm:text-sm text-earth-600 flex-1 overflow-hidden text-ellipsis">
                {USDC_ADDRESS}
              </code>
              <button
                onClick={copyAddress}
                className="flex-shrink-0 p-2 hover:bg-blue-50 rounded-lg transition-colors"
                title="Copy address"
              >
                {copied
                  ? <Check className="w-4 h-4 text-green-500" />
                  : <Copy className="w-4 h-4 text-earth-400" />
                }
              </button>
            </div>
            <p className="text-xs text-earth-400 mt-3">
              Please only send USDC on the {CHAIN} network to this address.
            </p>
          </div>

          <div className="text-center">
            <Link
              to="/sponsor"
              className="inline-flex items-center gap-2 bg-earth-700 hover:bg-earth-800 text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
            >
              <Heart className="w-5 h-5" />
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
