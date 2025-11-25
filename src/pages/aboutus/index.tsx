import Metaseo from "@/components/Metaseo";
import useStore from "@/lib/store";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Aboutus() {
  const { updateLoading } = useStore();

  const features = [
    {
      title: "Our Expertise",
      desc: "4+ years in mobile repair. 1000+ devices serviced. Premium quality parts with expert precision.",
    },
    {
      title: "You Break, We Fix",
      desc: "We make mobile repair simple, stress-free, and affordable — at your doorstep.",
    },
    {
      title: "Certified Technicians",
      desc: "Every repair is performed by certified, experienced technicians you can trust.",
    },
    {
      title: "Fast Turnaround",
      desc: "We value your time. Most repairs are completed in less than 2 hours.",
    },
    {
      title: "Genuine Parts",
      desc: "We only use manufacturer-grade parts to ensure durability and performance.",
    },
    {
      title: "Data Privacy",
      desc: "Your data is safe. Repairs happen securely in front of you.",
    },
  ];

  const team = [
    { name: "Amit Sharma", role: "Lead Technician", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Priya Verma", role: "Customer Success", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Ravi Mehta", role: "Repair Specialist", img: "https://randomuser.me/api/portraits/men/51.jpg" },
  ];

   
  useEffect(() => {
    updateLoading(false);
  },[])
    return (
      <>
    <Metaseo
     title="About us"
     description="Repair Dekho has built a reputation for being one of India’s leading cell phone repair experts. Our group of very gifted experts, broad industry information, and the best-of-the-range gear put us ahead of the opposition."
     keywords="Expert in MOBILE REPAIR SERVICES"
     metadataBase=""
     urlslug={''}
    />
      {/* <div className="bg-gray-50">
        <section className="aboutblock mt-25 py-16 bg-gray-50">
  <div className="container mx-auto">
    <div className="flex flex-wrap items-center">
      <div className="w-full lg:w-7/12 mb-10 lg:mb-0">
        <div className="about-content">
          <h4 className="mb-5 wow fadeIn text-3xl font-semibold font-opensans" data-wow-delay=".4s" data-wow-duration="1500ms">
            Who We Are
          </h4>
          <p className="wow fadeIn text-lg font-opensans text-slate-600" data-wow-delay=".8s" data-wow-duration="1500ms">
            Repair Dekho has built a reputation for being one of India’s leading cell phone repair experts. Our group of very gifted experts, broad industry information, and the best-of-the-range gear put us ahead of the opposition.
          </p>
          <div className="flex flex-wrap justify-between mt-5 lg:-mx-4">
  <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:px-4">
    <h5 className="font-semibold text-2xl font-opensans">Experience</h5>
    <p className="text-lg my-4 font-opensans text-slate-600">
      With the experience of over 4 years in the industry and over 1000+ devices repaired, Our team use only the highest quality parts for all repairs, and each job is covered by our comprehensive warranty.
    </p>
  </div>
  <div className="w-full lg:w-1/2 lg:px-4">
    <h5 className="font-semibold text-2xl font-opensans">Expertise</h5>
    <p className="text-lg my-4 font-opensans text-slate-600">
      We include a doorstep repair service which implies you don’t need to stress over making a special effort to drop the phone off. Rather we repair your device at your home on time convenient for you.
    </p>
  </div>
</div>

        </div>
      </div>
      <div className="w-full lg:w-5/12">
        <div className="img-collage-set">
          <div className="index-up">
            <div className="rounded overflow-hidden">
              <img
                src="https://assets-global.website-files.com/5d440ec0b47bfbe0f4ca8018/616e6c9bb65c4bc5c7670c86_What%20we%20do%20as%20a%202D%20animation%20company-01%20(1).png"
                alt="img"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
       </section>
<section className="aboutblock py-16 bg-blue-100">
  <div className="container mx-auto">
    <div className="flex flex-wrap items-center">
      <div className="w-full lg:w-7/12 mb-10 lg:mb-0">
        <div className="about-content">
          <h2 className="mb-5 wow fadeIn text-4xl font-opensans font-bold" data-wow-delay=".4s" data-wow-duration="1500ms">
            You Break, We Fix
          </h2>
          <h5 className="mb-5 wow fadeIn font-opensans text-2xl" data-wow-delay=".6s" data-wow-duration="1500ms">
            Simplest Way To Get Your Mobile Fixed!
          </h5>
          <p className="wow fadeIn font-opensans text-lg text-slate-600" data-wow-delay=".8s" data-wow-duration="1500ms">
            Our aim is to provide every customer with a stress-free and exceptional experience and help you find the best possible solution. Providing a friendly, transparent and cost-effective service, our team of experts can assist you with any issue from beginning to end.
          </p>
          <div className="mt-10 wow fadeIn" data-wow-delay=".6s" data-wow-duration="1500ms">
            <Link href="/repairmydevice" className="inline-block bg-blue-500 text-lg text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition duration-300">
              Book Now
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-5/12">
        <div className="img-collage-set">
          <div className="index-up">
            <div className="rounded overflow-hidden">
              <img
                src="https://repairdekho.in/images/repair-13.png"
                alt="img"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="aboutblock py-16">
  <div className="container mx-auto">
    <div className="flex flex-wrap items-center">
      <div className="w-full lg:w-5/12 mb-10 lg:mb-0 lg:pr-8">
        <div className="img-collage-set">
          <div className="index-up">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://cdn.dribbble.com/users/189873/screenshots/6273913/frame.png"
                alt="img"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-7/12 lg:pl-8">
        <div className="about-content">
          <h4 className="mb-5 wow fadeIn text-4xl font-bold font-opensans" data-wow-delay=".4s" data-wow-duration="1500ms">
            Our Thought process and execution
          </h4>
          <p className="wow fadeIn text-lg font-opensans text-slate-600" data-wow-delay=".8s" data-wow-duration="1500ms">
            We look at the Mobile repair industry from a new perspective. And to implement it, we have come up with a new program, in which you will get satisfaction along with quality services. Your device will be repaired by our professional and experienced technicians. And last but not the least "we value your time, We save your money, We protect your data and We care about your device".
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="aboutblock py-16 bg-gray-50">
  <div className="container mx-auto">
    <div className="flex flex-wrap items-center">
      <div className="w-full lg:w-7/12 mb-10 lg:mb-0">
        <div className="about-content">
          <h4 className="mb-5 wow fadeIn text-4xl font-bold font-opensans" data-wow-delay=".4s" data-wow-duration="1500ms">
            Our Repair Process
          </h4>
          <p className="wow fadeIn text-lg font-opensans text-slate-600" data-wow-delay=".8s" data-wow-duration="1500ms">
            We repair assembled mobiles in our repair system with a perfect fitting. And to do this process we have certified technicians and quality parts who help us to complete this process. We want you to get your repaired in new condition and can use it for a long time.
          </p>
          <div className="flex flex-wrap justify-between mt-5 lg:-mx-4">
  <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:px-4">
    <h5 className="font-semibold text-2xl font-opensans">
      DATA SECURITY
    </h5>
    <p className="text-lg font-opensans text-slate-600 my-4">
      We know that your device data is very important to you. So we repair your device in front of you. And take full care of your privacy. Our engineers repair your devices securely.
    </p>
  </div>
  <div className="w-full lg:w-1/2 lg:px-4">
    <h5 className="font-semibold text-2xl font-opensans">
      FLEXIBLE PRICES
    </h5>
    <p className="text-lg font-opensans text-slate-600 my-4">
      Authorized companies repair your device with more money than you. On the other hand, Repair Dekho saves both your money and time with good service and Genuine Products.
    </p>
  </div>
</div>

        </div>
      </div>
      <div className="w-full lg:w-5/12 lg:pl-8">
        <div className="img-collage-set relative">
          <div className="rounded overflow-hidden">
            <img
              src="https://t3.ftcdn.net/jpg/01/70/13/82/360_F_170138272_ptnXKMO2IsBy6znA1W8TgezxSo7XA62q.jpg"
              alt="img"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="shapesw shapecontrol-3 absolute top-0 left-0 w-full h-full"></div>
        </div>
      </div>
    </div>
  </div>
</section>
      </div> */}
   <div className="bg-white text-gray-800">

  {/* HERO SECTION */}
  <section className="py-20 px-4 border-b bg-gray-50">
    <div className="max-w-5xl mx-auto text-center">
      <h1 className="text-5xl font-bold mb-4 text-gray-900">
        Who We Are
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        At Repair Dekho, we’re reshaping how India repairs phones, tablets, laptops, and more —
        with certified technicians, doorstep service, and complete transparency.
      </p>
      <a
        href="/repairmydevice"
        className="inline-block mt-8 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-indigo-700 transition"
      >
        Book a Repair
      </a>
    </div>
  </section>

  {/* FEATURES SECTION */}
  <section className="py-16 px-4 max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((f, i) => (
        <div key={i} className="bg-white border p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-bold mb-2">{f.title}</h3>
          <p className="text-gray-600">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>

  {/* MISSION & VISION */}
  <section className="py-20 px-4 bg-gray-50 border-y">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
      <p className="text-lg text-gray-600 mb-12">
        To provide India’s most reliable, fast, and affordable device repair service right at your doorstep.
      </p>

      <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
      <p className="text-lg text-gray-600">
        A future where repairing your phone is as easy as ordering food — fast, secure, and trusted by millions.
      </p>
    </div>
  </section>

  {/* TEAM SECTION */}
  <section className="py-20 px-4 max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
      {team.map((member, i) => (
        <div key={i} className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <img
            src={member.img}
            alt={member.name}
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border"
          />
          <h4 className="text-xl font-semibold">{member.name}</h4>
          <p className="text-sm text-gray-500">{member.role}</p>
        </div>
      ))}
    </div>
  </section>

  {/* TESTIMONIALS */}
  <section className="py-20 px-4 bg-gray-50 border-y">
    <h2 className="text-4xl font-bold text-center mb-12">What Customers Say</h2>

    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
      <div className="bg-white border p-6 rounded-xl shadow-sm hover:shadow-md transition">
        <p className="text-gray-600 mb-4">
          "Super fast and polite staff. They fixed my iPhone screen at home in under 30 minutes!"
        </p>
        <p className="text-sm font-semibold text-gray-800">— Kavita Joshi</p>
      </div>
      <div className="bg-white border p-6 rounded-xl shadow-sm hover:shadow-md transition">
        <p className="text-gray-600 mb-4">
          "Booking was easy, technician arrived on time, and my device feels brand new."
        </p>
        <p className="text-sm font-semibold text-gray-800">— Rahul Bansal</p>
      </div>
    </div>
  </section>

  {/* SERVICES SECTION */}
  <section className="py-20 px-4 max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white border p-6 rounded-2xl shadow-sm hover:shadow-md transition">
        <img src="phone.jpg" className="w-full h-48 object-cover rounded-lg mb-4" />
        <h3 className="text-2xl font-bold mb-2">Phone Repair</h3>
        <p className="text-gray-600">Fast and affordable repairs for all phone models.</p>
      </div>

      <div className="bg-white border p-6 rounded-2xl shadow-sm hover:shadow-md transition">
        <img src="laptop.jpg" className="w-full h-48 object-cover rounded-lg mb-4" />
        <h3 className="text-2xl font-bold mb-2">Laptop Repair</h3>
        <p className="text-gray-600">Hardware and software repairs handled by experts.</p>
      </div>

      <div className="bg-white border p-6 rounded-2xl shadow-sm hover:shadow-md transition">
        <img src="tablet.jpg" className="w-full h-48 object-cover rounded-lg mb-4" />
        <h3 className="text-2xl font-bold mb-2">Tablet Repair</h3>
        <p className="text-gray-600">Professional repair services for all tablet models.</p>
      </div>
    </div>
  </section>

  {/* WHY CHOOSE US */}
  <section className="py-20 px-4 bg-gray-50 border-y">
    <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>

    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white border p-6 rounded-2xl shadow-sm hover:shadow-md transition">
        <h3 className="text-2xl font-bold mb-2">Certified Technicians</h3>
        <p className="text-gray-600">Our team is trained and certified to handle all devices.</p>
      </div>
      <div className="bg-white border p-6 rounded-2xl shadow-sm hover:shadow-md transition">
        <h3 className="text-2xl font-bold mb-2">Doorstep Service</h3>
        <p className="text-gray-600">We repair your device at your home or office — fast & easy.</p>
      </div>
      <div className="bg-white border p-6 rounded-2xl shadow-sm hover:shadow-md transition">
        <h3 className="text-2xl font-bold mb-2">Transparent Pricing</h3>
        <p className="text-gray-600">Upfront pricing with no hidden charges.</p>
      </div>
    </div>
  </section>


  {/* CTA */}
  <section className="py-20 px-4 bg-indigo-600 text-white text-center">
    <h2 className="text-3xl font-bold mb-3">Ready to fix your device?</h2>
    <p className="mb-8 text-indigo-100">Fast service. Certified experts. No hassle.</p>
    <a
      href="/repairmydevice"
      className="bg-pink-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition"
    >
      Get Started
    </a>
  </section>
</div>

      </>
    )
  }
  