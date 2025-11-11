import { faEnvelope, faPhone, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { PuffLoader } from "react-spinners";


export default function Editprofiledetails({ userDetails,userid, updateProfileDetail,onClose }:any) {
  const schema = Yup.object().shape({
    firstname: Yup.string().required("Firstname is required").min(4),
    lastname: Yup.string().required("Lastname is required").min(4),
    email: Yup.string().email().required("Email is required").min(6),
    mobilenumber: Yup.string().required("Mobile Number is required").min(10),
  });
    const [showLoading, setShowLoading] = useState(false);

    const handleClose = () => {
      resetForm();
      onClose();
    }
    const formik = useFormik({
      initialValues: {
         firstname: userDetails?.firstname,
         lastname: userDetails?.lastname,
         username:userDetails?.username,
         email: userDetails?.email,
         mobilenumber: userDetails?.mobileno,
      },
      validationSchema: schema,
      onSubmit: async ({ firstname,lastname,email,username,mobilenumber }) => {
        setShowLoading(true);
        try{
          const updatedProfileDetail = {
            userid:userid,
            firstname:firstname,
            lastname:lastname,
            username:username,
            mobileno:Number(mobilenumber),
            email:email,
          }
          await updateProfileDetail(updatedProfileDetail);
          setShowLoading(false);
          handleClose();
        }catch(error){
          console.log(error)
        }
      },
   });
   const { errors, touched, values, handleChange, handleSubmit, resetForm } = formik;
  
    return (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 max-w-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Edit User Details</h2>
          <button onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} className="text-gray-600 hover:text-gray-800" />
          </button>
        </div>
        <form onSubmit={handleSubmit} method="POST">
          <div className="mb-5">
            <label className={`block ${errors.firstname && touched.firstname ? 'text-red-600' : 'text-gray-700'} font-medium mb-1`}>
              <FontAwesomeIcon icon={faUser} className="mr-2 text-blue-500" /> First Name
            </label>
            <input
              type="text"
              name="firstname"
              value={values.firstname}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${errors.firstname && touched.firstname && `border-red-600`} rounded-md shadow-sm focus:ring focus:ring-blue-300`}
            />
               {errors.firstname && touched.firstname && typeof errors.firstname === "string" && <div id="formErrorName1"><small className="text-red-600">{errors?.firstname}</small></div>}
          </div>
          <div className="mb-5">
            <label className={`block ${errors.lastname && touched.lastname ? 'text-red-600' : 'text-gray-700'} font-medium mb-1`}>
              <FontAwesomeIcon icon={faUser} className="mr-2 text-blue-500" /> Last Name
            </label>
            <input
              type="text"
              name="lastname"
              value={values.lastname}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${errors.lastname && touched.lastname && `border-red-600`} rounded-md shadow-sm focus:ring focus:ring-blue-300`}
            />
              {errors.lastname && touched.lastname && typeof errors.lastname === "string" &&<div id="formErrorName1"><small className="text-red-600">{errors?.lastname}</small></div>}
          </div>
          <div className="mb-5">
            <label className={`block ${errors.email && touched.email ? 'text-red-600' : 'text-gray-700'} font-medium mb-1`}>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-blue-500" /> Email
            </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${errors.email && touched.email && `border-red-600`} rounded-md shadow-sm focus:ring focus:ring-blue-300`}
            />
         {errors.email && touched.email && typeof errors.email === "string" &&<div id="formErrorName1"><small className="text-red-600">{errors?.email}</small></div>}
          </div>
          <div className="mb-5">
            <label className={`block ${errors.mobilenumber && touched.mobilenumber ? 'text-red-600' : 'text-gray-700'} font-medium mb-1`}>
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-blue-500" /> Mobile No
            </label>
            <input
              type="tel"
              name="mobilenumber"
              value={values.mobilenumber}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${errors.mobilenumber && touched.mobilenumber && `border-red-600`} rounded-md shadow-sm focus:ring focus:ring-blue-300`}
            />
               {errors.mobilenumber && touched.mobilenumber && typeof errors.mobilenumber === "string" && <div id="formErrorName1"><small className="text-red-600">{errors?.mobilenumber}</small></div>}
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-orange-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-all duration-200"
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
    </div>
    )
}
  