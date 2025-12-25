import Metaseo from '@/components/Metaseo';
import useStore from '@/lib/store';
import { faCartShopping, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Cart() {
  const router = useRouter();
  const { cart, removeFromCart, updateShowLogin, updateLoading } = useStore();
  const { data: session, status } = useSession();

  const handleToProceed = () => {
    if (status === 'authenticated') {
      updateLoading(true);
      router.push('/checkout');
    } else {
      updateShowLogin(true);
    }
  };

  const totalPrice = cart.reduce((acc: number, cur: any) => acc + cur.price, 0);

  return (
    <>
      <Metaseo
        title="Cart"
        description="Check your product added in the cart and proceed to checkout page"
        keywords="Cart"
        metadataBase=""
        urlslug=""
      />

      <div className="flex flex-col min-h-screen bg-gray-50">
        <div className="flex-1 container mx-auto px-4 py-6 md:py-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
            Your Cart
          </h1>

          <div className="bg-white shadow-md rounded-xl p-4 md:p-6">
            {cart.length > 0 ? (
              <>
                {/* Cart Items */}
                <div className="space-y-6 pb-40 md:pb-0">
                  {cart.map((item: any, index: number) => (
                    <div 
                      key={`${item.modelid}-${index}-${item.orderid || Date.now()}`}
                      className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-4 border border-gray-200 flex flex-col sm:flex-row sm:items-start gap-4"
                    >
                      {/* IMAGE */}
                      <Link 
                        href={`/product/${item.modelid}`}
                        className="w-full sm:w-32 md:w-40 h-40 sm:h-48 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0"
                      >
                        <img
                          src={item.modelimagelink || '/images/no-preview.jpg'}
                          alt={item.model}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.src = '/images/no-preview.jpg';
                          }}
                        />
                      </Link>

                      {/* CONTENT */}
                      <div className="flex-1 space-y-2">
                        <Link href={`/product/${item.modelid}`}>
                          <h2 className="text-lg md:text-xl font-semibold text-blue-600 tracking-wide hover:text-blue-700 transition-colors">
                            {item.brand?.toUpperCase() || 'BRAND'} - {item.model || 'Model'}
                          </h2>
                        </Link>
                        <div className="space-y-1 text-sm text-gray-700">
                          {/* Display selected services */}
                          {item.display && item.display.type && (
                            <p>
                              <span className="font-bold">Display:</span>{' '}
                              {item.display.type} (₹{item.display.price || 0})
                            </p>
                          )}
                          
                          {item.touch && item.touch !== "No" && (
                            <p>
                              <span className="font-bold">Touch:</span> {item.touch}
                            </p>
                          )}
                          
                          {item.battery && item.battery !== "No" && (
                            <p>
                              <span className="font-bold">Battery:</span> {item.battery}
                            </p>
                          )}
                          
                          {item.charging && item.charging !== "No" && (
                            <p>
                              <span className="font-bold">Charging:</span> {item.charging}
                            </p>
                          )}
                          
                          {item.backpanel && item.backpanel !== "No" && (
                            <p>
                              <span className="font-bold">Back Panel:</span>{' '}
                              {item.backpanel}
                            </p>
                          )}
                          
                          {item.tempered && item.tempered !== "No" && (
                            <p>
                              <span className="font-bold">Tempered Glass:</span>{' '}
                              {item.tempered}
                            </p>
                          )}
                          
                          {item.speaker && item.speaker !== "No" && (
                            <p>
                              <span className="font-bold">Speaker:</span> {item.speaker}
                            </p>
                          )}
                          
                          {item.receiver && item.receiver !== "No" && (
                            <p>
                              <span className="font-bold">Receiver:</span> {item.receiver}
                            </p>
                          )}
                          
                          {item.glass && item.glass !== "No" && (
                            <p>
                              <span className="font-bold">Glass:</span> {item.glass}
                            </p>
                          )}
                          
                          {/* Others section */}
                          {item.others && (
                            <div className="pl-1 border-l-2 border-gray-300">
                              <p>
                                <span className="font-bold">Others:</span>{' '}
                                {item.others.query || 'Custom request'} (₹{item.others.price || 0})
                              </p>
                              {item.others.issues?.map((issue: any, idx: number) => (
                                <p key={`issue-${idx}`} className="ml-2 text-gray-600">
                                  - {issue.label || issue}
                                </p>
                              ))}
                            </div>
                          )}
                          
                          {/* Service type and coupon */}
                          <p>
                            <span className="font-bold">Service Type:</span>{' '}
                            <span className={`font-semibold ${
                              item.servicetype === 'Express' ? 'text-green-600' : 'text-blue-600'
                            }`}>
                              {item.servicetype || 'Normal'}
                            </span>
                          </p>
                          
                          {item.couponapplied && (
                            <p>
                              <span className="font-bold">Coupon Applied:</span>{' '}
                              <span className="text-green-600 font-semibold">{item.couponapplied}</span>
                            </p>
                          )}
                          
                          {item.discountedprice && item.discountedprice !== 0 && (
                            <div className="flex items-center gap-2">
                              <p className="text-gray-500 line-through">
                                ₹{item.price + item.discountedprice}
                              </p>
                              <p className="text-green-600 font-semibold">
                                Discounted Price: ₹{item.discountedprice}
                              </p>
                            </div>
                          )}
                          
                          <p className="text-black font-bold text-base md:text-lg mt-2">
                            Total: ₹{item.discountedprice && item.discountedprice !== 0 ? item.discountedprice : item.price}
                          </p>
                        </div>
                      </div>

                      {/* DELETE BUTTON */}
                      <div className="flex justify-end sm:justify-start">
                        <button
                          className="bg-red-50 hover:bg-red-100 text-red-600 p-3 rounded-full shadow-sm transition-all duration-300 hover:scale-110 active:scale-95"
                          onClick={() => removeFromCart(item.modelid)}
                          title="Remove item"
                        >
                          <FontAwesomeIcon icon={faTrashCan} size="lg" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sticky Checkout Section */}
                <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl md:static md:shadow-none md:border-t md:border-gray-300 md:mt-6 md:p-0">
                  <div className="container mx-auto px-4 py-4 md:py-0">
                    <div className="flex justify-between items-center mb-3 md:mb-4">
                      <div>
                        <span className="text-xl md:text-2xl font-bold text-gray-800">
                          Total ({cart.length} item{cart.length !== 1 ? 's' : ''}):
                        </span>
                        <p className="text-sm text-gray-500 mt-1">
                          Shipping calculated at checkout
                        </p>
                      </div>
                      <span className="text-xl md:text-2xl font-extrabold text-green-600">
                        ₹{totalPrice.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex flex-col md:flex-row gap-3">
                      <Link 
                        href="/repairmydevice"
                        className="bg-gray-100 text-gray-800 w-full text-center py-3.5 rounded-xl text-lg font-semibold hover:bg-gray-200 transition duration-300"
                      >
                        Continue Shopping
                      </Link>
                      
                      <button
                        className="bg-pink-600 w-full text-white py-3.5 rounded-xl text-lg font-semibold shadow-lg hover:bg-pink-700 transition duration-300 flex items-center justify-center gap-2"
                        onClick={handleToProceed}
                      >
                        <span>Proceed to Checkout</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-gradient-to-b from-slate-50 to-white rounded-xl">
                <div className="text-pink-600 text-6xl md:text-7xl mb-6">
                  <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-3">
                  Your Cart is Empty 🛒
                </h2>
                <p className="text-gray-600 text-base md:text-lg max-w-md mb-8">
                  Looks like you haven't added anything yet. Start exploring amazing products curated just for you!
                </p>
                <Link
                  href="/repairmydevice"
                  className="inline-flex items-center gap-3 bg-pink-600 hover:bg-pink-700 transition-all text-white font-semibold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg text-base md:text-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                  </svg>
                  Browse Models
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Additional Info Section */}
        {cart.length > 0 && (
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-pink-50 border border-pink-100 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.2 6.5 10.266a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900">Quality Service</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  All repairs come with a 6-month warranty on parts and service.
                </p>
              </div>

              <div className="bg-pink-50 border border-pink-100 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900">Secure Payment</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  100% secure payment with SSL encryption. Your data is always protected.
                </p>
              </div>

              <div className="bg-pink-50 border border-pink-100 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h2v1a1 1 0 001 1h2.05a2.5 2.5 0 014.9 0H20a1 1 0 001-1V5a1 1 0 00-1-1H3zm11 3a1 1 0 01-1 1H8a1 1 0 010-2h5a1 1 0 011 1zm0 3a1 1 0 01-1 1H8a1 1 0 010-2h5a1 1 0 011 1z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900">Free Pickup & Drop</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Free pickup and delivery service available for all orders.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}