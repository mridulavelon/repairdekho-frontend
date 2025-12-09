import useStore from "@/lib/store";
import { faTimes,faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import PuffLoader from "react-spinners/PuffLoader";
import { toast } from "react-toastify";
import * as Yup from "yup";

export default function Register() {
  const schema = Yup.object().shape({
    firstname: Yup.string().required("Firstname is required").min(4),
    lastname: Yup.string().required("Lastname is required").min(4),
    username: Yup.string().required("Username is required").min(5),
    email: Yup.string().email().required("Email is required").min(6),
    mobilenumber: Yup.string().required("Mobile Number is required").min(10),
    password: Yup.string().required("Password is required").min(8)
  });
    const { showRegister,updateShowRegister,updateShowLogin} = useStore();
    const [showLoading,setShowLoading] = useState(false);
    const handleShowLogin = () => {
        resetForm();
        updateShowRegister(false);
        updateShowLogin(true);
    }

    const closeRegister = () => {
      resetForm();
      updateShowRegister(false)
    }

    const formik = useFormik({
      initialValues: {
         firstname: "",
         lastname: "",
         username: "",
         email: "",
         mobilenumber: "",
         password:""
      },
      validationSchema: schema,
      onSubmit: async ({ firstname,lastname,username,email,mobilenumber,password }) => {
        setShowLoading(true);
        try{
          const payloadData = {
            firstname:firstname,
            lastname:lastname,
            username:username,
            mobileno:Number(mobilenumber),
            email:email,
            password:password
          }
          const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/signup`,payloadData)
          if(response){
            updateShowRegister(false); 
          }
        }catch(error:any){
          toast.error(error.response.data.message,{
            theme:"colored",
            position: "top-center"
          })
        }
        setShowLoading(false);
      },
   });
   const { errors, touched, values, handleChange, handleSubmit, resetForm } = formik;

    return (
        <>
        {showRegister && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-6xl flex">
       <div className="hidden md:flex w-1/2 items-center justify-center bg-gradient-to-br from-green-500 via-teal-500 to-cyan-500 relative p-10 overflow-hidden">

  {/* Ambient glowing shapes */}
  <div className="absolute -top-14 -left-10 w-48 h-48 bg-white/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-56 h-56 bg-white/10 rounded-full blur-2xl"></div>

  {/* Content */}
  <div className="relative z-10 text-center text-white px-6">
    <div className="mb-6 flex items-center justify-center">
      <div className="bg-white/20 backdrop-blur-md p-6 rounded-full shadow-lg shadow-black/20">
        <FontAwesomeIcon icon={faUserPlus} className="text-4xl" />
      </div>
    </div>

    <h2 className="text-3xl font-bold mb-3 tracking-wide">
      Create Your Account
    </h2>

    <p className="text-lg font-semibold opacity-90">
      Join us today and start booking your fast  
      and reliable repair services seamlessly.
    </p>
  </div>
</div>

              <div className="w-full md:w-1/2 p-8 relative">
                <button
                  className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                  <FontAwesomeIcon icon={faTimes} size="lg" onClick={closeRegister}/>
                </button>
               
                <h2 className="text-2xl font-semibold mb-4">Register</h2>
                <form onSubmit={handleSubmit} method="POST">
                <div className="mb-4">
                    <label className={`block ${errors.firstname && touched.firstname ? 'text-red-600' : 'text-gray-700'}`}>Firstname</label>
                    <input
                      type="text"
                      name="firstname"
                      value={values.firstname}
                      onChange={handleChange}
                      id="firstname"
                      className={`w-full px-3 py-2 border ${errors.firstname && touched.firstname && `border-red-600`} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                     {errors.firstname && touched.firstname && <div id="formErrorName1"><small className="text-red-600">{errors.firstname}</small></div>}
                  </div>
                  <div className="mb-4">
                    <label className={`block ${errors.lastname && touched.lastname ? 'text-red-600' : 'text-gray-700'}`}>Lastname</label>
                    <input
                      type="text"
                      name="lastname"
                      value={values.lastname}
                      onChange={handleChange}
                      id="lastname"
                      className={`w-full px-3 py-2 border ${errors.lastname && touched.lastname && `border-red-600`} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                     {errors.lastname && touched.lastname && <div id="formErrorName1"><small className="text-red-600">{errors.lastname}</small></div>}
                  </div>
                  <div className="mb-4">
                    <label className={`block ${errors.username && touched.username ? 'text-red-600' : 'text-gray-700'}`}>Username</label>
                    <input
                      type="text"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      id="username"
                      className={`w-full px-3 py-2 border ${errors.username && touched.username && `border-red-600`} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                     {errors.username && touched.username && <div id="formErrorName1"><small className="text-red-600">{errors.username}</small></div>}
                  </div>   
                  <div className="mb-4">
                    <label className={`block ${errors.email && touched.email ? 'text-red-600' : 'text-gray-700'}`}>Email</label>
                    <input
                      type="text"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      id="email"
                      className={`w-full px-3 py-2 border ${errors.email && touched.email && `border-red-600`} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                     {errors.email && touched.email && <div id="formErrorName1"><small className="text-red-600">{errors.email}</small></div>}
                  </div>
                  <div className="mb-4">
                    <label className={`block ${errors.mobilenumber && touched.mobilenumber ? 'text-red-600' : 'text-gray-700'}`}>Mobile Number</label>
                    <input
                      type="tel"
                      name="mobilenumber"
                      value={values.mobilenumber}
                      onChange={handleChange}
                      id="mobilenumber"
                      className={`w-full px-3 py-2 border ${errors.mobilenumber && touched.mobilenumber && `border-red-600`} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                     {errors.mobilenumber && touched.mobilenumber && <div id="formErrorName1"><small className="text-red-600">{errors.mobilenumber}</small></div>}
                  </div>
                  <div className="mb-4">
                    <label className={`block ${errors.password && touched.password ? 'text-red-600' : 'text-gray-700'}`}>Password</label>
                    <input
                      type="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      id="password"
                      className={`w-full px-3 py-2 border ${errors.password && touched.password && `border-red-600`} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                     {errors.password && touched.password && <div id="formErrorName1"><small className="text-red-600">{errors.password}</small></div>}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-pink-600 text-white py-2 rounded-full hover:bg-blue-600 transition duration-300"
                  >
                    {showLoading ? (
                        <div className="flex items-center justify-center">
                        <PuffLoader size={30} color="white"/>
                       </div> 
                    ):(
                      <>Submit</>
                    )}
                  </button>
                  <div className="flex justify-center gap-2 font-semibold py-4" onClick={handleShowLogin}>
                      Already have an account? Please <span className="text-pink-600">Login</span>
                  </div>
                </form>
                <div className="text-center mt-4">
                  <p className="text-gray-700">Create your account</p>
                </div>
              </div>
            </div>
          </div>
        )}
       </>
    )
  }
  