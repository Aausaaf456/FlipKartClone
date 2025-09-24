import { Menu, X, ShoppingCart,ChevronDown } from "lucide-react";
import './nav1.css';
import { useState } from "react";

export default function Nav1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
     
      <div className="  w-full h-[60px] bg-white shadow-md z-50">
        <nav className="flex items-center justify-between px-6 h-full text-black">
          <div className="flex items-center gap-2">
            <a href="#" className="hover:bg-white cursor-pointer">
              <img src="./flipkart.svg" className="h-10 w-auto" />
            </a>
          </div>
          <div className="hidden sm:block sm:w-2/5 md:w-[600px]">
            <input
              type="text"
              placeholder="Search for products, brands and more"
              className="w-full p-2 bg-blue-100 text-black rounded"
            />
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex items-center group">
              <a
                href="#"
                className="hover:bg-blue-600 flex items-center h-8 px-2 rounded-lg transition"
              >
                <img src="./login.svg" alt="login" className="h-8 w-auto" />
                <p className="px-2 text-xl text-black">Login</p>
              </a>
              <button className="flex items-center px-2 transition">
                <ChevronDown
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              </button>
            </div>
            <button className="flex items-center gap-1 px-3 py-1 rounded-lg hover:bg-gray-100 transition">
              <ShoppingCart size={25} />
              <span className="text-xl ml-1">Cart</span>
            </button>
            <button className="flex items-center gap-1 px-3 py-1 rounded-lg hover:bg-gray-100 transition">
              <img src="./become.svg" alt="become" className="h-8 w-auto" />
              <p className="px-2 text-xl text-black">Become a Seller</p>
            </button>

            <button className="flex justify-center rounded hover:bg-gray-200">
              <img src="./dot.svg" alt="dot" className="w-auto h-8" />
            </button>
          </div>
          <button
            className="sm:hidden"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>
        </nav>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>
        <ul className="flex flex-col p-4 gap-4">
          <li><a href="#" className="hover:text-blue-600">Login</a></li>
          <li><a href="#" className="hover:text-blue-600">Cart</a></li>
          <li><a href="#" className="hover:text-blue-600">Become a Seller</a></li>
        </ul>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}