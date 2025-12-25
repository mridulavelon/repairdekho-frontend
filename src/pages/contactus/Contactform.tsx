import {
  faEnvelope,
  faMessage,
  faPhone,
  faRectangleList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { PuffLoader } from "react-spinners";
import { toast } from "react-toastify";
import * as Yup from "yup";

export default function Contactform() {
  const [showLoading, setShowLoading] = useState(false);

  const schema = Yup.object({
    fullname: Yup.string().required().min(4),
    mobileno: Yup.string().required().min(10),
    email: Yup.string().required(),
    interestedin: Yup.string().required(),
    query: Yup.string().required().min(5),
  });

  const formik = useFormik({
    initialValues: {
      fullname: "",
      mobileno: "",
      email: "",
      interestedin: "",
      query: "",
    },
    validationSchema: schema,
    onSubmit: async (values, { resetForm }) => {
      setShowLoading(true);
      try {
        await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/contact/createcontactquery`,
          { ...values, date: new Date() }
        );
        toast.success("Query submitted successfully");
        resetForm();
      } catch {
        toast.error("Something went wrong");
      }
      setShowLoading(false);
    },
  });

  const inputClass =
    "w-full p-4 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {["fullname", "mobileno"].map((field, i) => (
          <div key={i} className="relative">
            <FontAwesomeIcon
              icon={field === "fullname" ? faUser : faPhone}
              className="absolute left-3 top-4 text-gray-400"
            />
            <input
              name={field}
              value={formik.values[field as keyof typeof formik.values]}
              onChange={formik.handleChange}
              placeholder={field === "fullname" ? "Full Name*" : "Mobile Number*"}
              className={inputClass}
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="relative">
          <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-4 text-gray-400" />
          <input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Email*"
            className={inputClass}
          />
        </div>

        <div className="relative">
          <FontAwesomeIcon icon={faRectangleList} className="absolute left-3 top-4 text-gray-400" />
          <select
            name="interestedin"
            value={formik.values.interestedin}
            onChange={formik.handleChange}
            className={inputClass}
          >
            <option value="">Select Service</option>
            <option>Mobile</option>
            <option>Laptop</option>
            <option>Tablet</option>
            <option>Watch</option>
          </select>
        </div>
      </div>

      <div className="relative">
        <FontAwesomeIcon icon={faMessage} className="absolute left-3 top-4 text-gray-400" />
        <textarea
          name="query"
          value={formik.values.query}
          onChange={formik.handleChange}
          placeholder="Your Query*"
          className={`${inputClass} h-32`}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
      >
        {showLoading ? <PuffLoader size={24} color="white" /> : "Submit"}
      </button>
    </form>
  );
}
