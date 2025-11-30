import { useEffect, useRef, useState } from "react";
import axios from "axios";
import useStore from "@/lib/store";
import Slider from "react-slick";
import Link from "next/link";
import Metaseo from "@/components/Metaseo";

export default function Repairmydevice({data}:any) {
    const [brands,setBrands] = useState([]);
    const [models,setModels] = useState([]);
    const scrollToRef = useRef<any>(null);
    const { updateLoading } = useStore();

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay:true,
      slidesToShow: 8,
      slidesToScroll: 1,

      
   responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

    }

    const handleScroll = () => {
      if (scrollToRef.current) {
        scrollToRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    useEffect(() => {
      updateLoading(false);
        if(data?.error){
           setBrands([])
        }else{
            setBrands(data?.response)
        }
      },[])

      const getModels = async (brand:string,devicetype:string) => {
        updateLoading(true);
        const data = {
             brand:brand,
             type:devicetype
          } 
       const modelsCall = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/models/getmodels`,data)
         .then((response) => {
           if(response.status === 201){
             setModels(response.data.models);
             handleScroll();
           }else{
             setModels([]);
           }
         }).catch((error) => {
            setModels([]);
         })
         updateLoading(false);  
       }
  
    return (
      <>
         <Metaseo
         title="Repairmydevice"
         description="Select your smartphone brand and model and start your repairing process journey"
         keywords="Select from wide variety of brands and model on our website"
         metadataBase=""
         urlslug={''}
        />
         <div className="bg-gray-50">
        <section className="py-12 mb-12">
    <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
            <div className="w-full lg:w-1/2">
                <div className="mb-6">
                <h3 className="text-yellow-500 font-semibold mb-8 text-3xl lg:text-5xl">We are Expert in</h3>
                    <div className="text-7xl font-extrabold text-sky-400 mb-4 font-roboto_slabregular mt-4">MOBILE REPAIR SERVICES</div>
                    <p className="leading-relaxed mt-4 font-semibold text-2xl text-slate-600">We Are Dedicated To Provide You Best Mobile Phone Repairing Services At Your Door Step.</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end p-4">
                <div className="overflow-hidden">
                    <img src="/images/service-bg.png" alt="img" className=""/>
                </div>
            </div>
        </div>
    </div>
       </section>
       <section className="pt-12">
  <div className="container mx-auto">
    <div className="flex justify-center text-center">
      <div className="w-full">
        <div className="text-2xl font-semibold mb-6">
          Select your mobile brand
        </div>
      </div>
    </div>
    <div className="flex flex-wrap justify-center gap-4">
      {brands.map((brand: any) => (
        <div className="p-4 bg-white rounded-lg shadow-md"  onClick={() => getModels(brand?.value,"mobile")}>
          <img 
           src={brand?.imagelink || "/images/no-preview.png"} 
           alt="Honor" 
           className="object-contain w-32 h-32 duration-300 hover:scale-110"
            onError={(e) => {
    e.currentTarget.src = "/images/no-preview.png";
  }}
           />
          </div>
      ))}
    </div>
    <div className="clearfix" ref={scrollToRef}></div>
  </div>
       </section>
       {models?.length > 0 && (
        <section className="pt-12">
        <div className="container mx-auto">
          <div className="flex justify-center text-center">
            <div className="w-full">
              <div className="text-2xl font-semibold mb-6">
                Select your mobile model
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {models.map((model: any) => (
              <div className="p-4 bg-white rounded-lg shadow-md overflow-hidden w-40" key={model._id}>
                <a href="#">
                  <div className="w-32 h-32 mx-auto bg-gray-200 flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                    <img 
                     src={model.smallimagelink || "/images/no-preview.png"} 
                     className="max-h-full max-w-full object-contain" 
                     alt={model.modelname}
                             onError={(e) => {
    e.currentTarget.src = "/images/no-preview.png";
  }}
                     />
                  </div>
                </a>
                <div className="mt-2 text-center">
                  {model.modelname}
                </div>
                <div className="flex justify-center mt-4">
                  <Link href={`/product/${model._id}`} onClick={() => updateLoading(true)}>
                  <button className="bg-orange-500 text-white py-2 px-8 rounded-full hover:bg-blue-700 transition duration-300">
                    Next
                  </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="clearfix"></div>
        </div>
      </section>
       )}
      <section className="my-10 py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose RepairDekho for Mobile Repair and Replacement?</h2>
          <div className="h-1 w-24 bg-yellow-500 mx-auto mb-8"></div>
        </div>
        <div className="flex flex-wrap justify-center my-16">
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center h-full flex flex-col justify-between relative">
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center z-10">
                <img src="/images/app.png" alt="6 Months Warranty" className="w-16 h-16 object-contain" />
              </div>
              <div className="pt-16">
                <h3 className="text-xl font-semibold mb-2">6 Months Warranty</h3>
                <p className="text-gray-600">
                  Repair Dekho provides genuine parts and 6 months warranty on every part we replace which makes us the perfect place for your mobile.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4 mt-8 lg:mt-0">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center h-full flex flex-col justify-between relative">
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center z-10">
                <img src="/images/ux-design.png" alt="Onsite Repair" className="w-16 h-16 object-contain" />
              </div>
              <div className="pt-16">
                <h3 className="text-xl font-semibold mb-2">Onsite Repair</h3>
                <p className="text-gray-600">
                  Every customer wants quick repair of their mobile phones, we value our customer’s time, therefore, our team repair mobile devices at their doorstep on time.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4 mt-8 lg:mt-0">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center h-full flex flex-col justify-between relative">
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center z-10">
                <img src="/images/content.png" alt="Best Pricing" className="w-16 h-16 object-contain" />
              </div>
              <div className="pt-16">
                <h3 className="text-xl font-semibold mb-2">Best Pricing</h3>
                <p className="text-gray-600">
                  When you will compare our price with our competitors – You will feel very happy, because of our low price & best services for your device repair.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="container mx-auto overflow-hidden">
      <Slider {...settings}>
        <div className="p-4">
          <img src="/images/company/1.png" alt="logo" className="w-full h-auto" />
        </div>
        <div className="p-4">
          <img src="/images/company/2.png" alt="logo" className="w-full h-auto" />
        </div>
        <div className="p-4">
          <img src="/images/company/3.png" alt="logo" className="w-full h-auto" />
        </div>
        <div className="p-4">
          <img src="/images/company/4.png" alt="logo" className="w-full h-auto" />
        </div>
        <div className="p-4">
          <img src="/images/company/5.png" alt="logo" className="w-full h-auto" />
        </div>
        <div className="p-4">
          <img src="/images/company/6.png" alt="logo" className="w-full h-auto" />
        </div>
        <div className="p-4">
          <img src="/images/company/7.png" alt="logo" className="w-full h-auto" />
        </div>
        <div className="p-4">
          <img src="/images/company/8.png" alt="logo" className="w-full h-auto" />
        </div>
        <div className="p-4">
          <img src="/images/company/google.webp" alt="logo" className="w-full h-auto" />
        </div>
      </Slider>
    </div>
      </div>
      </>
    )
}
export async function getStaticProps() {
    const brandsCall = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/brands/getbrands`)
    .then((response) => {
      if(response.status === 200){
        return {response:response.data.response}
      }else{
        return {error:"Something unexpected happend please try again later"}
      }
    }).catch((error) => {
       return {error:error.message ? error.message : "Something unexpected happend please try again later"}
    })
    return { props: { data:brandsCall } };
 }