import Metaseo from "@/components/Metaseo";
import useStore from "@/lib/store";
import { useEffect } from "react";

export default function Aboutus() {
  const { updateLoading } = useStore();

  useEffect(() => {
    updateLoading(false);
  }, []);

 const features = [
  {
    title: "Our Expertise",
    img: "https://images.unsplash.com/photo-1581092795360-fd1ca04f7f9b?auto=format&fit=crop&w=300&q=60",
    desc: "4+ years in mobile repair. 1000+ devices serviced. Premium quality parts with expert precision.",
  },
  {
    title: "You Break, We Fix",
    img: "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?auto=format&fit=crop&w=300&q=60",
    desc: "We make mobile repair simple, stress-free, and affordable — at your doorstep.",
  },
  {
    title: "Certified Technicians",
    img: "https://images.unsplash.com/photo-1581091870627-3c97c7200a72?auto=format&fit=crop&w=300&q=60",
    desc: "Every repair is performed by certified, experienced technicians you can trust.",
  },
  {
    title: "Fast Turnaround",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=300&q=60",
    desc: "We value your time. Most repairs are completed in less than 2 hours.",
  },
  {
    title: "Genuine Parts",
    img: "https://images.unsplash.com/photo-1583225272834-7f3f5964a5b8?auto=format&fit=crop&w=300&q=60",
    desc: "We only use manufacturer-grade parts to ensure durability and performance.",
  },
  {
    title: "Data Privacy",
    img: "https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&w=300&q=60",
    desc: "Your data is safe. Repairs happen securely in front of you.",
  },
];


  const team = [
    { name: "Amit Sharma", role: "Lead Technician", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Priya Verma", role: "Customer Success", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Ravi Mehta", role: "Repair Specialist", img: "https://randomuser.me/api/portraits/men/51.jpg" },
  ];

  return (
    <>
      <Metaseo
        title="About Us"
        description="Repair Dekho - India's most trusted device repair service. We offer doorstep repair for phones, tablets, laptops and more. With certified technicians, premium parts, and complete transparency, we make device repair simple and stress-free."
        keywords="mobile repair india, doorstep mobile repair, iphone repair, laptop repair, screen replacement"
        metadataBase=""
        urlslug=""
      />

      <div className="bg-white text-gray-800">

        {/* HERO SECTION */}
      <section className="py-20 px-4 border-b bg-gray-50">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    
    {/* LEFT CONTENT */}
    <div className="text-center md:text-left">
      <h1 className="text-5xl font-bold mb-4 text-gray-900">Who We Are</h1>
      <p className="text-lg text-gray-600">
        At Repair Dekho, we’re reshaping how India repairs phones, tablets, laptops, and more — 
        with certified technicians, doorstep service, and complete transparency.
      </p>
      <p className="text-lg text-gray-600 mt-4">
        Bringing premium, affordable, and trusted repair solutions to your doorstep — loved by thousands across India.
      </p>

      <a
        href="/repairmydevice"
        className="inline-block mt-8 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-indigo-700 transition"
      >
        Book a Repair
      </a>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center">
      <img
        src="./images/repair-guy.png"
        width={400}
        height={300}
        alt="Technician repairing mobile phone"
        className="rounded-xl shadow-lg object-cover"
      />
    </div>
  </div>
</section>

        {/* FEATURES SECTION */}
<section className="py-16 px-4 max-w-7xl mx-auto">
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {features.map((f, i) => (
      <div
        key={i}
        className="bg-white border p-6 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300"
      >
        <img
          src={f.img}
          alt={f.title}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />

        <h3 className="text-2xl font-bold mb-2">{f.title}</h3>
        <p className="text-gray-600">{f.desc}</p>
      </div>
    ))}
  </div>
</section>


        {/* WHAT WE REPAIR */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What We Repair</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Broken Screens",
                img: "https://images.pexels.com/photos/6078121/pexels-photo-6078121.jpeg",
                desc: "Premium OLED and LCD replacements for all major brands.",
              },
              {
                title: "Battery Issues",
                img: "https://images.pexels.com/photos/4792720/pexels-photo-4792720.jpeg",
                desc: "Fast battery replacements with long-lasting performance.",
              },
              {
                title: "Water Damage",
                img: "https://images.pexels.com/photos/6078124/pexels-photo-6078124.jpeg",
                desc: "Complete diagnostics and motherboard-level repair.",
              },
              {
                title: "Camera & Speaker Issues",
                img: "https://images.pexels.com/photos/3825582/pexels-photo-3825582.jpeg",
                desc: "Fix blurry photos, low audio, and microphone problems.",
              },
            ].map((s, i) => (
              <div key={i} className="bg-white border p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
                <img src={s.img} className="h-40 w-full object-cover rounded-xl mb-4" />
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 px-4 bg-gray-50">
          <h2 className="text-4xl font-bold text-center mb-12">How Our Doorstep Repair Works</h2>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                step: "1. Book Your Repair",
                img: "https://images.pexels.com/photos/1435417/pexels-photo-1435417.jpeg",
                desc: "Choose your device, issue & convenient time slot.",
              },
              {
                step: "2. Technician Arrives",
                img: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg",
                desc: "Our certified expert reaches your home/office.",
              },
              {
                step: "3. Repair On-the-Spot",
                img: "https://images.pexels.com/photos/3059748/pexels-photo-3059748.jpeg",
                desc: "Watch the entire repair live — full transparency.",
              },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <img src={s.img} className="h-44 w-full object-cover rounded-xl mb-4" />
                <h3 className="text-xl font-bold mb-2">{s.step}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MISSION & VISION */}
<section className="py-20 px-4 bg-white border-y">

  <div className="max-w-7xl mx-auto flex flex-col gap-20">

    {/* Mission (Image Left + Text Right) */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* Image */}
      <div>
        <img
          src="https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?auto=format&fit=crop&w=700&q=60"
          alt="Mission"
          className="w-full h-72 object-cover rounded-2xl shadow"
        />
      </div>

      {/* Text */}
      <div className="text-center md:text-left">
        <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          To provide India’s most reliable, fast, and affordable device repair service
          right at your doorstep — with unmatched professionalism, premium parts, and
          complete transparency.
        </p>
      </div>

    </div>


    {/* Vision (Text Left + Image Right) */}
    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* Text */}
      <div className="text-center md:text-left order-2 md:order-1">
        <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          A future where repairing your phone is as effortless as ordering food —
          ultra-fast, secure, doorstep-enabled, and trusted by millions across India.
        </p>
      </div>

      {/* Image */}
      <div className="order-1 md:order-2">
        <img
          src="https://images.unsplash.com/photo-1581091870632-6a5a405f0f36?auto=format&fit=crop&w=700&q=60"
          alt="Vision"
          className="w-full h-72 object-cover rounded-2xl shadow"
        />
      </div>

    </div>

  </div>

