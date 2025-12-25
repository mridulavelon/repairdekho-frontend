import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faCalendarDays,
  faIndianRupeeSign,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

export default function Orders() {
  const { data: session }: any = useSession();
  const userid = session?.user?.account?.userdetail?.id;

  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  /* =======================
     FETCH ORDERS
  ======================== */
  const getOrders = async () => {
    if (!userid) return;

    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/orders/getuserorders`,
        { userid }
      );

      if (response.data?.orders) {
        setOrders(response.data.orders);
      } else {
        setOrders([]);
      }
    } catch (error) {
      toast.error("Failed to fetch orders", {
        theme: "colored",
        position: "top-center",
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    getOrders();
  }, [userid]);

  /* =======================
     DATE FORMAT SAFE
  ======================== */
  const formatDate = (dateValue: string) => {
    if (!dateValue) return "N/A";
    const date = new Date(dateValue);
    return isNaN(date.getTime()) ? "N/A" : date.toDateString();
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center p-6">
      <div className="w-full max-w-5xl">
        <div className="rounded-3xl bg-white shadow-xl border">
          <div className="p-10">
            {/* Header */}
            <div className="flex items-center gap-5 mb-10">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-2xl">
                <FontAwesomeIcon icon={faBoxOpen} />
              </div>
              <div>
                <h1 className="text-3xl font-bold">My Orders</h1>
                <p className="text-slate-500">
                  View and track your purchases
                </p>
              </div>
            </div>

            {/* Loading */}
            {loading && (
              <p className="text-center text-slate-500">
                Loading orders...
              </p>
            )}

            {/* Orders */}
            {!loading && orders.length > 0 && (
              <div className="space-y-6">
                {orders.map((order: any) => (
                  <div
                    key={order._id}
                    className="p-8 rounded-2xl bg-slate-50 border shadow-sm"
                  >
                    {/* Order Header */}
                    <div className="flex flex-col lg:flex-row lg:justify-between gap-6 mb-6">
                      <div>
                        <p className="text-lg font-semibold">
                          Order ID: {order.orderid}
                        </p>
                        <div className="flex items-center gap-2 text-slate-500 mt-1">
                          <FontAwesomeIcon icon={faCalendarDays} />
                          {formatDate(order.orderdate)}
                        </div>
                      </div>

                      {/* Status */}
                      <div className="px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 bg-red-100 text-red-600 w-fit">
                        <FontAwesomeIcon icon={faTruck} />
                        {order.orderstatus}
                      </div>
                    </div>

                    {/* Product */}
                    <div className="flex justify-between items-center bg-white p-4 rounded-xl border">
                      <div>
                        <p className="font-semibold capitalize">
                          {order.brand}
                        </p>
                        <p className="text-slate-500">
                          {order.model}
                        </p>
                      </div>

                      <div className="flex items-center gap-1 font-semibold text-indigo-600">
                        <FontAwesomeIcon icon={faIndianRupeeSign} />
                        {order.price}
                      </div>
                    </div>

                    {/* TOTAL */}
                    <div className="mt-6 pt-4 border-t flex justify-end text-2xl font-bold text-indigo-700">
                      Total:&nbsp;
                      {/* <FontAwesomeIcon icon={faIndianRupeeSign} /> */}
                      {order.total}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Empty */}
            {!loading && orders.length === 0 && (
              <p className="text-center text-slate-500 mt-12">
                You have no orders yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
