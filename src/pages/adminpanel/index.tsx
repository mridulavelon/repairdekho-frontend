import { useEffect, useRef, useState } from "react";
import Ordercard from "./Ordercard";
import axios from "axios";
import { toast } from "react-toastify";
import Usercard from "./Usercard";
import Blogcard from "./Blogcard";
import Selectdeviceandbrand from "./Selectdeviceandbrand";
import Modelcard from "./Modelcard";
import Brandcard from "./Brandcard";
import Offercard from "./Offercard";
import Editorder from "./Editorder";
import Blogform from "./Blogform";
import Modelform from "./Modelform";
import Brandform from "./Brandform";
import Offerform from "./Offerform";
import useStore from "@/lib/store";
import Metaseo from "@/components/Metaseo";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { jwtDecode } from 'jwt-decode';

export default function Adminpanel(props:any) {
    const { updateLoading } = useStore();
    const [activeTab,setActiveTab] = useState("orders");
    const [orders,setOrders] = useState([]);
    const [users,setUsers] = useState([]);
    const [blogs,setBlogs] = useState([]);
    const [brands,setBrands] = useState([]);
    const [models,setModels] = useState([]);
    const [offers,setOffers] = useState([]);
    const [editTab,setEditTab] = useState("");
    const [editDetails,setEditDetails] = useState({});
    const lastOrderIdRef = useRef(null);

    const notifyNewOrder = (order:any)=> {
      if (Notification.permission === "granted") {
          new Notification("New Order Received", {
              body: `Order ID: ${order.orderid}\nProduct: ${order.model}`,
              icon: order.modelimagelink, 
          });
      } else if (Notification.permission !== "denied") {
          Notification.requestPermission().then((permission) => {
              if (permission === "granted") {
                  notifyNewOrder(order);
              }
          });
      }
  };
    
    const getOrders = async() => {
        const ordersCall = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/orders/getorders`)
        .then((response) => {
           if(response.data.orders){
              const latestOrder = response.data.orders[response.data.orders.length - 1];
              if (lastOrderIdRef.current && latestOrder.id > lastOrderIdRef.current) {
                notifyNewOrder(latestOrder);
              }
               setOrders(response.data.orders);
               lastOrderIdRef.current = latestOrder?.id;
           }
        }).catch((error) => {
          toast.error(error.message,{
              theme:"colored",
              position:"top-center"
            })
        })
    }

    const getUsers = async() => {
        const usersCall = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/signup/getusers`)
        .then((response) => {
           if(response.data.success){
             setUsers(response.data.response);
           }
        }).catch((error) => {
          toast.error(error.message ? error.message : "Something went wrong",{
              theme:"colored",
              position:"top-center"
            })
        })
    }

    const getBlogs = async() => {
        const blogsCall = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blogs/getblogs`)
        .then((response) => {
           if(response.data.success){
             setBlogs(response.data.response);
           }
        }).catch((error) => {
          toast.error(error.message ? error.message : "Something went wrong",{
              theme:"colored",
              position:"top-center"
            })
        })
    }

    const getBrands = async() => {
        const brandsCall = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/brands/getbrands`)
        .then((response) => {
           if(response.data.success){
             setBrands(response.data.response);
           }
        }).catch((error) => {
            toast.error(error.message ? error.message : "Something went wrong",{
                theme:"colored",
                position:"top-center"
            })
        })
    }

    const getModels = async(modelpayload:any) => {
      const getModelsCall = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/models/getmodels`,modelpayload)
      .then((response) => {
         if(response.data){
             setModels(response.data.models);
         }
      }).catch((error) => {
          toast.error(error.message ? error.message : "Something went wrong",{
              theme:"colored",
              position:"top-center"
          })
      })
    }

    const getOffers = async() => {
      const offersCall = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/offers/getoffers`)
      .then((response) => {
         if(response.data.success){
           setOffers(response.data.response);
         }
      }).catch((error) => {
        toast.error(error.message ? error.message : "Something went wrong",{
            theme:"colored",
            position:"top-center"
          })
      })
    }


    const editDetailsHandler = (tab:string,editobj:any) => {
       setEditTab(tab);
       setEditDetails(editobj);
    }
    const editSubmitHandler = async(tab:string,editDetails:any) => {
       let requestUrl = "";
       if(tab === "order"){
         requestUrl = `${process.env.NEXT_PUBLIC_API_URL}/orders/updateorder`; 
       }else if(tab === "addblog"){
         requestUrl = `${process.env.NEXT_PUBLIC_API_URL}/blogs/createblog`;
       }else if(tab === "editblog"){
         requestUrl = `${process.env.NEXT_PUBLIC_API_URL}/blogs/updateblog`;
       }else if(tab === "addmodel"){
         requestUrl = `${process.env.NEXT_PUBLIC_API_URL}/models/createmodel`;
       }else if(tab === "editmodel"){
        requestUrl = `${process.env.NEXT_PUBLIC_API_URL}/models/updatemodel`;
       }else if(tab === "addbrand"){
        requestUrl = `${process.env.NEXT_PUBLIC_API_URL}/brands/createbrand`;
       }else if(tab === "editbrand"){
        requestUrl = `${process.env.NEXT_PUBLIC_API_URL}/brands/updatebrand`;
       }else if(tab === "addoffer"){
        requestUrl = `${process.env.NEXT_PUBLIC_API_URL}/offers/createoffer`;
       }else if(tab === "editoffer"){
        requestUrl = `${process.env.NEXT_PUBLIC_API_URL}/offers/updateoffer`;
       }
       const submitCall = await axios.post(requestUrl,editDetails)
       .then((response) => {
        if(response.data.success){
           toast.success(response.data.response  ?? "Success",{
               theme:"colored",
               position:"top-center"
             });
            if(activeTab ==="orders"){
              getOrders();
            }else if(activeTab === "blogs"){
              getBlogs();
            }else if(activeTab === "brands"){
              getBrands();
            }else if(activeTab === "offers"){
              getOffers();
            }
        }else{
           toast.error(response.data.error,{
               theme:"colored",
               position:"top-center"
             })
        }
      }).catch((err) => {
         toast.error(err.message ? err.message : "Something unexpected happened please try again later",{
           theme:"colored",
           position:"top-center"
         })
      })  
    }

    const deleteSubmitHandler = async(id:string) => {
      updateLoading(true);
      let requestUrl = "";
      if(activeTab === "orders"){
        requestUrl = `${process.env.NEXT_PUBLIC_API_URL}/orders/deleteorder`;
      }else if(activeTab === "users"){
        requestUrl = `${process.env.NEXT_PUBLIC_API_URL}/signup/deleteusers`;
      }else if(activeTab === "blogs"){
        requestUrl = `${process.env.NEXT_PUBLIC_API_URL}/blogs/deleteblog`;
      }else if(activeTab === "models"){
        requestUrl = `${process.env.NEXT_PUBLIC_API_URL}/models/deletemodel`;
      }else if(activeTab === "brands"){
        requestUrl = `${process.env.NEXT_PUBLIC_API_URL}/brands/deletebrand`;
      }else if(activeTab === "offers"){
        requestUrl = `${process.env.NEXT_PUBLIC_API_URL}/offers/deleteoffer`;
      }
      const payloadData = {
        "id" : id
      } 
      const deleteCall = await axios.post(requestUrl,payloadData)
      .then(async(response) => {
         if(response.data.success){
           toast.success(response.data.response,{
               theme:"colored",
               position:"top-center"
             });
             if(activeTab ==="orders"){
                getOrders();
             }else if(activeTab === "users"){
                getUsers();
             }else if(activeTab === "blogs"){
                getBlogs();
             }else if(activeTab === "brands"){
                getBrands();
             }else if(activeTab === "offers"){
                getOffers();
             }
         }else{
           toast.error(response.data.response,{
               theme:"colored",
               position:"top-center"
             }) 
         }
      })
      .catch((error)  => {
          toast.error(error.message?error.message : "Something unexpected happened please try again later",{
            theme:"colored",
            position:"top-center"
          }) 
       });
       updateLoading(false);
    }
    useEffect(() => {
        updateLoading(true);
        if(activeTab === "orders"){
          getOrders();
        }else if(activeTab === "users"){
          getUsers();
        }else if(activeTab === "blogs"){
          getBlogs();
        }else if(activeTab === "models" || activeTab === "brands"){
          getBrands();   
        }else if(activeTab === "offers"){
          getOffers();
        }
        updateLoading(false);
    },[activeTab]);

    useEffect(() => {
      if (Notification.permission !== "granted" && Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
                console.log("Notification permission granted.");
            }
        });
      }
      const intervalId = setInterval(getOrders, 5000);
    },[]);



    return (
      <>
          <Metaseo
         title={"Admin"}
         description={""}
         keywords={""}
         metadataBase={""}
         urlslug={""}
        />
         <div className="min-h-screen flex flex-col md:flex-row">
        {/* Sidebar for larger screens */}
        <aside className="w-full md:w-64 bg-red-800 text-white flex-col hidden md:flex">
          <div className="h-16 flex items-center justify-center shadow-md">
            <h1 className="text-2xl font-bold">Admin</h1>
          </div>
          <nav className="flex-1 px-2 py-4 space-y-1">
            <button
              className="block w-full px-4 py-2 rounded-md text-base font-medium text-left hover:bg-gray-700"
              onClick={() => setActiveTab("orders")}
            >
              Orders
            </button>
            <button
             onClick={() => setActiveTab("users")} 
             className="block w-full px-4 py-2 rounded-md text-base font-medium text-left hover:bg-gray-700">
              Users
            </button>
            <button 
             onClick={() => setActiveTab("blogs")}
             className="block w-full px-4 py-2 rounded-md text-base font-medium text-left hover:bg-gray-700">
              Blogs
            </button>
            <button 
             onClick={() => setActiveTab("models")}
             className="block w-full px-4 py-2 rounded-md text-base font-medium text-left hover:bg-gray-700">
              Models
            </button>
            <button 
             onClick={() => setActiveTab("brands")}
             className="block w-full px-4 py-2 rounded-md text-base font-medium text-left hover:bg-gray-700">
              Brands
            </button>
            <button 
             onClick={() => setActiveTab("offers")}
             className="block w-full px-4 py-2 rounded-md text-base font-medium text-left hover:bg-gray-700">
              Offers
            </button>
            <p className="font-semibold px-4 py-4 bg-black rounded-md">Content Management</p>
            <button 
             onClick={() => setActiveTab("homecms")}
             className="block w-full px-4 py-2 rounded-md text-base font-medium text-left hover:bg-gray-700">
              Home
            </button>
             <button 
             onClick={() => setActiveTab("aboutcms")}
             className="block w-full px-4 py-2 rounded-md text-base font-medium text-left hover:bg-gray-700">
              About us
            </button>
            <button 
             onClick={() => setActiveTab("aboutcms")}
             className="block w-full px-4 py-2 rounded-md text-base font-medium text-left hover:bg-gray-700">
              Repair My Device
            </button>
              <button 
              onClick={() => setActiveTab("offerscms")}
              className="block w-full px-4 py-2 rounded-md text-base font-medium text-left hover:bg-gray-700">
              Offers
            </button>
            <button 
              onClick={() => setActiveTab("blogcms")}
              className="block w-full px-4 py-2 rounded-md text-base font-medium text-left hover:bg-gray-700">
              Blogs
            </button>
            <button 
              onClick={() => setActiveTab("blogcms")}
              className="block w-full px-4 py-2 rounded-md text-base font-medium text-left hover:bg-gray-700">
              FAQ
            </button>
            <button 
              onClick={() => setActiveTab("blogcms")}
              className="block w-full px-4 py-2 rounded-md text-base font-medium text-left hover:bg-gray-700">
              Terms and Conditions
            </button>
            <button 
              onClick={() => setActiveTab("blogcms")}
              className="block w-full px-4 py-2 rounded-md text-base font-medium text-left hover:bg-gray-700">
              Privacy Policy
            </button>
          </nav>
        </aside>
  
        {/* Main content area */}
        <main className="flex-1 p-6 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-2xl font-semibold mb-4 bg-gray-200 p-2 rounded-md">{activeTab.toLocaleUpperCase()}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
          <a href="#" className={`block p-4 ${activeTab === "orders" ? "bg-red-500 text-white":"bg-white text-gray-500"} shadow rounded-md text-center`}>
            <span className="block text-lg font-medium" onClick={() => setActiveTab("orders")}>Orders</span>
          </a>
          <a href="#" className={`block p-4 ${activeTab === "users" ? "bg-red-500 text-white":"bg-white text-gray-500"} shadow rounded-md text-center`}>
            <span className="block text-lg font-medium"  onClick={() => setActiveTab("users")} >Users</span>
          </a>
          <a href="#" className={`block p-4 ${activeTab === "blogs" ? "bg-red-500 text-white":"bg-white text-gray-500"} shadow rounded-md text-center`}>
            <span className="block text-lg font-medium" onClick={() => setActiveTab("blogs")}>Blogs</span>
          </a>
          <a href="#" className={`block p-4 ${activeTab === "models" ? "bg-red-500 text-white":"bg-white text-gray-500"} shadow rounded-md text-center`}>
            <span className="block text-lg font-medium" onClick={() => setActiveTab("models")}>Models</span>
          </a>
          <a href="#" className={`block p-4 ${activeTab === "brands" ? "bg-red-500 text-white":"bg-white text-gray-500"} shadow rounded-md text-center`}>
            <span className="block text-lg font-medium" onClick={() => setActiveTab("brands")}>Brands</span>
          </a>
          <a href="#" className={`block p-4 ${activeTab === "offers" ? "bg-red-500 text-white":"bg-white text-gray-500"} shadow rounded-md text-center`}>
            <span className="block text-lg font-medium" onClick={() => setActiveTab("offers")}>Offers</span>
          </a>
          <p className="font-semibold py-4">Content Management</p>
          <div>
          <a href="#" className={`block p-4 ${activeTab === "offers" ? "bg-red-500 text-white":"bg-white text-gray-500"} shadow rounded-md text-center`}>
            <span className="block text-lg font-medium" onClick={() => setActiveTab("homecms")}>Home</span>
          </a>
           <a href="#" className={`block p-4 ${activeTab === "offers" ? "bg-red-500 text-white":"bg-white text-gray-500"} shadow rounded-md text-center`}>
            <span className="block text-lg font-medium" onClick={() => setActiveTab("repairmydevicecms")}>Repair My Device</span>
          </a>
          <a href="#" className={`block p-4 ${activeTab === "offers" ? "bg-red-500 text-white":"bg-white text-gray-500"} shadow rounded-md text-center`}>
            <span className="block text-lg font-medium" onClick={() => setActiveTab("aboutcms")}>About us</span>
          </a>
          <a href="#" className={`block p-4 ${activeTab === "offers" ? "bg-red-500 text-white":"bg-white text-gray-500"} shadow rounded-md text-center`}>
            <span className="block text-lg font-medium" onClick={() => setActiveTab("blogscms")}>Blogs</span>
          </a>
          <a href="#" className={`block p-4 ${activeTab === "offers" ? "bg-red-500 text-white":"bg-white text-gray-500"} shadow rounded-md text-center`}>
            <span className="block text-lg font-medium" onClick={() => setActiveTab("offerscms")}>Offers</span>
          </a>
           <a href="#" className={`block p-4 ${activeTab === "offers" ? "bg-red-500 text-white":"bg-white text-gray-500"} shadow rounded-md text-center`}>
            <span className="block text-lg font-medium" onClick={() => setActiveTab("offers")}>Contact us</span>
          </a>
            <a href="#" className={`block p-4 ${activeTab === "offers" ? "bg-red-500 text-white":"bg-white text-gray-500"} shadow rounded-md text-center`}>
            <span className="block text-lg font-medium" onClick={() => setActiveTab("offers")}>FAQ</span>
          </a>
           <a href="#" className={`block p-4 ${activeTab === "offers" ? "bg-red-500 text-white":"bg-white text-gray-500"} shadow rounded-md text-center`}>
            <span className="block text-lg font-medium" onClick={() => setActiveTab("offers")}>Privacy Policy</span>
          </a>
            <a href="#" className={`block p-4 ${activeTab === "offers" ? "bg-red-500 text-white":"bg-white text-gray-500"} shadow rounded-md text-center`}>
            <span className="block text-lg font-medium" onClick={() => setActiveTab("offers")}>Terms and conditions</span>
          </a>
          </div>
        </div>
            {activeTab === "orders" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {orders.map((order:any) => (
                  <Ordercard 
                   key={order._id} 
                   order={order} 
                   onEdit={editDetailsHandler}
                   onDelete={deleteSubmitHandler}
                   />
                ))}
              </div>
            )}
            {activeTab === "users" && (
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
             {users.map((user:any) => (
               <Usercard 
                 key={user._id} 
                 user={user} 
                 onDelete={deleteSubmitHandler}
                 />
             ))}
           </div>
            )}
            {activeTab === "blogs" && (
             <div className="mt-8">
             <button className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 mb-4" onClick={() => setEditTab("addblog")}>+ Add Blog</button> 
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {blogs.map((blog:any) => (
               <Blogcard 
                key={blog._id} 
                blog={blog}
                onEdit={editDetailsHandler}
                onDelete={deleteSubmitHandler}
                />
             ))}
           </div>
           </div>
            )}
            {activeTab === "models" && (
                <div className="mt-8">
               <button className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 mb-4" onClick={() => setEditTab("addmodel")}>+ Add Model</button> 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                 <div className="col-span-1 sm:col-span-2">
                   <Selectdeviceandbrand  
                   brands={brands}
                   submitModel = {getModels}
                   />
                 </div>
                 {models.map((model:any) => (
                   <Modelcard 
                    key={model._id} 
                    model={model} 
                    onEdit={editDetailsHandler}
                    onDelete={deleteSubmitHandler}
                    />
                 ))}
               </div>
               </div>
            )}
            {activeTab === "brands" && (
              <div className="mt-8">
               <button className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 mb-4" onClick={() => setEditTab("addbrand")}>+ Add Brand</button>   
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {brands.map((brand:any) => (
               <Brandcard 
                key={brand._id} 
                brand={brand} 
                onEdit={editDetailsHandler}
                onDelete={deleteSubmitHandler}
                />
             ))}
           </div>
           </div>
            )}
            {activeTab === "offers" && (
             <div className="mt-8">
             <button className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 mb-4" onClick={() => setEditTab("addoffer")}>+ Add Offer</button>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {offers.map((offer: any) => (
                 <Offercard 
                  key={offer._id} 
                  offer={offer} 
                  onEdit={editDetailsHandler}
                  onDelete={deleteSubmitHandler}
                  />
               ))}
             </div>
           </div>
            )}
            {activeTab === "" && (
              <p>Select an option from the sidebar</p>
            )}

            {activeTab === "homecms" && (
             <div className="space-y-4">

  {/* <!-- Title Block --> */}
  <div className="border rounded-lg p-4 shadow-sm bg-white">
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">Hero Title</h2>
        <p className="text-sm text-gray-600">
          Value: Mobile Repair at Your Doorstep
        </p>
      </div>

      <div className="flex gap-3">
        <button className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">Edit</button>
        <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">Delete</button>
      </div>
    </div>
  </div>

  {/* <!-- Subtitle Block --> */}
  <div className="border rounded-lg p-4 shadow-sm bg-white">
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">Hero Subtitle</h2>
        <p className="text-sm text-gray-600">
          Value: Friendly, fast & affordable. Get your smartphone fixed without leaving your home.
        </p>
      </div>

      <div className="flex gap-3">
        <button className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">Edit</button>
        <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">Delete</button>
      </div>
    </div>
  </div>

  {/* <!-- Background Block --> */}
  <div className="border rounded-lg p-4 shadow-sm bg-white">
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">Background Class</h2>
        <p className="text-sm text-gray-600">
          Value: bg-orange-500
        </p>
      </div>

      <div className="flex gap-3">
        <button className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">Edit</button>
        <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">Delete</button>
      </div>
    </div>
  </div>

  {/* <!-- Image Block --> */}
  <div className="border rounded-lg p-4 shadow-sm bg-white">
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">Hero Image</h2>
        <p className="text-sm text-gray-600">
          Value: /images/heroman.png
        </p>
      </div>

      <div className="flex gap-3">
        <button className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">Edit</button>
        <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">Delete</button>
      </div>
    </div>
  </div>

  {/* <!-- Search Enabled --> */}
  <div className="border rounded-lg p-4 shadow-sm bg-white">
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">Search Enabled</h2>
        <p className="text-sm text-gray-600">
          Value: true
        </p>
      </div>

      <div className="flex gap-3">
        <button className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">Edit</button>
        <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">Delete</button>
      </div>
    </div>
  </div>

  {/* <!-- Shapes Block --> */}
  <div className="border rounded-lg p-4 shadow-sm bg-white">
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">Shapes</h2>
        <p className="text-sm text-gray-600">2 shapes found</p>

        <ul className="mt-2 text-sm text-gray-700 list-disc list-inside">
          <li>Shape 1 — type: circle, color: bg-pink-500, size: 160, position: top-10 left-10, opacity: 0.3</li>
          <li>Shape 2 — type: square, color: bg-white, size: 96, position: top-32 left-32, opacity: 0.2, rotate: 45</li>
        </ul>
      </div>

      <div className="flex gap-3">
        <button className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">Edit</button>
        <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">Delete</button>
      </div>
    </div>
  </div>

</div>
            )}

            {editTab === "order" && (
              <Editorder
                onClose={() => setEditTab("")} 
                onSubmit={editSubmitHandler}
                editdetails={editDetails}
              />
            )}

            {editTab.includes("blog")  && (
              <Blogform 
                type={editTab}
                onClose={() => setEditTab("")} 
                onSubmit={editSubmitHandler}
                editdetails={editDetails}
              />
            )}

            {editTab.includes("model")  && (
              <Modelform
                type={editTab}
                onClose={() => setEditTab("")} 
                onSubmit={editSubmitHandler}
                editdetails={editDetails}
                brands={brands}
              />
            )}

            {editTab.includes("brand")  && (
              <Brandform
                type={editTab}
                onClose={() => setEditTab("")} 
                onSubmit={editSubmitHandler}
                editdetails={editDetails}
              />
            )}   

            {editTab.includes("offer")  && (
              <Offerform
                type={editTab}
                onClose={() => setEditTab("")} 
                onSubmit={editSubmitHandler}
                editdetails={editDetails}
              />
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
  if (!session || userInfo?.username !== "repairdekhoadmin") {
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
  