</section>


        {/* TEAM */}
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

        {/* WHY PEOPLE LOVE US */}
        <section className="py-20 px-4 bg-indigo-50">
          <h2 className="text-4xl font-bold text-center mb-12">Why Customers Love Repair Dekho</h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                title: "Live Repair Experience",
                img: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
                desc: "We repair your device in front of you — no data theft, no hidden steps.",
              },
              {
                title: "Warranty on Every Repair",
                img: "https://images.pexels.com/photos/8867432/pexels-photo-8867432.jpeg",
                desc: "All parts are backed with up to 6 months warranty for peace of mind.",
              },
              {
                title: "Best Pricing in India",
                img: "https://images.pexels.com/photos/3987029/pexels-photo-3987029.jpeg",
                desc: "Affordable repair cost without compromising quality.",
              },
            ].map((s, i) => (
              <div key={i} className="bg-white p-6 shadow-sm border rounded-xl flex gap-4">
                <img src={s.img} className="h-20 w-20 rounded-xl object-cover" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                  <p className="text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Phone Repair",
                img: "https://images.pexels.com/photos/6078123/pexels-photo-6078123.jpeg",
                desc: "Fast and affordable repairs for all phone models.",
              },
              {
                title: "Laptop Repair",
                img: "https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg",
                desc: "Hardware, graphics, and software-level repairs.",
              },
              {
                title: "Tablet Repair",
                img: "https://images.pexels.com/photos/6077655/pexels-photo-6077655.jpeg",
                desc: "Professional repair services for all tablet models.",
              },
            ].map((s, i) => (
              <div key={i} className="bg-white border p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                <img src={s.img} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BRANDS */}
      <section className="py-20 px-4 max-w-6xl mx-auto bg-white">
  <h2 className="text-4xl font-bold text-center mb-12">Brands We Repair</h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
    {[
      {
        name: "iPhone",
        img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      },
      {
        name: "Samsung",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
      },
      {
        name: "OnePlus",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/11/OnePlus_logo.svg",
      },
      {
        name: "Xiaomi",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg",
      },
      {
        name: "Vivo",
        img: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Vivo_logo.svg",
      },
      {
        name: "Oppo",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/13/OPPO_Logo_2019.svg",
      },
      {
        name: "Realme",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Realme_logo.png",
      },
      {
        name: "Motorola",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Motorola_logo.svg",
      },
      {
        name: "Nothing Phone",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Nothing_Logo.svg",
      },
      {
        name: "ASUS",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/ASUS_Logo.svg",
      },
    ].map((brand, i) => (
      <div
        key={i}
        className="bg-gray-50 shadow-sm border rounded-xl p-5 text-center flex flex-col items-center hover:shadow-md transition"
      >
        <img
          src={brand.img}
          alt={brand.name}
          className="h-10 w-auto object-contain mb-3"
        />
        <p className="font-semibold text-gray-700">{brand.name}</p>
      </div>
    ))}
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
  );
}
