import { faEnvelope, faMessage, faPhone, faRectangleList, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { PuffLoader } from "react-spinners";
import { toast } from "react-toastify";
import * as Yup from "yup";

export default function Contactform() {
    const [showLoading,setShowLoading] = useState(false);
    const schema = Yup.object().shape({
        fullname: Yup.string().required("Name is required").min(4),
        mobileno: Yup.string().required("Mobile Number is required").min(10),
        email: Yup.string().required("Email is required").min(2),
        interestedin: Yup.string().required("Interested service is required").min(2),
        query: Yup.string().required("Query is required").min(5),
    });

      const sendQuery = async(payload:any) => {
        const sendQueryCall = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contact/createcontactquery`,payload)
       .then((response) => {
          if(response.data.success){
            toast.success(response.data.response,{
              theme:"colored",
              position:"top-center"
            });
          }
       }).catch((err) => {
          toast.success(err.message ? err.message : "Something went wrong please try again later",{
            theme:"colored",
            position:"top-center"
          });
       })
      }

      

    const formik = useFormik({
        initialValues: {
            fullname: "",
            mobileno: "",
            email: "",
            interestedin:"",
            query:"",
            date:""
        },
        validationSchema: schema,
        onSubmit: async ({ fullname,mobileno,email,interestedin,query }) => {
        setShowLoading(true);      
        const payloadData =  {
            "fullname": fullname,
            "mobileno": mobileno,
            "email": email,
            "interestedin":interestedin,
            "query": query,
            "date":new Date()
          }
        await sendQuery(payloadData);
        setShowLoading(false);  
        resetForm();
        },
     });
     const { errors, touched, values, handleChange, handleSubmit, resetForm } = formik;
    return (
        <form 
               id="contactform" 
               onSubmit={handleSubmit} 
               method="POST"
               className="flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <div className={`absolute left-3 top-3 ${errors.fullname && touched.fullname ? "text-red-500" : "text-gray-500"}`}>
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <input 
                    type="text" 
                    id="fullname" 
                    className={`w-full p-4 pl-10 border ${errors.fullname && touched.fullname ? "border-red-500" : "border-gray-500"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`} 
                    name="fullname" 
                    placeholder="Full Name*" 
                    value={values.fullname}
                    onChange={handleChange}
                    />
                     {errors.fullname && touched.fullname && typeof errors.fullname === "string" && <div id="formErrorName1"><small className="text-red-700">{errors.fullname}</small></div>}
                  </div>
                  <div className="relative">
                    <div className={`absolute left-3 top-3 ${errors.mobileno && touched.mobileno ? "text-red-500" : "text-gray-500"}`}>
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <input 
                    type="tel" 
                    id="mobileno" 
                    className={`w-full p-4 pl-10 border ${errors.mobileno && touched.mobileno ? "border-red-500" : "border-gray-500"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    name="mobileno"
                    placeholder="Mobile Number*" 
                    value={values.mobileno}
                    onChange={handleChange}
                    />
                     {errors.mobileno && touched.mobileno && typeof errors.mobileno === "string" && <div id="formErrorName1"><small className="text-red-700">{errors.mobileno}</small></div>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="relative">
                    <div className={`absolute left-3 top-3 ${errors.email && touched.email ? "text-red-500" : "text-gray-500"}`}>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <input 
                     type="email" 
                     id="email" 
                     className={`w-full p-4 pl-10 border ${errors.email && touched.email ? "border-red-500" : "border-gray-500"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`} 
                     name="email" 
                     placeholder="Email Address*" 
                     value={values.email}
                     onChange={handleChange}
                     />
                      {errors.email && touched.email && typeof errors.email === "string" && <div id="formErrorName1"><small className="text-red-700">{errors.email}</small></div>}
                  </div>
                  <div className="relative">
                    <div className={`absolute left-3 top-3 ${errors.interestedin && touched.interestedin ? "text-red-500" : "text-gray-500"}`}>
                      <FontAwesomeIcon icon={faRectangleList} />
                    </div>
                    <select 
                     id="interestedin" 
                     className={`w-full p-4 pl-10 border ${errors.interestedin && touched.interestedin ? "border-red-500" : "border-gray-500"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`} 
                     name="interestedin"
                     value={values.interestedin}
                     onChange={handleChange}
                     >
                      <option value="">Select service</option>
                      <option value="Mobile service">Mobile service</option>
                      <option value="Watch service">Watch service</option>
                      <option value="Tablet service">Tablet service</option>
                      <option value="Laptop service">Laptop service</option>
                    </select>
                    {errors.interestedin && touched.interestedin && typeof errors.interestedin === "string" && <div id="formErrorName1"><small className="text-red-700">{errors.interestedin}</small></div>}
                  </div>
                </div>
                <div className="mt-6 flex-grow">
                  <div className="relative">
                    <div className={`absolute left-3 top-3 ${errors.query && touched.query ? "text-red-500" : "text-gray-500"}`}>
                      <FontAwesomeIcon icon={faMessage} />
                    </div>
                    <textarea 
                     id="query" 
                     className={`w-full p-4 pl-10 border ${errors.query && touched.query ? "border-red-500" : "border-gray-500"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32`} 
                     name="query" 
                     placeholder="Please enter your query or problem*"
                     value={values.query}
                     onChange={handleChange}
                     ></textarea>
                      {errors.query && touched.query && typeof errors.query === "string" && <div id="formErrorName1"><small className="text-red-700">{errors.query}</small></div>}
                  </div>
                </div>
                <div className="mt-6">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" id="agree" name="agree" defaultChecked />
                    <span className="ml-2 text-gray-600">By clicking the “Submit” button you agree to our <a href="#" className="text-blue-600">Terms & Conditions</a>.</span>
                  </label>
                </div>
                <div className="mt-6">
                  <button 
                  type="submit" 
                  className="bg-green-500 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 w-full"
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
    )
}
  