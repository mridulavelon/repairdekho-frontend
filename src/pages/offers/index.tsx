import Metaseo from "@/components/Metaseo";
import useStore from "@/lib/store";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Offers({data}:any) {
    const { updateLoading } = useStore();
    const [offers,setOffers] = useState([])
    useEffect(() => {
      updateLoading(false);
      if(data?.error){
        setOffers([])
     }else{
        setOffers(data?.response)
     }
    },[]);

    const handleSelectedOffer = async(offerlabel:string) =>{
      await navigator.clipboard.writeText(offerlabel);
      toast.success("Offer copied",{
        theme:"colored",
        position: "top-center"
      })
    }
    return (
      <>
    <Metaseo
     title="Offers"
     description="Select from offers applicable on the selected services available on mobile and also on specific brands"
     keywords="Available Offers"
     metadataBase=""
     urlslug={''}
    />
    <section className="bg-slate-50 py-20 px-4">

  {/* HERO SECTION */}
  <div className="max-w-4xl mx-auto text-center mb-16">
    <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">
      {offers.length > 0 ? "Hot Coupon Codes & Offers" : "No Offers Found"}
    </h1>

    <p className="text-lg text-gray-600 max-w-xl mx-auto">
      Unlock exclusive discounts and save more on your next device repair.  
      Our offers are updated regularly — don’t miss out!
    </p>

    {/* Hero CTA */}
    <a
      href="/repairmydevice"
      className="mt-6 inline-block bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
    >
      Book a Repair Now
    </a>
  </div>


  {/* OFFER CARDS */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {offers.map((offer: any) => (
      <div
        key={offer._id}
        className="bg-white rounded-2xl border shadow-sm hover:shadow-xl transition overflow-hidden"
      >
        {/* Fallback Image Section */}
        <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
          <img
            src={offer.image || "/images/no-preview.jpg"}
            alt={offer.label}
            className="w-full h-full object-cover"
                onError={(e) => {
          e.currentTarget.src = "/images/no-preview.jpg";
      }}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{offer.label}</h2>
          <p className="text-gray-700 text-sm">{offer.infotext}</p>

          <button
            onClick={() => handleSelectedOffer(offer.label)}
            className="mt-5 w-full bg-pink-600 text-white py-2 rounded-full hover:bg-indigo-700 transition"
          >
            Copy Code
          </button>
        </div>
      </div>
    ))}
  </div>


  {/* EXTRA CONTENT SECTION */}
  <div className="max-w-5xl mx-auto mt-20 bg-white border rounded-2xl p-10 shadow-sm">
    <h3 className="text-3xl font-bold text-gray-900 text-center mb-6">
      Why Use Our Coupon Codes?
    </h3>

    <p className="text-gray-700 text-center max-w-2xl mx-auto mb-10">
      We believe repairing your device should be affordable and hassle-free.  
      Our exclusive offers help you save while enjoying premium-quality service.
    </p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
        <h4 className="text-lg font-semibold text-indigo-700 mb-2">💰 Instant Savings</h4>
        <p className="text-gray-700 text-sm">
          Apply the coupon at checkout and get instant discounts on your repair service.
        </p>
      </div>

      <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
        <h4 className="text-lg font-semibold text-indigo-700 mb-2">🎁 Exclusive Offers</h4>
        <p className="text-gray-700 text-sm">
          Our coupon codes are unique and not available anywhere else.
        </p>
      </div>

      <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
        <h4 className="text-lg font-semibold text-indigo-700 mb-2">⚡ Easy to Redeem</h4>
        <p className="text-gray-700 text-sm">
          Copy the code, apply on checkout, and enjoy reduced prices instantly.
        </p>
      </div>
    </div>
  </div>

</section>

    </>
    )
}
export async function getStaticProps() {
  const offersCall = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/offers/getoffers`)
  .then((response) => {
    if(response.status === 200){
      return {response:response.data.response}
    }else{
      return {error:"Something unexpected happend please try again later"}
    }
  }).catch((error) => {
     return {error:error.message ? error.message : "Something unexpected happend please try again later"}
  })
  return { props: { data:offersCall } };
}  