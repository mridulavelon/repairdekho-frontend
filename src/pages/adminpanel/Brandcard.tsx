import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Brandcard({ brand,onEdit,onDelete }:any) {
    return (
        <div className="bg-white shadow rounded-md p-4 mb-4">
      <div className="flex flex-col items-center mb-4">
        <div className="w-24 h-24 overflow-hidden rounded-full flex items-center justify-center bg-gray-200">
          <img src={brand?.imagelink} alt={brand?.name} className="object-contain w-full h-full" />
        </div>
        <h3 className="text-lg font-bold text-blue-500">{brand?.name}</h3>
      </div>
      <div className="mt-4 flex flex-col space-y-2">
        <button
          onClick={() => onEdit("editbrand",brand)}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faEdit} className="mr-2" />
          Edit
        </button>
        <button
          onClick={() => onDelete(brand?._id)}
          className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faTrash} className="mr-2" />
          Delete
        </button>
      </div>
    </div>
    )
}
  