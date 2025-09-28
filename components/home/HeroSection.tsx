export function HeroSection() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold text-gray-900 mb-8">
          🎓 Alumni Website
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          Fresh start - completely clean slate
        </p>
        <p className="text-lg text-gray-500">
          Ready to build something amazing from scratch!
        </p>
        
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What's Next?
          </h2>
          <ul className="text-left space-y-2 text-gray-600">
            <li>• Design a proper alumni homepage</li>
            <li>• Add school branding and colors</li>
            <li>• Create membership sections</li>
            <li>• Build event listings</li>
            <li>• Add alumni directory</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
