import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { PuffLoader } from "react-spinners";
import { toast } from "react-toastify";
import * as Yup from "yup";
import Success from "./Success";
export default function Resetpassword({ resettoken }:any) {
  const [showLoading,setShowLoading] = useState(false);
  const [successfullySet,setSuccessfullySet] = useState(false);
  const schema = Yup.object().shape({
      password: Yup.string().required("Password is required").min(8),
      confirmpassword: Yup.string().required("Confirm password is required").min(8),
  });
  const submitResetPassword = async(payloadData :any) => {
    const resetpasswordCall = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/resetpassword`,payloadData)
    .then((response) => {
      if(response.data.success){
        setSuccessfullySet(true)
      }
    }).catch((error) => {
      toast.error(error.message,{
        theme:"colored",
        position:"top-center"
      });
    })
  } 
  const formik = useFormik({
    initialValues: {
        password: "",
        confirmpassword: "",
    },
    validationSchema: schema,
    onSubmit: async ({ password,confirmpassword }) => {
    setShowLoading(true);
    if(confirmpassword === password){
      const payloadData =  {
        id:resettoken,
        password:password
      }
      await submitResetPassword(payloadData);
    }else{
      toast.error("Confirm password and password does not match",{
        theme:"colored",
        position:"top-center"
      });
    }      
    setShowLoading(false);  
    resetForm();
    },
 });
 const { errors, touched, values, handleChange, handleSubmit, resetForm } = formik;
    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-slate-800">
      <div className="hidden md:flex md:flex-1 h-screen bg-cover bg-center" style={{ backgroundImage: 'url("https://img.freepik.com/free-vector/reset-password-concept-illustration_114360-7886.jpg")' }}></div>
      <div className="flex-1 flex items-center justify-center px-4 py-8 sm:p-12 bg-orange-500">
      {successfullySet ? 
        (
          <Success/>
        ): (
          <div className="bg-white p-8 sm:p-12 w-full max-w-md rounded-lg shadow-lg">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Reset Your Password
          </h2>
          <form  onSubmit={handleSubmit} method="POST" className="space-y-6">
            <div>
              <label htmlFor="password"  className={`block text-sm font-medium  ${errors.password && touched.password ? "text-red-500" : "text-gray-700"}`}>
                New Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${errors.password && touched.password ? "border-red-500" : "border-gray-200"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                  {errors.password && touched.password && typeof errors.password === "string" && <div id="formErrorName1"><small className="text-red-700">{errors.password}</small></div>}
              </div>
            </div>
            <div>
              <label htmlFor="confirmPassword" className={`block text-sm font-medium  ${errors.confirmpassword && touched.confirmpassword ? "text-red-500" : "text-gray-700"}`}>
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="confirmpassword"
                  name="confirmpassword"
                  type="password"
                  value={values.confirmpassword}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${errors.confirmpassword && touched.confirmpassword ? "border-red-500" : "border-gray-200"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                  {errors.confirmpassword && touched.confirmpassword && typeof errors.confirmpassword === "string" && <div id="formErrorName1"><small className="text-red-700">{errors.confirmpassword}</small></div>}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {showLoading ? (
                        <div className="flex items-center justify-center">
                        <PuffLoader size={30} color="white"/>
                       </div> 
                    ):(
                      <>Submit</>
                    )}
              </button>
            </div>
          </form>
        </div>
        )}
      </div>
    </div>
    )
  }
  export async function getServerSideProps(context : any) {
    const { resettoken } = context.params;
     return { props: { resettoken: resettoken } };
 }