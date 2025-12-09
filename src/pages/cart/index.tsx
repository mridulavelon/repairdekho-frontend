import Metaseo from '@/components/Metaseo';
import useStore from '@/lib/store';
import { faCartShopping, faTimesCircle, faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Cart() {
  const router = useRouter();
  const{ cart,removeFromCart,updateShowLogin,updateLoading } = useStore();
  const { data : session, status } = useSession();
  const handleToProceed = () => {
    if(status === "authenticated"){
      updateLoading(true);
      router.push('/checkout')
    }else{
      updateShowLogin(true);
    }
  }
    return (
      <>
        <Metaseo
         title={"Cart"}
         description={"Check your product added in the cart amd proceed to checkout page"}
         keywords={"Cart"}
         metadataBase={""}
         urlslug={""}
        />
        <div className="bg-gray-50 h-screen">
        <div className="container mx-auto px-4 py-8 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        {cart.length > 0 ? (
        <div className="space-y-6">

  {cart.map((item: any) => (
    <Link key={item.orderid} href={`/product/${item.modelid}`}>
      <div className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-4 border border-gray-100 flex flex-col md:flex-row md:items-center gap-6 cursor-pointer">

        {/* IMAGE */}
        <div className="w-full md:w-40 h-48 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
          <img
            src={item.modelimagelink || "/images/no-preview.jpg"}
            alt={item.modelid}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
                e.currentTarget.src = "/images/no-preview.jpg";
            }}
          />
        </div>

        {/* CONTENT */}
        <div className="flex-1 space-y-1">
          <h2 className="text-xl font-semibold text-blue-600 tracking-wide">
            {item.brand.toUpperCase()} - {item.model}
          </h2>

          <div className="space-y-1 text-sm text-gray-600">

            {item.display && (
              <p><span className="font-bold">Display:</span> {item.display.type} (₹{item.display.price})</p>
            )}

            {item.touch && (
              <p><span className="font-bold">Touch:</span> {item.touch}</p>
            )}

            {item.battery && (
              <p><span className="font-bold">Battery:</span> {item.battery}</p>
            )}

            {item.charging && (
              <p><span className="font-bold">Charging:</span> {item.charging}</p>
            )}

            {item.backpanel && (
              <p><span className="font-bold">Back Panel:</span> {item.backpanel}</p>
            )}

            {item.tempered && (
              <p><span className="font-bold">Tempered Glass:</span> {item.tempered}</p>
            )}

            {item.speaker && (
              <p><span className="font-bold">Speaker:</span> {item.speaker}</p>
            )}

            {item.receiver && (
              <p><span className="font-bold">Receiver:</span> {item.receiver}</p>
            )}

            {item.glass && (
              <p><span className="font-bold">Glass:</span> {item.glass}</p>
            )}

            {item.others && (
              <div className="pl-1">
                <p><span className="font-bold">Others:</span> {item.others.query} (₹{item.others.price})</p>
                {item.others.issues.map((issue: any) => (
                  <p key={issue.id} className="ml-2">- {issue.label}</p>
                ))}
              </div>
            )}

            <p><span className="font-bold">Service Type:</span> {item.servicetype}</p>

            {item.couponapplied && (
              <p><span className="font-bold">Coupon Applied:</span> {item.couponapplied}</p>
            )}

            {item.discountedprice !== 0 && (
              <p className="text-green-600 font-semibold">
                Discounted Price: ₹{item.discountedprice}
              </p>
            )}

            <p className="text-black font-bold text-lg">
              Price: ₹{item.price}
            </p>
          </div>
        </div>

        {/* DELETE BUTTON */}
        <div className="w-full md:w-auto flex justify-end">
          <button
            className="bg-red-50 hover:bg-red-100 text-red-600 p-3 rounded-full shadow-sm transition-all duration-300"
            onClick={() => removeFromCart(item.modelid)}
          >
            <FontAwesomeIcon icon={faTrashCan} size="lg" />
          </button>
        </div>

      </div>
    </Link>
  ))}

  {/* TOTAL SECTION */}
  <div className="flex justify-between items-center pt-6 border-t border-gray-300">
    <span className="text-2xl font-bold text-gray-800">Total:</span>
    <span className="text-2xl font-extrabold text-green-600">
      ₹ {cart.reduce((acc: any, cur: any) => acc + cur.price, 0)}
    </span>
  </div>

  {/* CHECKOUT BUTTON */}
  <button
    className="bg-green-600 w-full text-white py-3 rounded-xl text-lg font-semibold mt-4 shadow-lg hover:bg-green-700 transition duration-300"
    onClick={handleToProceed}
  >
    Proceed to Checkout
  </button>
</div>
        ) : (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-gradient-to-b from-slate-100 to-white rounded-xl shadow-sm">
  <div className="text-pink-600 text-6xl mb-4">
   <FontAwesomeIcon icon={faCartShopping} />
  </div>

  <h2 className="text-2xl font-extrabold text-gray-800 mb-2 tracking-wide">
    Your Cart is Empty 🛒
  </h2>

  <p className="text-gray-500 max-w-md text-sm mb-6">
    Looks like you haven't added anything yet.  
    Start exploring amazing products curated just for you!
  </p>

  <Link
    href="/repairmydevice"
    className="inline-flex items-center gap-2 bg-pink-600 hover:bg-orange-600 transition-all text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg"
  >
    <i className="fa-solid fa-bag-shopping text-lg"></i>
    Browse Models
  </Link>
</div>
        )}
      </div>
    </div>
        </div>
        
      </>
    )
  }
  