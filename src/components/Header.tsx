import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img src="/logo.jpg" alt="GizmoBlip Logo" className="h-10 w-10 rounded-lg" />
            <span className="text-xl font-bold text-gray-900">GizmoBlip</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-gray-900 font-medium transition">
              Products
            </button>
            <button onClick={() => scrollToSection('why-us')} className="text-gray-700 hover:text-gray-900 font-medium transition">
              Why Us
            </button>
            <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-gray-900 font-medium transition">
              Process
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-gray-900 font-medium transition">
              FAQ
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-yellow-400 text-gray-900 px-5 py-2 rounded-full font-semibold hover:bg-yellow-500 transition shadow-md">
              Contact
            </button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t">
            <button onClick={() => scrollToSection('products')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">
              Products
            </button>
            <button onClick={() => scrollToSection('why-us')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">
              Why Us
            </button>
            <button onClick={() => scrollToSection('process')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">
              Process
            </button>
            <button onClick={() => scrollToSection('faq')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">
              FAQ
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
