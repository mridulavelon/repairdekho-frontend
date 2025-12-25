import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faHome,
  faCity,
  faMapPin,
  faPlus,
  faXmark,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

export default function Addresses() {
  const { data: session }: any = useSession();
  const userid = session?.user?.account?.userdetail?.id;

  const [addresses, setAddresses] = useState<any[]>([]);
  const [selectedAddressId, setSelectedAddressId] = useState<number | null>(
    null
  );
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  });

  /* =======================
     FETCH ADDRESS
  ======================== */
  const getAddressDetails = async () => {
    if (!userid) return;

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/accountdetails/getdetails`,
        { userid }
      );

      const shipping = response.data?.shippingaddress;
      if (!shipping) {
        setAddresses([]);
        return;
      }

      const parts = shipping.split(";");
      const addressObj: any = {};

      parts.forEach((item: string) => {
        const [key, value] = item.split("=");
        addressObj[key] = value || "";
      });

      const mappedAddress = {
        id: 1,
        name: "Home",
        street: addressObj.housenumber || "",
        apartment: addressObj.apartmentno || "",
        city: addressObj.town || "",
        state: addressObj.state || "",
        pincode: addressObj.pincode || "",
      };

      setAddresses([mappedAddress]);
      setSelectedAddressId(1);
    } catch {
      toast.error("Failed to fetch address", {
        theme: "colored",
        position: "top-center",
      });
    }
  };

  /* =======================
     SAVE / UPDATE ADDRESS
  ======================== */
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const payload = {
        userid,
        shippingaddress: `housenumber=${form.street};apartmentno=${form.name};town=${form.city};state=${form.state};pincode=${form.pincode}`,
      };

      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/accountdetails/update`,
        payload
      );

      toast.success(
        isEditing ? "Address updated" : "Address added",
        { theme: "colored", position: "top-center" }
      );

      setShowModal(false);
      setIsEditing(false);
      setForm({
        name: "",
        street: "",
        city: "",
        state: "",
        pincode: "",
      });

      getAddressDetails();
    } catch {
      toast.error("Failed to save address", {
        theme: "colored",
        position: "top-center",
      });
    }
  };

  const handleEdit = (address: any) => {
    setForm({
      name: address.apartment,
      street: address.street,
      city: address.city,
      state: address.state,
      pincode: address.pincode,
    });
    setIsEditing(true);
    setShowModal(true);
  };

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getAddressDetails();
  }, [userid]);

  return (
    <>
      <div className="min-w-0 w-full overflow-x-hidden">
        {/* Page */}
        <div className="min-h-screen bg-white p-4 sm:p-6 flex justify-center w-full">
          <div className="w-full max-w-5xl">
            <div className="rounded-3xl bg-white/70 shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 w-full">
              {/* Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 mb-8 sm:mb-10 w-full">
                <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xl sm:text-2xl flex-shrink-0">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className="min-w-0 flex-1">
                  <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 break-words">
                    My Addresses
                  </h1>
                  <p className="text-sm sm:text-base text-slate-600 break-words">
                    Select or update your delivery address
                  </p>
                </div>
              </div>

              {/* Address Card */}
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full">
                {addresses.map((address) => (
                  <div
                    key={address.id}
                    className={`p-4 sm:p-6 rounded-2xl border shadow-md w-full ${
                      selectedAddressId === address.id
                        ? "border-pink-500"
                        : "border-slate-200"
                    }`}
                  >
                    <div className="flex justify-between items-start sm:items-center mb-4 gap-2 w-full">
                      <label className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                        <input
                          type="radio"
                          checked={selectedAddressId === address.id}
                          onChange={() => setSelectedAddressId(address.id)}
                          className="accent-pink-500 flex-shrink-0"
                        />
                        <h2 className="text-lg sm:text-xl font-semibold break-words">
                          <FontAwesomeIcon icon={faHome} className="mr-2" /> 
                          {address.name}
                        </h2>
                      </label>

                      <button
                        onClick={() => handleEdit(address)}
                        className="text-pink-600 hover:text-pink-800 text-sm sm:text-base flex-shrink-0"
                      >
                        <FontAwesomeIcon icon={faPen} /> Edit
                      </button>
                    </div>

                    <p className="text-sm sm:text-base break-words">
                      {address.street}, {address.apartment}
                    </p>
                    <p className="mt-2 flex gap-2 text-sm sm:text-base items-start">
                      <FontAwesomeIcon icon={faCity} className="mt-1 flex-shrink-0" />
                      <span className="break-words">{address.city}, {address.state}</span>
                    </p>
                    <p className="mt-1 flex gap-2 text-sm sm:text-base items-start">
                      <FontAwesomeIcon icon={faMapPin} className="mt-1 flex-shrink-0" />
                      <span className="break-words">{address.pincode}</span>
                    </p>
                  </div>
                ))}
              </div>

              {/* Add Button */}
              <div className="flex justify-end mt-8 sm:mt-10 w-full">
                <button
                  onClick={() => {
                    setShowModal(true);
                    setIsEditing(false);
                  }}
                  className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg text-sm sm:text-base font-medium hover:shadow-xl transition-shadow break-words"
                >
                  <FontAwesomeIcon icon={faPlus} /> Add New Address
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl w-full max-w-md p-4 sm:p-6 shadow-xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg sm:text-xl font-bold break-words">
                  {isEditing ? "Edit Address" : "Add Address"}
                </h2>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-xl sm:text-2xl hover:text-gray-700 flex-shrink-0 ml-2"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 w-full">
                {[
                  { key: "name", label: "Apartment / Flat" },
                  { key: "street", label: "House Number / Street" },
                  { key: "city", label: "City" },
                  { key: "state", label: "State" },
                  { key: "pincode", label: "Pincode" },
                ].map((f) => (
                  <div key={f.key} className="w-full">
                    <label className="text-xs sm:text-sm text-slate-600 break-words">
                      {f.label}
                    </label>
                    <input
                      name={f.key}
                      value={(form as any)[f.key]}
                      onChange={handleChange}
                      required
                      className="w-full mt-1 px-3 sm:px-4 py-2 rounded-lg border focus:ring-2 focus:ring-pink-500 text-sm sm:text-base"
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  className="w-full py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold text-sm sm:text-base hover:shadow-lg transition-shadow"
                >
                  {isEditing ? "Update Address" : "Save Address"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        body {
          overflow-x: hidden;
          max-width: 100vw;
        }
        
        html {
          overflow-x: hidden;
          max-width: 100vw;
        }

        * {
          box-sizing: border-box;
        }

        img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </>
  );
}