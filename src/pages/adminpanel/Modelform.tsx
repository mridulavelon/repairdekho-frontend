import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { useState } from "react";
import { PuffLoader } from "react-spinners";
import { toast } from "react-toastify";
import * as Yup from "yup";

export default function Modelform({type,onClose,onSubmit,editdetails,brands} :any) {
    const [showLoading,setShowLoading] = useState(false);

    const convertToThumbnailLink = (driveLink:string) => {
      const fileIdMatch = driveLink.match(/\/d\/(.*?)\//);
      const fileId = fileIdMatch && fileIdMatch?.length > 0 ? fileIdMatch[1] : driveLink;
      const thumbnailLink = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
      return thumbnailLink;
    }

    
    const schema = Yup.object().shape({
        brand: Yup.string().required("Brand is required").min(2),
        devicetype: Yup.string().required("Type is required").min(2),
        modelname: Yup.string().required("Modelname is required").min(2),
        modelimagelink: Yup.string().required("Modelimagelink is required").min(2),
        touch:Yup.string().required("Touch is required").min(2),
        battery:Yup.string().required("Battery is required").min(2),
        charging:Yup.string().required("Charging is required").min(2),
        backpanel:Yup.string().required("backpanel is required").min(2),
        tempered:Yup.string().required("Tempered is required").min(2),
        speaker:Yup.string().required("Speaker is required").min(2),
        receiver:Yup.string().required("Receiver is required").min(2),
        glass:Yup.string().required("Glass is required").min(2),
        displaylocal:Yup.string().required("Displaylocal is required").min(2),
        displaybranded:Yup.string().required("Displaybranded is required").min(2),
      });

    const formik = useFormik({
        initialValues: {
           brand:type === "addmodel" ? "" : editdetails?.brand,
           devicetype:type === "addmodel" ? "" : editdetails?.type,
           modelname:type === "addmodel" ? "" : editdetails?.modelname,
           modelimagelink:type === "addmodel" ? "" : editdetails?.modelimagelink,
           touch:type === "addmodel" ? "" : editdetails?.touch,
           battery:type === "addmodel" ? "" : editdetails?.battery,
           charging:type === "addmodel" ? "" : editdetails?.charging,
           backpanel:type === "addmodel" ? "" : editdetails?.backpanel,
           tempered:type === "addmodel" ? "" : editdetails?.tempered,
           speaker:type === "addmodel" ? "" : editdetails?.speaker,
           receiver:type === "addmodel" ? "" : editdetails?.receiver,
           glass:type === "addmodel" ? "" : editdetails?.glass,
           displaylocal:type === "addmodel" ? "" : editdetails?.display?.local,
           displaybranded:type === "addmodel" ? "" : editdetails?.display?.branded,
           displayoled:type === "addmodel" ? "" : editdetails?.display?.oled
        },
        validationSchema: schema,
        onSubmit: async ({ brand,devicetype,modelname,modelimagelink,touch,battery,charging,backpanel,tempered,speaker,receiver,glass,displaylocal,displaybranded,displayoled }) => {
           console.log(modelimagelink, "modelimagelink")
            setShowLoading(true); 
            const payloadData = {
            ...(type === "editmodel" && {"id":editdetails?._id}),
            "brand":brand,
            "type":devicetype,
            "modelname":modelname,
            "touch":touch,
            "battery":battery,
            "charging":charging,
            "backpanel":backpanel,
            "tempered":tempered,
            "speaker":speaker,
            "receiver":receiver,
            "glass":glass,
            "modelimagelink": modelimagelink,
            "smallimagelink": modelimagelink,
            "display":{
                "oled":displayoled,
                "local":displaylocal,
                "branded":displaybranded
            }
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
  <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10 w-11/12 max-w-lg overflow-auto max-h-screen my-8">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg md:text-xl font-semibold">{type === "addmodel" ? "Add Model" : "Edit Model"}</h2>
      <button className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
            <form  onSubmit={handleSubmit} method="POST">
                <div className="mb-4">
                <label className={`block ${errors.brand && touched.brand ? "text-red-700" : "text-gray-700"} font-medium mb-1`}>
                Model Brand
              </label>
                       <select
                        name="brand"
                        value={values.brand}
                        onChange={handleChange}
                        id="status"
                        className={`mt-1 block w-full px-3 py-2 border ${errors.brand && touched.brand ? "border-red-500" : "border-gray-500"} rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
                    > 
                       <option value="">Select Brand</option>
                       {brands?.map((brand:any) => {
                          return(
                            <option key={brand?._id} value={brand?.value}>{brand?.name}</option>
                          )
                       })}
                       </select>
                     {errors.brand && touched.brand && typeof errors.brand === "string" && <div id="formErrorName1"><small className="text-red-700">{errors.brand}</small></div>}
              </div>
              <div className="mb-4">
                <label className={`block ${errors.devicetype && touched.devicetype ? "text-red-700" : "text-gray-700"} font-medium mb-1`}>
                 Model Type
              </label>
                   <select
                      name="devicetype"
                      value={values.devicetype}
                      onChange={handleChange}
                      id="devicetype"
                      className={`block w-full border ${errors.devicetype && touched.devicetype ? `border-red-600` : 'border-gray-300'} rounded-md shadow-sm p-2`}
                      >
                       <option value="">Select a device type</option>
                       <option value="mobile">Mobile</option>
                       <option value="watch">Watch</option>
                       <option value="tablet">Tablet</option>
                     </select>
                          {errors.devicetype && touched.devicetype && typeof errors.devicetype === "string" && <div id="formErrorName1"><small className="text-red-700">{errors.devicetype}</small></div>}
              </div>
              <div className="mb-4">
                <label className={`block ${errors.modelname && touched.modelname ? "text-red-700" : "text-gray-700"} font-medium mb-1`}>
                 Modelname
              </label>
                  <input
                      type="text"
                      name="modelname"
                      value={values.modelname}
                      onChange={handleChange}
                      id="modelname"
                      className={`mt-1 block w-full px-3 py-2 border ${errors.modelname && touched.modelname ? "border-red-500" : "border-gray-500"} rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
                  />
                     {errors.modelname && touched.modelname && typeof errors.modelname === "string" && <div id="formErrorName1"><small className="text-red-700">{errors.modelname}</small></div>}
              </div>
              <div className="mb-4">
                <label className={`block ${errors.modelimagelink && touched.modelimagelink ? "text-red-700" : "text-gray-700"} font-medium mb-1`}>
                 Model Image
              </label>
                  <input
                      type="text"
                      name="modelimagelink"
                      value={values.modelimagelink}
                      onChange={handleChange}
                      id="modelimagelink"
                      className={`mt-1 block w-full px-3 py-2 border ${errors.modelimagelink && touched.modelimagelink ? "border-red-500" : "border-gray-500"} rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
                  />
                     {errors.modelimagelink && touched.modelimagelink && typeof errors.modelimagelink === "string" && <div id="formErrorName1"><small className="text-red-700">{errors.modelimagelink}</small></div>}
              </div>
              <div className="mb-4">
                <label className={`block ${errors.touch && touched.touch ? "text-red-700" : "text-gray-700"} font-medium mb-1`}>
                 Touch Service
              </label>
                  <input
                      type="number"
                      name="touch"
                      value={values.touch}
                      onChange={handleChange}
                      id="touch"
                      className={`mt-1 block w-full px-3 py-2 border ${errors.touch && touched.touch ? "border-red-500" : "border-gray-500"} rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
                  />
                     {errors.touch && touched.touch && typeof errors.touch === "string" && <div id="formErrorName1"><small className="text-red-700">{errors.touch}</small></div>}
              </div>
              <div className="mb-4">
                <label className={`block ${errors.battery && touched.battery ? "text-red-700" : "text-gray-700"} font-medium mb-1`}>
                 Battery Service
              </label>
                  <input
                      type="number"
                      name="battery"
                      value={values.battery}
                      onChange={handleChange}
                      id="battery"
                      className={`mt-1 block w-full px-3 py-2 border ${errors.battery && touched.battery ? "border-red-500" : "border-gray-500"} rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
                  />
                     {errors.battery && touched.battery && typeof errors.battery === "string" && <div id="formErrorName1"><small className="text-red-700">{errors.battery}</small></div>}
              </div>
              <div className="mb-4">
                <label className={`block ${errors.charging && touched.charging ? "text-red-700" : "text-gray-700"} font-medium mb-1`}>
                 Charging Service
              </label>
                  <input
                      type="number"
                      name="charging"
                      value={values.charging}
                      onChange={handleChange}
                      id="charging"
                      className={`mt-1 block w-full px-3 py-2 border ${errors.charging && touched.charging ? "border-red-500" : "border-gray-500"} rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
                  />
                     {errors.charging && touched.charging && typeof errors.charging === "string" && <div id="formErrorName1"><small className="text-red-700">{errors.charging}</small></div>}
              </div>
              <div className="mb-4">
                <label className={`block ${errors.backpanel && touched.backpanel ? "text-red-700" : "text-gray-700"} font-medium mb-1`}>
                 Backpanel Service
              </label>
                  <input
                      type="number"
                      name="backpanel"
                      value={values.backpanel}
                      onChange={handleChange}
                      id="backpanel"
                      className={`mt-1 block w-full px-3 py-2 border ${errors.backpanel && touched.backpanel ? "border-red-500" : "border-gray-500"} rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
                  />
                     {errors.backpanel && touched.backpanel && typeof errors.backpanel === "string" && <div id="formErrorName1"><small className="text-red-700">{errors.backpanel}</small></div>}
              </div>
              <div className="mb-4">
                <label className={`block ${errors.tempered && touched.tempered ? "text-red-700" : "text-gray-700"} font-medium mb-1`}>
                 Tempered Service
              </label>
                  <input
                      type="number"
                      name="tempered"
                      value={values.tempered}
                      onChange={handleChange}
                      id="tempered"
                      className={`mt-1 block w-full px-3 py-2 border ${errors.tempered && touched.tempered ? "border-red-500" : "border-gray-500"} rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
                  />
                     {errors.tempered && touched.tempered && typeof errors.tempered === "string" && <div id="formErrorName1"><small className="text-red-700">{errors.tempered}</small></div>}
              </div>
              <div className="mb-4">
                <label className={`block ${errors.speaker && touched.speaker ? "text-red-700" : "text-gray-700"} font-medium mb-1`}>
                 Speaker Service
              </label>
                  <input
                      type="number"
                      name="speaker"
                      value={values.speaker}
                      onChange={handleChange}
                      id="speaker"
                      className={`mt-1 block w-full px-3 py-2 border ${errors.speaker && touched.speaker ? "border-red-500" : "border-gray-500"} rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
                  />
                     {errors.speaker && touched.speaker && typeof errors.speaker === "string" && <div id="formErrorName1"><small className="text-red-700">{errors.speaker}</small></div>}
              </div>
              <div className="mb-4">
                <label className={`block ${errors.receiver && touched.receiver ? "text-red-700" : "text-gray-700"} font-medium mb-1`}>
                 Receiver Service
              </label>
                  <input
                      type="number"
                      name="receiver"
                      value={values.receiver}
                      onChange={handleChange}
                      id="receiver"
                      className={`mt-1 block w-full px-3 py-2 border ${errors.receiver && touched.receiver ? "border-red-500" : "border-gray-500"} rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
                  />
                     {errors.receiver && touched.receiver && typeof errors.receiver === "string" && <div id="formErrorName1"><small className="text-red-700">{errors.receiver}</small></div>}
              </div>
              <div className="mb-4">
                <label className={`block ${errors.glass && touched.glass ? "text-red-700" : "text-gray-700"} font-medium mb-1`}>
                 Glass Service
              </label>
                  <input
                      type="number"
                      name="glass"
                      value={values.glass}
                      onChange={handleChange}
                      id="glass"
                      className={`mt-1 block w-full px-3 py-2 border ${errors.glass && touched.glass ? "border-red-500" : "border-gray-500"} rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
                  />
                     {errors.glass && touched.glass && typeof errors.glass === "string" && <div id="formErrorName1"><small className="text-red-700">{errors.glass}</small></div>}
              </div>
              <div className="mb-4">
                <label className={`block ${errors.displaylocal && touched.displaylocal ? "text-red-700" : "text-gray-700"} font-medium mb-1`}>
                 Display Local
              </label>
                  <input
                      type="number"
                      name="displaylocal"
                      value={values.displaylocal}
                      onChange={handleChange}
                      id="displaylocal"
                      className={`mt-1 block w-full px-3 py-2 border ${errors.displaylocal && touched.displaylocal ? "border-red-500" : "border-gray-500"} rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
                  />
                     {errors.displaylocal && touched.displaylocal && typeof errors.displaylocal === "string" && <div id="formErrorName1"><small className="text-red-700">{errors.displaylocal}</small></div>}
              </div>
              <div className="mb-4">
                <label className={`block ${errors.displaybranded && touched.displaybranded ? "text-red-700" : "text-gray-700"} font-medium mb-1`}>
                 Display Branded
              </label>
                  <input
                      type="number"
                      name="displaybranded"
                      value={values.displaybranded}
                      onChange={handleChange}
                      id="displaybranded"
                      className={`mt-1 block w-full px-3 py-2 border ${errors.displaybranded && touched.displaybranded ? "border-red-500" : "border-gray-500"} rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
                  />
                     {errors.displaybranded && touched.displaybranded && typeof errors.displaybranded === "string" && <div id="formErrorName1"><small className="text-red-700">{errors.displaybranded}</small></div>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                 Display Oled
              </label>
                  <input
                      type="number"
                      name="displayoled"
                      value={values.displayoled}
                      onChange={handleChange}
                      id="displayoled"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                  />
                     {errors.displayoled && touched.displayoled && typeof errors.displayoled === "string" && <div id="formErrorName1"><small className="text-red-700">{errors.displayoled}</small></div>}
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