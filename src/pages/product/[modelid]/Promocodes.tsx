import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Promocodes({ offers,applypromocode,setShowCodes} : any) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-lg">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Available Offers</h2>
                <button  className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={() => setShowCodes(false)}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
            <div>
                {offers?.map((offer:any) => (
                    <div key={offer?._id} className="flex justify-between items-center border-b py-4">
                        <div>
                            <h3 className="text-lg font-medium">{offer?.label}</h3>
                            <p className="text-sm text-gray-600">{offer?.infotext}</p>
                        </div>
                        <button
                            className="px-4 py-2 bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            onClick={() => applypromocode(offer)}
                        >
                            Apply
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}
  