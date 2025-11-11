import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Offercard({ offer,onEdit,onDelete }:any) {
    return (
        <div className="bg-white shadow rounded-md p-4 mb-4">
      <div className="flex flex-col items-center mb-4">
        <div className="w-32 h-32 overflow-hidden rounded-lg bg-gray-200 flex items-center justify-center">
          <img src={offer?.imagelink} alt={offer?.label} className="object-contain w-full h-full" />
        </div>
        <h3 className="text-lg font-bold text-blue-500 mt-2">{offer?.label}</h3>
        <p className="text-xl font-semibold text-red-500 mt-1">{offer?.discountpercent}% Off</p>
      </div>
      <p className="text-sm text-gray-500 text-center">{offer?.infotext}</p>
      <div className="mt-4 flex flex-col space-y-2">
        <button
          onClick={() => onEdit("editoffer",offer)}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faEdit} className="mr-2" />
          Edit
        </button>
        <button
          onClick={() => onDelete(offer?._id)}
          className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faTrash} className="mr-2" />
          Delete
        </button>
      </div>
    </div>
    )
}
  