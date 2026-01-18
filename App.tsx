
import React from 'react';
import { 
  CheckCircle2, 
  Heart, 
  Sparkles, 
  Target, 
  Clock, 
  Leaf, 
  ChevronDown,
  ArrowRight,
  Star,
  Zap,
  ShieldCheck
} from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Audience from './components/Audience';
import Benefits from './components/Benefits';
import Modules from './components/Modules';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-rose-100 selection:text-rose-900">
      <Header />
      <main>
        <Hero />
        <Audience />
        <Benefits />
        <Modules />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;
