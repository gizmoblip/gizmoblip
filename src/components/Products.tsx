import { Smartphone, Cable, Tablet, Users } from 'lucide-react';

const products = [
  {
    icon: Smartphone,
    title: 'Unlocked iPhones',
    description: 'iPhone 15/14 A/B Grade',
    details: 'Factory unlocked, fully tested, ready for any carrier worldwide.',
    iconColor: 'text-blue-500',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Cable,
    title: 'Apple Accessories',
    description: 'OEM & MFi Certified',
    details: 'Authentic Apple accessories and certified third-party products.',
    iconColor: 'text-yellow-500',
    bgColor: 'bg-yellow-50'
  },
  {
    icon: Tablet,
    title: 'Other Devices',
    description: 'iPad / Watch',
    details: 'Verified Apple tablets, smartwatches, and more consumer electronics.',
    iconColor: 'text-cyan-500',
    bgColor: 'bg-cyan-50'
  },
  {
    icon: Users,
    title: 'Bulk / B2B',
    description: 'Wholesale lots for verified resellers',
    details: 'Special pricing and terms for qualified business partners.',
    iconColor: 'text-red-500',
    bgColor: 'bg-red-50'
  }
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Carefully sourced and verified inventory to meet your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className={`${product.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <product.icon className={product.iconColor} size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {product.title}
              </h3>
              <p className="text-sm font-semibold text-yellow-600 mb-3">
                {product.description}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {product.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
