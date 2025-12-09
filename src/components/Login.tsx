import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useStore from "@/lib/store";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signIn, useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { useState } from "react";
import PuffLoader from "react-spinners/PuffLoader";
import Link from "next/link";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";



export default function Login() {
  const schema = Yup.object().shape({
    email: Yup.string().required("Email or phone no is required"),
    password: Yup.string().required("Password is required").min(7),
  });
    const { data: session, status } = useSession();
    const { showLogin,updateShowLogin,updateShowRegister,updateShowForgotPassword } = useStore();
    const [showLoading,setShowLoading] = useState(false);
    

    const handleShowRegister = (e:any) => {
        e.preventDefault()
        updateShowLogin(false);
        updateShowRegister(true);
    }

    const handleShowForgot = (e:any) => {
        e.preventDefault();
        updateShowLogin(false);
        updateShowForgotPassword(true)
    }

    const formik = useFormik({
      initialValues: {
         email: "",
         password: "",
      },
      validationSchema: schema,
      onSubmit: async ({ email, password }) => {
         setShowLoading(true);
         const phoneTestReg = /^\d{10}$/;
         const emailExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
         const mobileNoValid = phoneTestReg.test(email) ? true : false;
         const emailValid = emailExp.test(email) ? true : false;
         await signIn('credentials', {
            redirect: false,
            email: emailValid ? email : mobileNoValid ? Number(email) : email,
            password: password,
         }).then(async(response:any) => {
          if (response.status === 200) {
            updateShowLogin(false)
         } else {
            toast.error("Invalid username or password", { className: 'bg-blue-500 text-white p-4 rounded-lg shadow-lg',position: "top-center"});
         }
         }).catch((error) => {
           toast.error("Something unexpected happened", {position: "top-center"});
         });
         setShowLoading(false);
      },
   });
   const { errors, touched, values, handleChange, handleSubmit, resetForm } = formik;

    return (
        <>
         {showLogin && (
             <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
             <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl flex">
              <div className="hidden md:flex w-1/2 items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 relative p-10 overflow-hidden">

  {/* Ambient blurred shapes */}
  <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-52 h-52 bg-white/10 rounded-full blur-2xl"></div>

  {/* Content */}
  <div className="relative z-10 text-center text-white px-6">
    <div className="mb-6 flex items-center justify-center">
      <div className="bg-white/20 backdrop-blur-md p-6 rounded-full shadow-lg shadow-black/20">
        <FontAwesomeIcon icon={faUserShield} className="text-4xl" />
      </div>
    </div>

    <h2 className="text-3xl font-bold mb-3 tracking-wide">
      Welcome Back!
    </h2>

    <p className="text-lg font-semibold opacity-90">
      Please sign in to place your order  
      and continue your seamless repair experience.
    </p>
  </div>
</div>

               <div className="w-full md:w-1/2 p-8 relative">
                 <button
                   className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                 >
                   <FontAwesomeIcon icon={faTimes} size="lg" onClick={() => updateShowLogin(false)}/>
                 </button>
                
                 <h2 className="text-2xl font-semibold mb-4">Login</h2>
                 <form 
                  method="POST"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                  >
                   <div className="mb-4">
                     <label className={`block ${errors.password && touched.password ? 'text-red-600' : 'text-gray-700'}`}>Email or Mobile Number</label>
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
                   <div>

                   </div>
               
                   <div>
                     <span className="font-semibold flex gap-2 py-4 justify-center">
                      Don't have an account Please 
                      <p className="text-underline text-pink-600"  onClick={handleShowRegister}>
                       Register
                     </p>
                     </span>
                   </div>
                   <div className="text-right text-pink-600 font-semibold mt-2 cursor-pointer" onClick={handleShowForgot}>
                       Forgot password?
                   </div>
                 </form>
                 <div className="text-center mt-4">
                   <p className="text-gray-700">Login to place your order</p>
                 </div>
               </div>
             </div>
           </div>
         )}
        </>
    )
  }
  