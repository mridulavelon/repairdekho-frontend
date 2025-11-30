import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faShield, faStar, faWrench } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import useStore from "@/lib/store";
import { useEffect } from "react";
import Metaseo from "./Metaseo";
import DeviceSearch from "./DeviceSearch";
export default function Homepage() {
  const { updateLoading } = useStore();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 4,
        slidesToScroll: 4,
     
        responsive: [
           {
             breakpoint: 1200,
             settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,
               dots: true
             }
           },
           {
             breakpoint: 1024,
             settings: {
               slidesToShow: 2,
               slidesToScroll: 2
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

      useEffect(() => {
        updateLoading(false);
      },[])
  return (
    <>
    <Metaseo
     title="Repair dekho"
     description="We Are Dedicated To Provide You Best Mobile Phone Repairing Services At Your Door Step."
     keywords="Expert in MOBILE REPAIR SERVICES"
     metadataBase=""
     urlslug={''}
    />
        <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
     <section className="relative bg-slate-100 overflow-hidden px-6 py-10 sm:px-10 md:px-20">
  {/* Background Shapes */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
    <div className="absolute w-40 h-40 bg-pink-500 rounded-full top-10 left-10 opacity-30"></div>
    <div className="absolute w-24 h-24 bg-white rotate-45 top-32 left-32 opacity-20"></div>
    <div className="absolute w-32 h-32 bg-fuchsia-600 rounded-full bottom-10 right-10 opacity-40"></div>
    <div className="absolute w-16 h-16 bg-pink-300 rounded-full bottom-28 left-20 opacity-50"></div>
  </div>

  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
    {/* Left content */}
    <div className="text-center md:text-left max-w-xl">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
        Mobile Repair at Your Doorstep
      </h1>
      <p className="text-lg text-gray-800 mb-6">
        Friendly, fast & affordable. Get your smartphone fixed without leaving your home.
      </p>

      {/* Search Bar */}
      <DeviceSearch/>
    </div>

    {/* Right image */}
    <div className="hidden w-full lg:flex justify-end">
      <Image
        src="/images/heroman.png"
        alt="User with mobile phone"
        width={1000}
        height={1000}
        className="object-cover h-auto w-full"
        priority
      />
    </div>
  </div>
</section>

     
    <section className="bg-white py-20 px-4 md:px-10">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
    <p className="text-gray-500 mb-12">We repair all your favorite devices with care and speed.</p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
        <Link
         href={service.route}
        >
        <div
          key={index}
          className="bg-pink-600 text-slate-50 border border-orange-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out"
        >
          <div className="h-32 flex items-center justify-center mb-4">
            <img
              src={service.image}
              alt={service.title}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-slate-50  mb-2">{service.title}</h3>
          <p className="text-slate-50 font-semibold text-sm">{service.description}</p>
        </div>
        </Link>
      ))}
    </div>
  </div>
</section>


      <section className="py-20 bg-gradient-to-b from-orange-50 via-white to-orange-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
        Fix Your Gadgets in <span className="text-orange-500">3 Simple Steps</span>
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Hassle-free, professional and fast repair at your doorstep.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
          className="bg-white border border-gray-200 hover:border-orange-500 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center"
        >
          <div className="flex justify-center mb-6">
            <img src={step.icon} alt="Step Icon" className="w-16 h-16" />
          </div>
          <h4 className="text-2xl font-bold text-gray-800 mb-3">{step.title}</h4>
          <p className="text-gray-600 font-semibold">{step.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


<section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
        Why Choose <span className="text-blue-600">Repair Dekho</span>
      </h2>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        Your trusted doorstep gadget repair partner — fast, reliable, and professional.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
          className={`bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl p-8 text-left transition-all duration-300 shadow-xl transform hover:-translate-y-1 hover:scale-[1.02] ${item.border}`}
        >
          <div className="mb-5">
            <img src={item.icon} alt={`${item.title} icon`} className="w-14 h-14" />
          </div>
          <h4 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h4>
          <p className="text-gray-700 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


<section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
        Why People <span className="text-purple-600">Trust Us</span>
      </h2>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        We help individuals get their devices repaired with minimal effort and budget.
      </p>
    </div>

    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10">
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
          className="flex items-start gap-5 bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex-shrink-0">
            <img
              src={item.icon}
              alt={item.title}
              className="w-16 h-16 transform transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div>
            <h5 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h5>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="py-20 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 relative">
  <div className="absolute inset-0 bg-[url('/images/pattern-light.svg')] opacity-10 bg-cover bg-no-repeat pointer-events-none"></div>

  <div className="container mx-auto px-6 relative z-10">
    <div className="flex flex-wrap items-center">
      {/* Left Content */}
      <div className="w-full lg:w-7/12 animate__animated animate__fadeIn" style={{ animationDelay: '.2s', animationDuration: '1.5s' }}>
        <div className="backdrop-blur-lg bg-white/70 p-10 rounded-3xl shadow-xl space-y-6">
          <span className="text-xl text-red-500 font-semibold dashbefore block">— WHO WE ARE</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">You Break, We Fix</h2>
          <h5 className="text-2xl text-gray-700">Simplest Way To Get Your Mobile Fixed!</h5>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our aim is to provide every customer with a stress-free and exceptional experience
            and help you find the best possible solution. Providing a friendly, transparent and
            cost-effective service, our team of experts can assist you with any issue from beginning to end.
          </p>
          <div className="pt-4">
            <Link
              href="/repairmydevice"
              className="inline-block bg-pink-600 hover:bg-blue-700 transition-colors text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-5/12 mt-12 lg:mt-0 flex justify-center animate__animated animate__fadeInRight" style={{ animationDelay: '.4s', animationDuration: '1.5s' }}>
        <div className="overflow-hidden ">
          <img src="/images/repair-13.png" alt="Repair illustration" className="w-84 h-auto" />
        </div>
      </div>
    </div>
  </div>
</section>



<section className="clients-section py-20 bg-gradient-to-br from-[#fff1eb] via-[#ffdde1] to-[#fbc2eb]">
  <div className="container mx-auto px-4">
    
    {/* Section Header */}
    <div className="flex justify-center">
      <div className="text-center lg:w-4/5">
        <span className="text-lg italic text-gray-600 mb-2 block">Review / Feedback</span>
        <h2 className="text-3xl text-orange-500 lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
          What Our Happy Customers Say About Us
        </h2>
      </div>
    </div>

    {/* Testimonial Slider */}
    <div className="mt-16">
      <div className="slider-divider responsive overflow-hidden">
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
            <div key={i} className="rounded-xl p-8 bg-white/60 backdrop-blur-md shadow-lg transition hover:shadow-xl mx-4">
              <div className="flex items-center mb-6">
                <img src={user.image} alt={user.name} className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md" />
                <div className="ml-4">
                  <h5 className="text-lg font-semibold text-gray-800">{user.name}</h5>
                  <p className="text-sm text-gray-600">{user.title}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                When it comes to website development and SEO, Blueket has been the best company I've worked with so far.
                We hired them for both of our businesses and have seen a drastic increase in our customer base.
              </p>
              <div className="flex items-center justify-between">
                <img src="/images/google.png" alt="Google Icon" className="w-10" />
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-400 h-5 w-5" />
                  ))}
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

    </>
  )
}
