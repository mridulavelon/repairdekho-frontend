import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faShield, faStar, faWrench, faSearch, faClose } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import useStore from "@/lib/store";
import { useEffect, useState } from "react";
import Metaseo from "./Metaseo";
import DeviceSearch from "./DeviceSearch";

const slides = [
  {
    title: "Cracked Screen? We'll Fix It!",
    subtitle: "Fast, affordable, and professional mobile repair.",
    image: "/images/repair-carousel-image.png",
  },
  {
    title: "Battery Draining Fast?",
    subtitle: "Get your phone battery replaced by certified experts.",
    image: "/images/repair-guy2.png",
  },
  {
    title: "Doorstep Mobile Repair Service!",
    subtitle: "We repair your device right at your home.",
    image: "/images/repair-guy4.png",
  },
];

export default function Homepage() {
  const { updateLoading } = useStore();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(slideTimer);
  }, []);

  // Fake results – replace with your API
  const fakeData = [
    "iPhone 14 Screen Repair",
    "Samsung S22 Battery Replacement",
    "OnePlus Nord Back Panel Change",
    "Vivo Charging Issue",
    "Oppo Display Repair",
    "iPhone 11 Speaker Problem",
    "Xiaomi Motherboard Repair",
  ];

  const handleSearch = (value: string) => {
    setQuery(value);

    if (!value.trim()) {
      setResults([]);
      return;
    }

    const filtered = fakeData.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );

    setResults(filtered);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
  };

  useEffect(() => {
    updateLoading(false);
  }, []);

  return (
    <>
      <Metaseo
        title="Repair dekho"
        description="We Are Dedicated To Provide You Best Mobile Phone Repairing Services At Your Door Step."
        keywords="Expert in MOBILE REPAIR SERVICES"
        metadataBase=""
        urlslug={''}
      />
      <div className="min-w-0 w-full overflow-x-hidden">
        <div className="bg-gray-50 text-gray-800 font-sans">

          {/* HERO CAROUSEL SECTION */}
          <section className="w-full relative bg-gray-100 pt-24 pb-20 md:pt-0 md:h-[90vh] overflow-hidden">
            
            {/* SLIDES CONTAINER */}
            <div className="w-full h-full overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="min-w-full flex-shrink-0 flex flex-col md:flex-row 
                               items-center justify-center md:justify-between
                               px-4 sm:px-6 md:px-10 lg:px-16 xl:px-28
                               text-center md:text-left h-full"
                  >
                    {/* LEFT TEXT */}
                    <div className="w-full md:w-1/2 space-y-4 md:space-y-6 max-w-full">
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight break-words">
                        {slide.title}
                      </h1>

                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 break-words">
                        {slide.subtitle}
                      </p>
                      
                      <div className="w-full max-w-xl mx-auto md:mx-0">
                        <div className="relative">
                          <div className="flex items-center bg-white rounded-full px-5 py-3 sm:px-6 sm:py-4 shadow-xl border-2 border-gray-100 hover:border-pink-300 transition-all duration-300">
                            <FontAwesomeIcon 
                              icon={faSearch} 
                              className="text-pink-500 mr-3 text-lg sm:text-xl flex-shrink-0" 
                            />
                            <input
                              type="text"
                              className="w-full outline-none text-gray-700 text-sm sm:text-base min-w-0 placeholder-gray-400 font-medium"
                              placeholder="Search for device repairs..."
                              value={query}
                              onChange={(e) => handleSearch(e.target.value)}
                            />
                            {query && (
                              <button
                                onClick={() => {
                                  setQuery("");
                                  setResults([]);
                                }}
                                className="ml-2 text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
                              >
                                <FontAwesomeIcon icon={faClose} className="text-sm sm:text-base" />
                              </button>
                            )}
                          </div>

                          {results.length > 0 && (
                            <div className="absolute w-full bg-white shadow-2xl rounded-2xl mt-3 max-h-80 overflow-auto z-50 left-0 right-0 border border-gray-100">
                              {results.map((item, idx) => (
                                <div
                                  key={idx}
                                  className="px-5 py-4 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 cursor-pointer border-b last:border-none text-left text-sm sm:text-base transition-all duration-200 flex items-center group"
                                >
                                  <FontAwesomeIcon 
                                    icon={faWrench} 
                                    className="text-pink-500 mr-3 group-hover:rotate-12 transition-transform duration-200" 
                                  />
                                  <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* RIGHT IMAGE (DESKTOP ONLY) */}
                    <div className="hidden md:flex w-1/2 justify-center items-center">
                      <img
                        src={slide.image}
                        alt="Slide"
                        className="max-w-full w-full h-auto object-contain"
                        style={{ maxWidth: '500px' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DOT INDICATORS */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              {slides.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                    currentSlide === idx
                      ? "bg-blue-600 scale-125"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </section>

          {/* SELECT SERVICES SECTION - UPDATED WITH 2 CARDS SIDE BY SIDE ON MOBILE */}
          <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 break-words">Select Services</h2>
              <p className="text-gray-500 mb-8 sm:mb-12 text-sm sm:text-base break-words">We repair all your favorite devices with care and speed.</p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full">
                {[
                  {
                    title: "Phone Repair",
                    image: "/images/app.png",
                    description: "Cracked screens, battery issues, and more.",
                    route: "/repairmydevice",
                  },
                  {
                    title: "Laptop Repair",
                    image: "/images/content.png",
                    description: "Keyboard issues, slow performance, or upgrades.",
                    route: "/laptop",
                  },
                  {
                    title: "iWatch Repair",
                    image: "/images/online-shop.png",
                    description: "Battery replacement and screen repairs for smartwatches.",
                    route: "/iwatch",
                  },
                  {
                    title: "iPad Repair",
                    image: "/images/ux-design.png",
                    description: "Restore your iPad to top performance and look.",
                    route: "/ipads",
                  },
                ].map((service, index) => (
                  <Link href={service.route} key={index} className="block w-full">
                    <div className="bg-white text-slate-50 border border-orange-200 rounded-2xl p-3 sm:p-4 md:p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer h-full">
                      <div className="h-16 sm:h-20 md:h-24 lg:h-32 flex items-center justify-center mb-2 sm:mb-3 md:mb-4 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-black mb-1 sm:mb-2 break-words">{service.title}</h3>
                      <p className="text-black font-semibold text-xs sm:text-sm break-words">{service.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* 3 STEPS SECTION */}
          <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-orange-50 via-white to-orange-100 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight break-words">
                  Fix Your Gadgets in <span className="text-orange-500">3 Simple Steps</span>
                </h2>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 break-words">
                  Hassle-free, professional and fast repair at your doorstep.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 w-full">
                {[
                  {
                    icon: "/images/edit.png",
                    title: "Check Prices",
                    desc: "We understand your time is precious. RepairDekho experts will fix your device within 30 minutes!",
                  },
                  {
                    icon: "/images/on-time.png",
                    title: "Fix An Appointment",
                    desc: "Choose the time that suits you. Our technician will repair your device at your preferred location and time.",
                  },
                  {
                    icon: "/images/feature.png",
                    title: "Repairing Done",
                    desc: "Get your device back in like-new condition. We ensure 99% customer satisfaction with every repair.",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 hover:border-orange-500 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-8 text-center w-full"
                  >
                    <div className="flex justify-center mb-4 sm:mb-6">
                      <img src={step.icon} alt="Step Icon" className="w-12 h-12 sm:w-16 sm:h-16" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 break-words">{step.title}</h4>
                    <p className="text-gray-600 font-semibold text-sm sm:text-base break-words">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WHY CHOOSE US SECTION */}
          <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight break-words">
                  Why Choose <span className="text-blue-600">Repair Dekho</span>
                </h2>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto break-words">
                  Your trusted doorstep gadget repair partner — fast, reliable, and professional.
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full">
                {[
                  {
                    title: "Quick Service",
                    desc: "We fix your device in just 30 minutes because your time matters.",
                    icon: "/images/edit.png",
                    border: "hover:border-blue-400",
                  },
                  {
                    title: "Free Doorstep Service",
                    desc: "Premium mobile repair delivered to your home — at no extra cost.",
                    icon: "/images/doorstep-delivery.png",
                    border: "hover:border-green-400",
                  },
                  {
                    title: "Transparency",
                    desc: "No hidden charges. Real-time updates and honest repairs.",
                    icon: "/images/feature.png",
                    border: "hover:border-red-400",
                  },
                  {
                    title: "Certified Professionals",
                    desc: "Expert technicians with years of trusted experience.",
                    icon: "/images/expertise.png",
                    border: "hover:border-purple-400",
                  },
                  {
                    title: "6-Month Warranty",
                    desc: "Peace of mind with warranty-backed repairs.",
                    icon: "/images/technical-support.png",
                    border: "hover:border-yellow-400",
                  },
                  {
                    title: "E-waste Management",
                    desc: "We dispose of damaged parts responsibly via authorized recyclers.",
                    icon: "/images/update.png",
                    border: "hover:border-orange-400",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 text-left transition-all duration-300 shadow-xl transform hover:-translate-y-1 hover:scale-[1.02] ${item.border} w-full`}
                  >
                    <div className="mb-3 sm:mb-4 md:mb-5">
                      <img src={item.icon} alt={`${item.title} icon`} className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />
                    </div>
                    <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 break-words">{item.title}</h4>
                    <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base break-words">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WHY TRUST US SECTION */}
          <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 w-full overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight break-words">
                  Why People <span className="text-purple-600">Trust Us</span>
                </h2>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto break-words">
                  We help individuals get their devices repaired with minimal effort and budget.
                </p>
              </div>

              <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 w-full">
                {[
                  {
                    title: "One Stop Solution",
                    desc: "Pickup and Delivery, Upgrades and Repairs.",
                    icon: "/images/experience.png",
                  },
                  {
                    title: "Trained Professionals",
                    desc: "Team of experts ready to serve you anytime.",
                    icon: "/images/on-time.png",
                  },
                  {
                    title: "Quality Parts",
                    desc: "Certified, genuine parts guaranteed.",
                    icon: "/images/investment.png",
                  },
                  {
                    title: "Transparency",
                    desc: "Authoritative and timely updates for customers.",
                    icon: "/images/online-learning.png",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 sm:gap-5 bg-white/70 backdrop-blur-md p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full"
                  >
                    <div className="flex-shrink-0">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-12 h-12 sm:w-16 sm:h-16 transform transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h5 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2 break-words">
                        {item.title}
                      </h5>
                      <p className="text-gray-600 text-sm sm:text-base break-words">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* YOU BREAK WE FIX SECTION */}
          <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 relative w-full overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/pattern-light.svg')] opacity-10 bg-cover bg-no-repeat pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
              <div className="flex flex-wrap items-center -mx-2 sm:-mx-4">
                {/* Left Content */}
                <div className="w-full lg:w-7/12 mb-8 lg:mb-0 px-2 sm:px-4">
                  <div className="backdrop-blur-lg bg-white/70 p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl space-y-4 sm:space-y-6 w-full">
                    <span className="text-base sm:text-xl text-red-500 font-semibold block">— WHO WE ARE</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight break-words">You Break, We Fix</h2>
                    <h5 className="text-xl sm:text-2xl text-gray-700 break-words">Simplest Way To Get Your Mobile Fixed!</h5>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed break-words">
                      Our aim is to provide every customer with a stress-free and exceptional experience
                      and help you find the best possible solution. Providing a friendly, transparent and
                      cost-effective service, our team of experts can assist you with any issue from beginning to end.
                    </p>
                    <div className="pt-2 sm:pt-4">
                      <Link
                        href="/repairmydevice"
                        className="inline-block bg-pink-600 hover:bg-blue-700 transition-colors text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right Image */}
                <div className="w-full lg:w-5/12 flex justify-center px-2 sm:px-4">
                  <div className="w-full max-w-md overflow-hidden">
                    <img src="/images/repair-13.png" alt="Repair illustration" className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* TESTIMONIALS SECTION */}
          <section className="clients-section py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#fff1eb] via-[#ffdde1] to-[#fbc2eb] w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              
              {/* Section Header */}
              <div className="flex justify-center mb-8 sm:mb-12 md:mb-16">
                <div className="text-center lg:w-4/5">
                  <span className="text-base sm:text-lg italic text-gray-600 mb-2 block">Review / Feedback</span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 break-words">
                    What Our Happy Customers Say About Us
                  </h2>
                </div>
              </div>

              {/* Testimonial Slider */}
              <div className="w-full">
                <div className="slick-custom-container">
                  <Slider {...settings}>
                    {[
                      {
                        name: "Karan Kumar",
                        title: "CTO @ Amber Fund",
                        image: "/images/user-image.jpg"
                      },
                      {
                        name: "Mike Smith",
                        title: "Business Man",
                        image: "/images/user-image-2.jpg"
                      },
                      {
                        name: "Riya Smily",
                        title: "CEO @ Tema Security",
                        image: "/images/user-image-3.jpg"
                      },
                      {
                        name: "Oliver Kanjorva",
                        title: "Business Man",
                        image: "/images/user-image-4.jpg"
                      }
                    ].map((user, i) => (
                      <div key={i} className="px-2 sm:px-3">
                        <div className="rounded-xl p-5 sm:p-6 md:p-8 bg-white/60 backdrop-blur-md shadow-lg transition hover:shadow-xl h-full mx-auto" style={{ maxWidth: '400px' }}>
                          <div className="flex items-center mb-4 sm:mb-6">
                            <img src={user.image} alt={user.name} className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-4 border-white shadow-md flex-shrink-0" />
                            <div className="ml-3 sm:ml-4 min-w-0 flex-1">
                              <h5 className="text-base sm:text-lg font-semibold text-gray-800 truncate">{user.name}</h5>
                              <p className="text-xs sm:text-sm text-gray-600 truncate">{user.title}</p>
                            </div>
                          </div>
                          <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base break-words">
                            When it comes to website development and SEO, Blueket has been the best company I've worked with so far.
                            We hired them for both of our businesses and have seen a drastic increase in our customer base.
                          </p>
                          <div className="flex items-center justify-between">
                            <img src="/images/google.png" alt="Google Icon" className="w-8 sm:w-10 flex-shrink-0" />
                            <div className="flex space-x-1">
                              {[...Array(5)].map((_, index) => (
                                <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-400 h-4 w-4 sm:h-5 sm:w-5" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
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

        .slick-custom-container {
          width: 100%;
          overflow: hidden;
        }

        .slick-slider {
          width: 100%;
          overflow: hidden;
        }

        .slick-list {
          overflow: hidden;
        }

        .slick-track {
          display: flex !important;
        }

        .slick-slide {
          height: inherit !important;
        }

        .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </>
  );
}