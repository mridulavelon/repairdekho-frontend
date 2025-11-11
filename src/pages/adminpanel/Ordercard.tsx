import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Ordercard({ order,onEdit,onDelete }:any) {
    return (
        <div className="bg-white shadow rounded-md p-4 mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 overflow-hidden rounded">
            <img src={order?.modelimagelink} alt="Model" className="w-full h-full object-contain" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-blue-500">{order?.brand} - {order?.model}</h3>
            <p className="text-sm text-gray-500"><strong>Order ID:</strong> {order?.orderid}</p>
            <p className="text-sm text-gray-500"><strong>Price:</strong> ₹{order?.price}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm"><strong>Order ID:</strong> {order?.orderid}</p>
          <p className="text-sm"><strong>Customer Name:</strong> {order?.userdetails?.firstname} {order?.userdetails?.lastname}</p>
          <p className="text-sm"><strong>Email:</strong> {order?.userdetails?.email}</p>
          <p className="text-sm"><strong>Address:</strong> {order?.shippingaddress?.housenumber}, {order?.shippingaddress?.apartmentno}, {order?.shippingaddress?.town}, {order?.shippingaddress?.state}, {order?.shippingaddress?.pincode}</p>
          <p className="text-sm"><strong>Order Date:</strong> {new Date(order?.orderdate)?.toLocaleDateString()}</p>
          <p className="text-sm"><strong>Service Type:</strong> {order?.servicetype}</p>
          <p className="text-sm"><strong>Coupon Applied:</strong> {order?.couponapplied}</p>
          <p className="text-sm font-bold text-gray-800">Services to be done:</p>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {order?.display && <li className="text-sm font-bold">Display ({order?.display?.type}): ₹{order?.display?.price}</li>}
            {order?.touch && <li className="text-sm font-bold">Battery: ₹{order?.touch}</li>}
            {order?.battery && <li className="text-sm font-bold">Battery: ₹{order?.battery}</li>}
            {order?.charging && <li className="text-sm font-bold">Charging: ₹{order?.charging}</li>}
            {order?.backpanel && <li className="text-sm font-bold">Back Panel: ₹{order?.backpanel}</li>}
            {order?.tempered && <li className="text-sm font-bold">Tempered: ₹{order?.tempered}</li>}
            {order?.speaker && <li className="text-sm font-bold">Speaker: ₹{order?.speaker}</li>}
            {order?.receiver && <li className="text-sm font-bold">Receiver: ₹{order?.receiver}</li>}
            {order?.glass && <li className="text-sm font-bold">Glass: ₹{order?.glass}</li>}
            {order?.others && order?.others?.issues?.map((issue:any) => (
              <li key={issue?.id} className="text-sm font-bold">{issue?.label}: ₹{order?.others?.price}</li>
            ))}
          </ul>
          <p className="text-sm"><strong>Total Price:</strong> ₹{order?.total}</p>
          <p className="text-sm font-bold"><strong>Status:</strong> {order?.orderstatus}</p>
        </div>
        <div className="mt-4 flex space-x-4">
          <button  className="flex-grow flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => onEdit("order",order)}>
            <FontAwesomeIcon icon={faEdit} className="mr-2" />
            Edit
          </button>
          <button className="flex-grow flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"  onClick={() => onDelete(order?._id)}>
            <FontAwesomeIcon icon={faTrash} className="mr-2"/>
            Delete
          </button>
        </div>
      </div>
    )
}
  