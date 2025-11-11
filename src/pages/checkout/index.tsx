import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Orders from "./Orders";
import Success from "./Success";
import useStore from "@/lib/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faClock } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { getSession, useSession } from "next-auth/react";
import { toast } from 'react-toastify';
import Editshippingaddress from "./Editshippingaddress";
import moment from 'moment';
import { useRouter } from "next/router";
import Metaseo from "@/components/Metaseo";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";


export default function Checkout(props:any) {
      const router = useRouter();
      const { data : session, status } : any = useSession();
      const { cart,resetCart,updateLoading } = useStore();
      const [userDetails,setUserDetails] = useState({});
      const [shippingAddress,setShippingAddress] = useState<any>({});
      const [editAddress, setEditAddress] = useState(false);
      const [serviceDate, setServiceDate] = useState(null);
      const [serviceTime, setServiceTime] = useState(null);
      const [subscribeEmails, setSubscribeEmails] = useState(false);
      const [agreeTerms, setAgreeTerms] = useState(false);
      const [successfullyPlaced,setSuccessfullyPlaced] = useState(false);
    
      useEffect(() => {
        updateLoading(false)
       if(cart.length > 0 && status === "authenticated"){
         getAllUserData(session?.user?.account?.userdetail?.id); 
       }else{
         router.push('/')
       } 
      },[status])

      const placeOrder = async () => {
        if(agreeTerms === false){
            toast.error("Please accept the terms and conditions",{
                theme:"colored",
                position: "top-center"
              })
        }else if(Object.keys(shippingAddress).length === 0){
            toast.error("Please update the shipping address",{
                theme:"colored",
                position: "top-center"
              })
        }else if(serviceDate === null || serviceTime === null){
            toast.error("Please select preferred service date and time",{
                theme:"colored",
                position: "top-center"
              })
        }else{
            try{
              const prefferedDateTime = moment(serviceDate)
              .set({
                hour: moment(serviceTime).get('hour'),
                minute: moment(serviceTime).get('minute'),
              }).format('YYYY-MM-DDTHH:mm');
                updateLoading(true);
                await Promise.all(cart.map(async(order:any) => {
                    let data = {
                      ...order,
                      userid:session?.user?.account?.userdetail?.id,
                      userdetails:userDetails,
                      shippingaddress:shippingAddress,
                      orderdate:new Date(),
                      servicedatetimepreffered:prefferedDateTime,
                      orderstatus:"Confirmed" 
                    };
                    const createOrderCall = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/orders/createorder`,data)
                    .catch((error) => {
                    })
                  }));
                   resetCart() 
                   updateLoading(false);
                   setSuccessfullyPlaced(true);
                   window.scrollTo(0,0);

            }catch(error){
                toast.error("Something unexpected happened",{
                    theme:"colored",
                    position: "top-center"
                })
            }
        }
    }

    const getAllUserData = async (userid:string) => {
        if(userid){
            const payloadData = {
              userid:userid
            }
            const useraccountdetailsCall = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/accountdetails/getdetails`,payloadData);  
            if(useraccountdetailsCall.data.shippingaddress){
                let addressarray = useraccountdetailsCall.data.shippingaddress.split(';');
                let housenumberarray = addressarray[0].split('=');
                let apartmentnoaaray = addressarray[1].split('=');
                let townarray = addressarray[2].split('=');
                let statearray = addressarray[3].split('=');
                let pincodearray = addressarray[4].split('=');
                let address = {
                   housenumber:housenumberarray[1],
                   apartmentno:apartmentnoaaray[1],
                   town:townarray[1],
                   state:statearray[1],
                   pincode:pincodearray[1]
               }
               setShippingAddress(address);
               setEditAddress(false);
            }
            const userObj = {
                firstname:useraccountdetailsCall.data.firstname,
                lastname:useraccountdetailsCall.data.lastname,
                username:useraccountdetailsCall.data.username,
                email:useraccountdetailsCall.data.email,
                mobileno:useraccountdetailsCall.data.mobileno
            }
            setUserDetails(userObj);
        }
    }
    const shippingAddressSubmitHandler = async (updatedAddress:any) => {
      const payloadData = {
          userid:session?.user?.account?.userdetail?.id,
          shippingaddress:`housenumber=${updatedAddress.housenumber};apartmentno=${updatedAddress.apartmentno};town=${updatedAddress.town};state=${updatedAddress.state};pincode=${updatedAddress.pincode}`
        }
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/accountdetails/update`,payloadData)
        if(response.data){
         getAllUserData(payloadData.userid);
        }else{
          toast.error("Something unexpected happened",{
            theme:"colored",
            position: "top-center"
        })
        }  
    }
      return  (
        <>
        <Metaseo
         title={"Checkout"}
         description={"Place your order by selecting the service datew and time according to your comfort and availability"}
         keywords={"Checkout"}
         metadataBase={""}
         urlslug={""}
        />
         {successfullyPlaced ? (
             <Success />
         ) : (
          <div className="w-full min-h-screen bg-white py-4">
      <div className="container mx-auto p-4 md:p-8 lg:p-12 bg-white w-full relative">
      <h2 className="text-3xl font-bold text-center mb-8">Checkout</h2>
        {/* Multi-step Progress Indicator */}
        <ol className="flex flex-col md:flex-row items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base py-8">
  <li className="flex flex-col items-center md:w-full md:flex-row text-orange-600 dark:text-blue-500 md:after:content-[''] after:w-full after:h-1 after:border-b after:border-orange-500 after:border-1 after:hidden md:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
    <span className="flex flex-col items-center md:flex-row after:content-['/'] md:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
      <div className="text-center mb-4 md:mb-0">
        <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center mx-auto">1</div>
        <div className="mt-2 text-sm font-medium text-gray-600">Select Your Model</div>
      </div>
    </span>
  </li>
  <li className="flex flex-col items-center md:w-full md:flex-row text-orange-600 after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden md:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
    <span className="flex flex-col items-center md:flex-row after:content-['/'] md:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
      <div className="text-center mb-4 md:mb-0">
        <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center mx-auto">2</div>
        <div className="mt-2 text-sm font-medium text-gray-600">Add To Cart</div>
      </div>
    </span>
  </li>
  <li className="flex flex-col items-center md:flex-row">
    <div className="text-center">
      <div className="w-12 h-12 rounded-full bg-gray-500 text-white flex items-center justify-center mx-auto">3</div>
      <div className="mt-2 text-sm font-medium text-gray-600">Place Order</div>
    </div>
  </li>
</ol>
        {/* Address Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-semibold mb-4">Shipping Address</h3>
          {editAddress && (
           <Editshippingaddress 
           address={shippingAddress}
           handleEditAddress={setEditAddress}
           handleSubmitAddress={shippingAddressSubmitHandler}
          />)}
           <div>
              {Object.keys(shippingAddress).length  > 0 ? (
                   <p className="text-lg mb-4">{`${shippingAddress?.housenumber}, ${shippingAddress?.apartmentno}, ${shippingAddress?.town}, ${shippingAddress?.state} - ${shippingAddress?.pincode}`}</p>
              ) : (
                <p className="text-lg mb-4">No address found</p>
              )}
              <button
                onClick={() => setEditAddress(true)}
                className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Update Address
              </button>
            </div>
        </div>

        {/* Date and Time Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
  <h3 className="text-2xl font-semibold mb-4">Select Date and Time for Service</h3>
  <div className="space-y-4">
    <div className="w-full flex items-center">
      <DatePicker
        selected={serviceDate}
        onChange={(date:any) => setServiceDate(date)}
        className="w-full flex-grow p-2 border rounded-lg"
        placeholderText="Select Date"
      />
      <FontAwesomeIcon
        icon={faCalendarAlt}
        className="text-gray-500 ml-2"
      />
    </div>
    <div className="w-full flex items-center">
      <DatePicker
        selected={serviceTime}
        onChange={(time:any) => setServiceTime(time)}
        className="w-full flex-grow p-2 border rounded-lg pr-10"
        placeholderText="Select Time"
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
      />
      <FontAwesomeIcon
        icon={faClock}
        className="text-gray-500 ml-2"
      />
    </div>
  </div>
</div>
        <Orders orders={cart} />
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <div className="flex items-start mb-4">
            <input
              type="checkbox"
              checked={subscribeEmails}
              onChange={() => setSubscribeEmails(!subscribeEmails)}
              className="mt-1"
            />
            <p className="ml-2 text-gray-700 font-bold">
              I would like to receive exclusive emails with discounts and product information (optional)
            </p>
          </div>
          <div className="flex items-start">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={() => setAgreeTerms(!agreeTerms)}
              className="mt-1"
            />
            <p className="ml-2 text-gray-700 font-bold">
              I have read and agree to the website terms and conditions *
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <button
            onClick={placeOrder}
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-300 text-xl font-semibold"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
         )}
        </>
      );
};
export async function getServerSideProps(context:any) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { session }
  }
}