import { useState } from 'react'
import { BookOpen, Play, Clock, Users, ChefHat } from 'lucide-react'

const recipes = [
  {
    id: 1,
    title: 'Deviled Eggs',
    description: 'Classic deviled eggs with a creamy, tangy filling — perfect for any gathering.',
    time: '30 min',
    servings: '12 pieces',
    difficulty: 'Easy',
    ingredients: [
      '6 large eggs',
      '3 tbsp mayonnaise',
      '1 tsp Dijon mustard',
      '1 tsp white vinegar',
      'Salt and pepper to taste',
      'Paprika for garnish',
      'Fresh chives, chopped',
    ],
    steps: [
      'Place eggs in a pot, cover with cold water by 1 inch. Bring to a boil over high heat.',
      'Once boiling, cover and remove from heat. Let sit for 12 minutes.',
      'Transfer eggs to an ice bath for 5 minutes. Peel and slice in half lengthwise.',
      'Scoop yolks into a bowl. Mash with a fork until smooth.',
      'Mix in mayonnaise, mustard, vinegar, salt, and pepper until creamy.',
      'Pipe or spoon the filling back into the egg white halves.',
      'Sprinkle with paprika and chives. Serve chilled.',
    ],
    videoUrl: null,
  },
  {
    id: 2,
    title: 'Scrambled Eggs',
    description: 'Soft, fluffy scrambled eggs the way abuela makes them — simple and perfect.',
    time: '10 min',
    servings: '2 servings',
    difficulty: 'Easy',
    ingredients: [
      '4 large eggs',
      '2 tbsp butter',
      '2 tbsp whole milk or cream',
      'Salt and pepper to taste',
      'Fresh herbs (optional)',
    ],
    steps: [
      'Crack eggs into a bowl. Add milk, salt, and pepper. Whisk until just combined (don\'t overbeat).',
      'Heat a non-stick pan over medium-low heat. Add butter and let it melt without browning.',
      'Pour in the egg mixture. Wait 20 seconds without stirring.',
      'Using a spatula, gently push eggs from the edges toward the center in large, soft folds.',
      'Continue folding every 10-15 seconds. Remove from heat while eggs are still slightly wet — they\'ll finish cooking from residual heat.',
      'Plate immediately. Garnish with fresh herbs if desired. Serve with toast.',
    ],
    videoUrl: null,
  },
]

export default function Recipes() {
  const [view, setView] = useState('book')
  const [selected, setSelected] = useState(null)

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-earth-50 to-cream py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-earth-400 text-sm uppercase tracking-[0.2em] font-semibold mb-3">From Our Kitchen</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-earth-800 mb-4">
            Book of Recipes
          </h1>
          <p className="text-earth-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Cherished family recipes passed down through generations.
            From Narcisa's kitchen to yours, with love.
          </p>

          {/* View Toggle */}
          <div className="mt-8 inline-flex bg-white rounded-full p-1 border border-earth-200">
            <button
              onClick={() => setView('book')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                view === 'book'
                  ? 'bg-earth-700 text-white shadow-sm'
                  : 'text-earth-500 hover:text-earth-700'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Book View
            </button>
            <button
              onClick={() => setView('video')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                view === 'video'
                  ? 'bg-earth-700 text-white shadow-sm'
                  : 'text-earth-500 hover:text-earth-700'
              }`}
            >
              <Play className="w-4 h-4" />
              Video View
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {view === 'book' ? (
            <BookView recipes={recipes} selected={selected} setSelected={setSelected} />
          ) : (
            <VideoView recipes={recipes} />
          )}
        </div>
      </section>
    </>
  )
}

function BookView({ recipes, selected, setSelected }) {
  return (
    <div className="grid md:grid-cols-[280px_1fr] gap-8">
      {/* Table of Contents */}
      <div className="bg-white rounded-2xl p-6 border border-earth-100 h-fit sticky top-24">
        <h3 className="font-serif text-lg font-bold text-earth-800 mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-earth-400" />
          Contents
        </h3>
        <ul className="space-y-1">
          {recipes.map(r => (
            <li key={r.id}>
              <button
                onClick={() => setSelected(selected === r.id ? null : r.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  selected === r.id
                    ? 'bg-warm-50 text-warm-700 font-medium'
                    : 'text-earth-500 hover:bg-earth-50 hover:text-earth-700'
                }`}
              >
                {r.title}
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-6 pt-4 border-t border-earth-100 text-center">
          <p className="text-xs text-earth-400">
            {recipes.length} recipes &middot; More coming soon
          </p>
        </div>
      </div>

      {/* Recipe Cards */}
      <div className="space-y-6">
        {recipes
          .filter(r => selected === null || selected === r.id)
          .map(r => (
          <article
            key={r.id}
            className="bg-white rounded-2xl border border-earth-100 overflow-hidden"
          >
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="flex items-center gap-1 text-xs bg-warm-50 text-warm-600 px-3 py-1 rounded-full">
                  <Clock className="w-3 h-3" /> {r.time}
                </span>
                <span className="flex items-center gap-1 text-xs bg-sage-50 text-sage-600 px-3 py-1 rounded-full">
                  <Users className="w-3 h-3" /> {r.servings}
                </span>
                <span className="flex items-center gap-1 text-xs bg-earth-50 text-earth-500 px-3 py-1 rounded-full">
                  <ChefHat className="w-3 h-3" /> {r.difficulty}
                </span>
              </div>

              <h2 className="font-serif text-2xl font-bold text-earth-800 mb-2">{r.title}</h2>
              <p className="text-earth-500 mb-6">{r.description}</p>

              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-earth-700 text-sm uppercase tracking-wider mb-3">
                    Ingredients
                  </h3>
                  <ul className="space-y-2">
                    {r.ingredients.map((ing, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-earth-600">
                        <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-warm-300 flex-shrink-0" />
                        {ing}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-earth-700 text-sm uppercase tracking-wider mb-3">
                    Instructions
                  </h3>
                  <ol className="space-y-3">
                    {r.steps.map((step, i) => (
                      <li key={i} className="flex gap-3 text-sm text-earth-600">
                        <span className="flex-shrink-0 w-6 h-6 bg-earth-100 text-earth-500 rounded-full flex items-center justify-center text-xs font-semibold">
                          {i + 1}
                        </span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

function VideoView({ recipes }) {
  return (
    <div>
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-warm-50 text-warm-600 px-4 py-2 rounded-full text-sm font-medium">
          <Play className="w-4 h-4" />
          Video recipes coming soon!
        </div>
        <p className="text-earth-400 text-sm mt-3 max-w-md mx-auto">
          We're filming step-by-step cooking videos for each recipe.
          Check back soon for the first episodes.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {recipes.map(r => (
          <div
            key={r.id}
            className="bg-white rounded-2xl border border-earth-100 overflow-hidden group"
          >
            {/* Video placeholder */}
            <div className="aspect-video bg-gradient-to-br from-earth-100 to-earth-200 flex items-center justify-center relative">
              <div className="w-16 h-16 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 text-earth-500 ml-1" />
              </div>
              <span className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded">
                Coming Soon
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-serif text-lg font-bold text-earth-800">{r.title}</h3>
              <p className="text-earth-400 text-sm mt-1">{r.description}</p>
              <div className="flex items-center gap-3 mt-3 text-xs text-earth-400">
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {r.time}</span>
                <span className="flex items-center gap-1"><ChefHat className="w-3 h-3" /> {r.difficulty}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
