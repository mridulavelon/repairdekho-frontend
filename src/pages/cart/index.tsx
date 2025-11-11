import Metaseo from '@/components/Metaseo';
import useStore from '@/lib/store';
import { faTimesCircle, faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons';
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
        <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-8 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        {cart.length > 0 ? (
          <div className="space-y-4">
            {cart.map((item:any) => (
              <Link href={`/product/${item.modelid}`}>
              <div key={item.orderid} className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="w-32 h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.modelimagelink}
                    alt={item.modelid}
                    className="object-cover"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-blue-600">{item.brand.toUpperCase()} - {item.model}</h2>
                  {item.display && (
                    <p className="text-gray-600"><span className="font-bold">Display</span>: {item.display.type} (${item.display.price})</p>
                  )}
                   {item.touch && (
                    <p className="text-gray-600"><span className="font-bold">Touch</span>: {item.touch}</p>
                  )}
                  {item.battery && (
                    <p className="text-gray-600"><span className="font-bold">Battery</span>: {item.battery}</p>
                  )}
                  {item.charging && (
                    <p className="text-gray-600"><span className="font-bold">Charging</span>: {item.charging}</p>
                  )}
                  {item.backpanel && (
                    <p className="text-gray-600"><span className="font-bold">Back Panel</span>: {item.backpanel}</p>
                  )}
                  {item.tempered && (
                    <p className="text-gray-600"><span className="font-bold">Tempered Glass</span>: {item.tempered}</p>
                  )}
                  {item.speaker && (
                    <p className="text-gray-600"><span className="font-bold">Speaker</span>: {item.speaker}</p>
                  )}
                  {item.receiver && (
                    <p className="text-gray-600"><span className="font-bold">Receiver</span>: {item.receiver}</p>
                  )}
                  {item.glass && (
                    <p className="text-gray-600"><span className="font-bold">Glass</span>: {item.glass}</p>
                  )}
                  {item.others && (
                    <div>
                      <p className="text-gray-600"><span className="font-bold">Others</span>: {item.others.query} (${item.others.price})</p>
                      {item.others.issues.map((issue:any) => (
                        <p key={issue.id} className="text-gray-600">- {issue.label}</p>
                      ))}
                    </div>
                  )}
                  <p className="text-gray-600"><span className="font-bold">Service Type</span>: {item.servicetype}</p>
                  {item.couponapplied && (
                    <p className="text-gray-600"><span className="font-bold">Coupon Applied</span>: {item.couponapplied}</p>
                  )}
                  {item.discountedprice !== 0 && (
                    <p className="text-gray-600"><span className="font-bold">Discounted Price</span>: ₹{item.discountedprice}</p>
                  )}
                   <p className="text-gray-600 font-bold">Price: ₹{item.price}</p>
                </div>
                <div className="flex items-center justify-end md:justify-start w-full md:w-auto">
                  <button
                    className="bg-gray-200 rounded-lg p-2 w-full md:w-10 h-10 flex items-center justify-center hover:bg-gray-300"
                    onClick={() => removeFromCart(item.modelid)}
                  >
                    <FontAwesomeIcon icon={faTrashCan} size="lg" className="text-red-500" />
                  </button>
                </div>
              </div>
              </Link>
            ))}
            <div className="flex justify-between items-center pt-4 border-t">
              <span className="text-xl font-bold">Total:</span>
              <span className="text-xl font-bold">₹ {cart.reduce((accumulator:any, currentValue:any) => accumulator + currentValue.price,0,)}</span>
            </div>
            <div className="text-right">
                <button className="bg-green-500 text-white duration-500 hover:bg-green-600 px-4 py-2 rounded-lg w-full mt-4" onClick={handleToProceed}>
                  Proceed to Checkout
                </button>
            </div>
          </div>
        ) : (
          <p className="font-bold">Your cart is empty</p>
        )}
      </div>
    </div>
        </div>
        
      </>
    )
  }
  