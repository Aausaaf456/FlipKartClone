import './main.css';
export default function Div3()
{
      const mobiles = [
    { id: 1, name: "iPhone 15 Pro", price: "₹1,20,000", img: "./assets1/iphone.webp" },
    { id: 2, name: "Samsung Galaxy S24", price: "₹85,000", img: "./assets1/galaxy.webp" },
    { id: 3, name: "Realme 3pro", price: "₹13,000", img: "./assets1/realme.webp" },
    { id: 4, name: "Vivo X100 Pro", price: "₹55,000", img: "./assets1/vivo.webp" },
    { id: 1, name: "iPhone 16 Pro", price: "₹1,30,000", img: "./assets1/iphone16.webp" },
    { id: 1, name: "Galaxy S24 FE 5G", price: "₹29,999", img: "./assets1/galaxs.webp" },
  ];
    return(
            
            <section className="max-w-full mx-auto px-4 py-8 bg-white w-full mt-5">
                <h2 className="text-2xl font-bold mb-6">Mobiles for You</h2>
                    <div className="flex overflow-x-auto gap-4">
                        {mobiles.map((mobile) => (
                         <div
                            key={mobile.id}
                            className=" min-w-[200px] flex-shrink-0 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition cursor-pointer ml-6"
                          >
                               <img
                               src={mobile.img}
                               alt={mobile.name}
                                className="w-full h-40 object-contain"
                                />
                               <h3 className="text-lg font-semibold mt-3">{mobile.name}</h3>
                               <p className="text-blue-600 font-bold">{mobile.price}</p>
                                <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                                       Add to Cart
                               </button>
                            </div>
                       ))}
                   </div>
             </section>

     
    )
}