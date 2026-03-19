import { useState } from 'react'

export default function App() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-amber-900 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">☕ Rick's Coffee Shop</div>
          <div className="flex gap-6">
            <button
              onClick={() => setActiveTab('home')}
              className={`pb-2 ${activeTab === 'home' ? 'border-b-2 border-yellow-300' : 'hover:text-yellow-300'}`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab('menu')}
              className={`pb-2 ${activeTab === 'menu' ? 'border-b-2 border-yellow-300' : 'hover:text-yellow-300'}`}
            >
              Menu
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`pb-2 ${activeTab === 'contact' ? 'border-b-2 border-yellow-300' : 'hover:text-yellow-300'}`}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      {activeTab === 'home' && (
        <div>
          {/* Hero Section */}
          <section className="relative bg-gradient-to-r from-amber-900 to-amber-700 text-white py-20">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <h1 className="text-5xl font-bold mb-4">Welcome to Rick's Coffee Shop</h1>
              <p className="text-xl mb-8">Crafted with passion, served with love ☕</p>
              <button
                onClick={() => setActiveTab('menu')}
                className="bg-yellow-500 text-amber-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition"
              >
                Explore Our Menu
              </button>
            </div>
          </section>

          {/* About Section */}
          <section className="max-w-6xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-amber-900 mb-6">About Us</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Welcome to Rick's Coffee Shop, where every cup tells a story. For over 15 years, we've been serving the finest specialty coffees, handcrafted beverages, and fresh pastries to our community.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our passion is sourcing premium, ethically-grown beans from around the world and roasting them to perfection. Every visit to Rick's is an experience—a moment to slow down, connect, and enjoy exceptional coffee.
                </p>
              </div>
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg p-8 text-center">
                <div className="text-6xl mb-4">☕</div>
                <h3 className="text-2xl font-bold text-amber-900 mb-2">Premium Quality</h3>
                <p className="text-gray-700">Ethically sourced, expertly roasted, perfectly brewed</p>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="bg-amber-50 py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">Why Choose Rick's?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <div className="text-4xl mb-4">🌍</div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Global Sourcing</h3>
                  <p className="text-gray-700">Beans from the finest plantations across the globe</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <div className="text-4xl mb-4">👨‍🍳</div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Expert Baristas</h3>
                  <p className="text-gray-700">Skilled professionals dedicated to your perfect cup</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <div className="text-4xl mb-4">🏡</div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Cozy Atmosphere</h3>
                  <p className="text-gray-700">The perfect place to work, study, or relax</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Menu Section */}
      {activeTab === 'menu' && (
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-amber-900 mb-12 text-center">Our Menu</h1>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-amber-800 mb-6">☕ Espresso Drinks</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: 'Espresso', desc: 'Bold and concentrated', price: '$3.00' },
                { name: 'Americano', desc: 'Espresso with hot water', price: '$3.50' },
                { name: 'Cappuccino', desc: 'Espresso with steamed milk & foam', price: '$4.50' },
                { name: 'Latte', desc: 'Smooth and creamy espresso with milk', price: '$4.50' },
              ].map((item) => (
                <div key={item.name} className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                  <h3 className="text-lg font-bold text-amber-900">{item.name}</h3>
                  <p className="text-gray-600 mb-2">{item.desc}</p>
                  <p className="text-amber-700 font-bold">{item.price}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-amber-800 mb-6">🥤 Cold Drinks</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: 'Iced Coffee', desc: 'Our signature blend served cold', price: '$3.75' },
                { name: 'Cold Brew', desc: 'Smooth, naturally sweet', price: '$4.00' },
                { name: 'Iced Latte', desc: 'Chilled espresso with cold milk', price: '$4.50' },
                { name: 'Frappuccino', desc: 'Creamy coffee blended with ice', price: '$5.00' },
              ].map((item) => (
                <div key={item.name} className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-bold text-blue-900">{item.name}</h3>
                  <p className="text-gray-600 mb-2">{item.desc}</p>
                  <p className="text-blue-700 font-bold">{item.price}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-amber-800 mb-6">🥐 Pastries & Snacks</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: 'Fresh Croissant', desc: 'Buttery and flaky', price: '$3.50' },
                { name: 'Blueberry Muffin', desc: 'Homemade daily', price: '$3.00' },
                { name: 'Chocolate Chip Cookie', desc: 'Classic favorite', price: '$2.50' },
                { name: 'Almond Biscotti', desc: 'Perfect for dipping', price: '$2.75' },
              ].map((item) => (
                <div key={item.name} className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <h3 className="text-lg font-bold text-orange-900">{item.name}</h3>
                  <p className="text-gray-600 mb-2">{item.desc}</p>
                  <p className="text-orange-700 font-bold">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeTab === 'contact' && (
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-amber-900 mb-12 text-center">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="mb-8 p-6 bg-amber-50 rounded-lg border border-amber-200">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">📍 Location</h3>
                <p className="text-gray-700 text-lg">123 Coffee Street</p>
                <p className="text-gray-700 text-lg">Bean City, CA 94301</p>
              </div>

              <div className="mb-8 p-6 bg-amber-50 rounded-lg border border-amber-200">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">📞 Phone</h3>
                <p className="text-gray-700 text-lg">(555) COFFEE-1</p>
                <p className="text-gray-700 text-lg">(555) 263-3335</p>
              </div>

              <div className="mb-8 p-6 bg-amber-50 rounded-lg border border-amber-200">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">⏰ Hours</h3>
                <p className="text-gray-700">Monday - Friday: 6:30 AM - 7:00 PM</p>
                <p className="text-gray-700">Saturday: 7:00 AM - 8:00 PM</p>
                <p className="text-gray-700">Sunday: 8:00 AM - 6:00 PM</p>
              </div>

              <div className="p-6 bg-amber-50 rounded-lg border border-amber-200">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">✉️ Email</h3>
                <p className="text-gray-700 text-lg">hello@rickscoffee.com</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border-2 border-amber-900 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-amber-900 mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-amber-900 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-900"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-amber-900 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-900"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-amber-900 font-semibold mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-900"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-900 text-white font-bold py-2 rounded-lg hover:bg-amber-800 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg mb-2">☕ Rick's Coffee Shop</p>
          <p className="text-amber-200">Crafted with passion, served with love</p>
          <p className="text-amber-300 text-sm mt-4">© 2024 Rick's Coffee Shop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
