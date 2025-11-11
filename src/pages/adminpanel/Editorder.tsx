import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Editorder({onClose,onSubmit,editdetails} :any) {
    const schema = Yup.object().shape({
        status: Yup.string().required("Status is required").min(2),
      });

    const formik = useFormik({
        initialValues: {
           status: editdetails?.orderstatus
        },
        validationSchema: schema,
        onSubmit: async ({ status }) => {
        const payloadData = {
            "id":editdetails?._id,
            "email":editdetails?.userdetails?.email,
            "orderstatus":status
        }
        await onSubmit("order",payloadData);
        onClose();
        resetForm();
        },
     });
     const { errors, touched, values, handleChange, handleSubmit, resetForm } = formik;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-lg">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Edit Order Status</h2>
                <button className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
            <form  onSubmit={handleSubmit} method="POST">
                <div className="mb-4">
                  <label className={`block ${errors.status && touched.status ? "text-red-700" : "text-gray-700"} font-medium mb-1`}>
                   Order Status
                </label>
                    <select
                        name="status"
                        value={values.status}
                        onChange={handleChange}
                        id="status"
                        className={`mt-1 block w-full px-3 py-2 border ${errors.status && touched.status ? "border-red-500" : "border-gray-500"} rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
                    > 
                       <option value="">Select order status</option>
                       <option value="Confirmed">Confirmed</option>
                       <option value="Inprogress">Inprogress</option>
                       <option value="Completed">Completed</option>
                       </select>
                       {errors.status && touched.status && typeof errors.status === "string" && <div id="formErrorName1"><small className="text-red-700">{errors.status}</small></div>}
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                    Submit
                </button>
            </form>
        </div>
    </div>
    )
}
  