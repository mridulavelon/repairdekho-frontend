import { faCircleInfo } from "@fortawesome/free-solid-svg-icons/faCircleInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function DisplayPrices({
  displayPrices,
  selectDisplayService,
  setShowDisplayPrices,
}: any) {
  const [selectedDisplay, setSelectedDisplay] = useState<number | null>(null);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md md:max-w-lg lg:max-w-xl p-6 md:p-8 relative overflow-hidden">
        {/* Close button */}
        <button
          onClick={() => setShowDisplayPrices(false)}
          className="absolute top-5 right-5 text-gray-400 hover:text-pink-600 transition-colors duration-200 focus:outline-none"
          aria-label="Close"
        >
          <span className="text-3xl font-bold">×</span>
        </button>

        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-8 text-center relative">
          Choose Your Display Option
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full"></span>
        </h2>

        {/* Price Cards */}
        <div className="space-y-5">
          {displayPrices?.map((element: any) => (
            <div
              key={element.id}
              onClick={() => {
                setSelectedDisplay(element.id);
                selectDisplayService(element);
              }}
              className={`group relative p-5 md:p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer overflow-hidden
                ${
                  selectedDisplay === element.id
                    ? "border-pink-500 bg-gradient-to-br from-pink-50 to-white shadow-xl scale-[1.03]"
                    : "border-gray-200 hover:border-pink-400 hover:shadow-2xl hover:scale-[1.03] bg-white hover:bg-gradient-to-br hover:from-pink-50 hover:to-white"
                }
              `}
            >
              {/* Label & Price */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-pink-700 transition-colors">
                  {element?.displayLabel}
                </h3>
                <span className="text-2xl md:text-3xl font-extrabold text-pink-600">
                  ₹{element?.price}
                </span>
              </div>

              {/* Description with Info Icon */}
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  className="mt-1 text-pink-500 text-xl flex-shrink-0"
                />
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {element?.displayText}
                </p>
              </div>

              {/* Selected Badge */}
              {selectedDisplay === element.id && (
                <div className="absolute top-0 right-0 mt-2 mr-2 bg-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-none shadow-md">
                  SELECTED
                </div>
              )}

              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-pink-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}