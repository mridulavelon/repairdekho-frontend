import { faBuilding, faCity, faHome, faMapMarkedAlt, faMapPin, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Editshippingaddress({ address,handleEditAddress,handleSubmitAddress }:any) {
  const schema = Yup.object().shape({
      housenumber: Yup.string().required("House Number is required").min(4),
      apartmentno: Yup.string().required("Apartment Number is required").min(3),
      town: Yup.string().required("Town is required").min(3),
      state: Yup.string().required("State is required").min(3),
      pincode: Yup.string().required("Pincode is required").min(4),
   });

  const formik = useFormik({
    initialValues: {
        housenumber:address?.housenumber || '',
        apartmentno:address?.apartmentno || '',
        town:address?.town || '',
        state:address?.state || '',
        pincode:address?.pincode || ''
    },
    validationSchema: schema,
    onSubmit: async ({ housenumber,apartmentno,town,state,pincode }) => {
        const updatedAddress = {
            housenumber:housenumber,
            apartmentno:apartmentno,
            town:town,
            state:state,
            pincode:pincode
        };
        handleSubmitAddress(updatedAddress);
    },
 });
 const { errors, touched, values, handleChange, handleSubmit, resetForm } = formik;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-lg">
          <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Edit Address</h2>
              <button onClick={() => handleEditAddress(false)} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                  <FontAwesomeIcon icon={faTimes} />
              </button>
          </div>
          <form onSubmit={handleSubmit} method="POST">
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                <FontAwesomeIcon icon={faHome} className="mr-2 text-blue-500" /> House Number
              </label>
                  <input
                      type="text"
                      name="housenumber"
                      value={values.housenumber}
                      onChange={handleChange}
                      id="housenumber"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                  />
                     {errors.housenumber && touched.housenumber && typeof errors.housenumber === "string" && <div id="formErrorName1"><small className="text-danger font-italic">{errors.housenumber}</small></div>}
              </div>
              <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
              <FontAwesomeIcon icon={faBuilding} className="mr-2 text-blue-500" /> Apartment Number
            </label>
                  <input
                      type="text"
                      name="apartmentno"
                      value={values.apartmentno}
                      onChange={handleChange}
                      id="apartmentno"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                  />
                     {errors.apartmentno && touched.apartmentno && typeof errors.apartmentno === "string" && <div id="formErrorName1"><small className="text-danger font-italic">{errors.apartmentno}</small></div>}
              </div>
              <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
              <FontAwesomeIcon icon={faCity} className="mr-2 text-blue-500" /> Town
            </label>
                  <input
                      type="text"
                      name="town"
                      value={values.town}
                      onChange={handleChange}
                      id="town"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                  />
                    {errors.town && touched.town && typeof errors.town === "string" && <div id="formErrorName1"><small className="text-danger font-italic">{errors.town}</small></div>}
              </div>
              <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
              <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-2 text-blue-500" /> State
            </label>
                  <input
                      type="text"
                      name="state"
                      value={values.state}
                      onChange={handleChange}
                      id="state"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                  />
                     {errors.state && touched.state && typeof errors.state === "string" && <div id="formErrorName1"><small className="text-danger font-italic">{errors.state}</small></div>}
              </div>
              <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
              <FontAwesomeIcon icon={faMapPin} className="mr-2 text-blue-500" /> Pincode
            </label>
                  <input
                      type="text"
                      name="pincode"
                      value={values.pincode}
                      onChange={handleChange}
                      id="pincode"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                  />
                     {errors.pincode && touched.pincode && typeof errors.pincode === "string" && <div id="formErrorName1"><small className="text-danger font-italic">{errors.pincode}</small></div>}
              </div>
              <button
                  type="submit"
                  className="w-full px-4 py-2 bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                  Submit
              </button>
          </form>
      </div>
  </div>
    )
}
  