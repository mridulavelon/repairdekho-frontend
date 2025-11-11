import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { useState } from "react";
import { PuffLoader } from "react-spinners";
import { toast } from "react-toastify";
import * as Yup from "yup";

export default function Brandform({type,onClose,onSubmit,editdetails} :any) {
    const [showLoading,setShowLoading] = useState(false);

    const convertToThumbnailLink = (driveLink:string) => {
        const fileIdMatch = driveLink.match(/\/d\/(.*?)\//);
        if (!fileIdMatch || fileIdMatch.length < 2) {
        toast.error("Invalid Google Drive link",{
            theme:"colored",
            position:"top-center"
          })
          setShowLoading(false);  
          resetForm();
          onClose();
          throw new Error("Invalid Google Drive link");
        }
        const fileId = fileIdMatch[1];
        const thumbnailLink = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
        return thumbnailLink;
    }

    const schema = Yup.object().shape({
        name: Yup.string().required("Brand Name is required").min(2),
        imagelink: Yup.string().required("Brand Image is required").min(2),
      });

    const formik = useFormik({
        initialValues: {
           name:type === "addbrand" ? "" : editdetails?.name,
           imagelink:type === "addbrand" ? "" : editdetails?.imagelink,
        },
        validationSchema: schema,
        onSubmit: async ({ name,imagelink }) => {
        setShowLoading(true);  
        const payloadData =  {
            ...(type === "editbrand" && {"id":editdetails?._id}),
            "name":name,
            "value":name.toLowerCase(),
            "imagelink":convertToThumbnailLink(imagelink),
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
                <label className={`block ${errors.name && touched.name ? "text-red-700" : "text-gray-700"} font-medium mb-1`}>
                 Brand Name
              </label>
                  <input
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      id="name"
                      className={`mt-1 block w-full px-3 py-2 border ${errors.name && touched.name ? "border-red-500" : "border-gray-500"} rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
                  />
                     {errors.name && touched.name && typeof errors.name === "string" && <div id="formErrorName1"><small className="text-red-700">{errors.name}</small></div>}
              </div>
              <div className="mb-4">
                <label className={`block ${errors.imagelink && touched.imagelink ? "text-red-700" : "text-gray-700"} font-medium mb-1`}>
                 Brand Image
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