import { useEffect, useState } from "react";
import Ordercard from "./Ordercard";
import Addresscard from "./Addresscard";
import Userdetailscard from "./Userdetailscard";
import { useSession } from "next-auth/react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Metaseo from "@/components/Metaseo";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { jwtDecode } from 'jwt-decode';
import useStore from "@/lib/store";

export default function Profile(props:any) {
  const router = useRouter();
  const { data : session, status } : any = useSession();
  const [activeTab,setActiveTab] = useState("orders");
  const [orders,setOrders] = useState([]);
  const [userDetails,setUserDetails] = useState<any>({});
  const { updateLoading,updateShowLogin } = useStore();

  const getOrders = async() => {
    updateLoading(true);
    try{
      const payloadData = {
        userid:session?.user?.account?.userdetail?.id
      }
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/orders/getuserorders`,payloadData);
      if(response.data){
          setOrders(response.data.orders);
      }
    }catch(error){
      toast.error("Something unexpected happened while getting orders",{
        theme:"colored",
        position: "top-center"
      })
    }
    updateLoading(false);
  } 

  const getAllData = async () => {
    updateLoading(true);
    try{
      const payloadData = {
        userid:session?.user?.account?.userdetail?.id
      }
    const response2 = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/accountdetails/getdetails`,payloadData);
    if(response2.data){
        setUserDetails((userDetails:any) => ({
          ...userDetails,
          ...response2.data.firstname && {firstname:response2.data.firstname},
          ...response2.data.lastname && {lastname:response2.data.lastname},
          ...response2.data.username && {username:response2.data.username},
          ...response2.data.email && {email:response2.data.email},
          ...response2.data.mobileno && {mobileno:response2.data.mobileno}
        }))
    }
    if(response2.data.hasOwnProperty('shippingaddress')){
        let address;
        if(response2.data.shippingaddress.length > 0){
            let addressarray = response2.data.shippingaddress.split(';');
            let housenumberarray = addressarray[0].split('=');
            let apartmentnoaaray = addressarray[1].split('=');
            let townarray = addressarray[2].split('=');
            let statearray = addressarray[3].split('=');
            let pincodearray = addressarray[4].split('=');
            address = {
                housenumber:housenumberarray[1],
                apartmentno:apartmentnoaaray[1],
                town:townarray[1],
                state:statearray[1],
                pincode:pincodearray[1]
            }
        }else{
            address = {
                housenumber:'',
                apartmentno:'',
                town:'',
                state:'',
                pincode:''
            }  
        }
        setUserDetails((userDetails:any) => ({
          ...userDetails,
          ...address && {shippingaddress:address}
        }))
     }
    }catch(error){
      toast.error("Something unexpected happened while getting user details",{
        theme:"colored",
        position: "top-center"
      })  
    }
    updateLoading(false);
}

  const updateProfileDetail = async(updatedProfile:any) => {
    try{
      const updateAccountCall = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/accountdetails/update`,updatedProfile)
      .then((response) => {
       if(response.data){
           toast.success(response.data.message,{
               theme:"colored",
               position: "top-center"
            })
            getAllData();
          }
      }).catch((error) => {
       toast.error("Something unexpected happened while updating profile detail",{
           theme:"colored",
           position: "top-center"
         }) 
        })
    }catch(error:any){
      toast.error(error.response.data.message,{
        theme:"colored",
        position: "top-center"
      })
    }
  }


  const updateShippingAddress = async(updatedAddress:any) => {
    try{
      const updateAddressCall = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/accountdetails/update`,updatedAddress)
      .then((response) => {
        if(response.data){
          toast.success("Address updated successfully",{
              theme:"colored",
              position: "top-center"
            })
          getAllData();
         }
      }).catch((error) => {
        toast.error("Something unexpected happened while updating user address",{
          theme:"colored",
          position: "top-center"
        }) 
      })
    }catch(error){
      toast.error("Something unexpected happened while updating user address",{
        theme:"colored",
        position: "top-center"
      }) 
    }
  }

  useEffect(() => {
      updateLoading(true);
      if(activeTab === "orders"){
        getOrders();
      }else if(activeTab === "address" || activeTab === "account"){
        getAllData();
      }
  },[activeTab])


    return (
      <>
         <Metaseo
         title={"Profile"}
         description={"User Profile"}
         keywords={"User Profile"}
         metadataBase={""}
         urlslug={""}
        />
        <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar for larger screens */}
      <aside className="w-full md:w-64 bg-orange-500 text-white flex-col hidden md:flex">
        <div className="h-16 flex items-center justify-center shadow-md">
          <h1 className="text-2xl font-bold">Profile</h1>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-1">
          <button
            className="block w-full px-4 py-2 rounded-md text-base font-medium text-left hover:bg-gray-700"
            onClick={() => setActiveTab("orders")}
          >
            Orders
          </button>
          <button
           onClick={() => setActiveTab("address")} 
           className="block w-full px-4 py-2 rounded-md text-base font-medium text-left hover:bg-gray-700">
            Address
          </button>
          <button 
          onClick={() => setActiveTab("account")}
           className="block w-full px-4 py-2 rounded-md text-base font-medium text-left hover:bg-gray-700">
            Account
          </button>
        </nav>
      </aside>

      {/* Main content area */}
      <main className="flex-1 p-6 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4 bg-gray-200 p-2 rounded-md">{activeTab.toLocaleUpperCase()}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
        <a href="#" className={`block p-4 ${activeTab === "orders" ? "bg-orange-500 text-white":"bg-white text-gray-500"} shadow rounded-md text-center`}>
          <span className="block text-lg font-medium" onClick={() => setActiveTab("orders")}>Orders</span>
        </a>
        <a href="#" className={`block p-4 ${activeTab === "address" ? "bg-orange-500 text-white":"bg-white text-gray-500"} shadow rounded-md text-center`}>
          <span className="block text-lg font-medium"  onClick={() => setActiveTab("address")} >Address</span>
        </a>
        <a href="#" className={`block p-4 ${activeTab === "account" ? "bg-orange-500 text-white":"bg-white text-gray-500"} shadow rounded-md text-center`}>
          <span className="block text-lg font-medium" onClick={() => setActiveTab("account")}>Account</span>
        </a>
      </div>
          {activeTab === "orders" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {orders.map((order:any) => (
                <Ordercard key={order._id} order={order} />
              ))}
            </div>
          )}
          {activeTab === "address" && (
            <Addresscard
              address={userDetails.shippingaddress}
              userid = {session?.user?.account?.userdetail?.id}
              updateShippingAddress = {updateShippingAddress}
            />
          )}
          {activeTab === "account" && (
            <Userdetailscard
             userDetails={userDetails}
             userid={session?.user?.account?.userdetail?.id}
             updateProfileDetail = {updateProfileDetail}
            />
          )}
          {activeTab === "" && (
            <p>Select an option from the sidebar</p>
          )}

        </div>
      </main>
    </div>
      </>
    )
  }
  export async function getServerSideProps(context:any) {
    const session:any = await getServerSession(context.req, context.res, authOptions);
    const userInfo:any = session ? jwtDecode(session?.user?.account?.userdetail?.token) : {};
    if (!session || userInfo?.username === "repairdekhoadmin") {
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