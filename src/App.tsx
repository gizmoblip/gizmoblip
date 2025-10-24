import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <main>
        <Hero />
        <Products />
        <WhyUs />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
