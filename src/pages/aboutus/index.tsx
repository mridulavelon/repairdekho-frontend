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
  