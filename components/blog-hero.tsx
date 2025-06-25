import { BookOpen, Users, Calendar } from "lucide-react"

export function BlogHero() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Health & <span className="text-yellow-300">Wellness Blog</span>
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Expert insights on traditional medicine, natural healing, and holistic wellness from our experienced
            doctors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <BookOpen className="h-8 w-8" />
            </div>
            <h3 className="font-semibold mb-2">Expert Articles</h3>
            <p className="text-sm opacity-80">Written by qualified doctors</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="font-semibold mb-2">Patient Stories</h3>
            <p className="text-sm opacity-80">Real healing experiences</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Calendar className="h-8 w-8" />
            </div>
            <h3 className="font-semibold mb-2">Regular Updates</h3>
            <p className="text-sm opacity-80">Fresh content weekly</p>
          </div>
        </div>
      </div>
    </section>
  )
}
