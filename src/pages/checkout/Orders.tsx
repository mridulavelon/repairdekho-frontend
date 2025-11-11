import Ordercard from "./Ordercard";

export default function Orders({ orders }:any) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-xl font-bold mb-4">Order Summary</h3>
          {orders?.map((order:any) => (
            <Ordercard key={order?.id} order={order} />
          ))}
        </div>
      );
}
  