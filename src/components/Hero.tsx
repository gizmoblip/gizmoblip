import { CheckCircle2, Shield, Package, CreditCard } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Premium Apple devices.
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          <span className="text-yellow-600"> No guesswork.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto">
            We source from vetted U.S. channels and verify every device. Transparent grading, fair pricing, and fast global shipping.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Request a Quote
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-900 hover:text-white transition shadow-md"
            >
              See Stock Examples
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 bg-white p-4 rounded-xl shadow-sm">
              <CheckCircle2 className="text-green-600 flex-shrink-0" size={20} />
              <span className="text-sm font-medium text-gray-700">IMEI-checked</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white p-4 rounded-xl shadow-sm">
              <Shield className="text-blue-600 flex-shrink-0" size={20} />
              <span className="text-sm font-medium text-gray-700">30-point inspection</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white p-4 rounded-xl shadow-sm">
              <Package className="text-yellow-600 flex-shrink-0" size={20} />
              <span className="text-sm font-medium text-gray-700">U.S. & worldwide shipping</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white p-4 rounded-xl shadow-sm">
              <CreditCard className="text-red-500 flex-shrink-0" size={20} />
              <span className="text-sm font-medium text-gray-700">Secure payments</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
