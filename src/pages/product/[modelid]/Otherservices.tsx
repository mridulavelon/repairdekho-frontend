import { useState } from "react"

export default function Otherservices({selectOtherIssueHandler,selectOtherService,queryChangeHandler,showOthersHandler,selectedOtherIssues}:any) {
    const [selectedOtherServices,setselectedOtherServices] = useState([])
    const otherIssuesArray = [
        {
           id:1,
           label:"IC Issue",
        },
        {
           id:2,
           label:"Motherboard Issues",
        },
        {
           id:3,
           label:"Dead Phone",
        },
        {
           id:4,
           label:"Camera Issues",
        },
        {
           id:5,
           label:"Volume Key FPC",
        },
        {
           id:6,
           label:"Power key FPC",
        },
     ]
  
    return (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 relative w-11/12 sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3">
          <button
            onClick={showOthersHandler}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
          <h5 className="text-xl font-semibold mb-4 text-center">Select Your Service</h5>
          <div className="grid grid-cols-2 gap-4">
            {otherIssuesArray?.map((service:any) => (
              <div
                key={service.id}
                className={`cursor-pointer p-4 border rounded-lg text-center transition-colors ${
                  selectedOtherIssues?.find((item:any) => item?.id === service?.id) ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => selectOtherIssueHandler(service)}
              >
                {service?.label}
              </div>
            ))}
          </div>
          <div className="mt-4">
            <label className="block mb-2">Details of Query:</label>
            <textarea
              onChange={queryChangeHandler}
              placeholder="Enter details..."
              className="w-full mb-2 p-2 border rounded"
            />
            <button 
              onClick={selectOtherService}
              className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
              Submit
            </button>
          </div>
        </div>
      </div>
    )
  }
  
