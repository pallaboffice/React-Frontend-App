import React from "react";
import { useState } from "react";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">MyShop</h1>
        <nav className="hidden md:flex space-x-4">
          <a href="#1" className="hover:text-gray-200">Home</a>
          <a href="#2" className="hover:text-gray-200">Shop</a>
          <a href="#3" className="hover:text-gray-200">About</a>
          <a href="#4" className="hover:text-gray-200">Contact</a>
        </nav>
        <div className="flex items-center space-x-4">
          <FaShoppingCart size={24} className="cursor-pointer" />
          <div className="relative">
            <FaUserCircle size={24} className="cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)} />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-md rounded">
                <a href="#5" className="block px-4 py-2 hover:bg-gray-200">Profile</a>
                <a href="#6" className="block px-4 py-2 hover:bg-gray-200">Orders</a>
                <a href="#7" className="block px-4 py-2 hover:bg-gray-200">Logout</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

const Banner = () => (
  <section className="bg-gray-200 p-10 text-center text-2xl font-bold">Welcome to MyShop</section>
);

const PopularProducts = () => (
  <section className="p-10">
    <h2 className="text-xl font-bold mb-4">Popular Products</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-white p-4 shadow-md">Product 1</div>
      <div className="bg-white p-4 shadow-md">Product 2</div>
      <div className="bg-white p-4 shadow-md">Product 3</div>
      <div className="bg-white p-4 shadow-md">Product 4</div>
    </div>
  </section>
);

const Brands = () => (
  <section className="p-10 bg-gray-100 text-center">
    <h2 className="text-xl font-bold mb-4">Our Brands</h2>
    <div className="flex justify-center space-x-4">
      <span className="bg-white p-2 shadow-md">Brand 1</span>
      <span className="bg-white p-2 shadow-md">Brand 2</span>
      <span className="bg-white p-2 shadow-md">Brand 3</span>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-blue-600 text-white p-4 text-center">
    <p>&copy; 2024 MyShop. All rights reserved.</p>
    <p>Version 1.0</p>
  </footer>
);

const App = () => (
  <div>
    <Header />
    <Banner />
    <PopularProducts />
    <Brands />
    <Footer />
  </div>
);

export default App;
