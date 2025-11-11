import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Usercard({user,onDelete}:any) {
     const addressParts = user?.shippingaddress ? user?.shippingaddress?.split(';').reduce((acc:any, part:any) => {
       const [key, value] = part.split('=');
       acc[key.trim()] = value.trim();
       return acc;
     }, {}) : {};
    return (
        <div className="bg-white shadow rounded-md p-4 mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0 w-16 h-16 overflow-hidden rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-3xl font-bold text-gray-700">
              {user?.firstname?.charAt(0).toUpperCase()}
              {user?.lastname?.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-blue-500">
              {user?.firstname} {user?.lastname}
            </h3>
            <p className="text-sm text-gray-500">Username: {user?.username ?? ''}</p>
            <p className="text-sm text-gray-500">Email: {user?.email ?? ''}</p>
            <p className="text-sm text-gray-500">Mobile: {user?.mobileno ?? ''}</p>
          </div>
        </div>
        {user?.shippingaddress && (
          <div className="mt-4">
            <p className="text-sm font-bold text-gray-700">Shipping Address:</p>
            <p className="text-sm text-gray-500">House Number: {addressParts?.housenumber}</p>
            <p className="text-sm text-gray-500">Apartment Number: {addressParts?.apartmentno}</p>
            <p className="text-sm text-gray-500">Town: {addressParts?.town}</p>
            <p className="text-sm text-gray-500">State: {addressParts?.state}</p>
            <p className="text-sm text-gray-500">Pincode: {addressParts?.pincode}</p>
          </div>
        )}
        <div className="mt-4">
          <button  className="w-full flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700" onClick={() => onDelete(user?._id)}>
            <FontAwesomeIcon icon={faTrash} className="mr-2" />
            Delete
          </button>
        </div>
      </div>
    )
}
  