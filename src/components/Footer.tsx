export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="GizmoBlip Logo" className="h-8 w-8 rounded-lg" />
            <span className="text-white font-semibold">GizmoBlip LLC</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm">
              © {currentYear} GizmoBlip LLC — All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Based in Virginia, USA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
