import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Promocodes({
  offers,
  applypromocode,
  setShowCodes,
}: any) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md md:max-w-lg overflow-hidden relative">
        {/* Header with pink gradient */}
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 px-6 py-5 text-white">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Available Offers</h2>
            <button
              onClick={() => setShowCodes(false)}
              className="text-white hover:text-pink-100 transition-colors focus:outline-none"
              aria-label="Close"
            >
              <FontAwesomeIcon icon={faTimes} className="text-2xl" />
            </button>
          </div>
        </div>

        {/* Offers List */}
        <div className="p-6 space-y-4">
          {offers?.map((offer: any) => (
            <div
              key={offer?._id}
              className="group bg-gradient-to-br from-white to-pink-50 rounded-xl border border-gray-200 hover:border-pink-400 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-pink-600 font-bold text-lg">%</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-pink-700 transition-colors">
                        {offer?.label}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {offer?.infotext}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pink Apply Button */}
                <button
                  onClick={() => applypromocode(offer)}
                  className="px-6 py-2.5 bg-pink-500 text-white font-medium rounded-lg shadow-md hover:bg-pink-600 hover:shadow-lg active:scale-95 transition-all duration-200 whitespace-nowrap"
                >
                  Apply
                </button>
              </div>

              {/* Subtle indicator for TEST50 like in image */}
              {offer?.label?.includes("TEST") && (
                <div className="bg-pink-100 text-pink-800 text-xs font-medium px-4 py-1 text-center">
                  Popular Choice
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t text-center text-sm text-gray-500">
          Use coupon code at checkout
        </div>
      </div>
    </div>
  );
}