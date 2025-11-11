import { faCircleInfo } from "@fortawesome/free-solid-svg-icons/faCircleInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Displayprices({ displayPrices,selectDisplayService,setShowDisplayPrices }:any) {
    const [selectedDisplay, setSelectedDisplay] = useState(null);

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-11/12 md:w-1/2 p-6 relative">
          <button
            onClick={() => setShowDisplayPrices(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
          <h2 className="text-2xl font-bold mb-4">Select Display Price</h2>
          {displayPrices?.map((element:any) => (
            <div
              key={element.id}
              className={`mb-4 p-4 border rounded-lg cursor-pointer transition-transform transform hover:scale-105 ${
                selectedDisplay === element?.id ? 'bg-orange-500 text-white' : 'bg-white text-gray-700'
              }`}
              onClick={() => selectDisplayService(element)}
            >
              <div className="flex justify-between items-center">
                <span>{element?.displayLabel} : ₹ {element?.price}</span>
              </div>
              <div className="flex items-center mt-2">
                <FontAwesomeIcon icon={faCircleInfo} className="mr-2 text-gray-600" />
                <span className="text-gray-600">{element?.displayText}</span>
              </div>
            </div>
             ))}
               </div>
               </div>
    )
}
  