import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Orders from "./Orders";
import Success from "./Success";
import useStore from "@/lib/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCalendarAlt, 
  faClock, 
  faMapMarkerAlt, 
  faCheckCircle,
  faTruck,
  faShoppingCart,
  faMobileAlt
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { getSession, useSession } from "next-auth/react";
import { toast } from 'react-toastify';
import Editshippingaddress from "./Editshippingaddress";
import moment from 'moment';
import { useRouter } from "next/router";
import Metaseo from "@/components/Metaseo";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import "react-datepicker/dist/react-datepicker.css";

export default function Checkout(props: any) {
  const router = useRouter();
  const { data: session, status }: any = useSession();
  const { cart, resetCart, updateLoading } = useStore();
  const [userDetails, setUserDetails] = useState({});
  const [shippingAddress, setShippingAddress] = useState<any>({});
  const [editAddress, setEditAddress] = useState(false);
  const [serviceDate, setServiceDate] = useState(null);
  const [serviceTime, setServiceTime] = useState(null);
  const [subscribeEmails, setSubscribeEmails] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [successfullyPlaced, setSuccessfullyPlaced] = useState(false);

  useEffect(() => {
    updateLoading(false);
    if (cart.length > 0 && status === "authenticated") {
      getAllUserData(session?.user?.account?.userdetail?.id);
    } else {
      router.push('/');
    }
  }, [status]);

  const placeOrder = async () => {
    if (agreeTerms === false) {
      toast.error("Please accept the terms and conditions", {
        theme: "colored",
        position: "top-center"
      });
    } else if (Object.keys(shippingAddress).length === 0) {
      toast.error("Please update the shipping address", {
        theme: "colored",
        position: "top-center"
      });
    } else if (serviceDate === null || serviceTime === null) {
      toast.error("Please select preferred service date and time", {
        theme: "colored",
        position: "top-center"
      });
    } else {
      try {
        const prefferedDateTime = moment(serviceDate)
          .set({
            hour: moment(serviceTime).get('hour'),
            minute: moment(serviceTime).get('minute'),
          }).format('YYYY-MM-DDTHH:mm');
        updateLoading(true);
        await Promise.all(cart.map(async (order: any) => {
          let data = {
            ...order,
            userid: session?.user?.account?.userdetail?.id,
            userdetails: userDetails,
            shippingaddress: shippingAddress,
            orderdate: new Date(),
            servicedatetimepreffered: prefferedDateTime,
            orderstatus: "Confirmed"
          };
          const createOrderCall = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/orders/createorder`, data)
            .catch((error) => {
              console.error("Error creating order:", error);
            });
        }));
        resetCart();
        updateLoading(false);
        setSuccessfullyPlaced(true);
        window.scrollTo(0, 0);
      } catch (error) {
        toast.error("Something unexpected happened", {
          theme: "colored",
          position: "top-center"
        });
      }
    }
  };

  const getAllUserData = async (userid: string) => {
    if (userid) {
      const payloadData = {
        userid: userid
      };
      const useraccountdetailsCall = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/accountdetails/getdetails`, payloadData);
      if (useraccountdetailsCall.data.shippingaddress) {
        let addressarray = useraccountdetailsCall.data.shippingaddress.split(';');
        let housenumberarray = addressarray[0].split('=');
        let apartmentnoaaray = addressarray[1].split('=');
        let townarray = addressarray[2].split('=');
        let statearray = addressarray[3].split('=');
        let pincodearray = addressarray[4].split('=');
        let address = {
          housenumber: housenumberarray[1],
          apartmentno: apartmentnoaaray[1],
          town: townarray[1],
          state: statearray[1],
          pincode: pincodearray[1]
        };
        setShippingAddress(address);
        setEditAddress(false);
      }
      const userObj = {
        firstname: useraccountdetailsCall.data.firstname,
        lastname: useraccountdetailsCall.data.lastname,
        username: useraccountdetailsCall.data.username,
        email: useraccountdetailsCall.data.email,
        mobileno: useraccountdetailsCall.data.mobileno
      };
      setUserDetails(userObj);
    }
  };

  const shippingAddressSubmitHandler = async (updatedAddress: any) => {
    const payloadData = {
      userid: session?.user?.account?.userdetail?.id,
      shippingaddress: `housenumber=${updatedAddress.housenumber};apartmentno=${updatedAddress.apartmentno};town=${updatedAddress.town};state=${updatedAddress.state};pincode=${updatedAddress.pincode}`
    };
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/accountdetails/update`, payloadData);
    if (response.data) {
      getAllUserData(payloadData.userid);
    } else {
      toast.error("Something unexpected happened", {
        theme: "colored",
        position: "top-center"
      });
    }
  };

  const getCurrentStep = () => {
    if (Object.keys(shippingAddress).length === 0) return 1;
    if (!serviceDate || !serviceTime) return 2;
    if (!agreeTerms) return 3;
    return 4;
  };

  return (
    <>
      <Metaseo
        title={"Checkout"}
        description={"Place your order by selecting the service date and time according to your comfort and availability"}
        keywords={"Checkout"}
        metadataBase={""}
        urlslug={""}
      />
      {successfullyPlaced ? (
        <Success />
      ) : (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8">
          <div className=" mx-auto px-4 md:px-8 lg:px-12">
            {/* Header */}
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Complete Your <span className="text-pink-500">Order</span>
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Just a few steps away from getting your device repaired
              </p>
            </div>

            {/* Progress Steps - Enhanced */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row items-center justify-between relative max-w-4xl mx-auto">
                {/* Progress Line */}
                <div className="hidden md:block absolute top-6 left-0 right-0 h-1 bg-gray-200 z-0">
                  <div 
                    className="h-full bg-gradient-to-r from-pink-400 to-pink-500 transition-all duration-500"
                    style={{ width: `${(getCurrentStep() - 1) * 33.33}%` }}
                  ></div>
                </div>

                {/* Steps */}
                {[
                  { number: 1, icon: faMobileAlt, label: "Select Model", description: "Choose device" },
                  { number: 2, icon: faShoppingCart, label: "Add To Cart", description: "Select services" },
                  { number: 3, icon: faTruck, label: "Place Order", description: "Confirm details" },
                ].map((step, index) => (
                  <div key={step.number} className="flex flex-col items-center z-10 mb-8 md:mb-0">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 transition-all duration-300 ${
                      getCurrentStep() >= step.number 
                        ? 'bg-gradient-to-br from-pink-500 to-pink-600 text-white shadow-lg shadow-pink-200 scale-110'
                        : 'bg-white text-gray-400 border-2 border-gray-300'
                    }`}>
                      {getCurrentStep() > step.number ? (
                        <FontAwesomeIcon icon={faCheckCircle} className="text-xl" />
                      ) : (
                        <div className="flex flex-col items-center">
                          <FontAwesomeIcon icon={step.icon} className="text-lg" />
                          <span className="text-xs mt-1 font-bold">{step.number}</span>
                        </div>
                      )}
                    </div>
                    <div className="text-center">
                      <p className={`font-bold ${getCurrentStep() >= step.number ? 'text-gray-900' : 'text-gray-500'}`}>
                        {step.label}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Left Column - Forms */}
              <div className="lg:col-span-2 space-y-8">
                {/* Shipping Address Card */}
                <div className="bg-white rounded-2xl shadow-xl p-6 transition-all duration-300 hover:shadow-2xl border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-100 to-pink-50 flex items-center justify-center mr-4">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-pink-500 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Shipping Address</h3>
                      <p className="text-gray-600">Where should we deliver your repaired device?</p>
                    </div>
                  </div>

                  {editAddress ? (
                    <Editshippingaddress
                      address={shippingAddress}
                      handleEditAddress={setEditAddress}
                      handleSubmitAddress={shippingAddressSubmitHandler}
                    />
                  ) : (
                    <div className="space-y-4">
                      {Object.keys(shippingAddress).length > 0 ? (
                        <div className="bg-gradient-to-r from-pink-50 to-pink-50 p-5 rounded-xl border border-pink-100">
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <span className="font-semibold text-gray-700 w-32">Address:</span>
                              <span className="text-gray-900">
                                {`${shippingAddress?.housenumber}, ${shippingAddress?.apartmentno}`}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <span className="font-semibold text-gray-700 w-32">City/Town:</span>
                              <span className="text-gray-900">{shippingAddress?.town}</span>
                            </div>
                            <div className="flex items-center">
                              <span className="font-semibold text-gray-700 w-32">State:</span>
                              <span className="text-gray-900">{shippingAddress?.state}</span>
                            </div>
                            <div className="flex items-center">
                              <span className="font-semibold text-gray-700 w-32">Pincode:</span>
                              <span className="text-gray-900 font-bold">{shippingAddress?.pincode}</span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-xl">
                          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-400 text-4xl mb-3" />
                          <p className="text-gray-600">No address added yet</p>
                        </div>
                      )}
                      <button
                        onClick={() => setEditAddress(true)}
                        className="w-full py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold rounded-xl hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        {Object.keys(shippingAddress).length > 0 ? "Update Address" : "Add Address"}
                      </button>
                    </div>
                  )}
                </div>

                {/* Date and Time Selection Card */}
                <div className="bg-white rounded-2xl shadow-xl p-6 transition-all duration-300 hover:shadow-2xl border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-100 to-blue-50 flex items-center justify-center mr-4">
                      <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-500 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Service Schedule</h3>
                      <p className="text-gray-600">Select when you'd like your device serviced</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Date Picker */}
                    <div className="space-y-3">
                      <label className="block text-gray-700 font-semibold">
                        <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-pink-500" />
                        Select Date
                      </label>
                      <div className="relative">
                        <DatePicker
                          selected={serviceDate}
                          onChange={(date: any) => setServiceDate(date)}
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-200 focus:outline-none transition-all duration-300"
                          placeholderText="Choose a date"
                          minDate={new Date()}
                          dateFormat="MMMM d, yyyy"
                          wrapperClassName="w-full"
                          calendarClassName="shadow-2xl rounded-xl border border-gray-100"
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <FontAwesomeIcon icon={faCalendarAlt} />
                        </div>
                      </div>
                    </div>

                    {/* Time Picker */}
                    <div className="space-y-3">
                      <label className="block text-gray-700 font-semibold">
                        <FontAwesomeIcon icon={faClock} className="mr-2 text-pink-500" />
                        Select Time
                      </label>
                      <div className="relative">
                        <DatePicker
                          selected={serviceTime}
                          onChange={(time: any) => setServiceTime(time)}
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-200 focus:outline-none transition-all duration-300"
                          placeholderText="Choose a time"
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={30}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          wrapperClassName="w-full"
                          timeClassName={(time) => 
                            time.getHours() >= 9 && time.getHours() <= 18 
                              ? 'text-green-600 font-semibold' 
                              : 'text-gray-400'
                          }
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <FontAwesomeIcon icon={faClock} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <p className="text-sm text-blue-700 flex items-center">
                      <FontAwesomeIcon icon={faClock} className="mr-2" />
                      <span className="font-semibold">Service Hours:</span> 9:00 AM - 6:00 PM, Monday to Saturday
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Order Summary */}
              <div className="space-y-8">
                {/* Order Summary Card */}
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100 sticky top-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                    Order Summary
                  </h3>

                  <Orders orders={cart} />

                  {/* Terms and Conditions */}
                  <div className="mt-8 space-y-4">
                    <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
                         onClick={() => setSubscribeEmails(!subscribeEmails)}>
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center mt-1 transition-all duration-300 ${
                        subscribeEmails 
                          ? 'bg-pink-500 border-pink-500' 
                          : 'border-gray-300'
                      }`}>
                        {subscribeEmails && (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">
                          Receive exclusive emails with discounts & offers
                        </p>
                        <p className="text-gray-500 text-sm mt-1">(Optional)</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
                         onClick={() => setAgreeTerms(!agreeTerms)}>
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center mt-1 transition-all duration-300 ${
                        agreeTerms 
                          ? 'bg-green-500 border-green-500' 
                          : 'border-gray-300'
                      }`}>
                        {agreeTerms && (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">
                          I agree to the <span className="text-pink-600 font-bold">terms & conditions</span> *
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Place Order Button */}
                  <button
                    onClick={placeOrder}
                    disabled={!agreeTerms || Object.keys(shippingAddress).length === 0 || !serviceDate || !serviceTime}
                    className={`w-full mt-8 py-4 font-bold rounded-xl transition-all duration-300 shadow-lg transform hover:scale-[1.02] ${
                      !agreeTerms || Object.keys(shippingAddress).length === 0 || !serviceDate || !serviceTime
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 hover:shadow-xl'
                    }`}
                  >
                    <div className="flex items-center justify-center">
                      <span className="text-lg">Place Order</span>
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </button>

                  {/* Security Note */}
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex items-center text-gray-500 text-sm">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>100% Secure Payment • SSL Encrypted</span>
                    </div>
                  </div>
                </div>

                {/* Support Card */}
                <div className="bg-gradient-to-r from-pink-50 to-pink-50 rounded-2xl shadow-lg p-6 border border-pink-100">
                  <h4 className="font-bold text-gray-900 text-lg mb-3">Need Help?</h4>
                  <p className="text-gray-700 mb-4">
                    Our support team is here to help you with any questions.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 mr-2 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span>+91 1800-XXX-XXXX</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 mr-2 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span>support@repairdekho.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { session }
  };
}