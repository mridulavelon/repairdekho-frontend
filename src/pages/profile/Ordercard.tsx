export default function Ordercard({ order }:any) {
    return (
        <div className="bg-white shadow rounded-md p-4 mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 overflow-hidden rounded">
            <img src={order?.modelimagelink} alt="Model" className="w-full h-full object-contain" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-blue-500">{order?.brand} - {order?.model}</h3>
            <p className="text-sm text-gray-500">Order ID: {order?.orderid}</p>
            <p className="text-sm text-gray-500">Price: ${order?.price}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm"><strong>Customer:</strong> {order?.userdetails?.firstname} {order?.userdetails?.lastname}</p>
          <p className="text-sm"><strong>Address:</strong> {order?.shippingaddress.housenumber}, {order?.shippingaddress?.apartmentno}, {order?.shippingaddress?.town}, {order?.shippingaddress?.state}, {order?.shippingaddress?.pincode}</p>
          <p className="text-sm"><strong>Order Date:</strong> {new Date(order?.orderdate)?.toLocaleDateString()}</p>
          <p className="text-sm"><strong>Service Type:</strong> {order?.servicetype}</p>
          <p className="text-sm font-bold"><strong>Status:</strong> {order?.orderstatus}</p>
        </div>
      </div>
    )
  }
  