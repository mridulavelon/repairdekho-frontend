import { faBuilding, faCity, faEdit, faHome, faMapMarkedAlt, faMapPin } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Editshippingaddress from "./Editshippingaddress";

export default function Addresscard({ address,userid,updateShippingAddress } :any) {
    const [editAddress,setEditAddress] = useState(false);
    return (
      <>
      {editAddress &&
       <Editshippingaddress 
        address = {address}
        onClose = {() => setEditAddress(false)}
        userid={userid}
        updateShippingAddress = {updateShippingAddress}
       />
      }
       <div className="bg-white shadow rounded-md p-4 mb-4 mt-8">
        {address ? (
          <div>
          <h3 className="text-xl font-semibold mb-4">Shipping Address</h3>
          <div className="mb-2 flex items-center">
              <FontAwesomeIcon icon={faHome} className="text-blue-500 mr-2" />
              <p className="text-gray-700">{address.housenumber}</p>
          </div>
          <div className="mb-2 flex items-center">
              <FontAwesomeIcon icon={faBuilding} className="text-blue-500 mr-2" />
              <p className="text-gray-700">{address.apartmentno}</p>
          </div>
          <div className="mb-2 flex items-center">
              <FontAwesomeIcon icon={faCity} className="text-blue-500 mr-2" />
              <p className="text-gray-700">{address.town}</p>
          </div>
          <div className="mb-2 flex items-center">
              <FontAwesomeIcon icon={faMapMarkedAlt} className="text-blue-500 mr-2" />
              <p className="text-gray-700">{address.state}</p>
          </div>
          <div className="mb-2 flex items-center">
              <FontAwesomeIcon icon={faMapPin} className="text-blue-500 mr-2" />
              <p className="text-gray-700">{address.pincode}</p>
          </div>
          <button
               onClick={() => setEditAddress(true)}
                className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md flex items-center"
          >
              <FontAwesomeIcon icon={faEdit} className="mr-2" />
              Edit Address
          </button>
      </div>
        ) : (
          <div>
            <h3 className="text-lg font-medium mb-2">No Address Found</h3>
            <button
              onClick={() => setEditAddress(true)}
              className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md flex items-center"
            > 
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Add Address
            </button>
          </div>
        )}
      </div>
      </>
    )
  }
  