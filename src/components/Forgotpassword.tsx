import useStore from "@/lib/store";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { PuffLoader } from "react-spinners";
import { toast } from "react-toastify";
import * as Yup from "yup";

export default function Forgotpassword() {
  const schema = Yup.object().shape({
     email: Yup.string().email().required("Email is required").min(6),
  });
    const { showForgotPassword,updateShowForgotPassword} = useStore();
    const [showLoading,setShowLoading] = useState(false);

    const formik = useFormik({
      initialValues: {
         email: "",
      },
      validationSchema: schema,
      onSubmit: async ({ email }) => {
          const payloadData = {
            "email":email,
          }
          setShowLoading(true);
          try{
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/forgotpassword`,payloadData)
            if(response){
              try {
                 const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/resetpassword/sendlink`,payloadData)
                 if(response){
                   toast.success("Reset link sent to your registered email id kindly check your mail",{
                     theme:"colored",
                     position: "top-center"
                   })
                 }
               }catch(error:any){
                 toast.error(error.response.data.message,{
                   theme:"colored",
                   position: "top-center"
                 })
               }
            }
          }catch(error:any){
            toast.error(error.response.data.message,{
              theme:"colored",
              position: "top-center"
            })
          }
          setShowLoading(false)
      },
   });
   const { errors, touched, values, handleChange, handleSubmit, resetForm } = formik;

   const closeForgotPassword = () => {
    resetForm();
    updateShowForgotPassword(false)
   }
    return (
        <>
        {showForgotPassword && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl flex">
              <div className="hidden md:block w-1/2 relative">
                <img
                  src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1095.jpg"
                  alt="Login"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 p-8 relative">
                <button
                  className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                  <FontAwesomeIcon icon={faTimes} size="lg" onClick={closeForgotPassword}/>
                </button>
               
                <h2 className="text-2xl font-semibold mb-4">Forgot your password</h2>
                <form onSubmit={handleSubmit} method="POST">
                  <div className="mb-4">
                    <label className={`block ${errors.email && touched.email ? 'text-red-600' : 'text-gray-700'}`}>Enter your registered email address</label>
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
                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                  >  
                    {showLoading ? (
                        <div className="flex items-center justify-center">
                        <PuffLoader size={30} color="white"/>
                       </div> 
                    ):(
                      <>Send Reset Link</>
                    )}
                  </button>
                </form>
                <div className="text-center mt-4">
                  <p className="text-gray-700">Find you account and reset your password</p>
                </div>
              </div>
            </div>
          </div>
        )}
       </>
    )
}
  