import { MessageSquare, CheckSquare, CreditCard, Truck } from 'lucide-react';

const steps = [
  {
    number: '1',
    icon: MessageSquare,
    title: 'Tell us your needs',
    description: 'Share your models, grades, and quantity requirements. We\'ll work with you to understand exactly what you need.'
  },
  {
    number: '2',
    icon: CheckSquare,
    title: 'We confirm details',
    description: 'We confirm availability, pricing, and lead time. You get transparent information before committing.'
  },
  {
    number: '3',
    icon: CreditCard,
    title: 'Payment & verification',
    description: 'Secure payment processing with industry-standard encryption. Your transaction is safe with us.'
  },
  {
    number: '4',
    icon: Truck,
    title: 'Shipment with tracking',
    description: 'Fast, reliable shipping with full tracking. Stay updated on your order from our warehouse to your door.'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple, transparent process from inquiry to delivery
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <step.icon className="text-gray-900" size={32} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-yellow-400 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
