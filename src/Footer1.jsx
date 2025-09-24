import './app.css';

export default function Footer1()
{
   
  return (
    <footer className="bg-[#172337] text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 px-6 py-10 text-sm">
        <div>
          <h2 className="text-white font-semibold mb-3">ABOUT</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Flipkart Stories</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-white font-semibold mb-3">HELP</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Payments</a></li>
            <li><a href="#" className="hover:underline">Shipping</a></li>
            <li><a href="#" className="hover:underline">Cancellation & Returns</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-white font-semibold mb-3">POLICY</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Return Policy</a></li>
            <li><a href="#" className="hover:underline">Terms Of Use</a></li>
            <li><a href="#" className="hover:underline">Security</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-white font-semibold mb-3">SOCIAL</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">YouTube</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-white font-semibold mb-3">Mail Us:</h2>
          <p className="text-gray-400 text-xs">
            Flipkart Internet Private Limited,<br />
            Buildings Alyssa, Begonia &<br />
            Clove Embassy Tech Village,<br />
            Bengaluru, 560103,<br />
            Karnataka, India
          </p>
        </div>
        <div>
          <h2 className="text-white font-semibold mb-3">Registered Office Address:</h2>
          <p className="text-gray-400 text-xs">
            Same as above<br />
            CIN : U51109KA2012PTC066107<br />
            Telephone: 044-45614700
          </p>
        </div>
      </div>
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-6 py-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Flipkart Clone. All rights reserved.</p>
          <div className="flex items-center gap-3 mt-2 sm:mt-0">
            <img src="./assets1/visa.png" alt="visa" className="h-6" />
            <img src="./assets1/master.png" alt="mastercard" className="h-6" />
            <img src="./assets1/pay.png" alt="PayPal" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
    )
}