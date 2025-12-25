import { useState } from "react";

export default function OtherServices({
  selectOtherIssueHandler,
  selectOtherService,
  queryChangeHandler,
  showOthersHandler,
  selectedOtherIssues,
}: any) {
  const [selectedOtherServices, setSelectedOtherServices] = useState([]);

  const otherIssuesArray = [
    { id: 1, label: "IC Issue" },
    { id: 2, label: "Motherboard Issues" },
    { id: 3, label: "Dead Phone" },
    { id: 4, label: "Camera Issues" },
    { id: 5, label: "Volume Key FPC" },
    { id: 6, label: "Power key FPC" },
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md md:max-w-lg p-6 relative overflow-hidden">
        {/* Close button */}
        <button
          onClick={showOthersHandler}
          className="absolute top-4 right-4 text-gray-400 hover:text-pink-600 transition-colors duration-200 focus:outline-none"
          aria-label="Close"
        >
          <span className="text-2xl font-bold">×</span>
        </button>

        {/* Header */}
        <h5 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-6 text-center relative">
          Select Your Service
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-20 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full"></span>
        </h5>

        {/* Service Grid - Smaller cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {otherIssuesArray.map((service: any) => (
            <div
              key={service.id}
              onClick={() => selectOtherIssueHandler(service)}
              className={`group relative p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer text-center
                ${
                  selectedOtherIssues?.find((item: any) => item?.id === service?.id)
                    ? "border-pink-500 bg-gradient-to-br from-pink-50 to-white shadow-md scale-[1.02] text-pink-700"
                    : "border-gray-200 hover:border-pink-400 hover:shadow-lg hover:scale-[1.02] bg-white hover:bg-gradient-to-br hover:from-pink-50 hover:to-white"
                }
              `}
            >
              <div className="flex flex-col items-center gap-1.5">
                <span className="text-base md:text-lg font-bold group-hover:text-pink-700 transition-colors">
                  {service.label}
                </span>
                <span className="bg-pink-100 text-pink-700 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">
                  6 Months
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Query Details */}
        <div className="mt-4">
          <label className="block mb-2 text-lg font-semibold text-gray-800">
            Details of Query:
          </label>
          <textarea
            onChange={queryChangeHandler}
            placeholder="Enter details..."
            className="w-full h-28 p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all resize-none shadow-sm text-gray-700"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={selectOtherService}
          className="w-full mt-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 px-6 rounded-xl hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-md hover:shadow-lg font-semibold text-lg active:scale-95"
        >
          Submit
        </button>

        {/* Express Service */}
        <div className="mt-4 flex items-center justify-center gap-2">
          <input
            type="checkbox"
            id="express-service"
            className="w-5 h-5 accent-pink-500 cursor-pointer"
          />
          <label
            htmlFor="express-service"
            className="text-gray-700 font-medium cursor-pointer"
          >
            Express Service <span className="font-semibold">₹100</span>
          </label>
        </div>
      </div>
    </div>
  );
}