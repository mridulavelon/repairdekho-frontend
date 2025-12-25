import { useEffect, useRef, useState } from "react";
import axios from "axios";
import useStore from "@/lib/store";
import Slider from "react-slick";
import Link from "next/link";
import Metaseo from "@/components/Metaseo";
// import Footer from "@/components/Footer";

export default function Repairmydevice({ data }: any) {
  const [brands, setBrands] = useState<any[]>([]);
  const [models, setModels] = useState<any[]>([]);
  const scrollToRef = useRef<HTMLDivElement | null>(null);
  const { updateLoading } = useStore();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 6 } },
      { breakpoint: 1024, settings: { slidesToShow: 5 } },
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 640, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  useEffect(() => {
    updateLoading(false);
    setBrands(data?.response || []);
  }, [data, updateLoading]);

  const getModels = async (brand: string, devicetype: string) => {
    updateLoading(true);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/models/getmodels`,
        { brand, type: devicetype }
      );
      if (res.status === 201) {
        setModels(res.data.models || []);
        scrollToRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    } catch (err) {
      console.error(err);
    }
    updateLoading(false);
  };

  return (
    <>
      <Metaseo title="Repair My Device" />

      <div className="min-w-0 w-full overflow-x-hidden">
        <div className="bg-gray-50 min-h-screen">
          {/* HERO */}
          <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="text-center md:text-left w-full">
                  <h3 className="text-yellow-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 break-words leading-tight">
                    We are Expert in
                  </h3>
                  <h1 className="text-sky-400 font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl break-words leading-tight">
                    MOBILE REPAIR SERVICES
                  </h1>
                  <p className="mt-4 lg:mt-6 text-gray-700 font-semibold text-lg sm:text-xl md:text-2xl break-words">
                    Best Mobile Phone Repair Services At Your Doorstep
                  </p>
                </div>

                <div className="flex justify-center md:justify-end w-full">
                  <img
                    src="/images/service-bg.png"
                    alt="Mobile repair service"
                    className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[450px] lg:max-w-[520px] h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* BRANDS */}
          <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white w-full overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-gray-800 font-semibold text-center text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-10 lg:mb-12 break-words">
                Select your mobile brand
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 sm:gap-6 md:gap-8 w-full">
                {brands.map((brand) => (
                  <div
                    key={brand.value}
                    onClick={() => getModels(brand.value, "mobile")}
                    className="bg-white rounded-xl shadow-md flex items-center justify-center cursor-pointer hover:shadow-xl transition-all duration-300 aspect-square p-4 sm:p-5 md:p-6 w-full"
                  >
                    <img
                      src={brand.imagelink || "/images/no-preview.jpg"}
                      alt={brand.value}
                      className="w-full h-full max-w-[70px] sm:max-w-[90px] md:max-w-[110px] object-contain hover:scale-110 transition-transform duration-300"
                       onError={(e) => {
                      e.currentTarget.src = "/images/no-preview.jpg";
                    }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div ref={scrollToRef} />
          </section>

          {/* MODELS */}
          {models.length > 0 && (
            <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 w-full overflow-hidden">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-gray-800 font-semibold text-center text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-10 lg:mb-12 break-words">
                  Select your mobile model
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 w-full">
                  {models.map((model) => (
                    <div
                      key={model._id}
                      className="bg-white rounded-xl shadow-md p-4 sm:p-5 md:p-6 flex flex-col hover:shadow-xl transition-all duration-300 w-full"
                    >
                      <div className="bg-gray-100 rounded-lg flex items-center justify-center aspect-square mb-4 overflow-hidden">
                        <img
                          src={model.smallimagelink || "/images/no-preview.jpg"}
                          alt={model.modelname}
                          className="w-full h-full object-contain p-2"
                           onError={(e) => {
                      e.currentTarget.src = "/images/no-preview.jpg";
                    }}
                        />
                      </div>
                      <p className="font-medium text-gray-800 text-sm sm:text-base md:text-lg text-center line-clamp-2 mb-4 break-words">
                        {model.modelname}
                      </p>
                      <Link href={`/product/${model._id}`} className="mt-auto">
                        <button className="w-full bg-pink-600 text-white py-2 sm:py-3 rounded-full hover:bg-pink-700 transition-colors text-sm sm:text-base font-medium">
                          Next
                        </button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* WHY CHOOSE REPAIRDEKHO SECTION */}
          <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-10 sm:mb-12 lg:mb-16">
                <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 break-words leading-tight">
                  Why Choose <span className="text-yellow-400">RepairDekho</span> for Mobile Repair and Replacement?
                </h2>
                <div className="flex justify-center">
                  <div className="w-20 sm:w-24 md:w-28 lg:w-32 h-1 bg-yellow-400"></div>
                </div>
              </div>

              {/* Cards Grid - 2 cards on mobile, 3 on large screens */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
                {[
                  {
                    icon: "📱",
                    image: "/images/app.png",
                    title: "6 Months Warranty",
                    desc: "Repair Dekho provides genuine parts and 6 months warranty on every part we replace which makes us the perfect place for your mobile.",
                  },
                  {
                    icon: "📱",
                    image: "/images/app.png",
                    title: "Onsite Repair",
                    desc: "Every customer wants quick repair of their mobile phones, we value our customer's time, therefore, our team repair mobile devices at their doorstep on time.",
                  },
                  {
                    icon: "💻",
                    image: "/images/content.png",
                    title: "Best Pricing",
                    desc: "When you will compare our price with our competitors – You will feel very happy, because of our low price & best services for your device repair.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 w-full"
                  >
                    {/* Icon Circle - Positioned at top center */}
                    <div className="absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-slate-800">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                        />
                      </div>
                    </div>

                    {/* Content - with top padding to accommodate icon */}
                    <div className="pt-12 sm:pt-14 md:pt-16 text-center">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 break-words">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed break-words">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* COMPANY SLIDER */}
          <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white w-full overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="slider-container w-full">
                <Slider {...sliderSettings}>
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="px-2 sm:px-3 md:px-4">
                      <div className="flex items-center justify-center h-12 sm:h-14 md:h-16 lg:h-20">
                        <img
                          src={`/images/company/${i + 1}.png`}
                          alt={`company-${i + 1}`}
                          className="max-h-full max-w-full object-contain mx-auto"
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </section>
        </div>
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

      {/* <Footer /> */}
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/brands/getbrands`
    );
    return { props: { data: { response: response.data.response || [] } } };
  } catch (error: any) {
    return { props: { data: { error: error.message || "Failed to fetch brands" } } };
  }
}