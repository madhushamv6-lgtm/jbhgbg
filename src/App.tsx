import { Moon, Coffee, Star, Heart, Gift, Sparkles, MapPin, Clock } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans relative overflow-hidden selection:bg-indigo-500/30">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-indigo-900/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-amber-900/10 blur-[120px]" />
        <div className="absolute top-[10%] right-[15%] w-32 h-32 rounded-full bg-amber-100/5 blur-[80px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-indigo-900/50 border border-indigo-500/30">
            <Moon className="w-5 h-5 text-amber-200" />
          </div>
          <span className="text-xl font-medium tracking-wide text-slate-100">Madhu's Moonlit Cafe</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#menu" className="hover:text-amber-200 transition-colors">Menu</a>
          <a href="#offers" className="hover:text-amber-200 transition-colors">Offers</a>
          <a href="#quotes" className="hover:text-amber-200 transition-colors">Vibe</a>
        </div>
        <button className="px-5 py-2 text-sm font-medium bg-amber-200/10 text-amber-200 border border-amber-200/20 rounded-full hover:bg-amber-200/20 transition-all">
          Order Now
        </button>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-24">
        {/* Hero Section */}
        <section className="py-20 md:py-32 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-300 text-xs font-medium uppercase tracking-wider mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open till midnight</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-slate-100 mb-6 leading-tight max-w-4xl"
          >
            Brewed under the <span className="text-amber-200 italic">Moonlight</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
          >
            Welcome to a celestial coffee experience. Whether you're a night owl or an early riser catching the fading stars, we have a cup waiting just for you.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button className="px-8 py-3.5 bg-amber-200 text-slate-900 font-medium rounded-full hover:bg-amber-300 transition-all shadow-[0_0_20px_rgba(253,230,138,0.3)]">
              Explore Menu
            </button>
            <button className="px-8 py-3.5 bg-slate-800/50 text-slate-300 font-medium rounded-full hover:bg-slate-800 transition-all border border-slate-700">
              Find Us
            </button>
          </motion.div>
        </section>

        {/* Sweet Quotes Section */}
        <section id="quotes" className="py-16">
          <div className="grid md:grid-cols-3 gap-6">
            <QuoteCard 
              icon={<Coffee className="text-indigo-400" />}
              quote="Coffee is a hug in a mug, specially brewed to warm your soul under the starry night."
            />
            <QuoteCard 
              icon={<Moon className="text-amber-200" />}
              quote="Just like the moon, we go through phases. But our love for coffee remains full."
            />
            <QuoteCard 
              icon={<Heart className="text-rose-400" />}
              quote="Every empty cup is a story told. Every fresh pour is a new dream beginning."
            />
          </div>
        </section>

        {/* Special Offers Section */}
        <section id="offers" className="py-24">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-100 mb-4">Celestial Offers</h2>
            <p className="text-slate-400 max-w-xl">Magical deals that appear when the stars align. Don't miss out on these lunar specials.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <OfferCard 
              title="Midnight Mocha Magic"
              description="Enjoy 20% off all mocha and hot chocolate drinks every night after 9 PM. Perfect for those late-night conversations."
              code="MOON20"
            />
            <OfferCard 
              title="Lunar Loyalty Buy 1 Get 1"
              description="Bring a friend during the full moon! Buy any large celestial signature brew and get the second one absolutely free."
              code="FULLMOON"
            />
          </div>
        </section>

        {/* Owner Section / Footer */}
        <footer className="mt-20 pt-10 border-t border-slate-800 flex flex-col items-center text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-950 px-4">
            <Star className="w-5 h-5 text-amber-200/50" />
          </div>
          
          <h3 className="text-2xl font-serif text-slate-200 mb-2">Madhu's Moonlit Cafe</h3>
          <p className="text-slate-400 text-sm mb-8 italic">"Crafted with love and stardust by Madhu."</p>
          
          <div className="flex flex-col sm:flex-row gap-8 text-sm text-slate-500 mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>123 Starlight Avenue, Dream City</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Dusk till Dawn (6 PM - 6 AM)</span>
            </div>
          </div>
          
          <div className="text-xs text-slate-600">
            © {new Date().getFullYear()} Madhu's Coffee. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}

function QuoteCard({ icon, quote }: { icon: React.ReactNode, quote: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm flex flex-col items-center text-center gap-4 relative overflow-hidden group"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="p-3 rounded-full bg-slate-800/80 mb-2">
        {icon}
      </div>
      <p className="text-slate-300 font-serif leading-relaxed italic">
        "{quote}"
      </p>
    </motion.div>
  );
}

function OfferCard({ title, description, code }: { title: string, description: string, code: string }) {
  return (
    <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-950/40 to-slate-900/80 border border-indigo-900/50 relative overflow-hidden">
      <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-amber-500/10 blur-[30px]" />
      
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-indigo-900/50 border border-indigo-500/30">
            <Gift className="w-5 h-5 text-indigo-300" />
          </div>
          <h3 className="text-xl font-medium text-slate-200">{title}</h3>
        </div>
      </div>
      
      <p className="text-slate-400 mb-6 leading-relaxed">
        {description}
      </p>
      
      <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950/50 border border-slate-800">
        <span className="text-sm text-slate-500">Promo Code</span>
        <span className="font-mono text-amber-200 font-medium tracking-wider">{code}</span>
      </div>
    </div>
  );
}
