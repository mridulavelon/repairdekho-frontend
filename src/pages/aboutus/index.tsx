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
      img: "/images/our-expertise.avif",
      desc: "4+ years in mobile repair. 1000+ devices serviced. Premium quality parts with expert precision.",
    },
    {
      title: "You Break, We Fix",
      img: "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?auto=format&fit=crop&w=300&q=60",
      desc: "We make mobile repair simple, stress-free, and affordable — at your doorstep.",
    },
    {
      title: "Certified Technicians",
      img: "https://img.freepik.com/free-photo/serviceman-uses-magnifier-screwdriver-repair-damaged-smartphone-electronic-workshop_613910-20797.jpg?semt=ais_hybrid&w=740&q=80",
      desc: "Every repair is performed by certified, experienced technicians you can trust.",
    },
    {
      title: "Fast Turnaround",
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=300&q=60",
      desc: "We value your time. Most repairs are completed in less than 2 hours.",
    },
    {
      title: "Genuine Parts",
      img: "https://c8.alamy.com/comp/PEJPYT/disassembled-samsung-galaxy-mobile-phone-showing-various-internal-components-usa-PEJPYT.jpg",
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

      <div className="min-w-0 w-full overflow-x-hidden">
        <div className="bg-white text-gray-800">

          {/* HERO SECTION */}
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 border-b bg-gray-50 w-full overflow-hidden">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
              
              {/* LEFT CONTENT */}
              <div className="text-center md:text-left w-full">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gray-900 break-words leading-tight">Who We Are</h1>
                <p className="text-base sm:text-lg text-gray-600 break-words">
                  At Repair Dekho, we're reshaping how India repairs phones, tablets, laptops, and more — 
                  with certified technicians, doorstep service, and complete transparency.
                </p>
                <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4 break-words">
                  Bringing premium, affordable, and trusted repair solutions to your doorstep — loved by thousands across India.
                </p>

                <a
                  href="/repairmydevice"
                  className="inline-block mt-6 sm:mt-8 bg-indigo-600 text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-indigo-700 transition text-sm sm:text-base"
                >
                  Book a Repair
                </a>
              </div>

              {/* RIGHT IMAGE - HIDDEN ON MOBILE/TABLET */}
              <div className="hidden md:flex justify-center w-full">
                <img
                  src="./images/repair-guy.png"
                  width={400}
                  height={300}
                  alt="Technician repairing mobile phone"
                  className="rounded-xl shadow-lg object-cover max-w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* FEATURES SECTION */}
          <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
                {features.map((f, i) => (
                  <div
                    key={i}
                    className="bg-white border p-5 sm:p-6 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 w-full"
                  >
                    <img
                      src={f.img}
                      alt={f.title}
                      className="w-full h-36 sm:h-40 object-cover rounded-lg mb-3 sm:mb-4"
                    />

                    <h3 className="text-xl sm:text-2xl font-bold mb-2 break-words">{f.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 break-words">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WHAT WE REPAIR */}
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 break-words">What We Repair</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 w-full">
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
                  <div key={i} className="bg-white border p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-lg transition w-full">
                    <img src={s.img} alt={s.title} className="h-36 sm:h-40 w-full object-cover rounded-xl mb-3 sm:mb-4" />
                    <h3 className="text-lg sm:text-xl font-bold mb-2 break-words">{s.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 break-words">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 break-words">How Our Doorstep Repair Works</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 w-full">
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
                  <div key={i} className="text-center w-full">
                    <img src={s.img} alt={s.step} className="h-40 sm:h-44 w-full object-cover rounded-xl mb-3 sm:mb-4" />
                    <h3 className="text-lg sm:text-xl font-bold mb-2 break-words">{s.step}</h3>
                    <p className="text-sm sm:text-base text-gray-600 break-words">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* MISSION & VISION */}
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white border-y w-full overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col gap-12 sm:gap-16 md:gap-20">

                {/* Mission (Image Left + Text Right) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center w-full">
                  
                  {/* Image - Hidden on mobile */}
                  <div className="w-full hidden md:block">
                    <img
                      src="https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?auto=format&fit=crop&w=700&q=60"
                      alt="Mission"
                      className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-2xl shadow"
                    />
                  </div>

                  {/* Text */}
                  <div className="text-center md:text-left w-full">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 break-words">Our Mission</h2>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed break-words">
                      To provide India's most reliable, fast, and affordable device repair service
                      right at your doorstep — with unmatched professionalism, premium parts, and
                      complete transparency.
                    </p>
                  </div>

                </div>

                {/* Vision (Text Left + Image Right) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center w-full">

                  {/* Text */}
                  <div className="text-center md:text-left w-full">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 break-words">Our Vision</h2>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed break-words">
                      A future where repairing your phone is as effortless as ordering food —
                      ultra-fast, secure, doorstep-enabled, and trusted by millions across India.
                    </p>
                  </div>

                  {/* Image - Hidden on mobile */}
                  <div className="w-full hidden md:block">
                    <img
                      src="https://tdsgroup.in/wp-content/uploads/2023/03/our-vision-1170x700-min.jpg"
                      alt="Vision"
                      className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-2xl shadow"
                    />
                  </div>

                </div>

              </div>
            </div>
          </section>

          {/* TEAM */}
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 w-full overflow-hidden">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 break-words">Meet Our Team</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 text-center w-full">
                {team.map((member, i) => (
                  <div key={i} className="bg-white border rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition w-full">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-3 sm:mb-4 object-cover border"
                    />
                    <h4 className="text-lg sm:text-xl font-semibold break-words">{member.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-500 break-words">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WHY PEOPLE LOVE US */}
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-indigo-50 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 break-words">Why Customers Love Repair Dekho</h2>

              <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
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
                  <div key={i} className="bg-white p-5 sm:p-6 shadow-sm border rounded-xl flex flex-col sm:flex-row gap-4 w-full">
                    <img src={s.img} alt={s.title} className="h-32 sm:h-20 w-full sm:w-20 rounded-xl object-cover flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl font-bold mb-2 break-words">{s.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600 break-words">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SERVICES SECTION */}
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 break-words">Our Services</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
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
                  <div key={i} className="bg-white border p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition w-full">
                    <img src={s.img} alt={s.title} className="w-full h-40 sm:h-48 object-cover rounded-lg mb-3 sm:mb-4" />
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 break-words">{s.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 break-words">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* BRANDS */}
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white w-full overflow-hidden">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 break-words">Brands We Repair</h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8 items-center w-full">
                {[
                  {
                    name: "iPhone",
                    img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
                  },
                  {
                    name: "Samsung",
                    img: "https://cdn.logojoy.com/wp-content/uploads/20240909124957/Samsung-logo-1993-600x319.png",
                  },
                  {
                    name: "OnePlus",
                    img: "https://i.gadgets360cdn.com/large/Oneplus_newlogo_main_1584369675960.jpg",
                  },
                  {
                    name: "Xiaomi",
                    img: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg",
                  },
                  {
                    name: "Vivo",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFMw48WLbnwOWZ8PkQDMsburYK4JuB8j-WLw&s",
                  },
                  {
                    name: "Oppo",
                    img: "https://www.adgully.com/img/800/201905/oppo-new-logo.jpg",
                  },
                  {
                    name: "Realme",
                    img: "https://pentagram-production.imgix.net/ab2c89c3-33d6-45a2-b0e7-f4277c4cf5f6/02_logomark.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C6251%2C4167&w=640&crop=1&fm=jpg&q=70&auto=format&fit=crop&h=427",
                  },
                  {
                    name: "Motorola",
                    img: "https://images.squarespace-cdn.com/content/v1/63462d4c4cd8e95bdc630953/77df1569-a57e-4d57-97fa-7fb4abdeea41/Peter-Donnelly-Creative-Director-Brand-Identity-Motorola-Placement-1.jpg",
                  },
                  {
                    name: "Nothing Phone",
                    img: "https://images.indianexpress.com/2021/07/Nothing-logo.jpg",
                  },
                  {
                    name: "ASUS",
                    img: "https://press.asus.com/assets/w_767,h_431/fa3cbcd7-e826-45f9-885e-1d3470be3952/20220801101712676.jpg",
                  },
                ].map((brand, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 shadow-sm border rounded-xl p-4 sm:p-5 text-center flex flex-col items-center hover:shadow-md transition w-full"
                  >
                    <img
                      src={brand.img}
                      alt={brand.name}
                      className="h-8 sm:h-10 w-auto object-contain mb-2 sm:mb-3"
                    />
                    <p className="font-semibold text-gray-700 text-xs sm:text-sm break-words">{brand.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-indigo-600 text-white text-center w-full overflow-hidden">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 break-words">Ready to fix your device?</h2>
              <p className="mb-6 sm:mb-8 text-indigo-100 text-sm sm:text-base break-words">Fast service. Certified experts. No hassle.</p>
              <a
                href="/repairmydevice"
                className="inline-block bg-pink-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-pink-700 transition text-sm sm:text-base"
              >
                Get Started
              </a>
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
    </>
  );
}