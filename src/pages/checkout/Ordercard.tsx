export default function Ordercard({ order }:any) {
    return (
        <div className="border p-4 rounded-lg mb-4 flex flex-col md:flex-row items-center bg-white shadow-lg">
        <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200">
          <img
            src={order?.modelimagelink}
            alt={`${order?.brand} model`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-grow ml-4">
          <h4 className="font-bold text-lg text-blue-600">{order?.brand} - {order?.model}</h4>
          <p className="text-sm text-gray-600 font-bold"><span className="font-bold">Order ID</span>: {order?.orderid}</p>
          <p className="text-sm text-gray-600"><span className="font-bold">Service Type</span>: {order?.servicetype}</p>
          <p className="text-sm text-gray-600"><span className="font-bold">Coupon Applied</span>: {order?.couponapplied}</p>
          <p className="text-sm font-bold mt-2 text-gray-800">Services to be done:</p>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {order?.display && <li><span className="font-bold">Display ({order?.display?.type})</span>: ₹{order?.display?.price}</li>}
            {order?.touch && <li><span className="font-bold">Battery</span>: ₹{order?.touch}</li>}
            {order?.battery && <li><span className="font-bold">Battery</span>: ₹{order?.battery}</li>}
            {order?.charging && <li><span className="font-bold">Charging</span>: ₹{order?.charging}</li>}
            {order?.backpanel && <li><span className="font-bold">Back Panel</span>: ₹{order?.backpanel}</li>}
            {order?.tempered && <li><span className="font-bold">Tempered</span>: ₹{order?.tempered}</li>}
            {order?.speaker && <li><span className="font-bold">Speaker</span>: ₹{order?.speaker}</li>}
            {order?.receiver && <li><span className="font-bold">Receiver</span>: ₹{order?.receiver}</li>}
            {order?.glass && <li><span className="font-bold">Glass</span>: ₹{order?.glass}</li>}
            {order?.others && order?.others?.issues?.map((issue:any) => (
              <li key={issue?.id}>{issue?.label}: ₹{order?.others?.price}</li>
            ))}
          </ul>
          <p className="text-sm text-gray-600 font-bold">Total Price: ₹{order?.total}</p>
        </div>
      </div>
      );
};
    