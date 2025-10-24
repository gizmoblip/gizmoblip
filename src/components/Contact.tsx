import { Mail, Instagram, Twitter, Youtube, Music } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to source premium devices? Reach out to discuss your needs
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-800 rounded-2xl p-8 text-center mb-8">
            <Mail className="mx-auto mb-4 text-yellow-400" size={48} />
            <h3 className="text-xl font-bold mb-3">Email Us</h3>
            <a
              href="mailto:hello@gizmoblip.com"
              className="text-2xl text-yellow-400 hover:text-yellow-500 font-semibold transition"
            >
              hello@gizmoblip.com
            </a>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-6">Follow Us</h3>
            <div className="flex justify-center gap-6">
              <a
                href="https://instagram.com/gizmoblip"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-all transform hover:scale-110"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://x.com/gizmoblip"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-all transform hover:scale-110"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://tiktok.com/@gizmoblip"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-all transform hover:scale-110"
              >
                <Music size={24} />
              </a>
              <a
                href="https://youtube.com/@gizmoblip"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-all transform hover:scale-110"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
