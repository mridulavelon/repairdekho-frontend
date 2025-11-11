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
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
  {/* Background glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-0 blur-0" />

  {/* Hero */}
  <section className="py-20 px-4 relative z-10 text-center text-gray-500 mx-auto bg-[url('/images/whowe.jpg')] bg-cover bg-center">
  <h1 className="text-5xl font-extrabold mb-4">Who We Are</h1>
  <p className="text-lg text-gray-200 max-w-2xl mx-auto">
    At Repair Dekho, we simplify the way India fixes phones, tablets, laptops, and more — with certified technicians, doorstep service, and total transparency.
  </p>
  <a href="/repairmydevice" className="inline-block mt-8 text-slate-50 font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition bg-pink-600">
    Book a Repair
  </a>
</section>


  {/* Feature Cards */}
  <section className="py-16 px-4 relative z-10 max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((f, i) => (
        <div key={i} className="bg-white/10 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition">
          <h3 className="text-2xl font-bold text-white mb-2">{f.title}</h3>
          <p className="text-gray-300">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>

  {/* Mission & Vision */}
  <section className="py-20 px-4 relative z-10 text-center max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
    <p className="text-lg text-gray-300 mb-12">
      To bring India’s best device repair services right to your doorstep, at fair prices, without compromising privacy or quality.
    </p>
    <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
    <p className="text-lg text-gray-300">
      A future where getting your phone fixed is as easy as ordering food — fast, secure, and trusted by millions.
    </p>
  </section>

  {/* Team Section */}
  <section className="py-20 px-4 relative z-10 max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
      {team.map((member, i) => (
        <div key={i} className="bg-white/10 rounded-xl p-6 shadow-lg hover:scale-[1.02] transition">
          <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white/30" />
          <h4 className="text-xl font-semibold">{member.name}</h4>
          <p className="text-sm text-gray-300">{member.role}</p>
        </div>
      ))}
    </div>
  </section>

  {/* Testimonials */}
  <section className="py-20 px-4 relative z-10 max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">What Customers Say</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white/10 p-6 rounded-xl shadow-lg">
        <p className="text-gray-300 mb-4">"Super fast and very polite staff. They fixed my iPhone screen at home in under 30 minutes!"</p>
        <p className="text-sm text-white font-semibold">— Kavita Joshi</p>
      </div>
      <div className="bg-white/10 p-6 rounded-xl shadow-lg">
        <p className="text-gray-300 mb-4">"What a service! Booking was easy, the technician arrived on time, and my device feels brand new."</p>
        <p className="text-sm text-white font-semibold">— Rahul Bansal</p>
      </div>
    </div>
  </section>

  {/* Services Overview */}
  <section className="py-20 px-4 relative z-10 bg-gray-800 text-white text-center">
    <h2 className="text-4xl font-bold mb-12">Our Services</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition">
        <img src="path-to-phone-repair.jpg" alt="Phone Repair" className="w-full h-48 object-cover rounded-md mb-4" />
        <h3 className="text-2xl font-bold mb-2">Phone Repair</h3>
        <p className="text-gray-300">We specialize in fast and affordable repairs for all phone models, from screens to batteries and more.</p>
      </div>
      <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition">
        <img src="path-to-laptop-repair.jpg" alt="Laptop Repair" className="w-full h-48 object-cover rounded-md mb-4" />
        <h3 className="text-2xl font-bold mb-2">Laptop Repair</h3>
        <p className="text-gray-300">Whether it's a hardware issue or a software problem, our experts can get your laptop back in shape.</p>
      </div>
      <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition">
        <img src="path-to-tablet-repair.jpg" alt="Tablet Repair" className="w-full h-48 object-cover rounded-md mb-4" />
        <h3 className="text-2xl font-bold mb-2">Tablet Repair</h3>
        <p className="text-gray-300">We offer professional repairs for all tablet models, ensuring your device is working like new again.</p>
      </div>
    </div>
  </section>

  {/* Why Choose Us */}
  <section className="py-20 px-4 relative z-10 max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-12">Why Choose Us</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition">
        <img src="path-to-expert-technicians.jpg" alt="Expert Technicians" className="w-full h-48 object-cover rounded-md mb-4" />
        <h3 className="text-2xl font-bold mb-2">Certified Technicians</h3>
        <p className="text-gray-300">Our technicians are fully certified and trained to repair any device with precision and care.</p>
      </div>
      <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition">
        <img src="path-to-doorstep-service.jpg" alt="Doorstep Service" className="w-full h-48 object-cover rounded-md mb-4" />
        <h3 className="text-2xl font-bold mb-2">Convenient Doorstep Service</h3>
        <p className="text-gray-300">We come to you! No need to leave your home or office for device repairs. It's quick and hassle-free.</p>
      </div>
      <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition">
        <img src="path-to-transparent-pricing.jpg" alt="Transparent Pricing" className="w-full h-48 object-cover rounded-md mb-4" />
        <h3 className="text-2xl font-bold mb-2">Transparent Pricing</h3>
        <p className="text-gray-300">We offer upfront pricing with no hidden fees, so you know exactly what you're paying for.</p>
      </div>
    </div>
  </section>

  {/* FAQ Section */}
  <section className="py-20 px-4 relative z-10 bg-gray-900 text-white">
    <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="bg-white/10 p-6 rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold">How long does it take to repair my device?</h3>
        <p className="text-gray-300">Most repairs are completed in under 2 hours, depending on the type of service needed.</p>
      </div>
      <div className="bg-white/10 p-6 rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold">What types of devices do you repair?</h3>
        <p className="text-gray-300">We repair phones, tablets, laptops, and other electronics. If you're unsure, just ask!</p>
      </div>
      <div className="bg-white/10 p-6 rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold">Is my data safe during repairs?</h3>
        <p className="text-gray-300">Yes, we prioritize your privacy and take every measure to ensure your data remains secure.</p>
      </div>
    </div>
  </section>

  {/* CTA Footer */}
  <section className="py-20 px-4 bg-gradient-to-t from-indigo-900 to-indigo-800 relative z-10 text-center">
    <h2 className="text-3xl font-bold mb-4">Ready to fix your device?</h2>
    <p className="text-gray-300 mb-8">No lines. No delays. Just expert repair at your convenience.</p>
    <a href="/repairmydevice" className="bg-white text-indigo-800 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition">
      Get Started
    </a>
  </section>
</div>
      </>
    )
  }
  