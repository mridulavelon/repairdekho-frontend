import { useFormik } from "formik";
import * as Yup from "yup";

export default function Selectdeviceandbrand({ brands,submitModel }:any) {
    const schema = Yup.object().shape({
        brand: Yup.string().required("Brand is required").min(2),
        type: Yup.string().required("Device Type is required").min(4)
      });

    const formik = useFormik({
        initialValues: {
           brand: "",
           type:""
        },
        validationSchema: schema,
        onSubmit: async ({ brand,type }) => {
          const modelPayload = {
            brand:brand,
            type:type         
        } 
        await submitModel(modelPayload)
        resetForm();
        },
     });
     const { errors, touched, values, handleChange, handleSubmit, resetForm } = formik;
    return (
        <form  className="bg-white p-4 rounded shadow-md w-full" onSubmit={handleSubmit} method="POST">
        <h2 className="text-lg font-bold mb-4">Please select your brand and device type</h2>
        <div className="mb-4">
          <label htmlFor="brand" className={`block text-sm font-medium  ${errors.brand && touched.brand ? `text-red-700` : 'text-gray-700'} mb-2`}>
            Brand
          </label>
          <select
            name="brand"
            value={values.brand}
            onChange={handleChange}
            id="brand"
            className={`block w-full border  ${errors.brand && touched.brand ? `border-red-600` : 'border-gray-300'} rounded-md shadow-sm p-2`}
          > 
             <option value="">Select a brand</option>
             {brands?.map((brand:any) => {
                return (
                    <option value={brand.value}>{brand.name}</option>
                )
             })}
          </select>
          {errors.brand && touched.brand && <div id="formErrorName1"><small className="text-red-600">{errors.brand}</small></div>}
        </div>
        <div className="mb-4">
          <label htmlFor="deviceType" className={`block text-sm font-medium  ${errors.type && touched.type ? `text-red-700` : 'text-gray-700'} mb-2`}>
            Device Type
          </label>
          <select
             name="type"
             value={values.type}
             onChange={handleChange}
             id="type"
             className={`block w-full border ${errors.type && touched.type ? `border-red-600` : 'border-gray-300'} rounded-md shadow-sm p-2`}
          >
            <option value="">Select a device type</option>
            <option value="mobile">Mobile</option>
            <option value="watch">Watch</option>
            <option value="tablet">Tablet</option>
          </select>
          {errors.type && touched.type && <div id="formErrorName1"><small className="text-red-600">{errors.type}</small></div>}
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    )
}
  