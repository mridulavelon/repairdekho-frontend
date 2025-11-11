import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Modelcard({ model,onEdit,onDelete }:any) {
    return (
        <div className="bg-white shadow rounded-md p-4 mb-4">
      <div className="flex flex-col items-center mb-4">
        <img src={model?.modelimagelink} alt={model?.modelname} className="w-32 h-32 object-cover mb-2" />
        <h3 className="text-lg font-bold text-blue-500">{model?.modelname}</h3>
        <p className="text-sm text-gray-500">Brand: {model?.brand}</p>
        <p className="text-sm text-gray-500">Type: {model?.type}</p>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="flex justify-between">
          <span className="text-sm">Touch:</span>
          <span className="text-sm">₹{model?.touch}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm">Battery:</span>
          <span className="text-sm">₹{model?.battery}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm">Charging:</span>
          <span className="text-sm">₹{model?.charging}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm">Back Panel:</span>
          <span className="text-sm">₹{model?.backpanel}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm">Tempered Glass:</span>
          <span className="text-sm">₹{model?.tempered}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm">Speaker:</span>
          <span className="text-sm">₹{model?.speaker}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm">Receiver:</span>
          <span className="text-sm">₹{model?.receiver}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm">Glass:</span>
          <span className="text-sm">₹{model?.glass}</span>
        </div>
        {model?.display?.local && 
          <div className="flex justify-between">
          <span className="text-sm">Display Local:</span>
          <span className="text-sm">₹{model?.display?.local}</span>
        </div>
        }
        {model?.display?.branded &&
          <div className="flex justify-between">
          <span className="text-sm">Display Branded:</span>
          <span className="text-sm">₹{model?.display?.branded}</span>
        </div>
        }
        {model?.display?.oled && 
           <div className="flex justify-between">
           <span className="text-sm">Display OLED:</span>
           <span className="text-sm">₹{model?.display?.oled}</span>
         </div>
        }
      </div>
      <div className="mt-4 flex flex-col space-y-2">
        <button
          onClick={() => onEdit("editmodel",model)}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faEdit} className="mr-2" />
          Edit
        </button>
        <button
          onClick={() => onDelete(model?._id)}
          className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faTrash} className="mr-2" />
          Delete
        </button>
      </div>
    </div>
    )
}
  