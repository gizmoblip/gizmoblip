import { Award, Shield, RotateCcw, Globe } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Transparent Grading',
    description: 'Every device is graded by our 30-point inspection process. You know exactly what you\'re getting.'
  },
  {
    icon: Shield,
    title: 'Clean IMEIs',
    description: 'All devices are verified for clean IMEI status. No blacklisted or reported stolen devices.'
  },
  {
    icon: RotateCcw,
    title: 'Fair Returns',
    description: 'Not satisfied? We offer fair return policies to ensure you\'re confident in every purchase.'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Fast shipping to the U.S. and international destinations. Track your order every step of the way.'
  }
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why GizmoBlip
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trust, transparency, and quality in every transaction
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-2xl mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <feature.icon className="text-gray-900" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
