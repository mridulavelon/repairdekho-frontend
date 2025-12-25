import Metaseo from "@/components/Metaseo";
import useStore from "@/lib/store";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Offers({ data }: any) {
  const { updateLoading } = useStore();
  const [offers, setOffers] = useState<any[]>([]);

  useEffect(() => {
    console.log(data);
    updateLoading(false);
    if (data?.error) {
      setOffers([]);
    } else {
      setOffers(data?.response || []);
    }
  }, [data, updateLoading]);

  const handleSelectedOffer = async (offerlabel: string) => {
    await navigator.clipboard.writeText(offerlabel);
    toast.success("Offer copied", {
      theme: "colored",
      position: "top-center",
    });
  };

  return (
    <>
      <Metaseo
        title="Offers"
        description="Select from offers applicable on the selected services available on mobile and also on specific brands"
        keywords="Available Offers"
        metadataBase=""
        urlslug={""}
      />

      <div className="min-w-0 w-full overflow-x-hidden">
        <section className="bg-slate-50 min-h-screen w-full overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            {/* HERO SECTION */}
            <div className="text-center mb-12 lg:mb-16 w-full">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-4 break-words leading-tight px-2">
                {offers.length > 0 ? "Hot Coupon Codes & Offers" : "No Offers Found"}
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto break-words px-4">
                Unlock exclusive discounts and save more on your next device repair.  
                Our offers are updated regularly — don't miss out!
              </p>

              <a
                href="/repairmydevice"
                className="mt-6 sm:mt-8 inline-block bg-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-pink-700 transition text-base sm:text-lg"
              >
                Book a Repair Now
              </a>
            </div>

            {/* OFFER CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
              {offers.map((offer: any) => (
                <div
                  key={offer._id}
                  className="bg-white rounded-2xl border shadow-sm hover:shadow-xl transition overflow-hidden flex flex-col w-full"
                >
                  {/* Image */}
                  <div className="h-40 sm:h-48 bg-gray-100 flex items-center justify-center overflow-hidden w-full">
                    <img
                      src={offer.imagelink}
                      alt={offer.label}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/images/no-preview.jpg";
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 flex flex-col flex-grow w-full min-w-0">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 break-words">
                      {offer.label}
                    </h2>
                    <p className="text-gray-700 text-sm mb-4 sm:mb-6 flex-grow break-words">
                      {offer.infotext}
                    </p>
                    <button
                      onClick={() => handleSelectedOffer(offer.label)}
                      className="w-full bg-pink-600 text-white py-2.5 sm:py-3 rounded-full hover:bg-pink-700 transition text-sm font-medium"
                    >
                      Copy Code
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* WHY USE OUR COUPONS SECTION */}
            {offers.length > 0 && (
              <div className="mt-12 sm:mt-16 lg:mt-24 bg-white border rounded-2xl p-6 sm:p-8 lg:p-12 shadow-sm max-w-5xl mx-auto w-full overflow-hidden">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6 sm:mb-8 break-words px-2">
                  Why Use Our Coupon Codes?
                </h3>
                <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base break-words px-4">
                  We believe repairing your device should be affordable and hassle-free.  
                  Our exclusive offers help you save while enjoying premium-quality service.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
                  <div className="p-5 sm:p-6 bg-gray-50 rounded-xl text-center w-full">
                    <h4 className="text-base sm:text-lg font-semibold text-pink-600 mb-2 sm:mb-3 break-words">
                      💰 Instant Savings
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm break-words">
                      Apply the coupon at checkout and get instant discounts on your repair service.
                    </p>
                  </div>

                  <div className="p-5 sm:p-6 bg-gray-50 rounded-xl text-center w-full">
                    <h4 className="text-base sm:text-lg font-semibold text-pink-600 mb-2 sm:mb-3 break-words">
                      🎁 Exclusive Offers
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm break-words">
                      Our coupon codes are unique and not available anywhere else.
                    </p>
                  </div>

                  <div className="p-5 sm:p-6 bg-gray-50 rounded-xl text-center w-full">
                    <h4 className="text-base sm:text-lg font-semibold text-pink-600 mb-2 sm:mb-3 break-words">
                      ⚡ Easy to Redeem
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm break-words">
                      Copy the code, apply on checkout, and enjoy reduced prices instantly.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
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

export async function getServerSideProps() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/offers/getoffers`
    );
    return {
      props: {
        data: { response: response.data.response },
      },
    };
  } catch (error: any) {
    return {
      props: {
        data: {
          error: error.message || "Something unexpected happened",
        },
      },
    };
  }
}