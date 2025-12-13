import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { useState } from "react";
import { PuffLoader } from "react-spinners";
import { toast } from "react-toastify";
import * as Yup from "yup";

export default function Offerform({type,onClose,onSubmit,editdetails} :any) {
    const [showLoading,setShowLoading] = useState(false);

    const schema = Yup.object().shape({
        label: Yup.string().required("Offer Label is required").min(2),
        discountpercent: Yup.string().required("Discount Percent is required").min(2),
        applicableservice: Yup.string().required("Applicable Service is required").min(2),
        infotext: Yup.string().required("Offer Info is required").min(2),
        imagelink: Yup.string().required("Offer Image is required").min(2),
      });

    const formik = useFormik({
        initialValues: {
           label:type === "addoffer" ? "" : editdetails?.label,
           discountpercent:type === "addoffer" ? "" : editdetails?.discountpercent,
           applicableservice:type === "addoffer" ? "" : editdetails?.applicableservice,
           infotext:type === "addoffer" ? "" : editdetails?.infotext,
           imagelink:type === "addoffer" ? "" : editdetails?.imagelink,
        },
        validationSchema: schema,
        onSubmit: async ({ label,discountpercent,applicableservice,infotext,imagelink }) => {
        setShowLoading(true);    
        const payloadData =  {
            ...(type === "editoffer" && {"id":editdetails?._id}),
            "label":label,
            "discountpercent":discountpercent,
            "applicableservice":applicableservice,
            "infotext":infotext,
            "imagelink": imagelink,
        }
        await onSubmit(type,payloadData);
        setShowLoading(false);
        resetForm();
        onClose();
        },
     });
     const { errors, touched, values, handleChange, handleSubmit, resetForm } = formik;


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-lg">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">{type === "addbrand" ? "Create Brand" : "Edit Brand" }</h2>
                <button className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
            <form  onSubmit={handleSubmit} method="POST">
                <div className="mb-4">
                <label className={`block ${errors.label && touched.label ? "text-red-700" : "text-gray-700"} font-medium mb-1`}>
                 Offer Label
              </label>
                  <input
                      type="text"
                      name="label"
                      value={values.label}
                      onChange={handleChange}
                      id="label"
                      className={`mt-1 block w-full px-3 py-2 border ${errors.label && touched.label ? "border-red-500" : "border-gray-500"} rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
                  />
                     {errors.label && touched.label && typeof errors.label === "string" && <div id="formErrorName1"><small className="text-red-700">{errors.label}</small></div>}
              </div>
              <div className="mb-4">
                <label className={`block ${errors.discountpercent && touched.discountpercent ? "text-red-700" : "text-gray-700"} font-medium mb-1`}>
                 Discount Percent
              </label>
                  <input
                      type="number"
                      name="discountpercent"
                      value={values.discountpercent}
                      onChange={handleChange}
                      id="discountpercent"
                      className={`mt-1 block w-full px-3 py-2 border ${errors.discountpercent && touched.discountpercent ? "border-red-500" : "border-gray-500"} rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
                  />
                     {errors.discountpercent && touched.discountpercent && typeof errors.discountpercent === "string" && <div id="formErrorName1"><small className="text-red-700">{errors.discountpercent}</small></div>}
              </div>   
              <div className="mb-4">
                <label className={`block ${errors.applicableservice && touched.applicableservice ? "text-red-700" : "text-gray-700"} font-medium mb-1`}>
                Applicable Service
              </label>
                       <select
                        name="applicableservice"
                        value={values.applicableservice}
                        onChange={handleChange}
                        id="applicableservice"
                        className={`mt-1 block w-full px-3 py-2 border ${errors.applicableservice && touched.applicableservice ? "border-red-500" : "border-gray-500"} rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
                    > 
                       <option value="">Select Service</option>
                       <option value="all">All</option>
                       <option value="touch">Touch</option>
                       <option value="display">Display</option>
                       <option value="battery">Battery</option>
                       <option value="charging">Charging</option>
                       <option value="backpanel">Backpanel</option>
                       <option value="tempered">Tempered</option>
                       <option value="speaker">Speaker</option>
                       <option value="receiver">Receiver</option>
                       <option value="glass">Glass</option>
                       </select>
                     {errors.applicableservice && touched.applicableservice && typeof errors.applicableservice === "string" && <div id="formErrorName1"><small className="text-red-700">{errors.applicableservice}</small></div>}
              </div> 
              <div className="mb-4">
                <label className={`block ${errors.infotext && touched.infotext ? "text-red-700" : "text-gray-700"} font-medium mb-1`}>
                 Offer Display Text
              </label>
                  <input
                      type="text"
                      name="infotext"
                      value={values.infotext}
                      onChange={handleChange}
                      id="infotext"
                      className={`mt-1 block w-full px-3 py-2 border ${errors.infotext && touched.infotext ? "border-red-500" : "border-gray-500"} rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
                  />
                     {errors.infotext && touched.infotext && typeof errors.infotext === "string" && <div id="formErrorName1"><small className="text-red-700">{errors.infotext}</small></div>}
              </div>
              <div className="mb-4">
                <label className={`block ${errors.imagelink && touched.imagelink ? "text-red-700" : "text-gray-700"} font-medium mb-1`}>
                 Offer Cover Image
              </label>
                  <input
                      type="text"
                      name="imagelink"
                      value={values.imagelink}
                      onChange={handleChange}
                      id="imagelink"
                      className={`mt-1 block w-full px-3 py-2 border ${errors.imagelink && touched.imagelink ? "border-red-500" : "border-gray-500"} rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
                  />
                     {errors.imagelink && touched.imagelink && typeof errors.imagelink === "string" && <div id="formErrorName1"><small className="text-red-700">{errors.imagelink}</small></div>}
              </div>    
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                    {showLoading ? (
                        <div className="flex items-center justify-center">
                        <PuffLoader size={30} color="white"/>
                       </div> 
                    ):(
                      <>Submit</>
                    )}
                </button>
            </form>
        </div>
    </div>
    )
}