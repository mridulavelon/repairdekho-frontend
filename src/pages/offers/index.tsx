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
      <section className="bg-slate-100 py-20 px-4 relative overflow-hidden">
  <div className="container mx-auto relative z-10 text-center mb-16">
    <h1 className="text-4xl font-extrabold mb-4">
      {offers.length > 0 ? "🔥 Hot Coupon Codes & Offers" : "🚫 No Offers Found"}
    </h1>
    <p className="text-lg text-purple-200 max-w-2xl mx-auto">
      Grab your exclusive discounts and save big on your next service.
    </p>
  </div>

  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
    {offers.map((offer: any) => (
      <div
        key={offer._id}
        className="bg-white text-gray-900 rounded-2xl shadow-lg overflow-hidden transform transition hover:-translate-y-2 hover:shadow-2xl"
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={"https://img.freepik.com/free-photo/3d-rendering-abstract-black-white-background_23-2150913835.jpg"}
            alt={offer.label}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2">{offer.label}</h2>
          <p className="text-gray-700">{offer.infotext}</p>
          <button
            onClick={() => handleSelectedOffer(offer.label)}
            className="mt-4 inline-block bg-pink-700 text-white px-4 py-2 rounded-full shadow hover:bg-indigo-700 transition"
          >
            Click to Copy Code
          </button>
        </div>
      </div>
    ))}
  </div>

  {/* Optional: floating decorative blobs for visual effect */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400 opacity-20 rounded-full mix-blend-overlay blur-3xl animate-pulse"></div>
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-400 opacity-10 rounded-full mix-blend-overlay blur-3xl animate-pulse"></div>
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