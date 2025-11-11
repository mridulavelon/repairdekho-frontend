import useStore from "@/lib/store";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faMessage } from "@fortawesome/free-regular-svg-icons/faMessage";
import { faRectangleList } from "@fortawesome/free-regular-svg-icons/faRectangleList";
import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faTty } from "@fortawesome/free-solid-svg-icons/faTty";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import Contactform from "./Contactform";
import Metaseo from "@/components/Metaseo";
import Image from "next/image";

export default function Contactus() {
  const { updateLoading } = useStore();
    useEffect(() => {
      updateLoading(false)     
    },[])
    return (
      <>
         <Metaseo
         title="Contact Us"
         description="Contact Us on our specified email inforepairdekho@gmail.com and mobile number +91 8750120761 for your queries and complaints "
         keywords="Contact on your email and phone number"
         metadataBase=""
         urlslug={''}
        />
           {/* <section className="bg-white overflow-x-hidden">
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-cover bg-center w-full" style={{ backgroundImage: 'url("https://t4.ftcdn.net/jpg/05/04/78/25/360_F_504782581_LHwsDbXlrFiiadWC4i15yV2lhbJnB8g0.jpg")' }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <h2 className="relative z-10 text-4xl font-semibold text-white text-center py-20">Contact Us</h2>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between items-start -mx-4">
          <div className="w-full lg:w-1/2 px-4">
            <div className="p-8 rounded-lg shadow-lg bg-white h-full flex flex-col">
              <h4 className="text-3xl font-semibold mb-6">Have a Question? Write a Message</h4>
              <Contactform />
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-4">
            <div className="p-8 rounded-lg shadow-lg bg-white h-full">
              <h2 className="text-3xl font-semibold mb-6">Let's get in touch</h2>
              <p className="text-gray-600 mb-6">We will catch you as early as we receive the message</p>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-600 mb-2">We're Available 24/7. Call Now.</p>
                  <a href="#" className="block text-blue-600 mb-2"><FontAwesomeIcon icon={faTty} /> +918750120761</a>
                  <a href="#" className="block text-blue-600"><FontAwesomeIcon icon={faWhatsapp} /> +918750120761</a>
                </div>
                <div>
                  <p className="text-gray-600 mb-2">Send Us an Email:</p>
                  <a href="#" className="block text-blue-600"><FontAwesomeIcon icon={faEnvelope} /> contactusrepairdekho@gmail.com</a>
                </div>
                <div>
                  <p className="text-gray-600 mb-2">Follow Us</p>
                  <ul className="flex space-x-4">
                    <li><a href="#" className="text-blue-600"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="#" className="text-blue-600"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href="#" className="text-blue-600"><FontAwesomeIcon icon={faYoutube} /></a></li>
                    <li><a href="#" className="text-blue-600"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href="#" className="text-blue-600"><FontAwesomeIcon icon={faInstagram} /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
   <section className="bg-gradient-to-br from-black via-purple-900 to-black text-white py-20 px-4 relative overflow-hidden">
  {/* Background Glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-10 blur-3xl" />

  <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    {/* Left: Contact Info + Form */}
    <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg">
      <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
      <p className="text-lg mb-6 text-gray-200">
        We're here to help! Whether you need a repair, have a question, or just want to say hi — drop us a message. Our support team will respond within 24 hours.
      </p>

      <div className="space-y-4 mb-8 text-sm text-gray-300">
        <p><strong>📍 Address:</strong> 123 Tech Street, New Delhi, India</p>
        <p><strong>📞 Phone:</strong> +91 98765 43210</p>
        <p><strong>✉️ Email:</strong> support@repairdekho.in</p>
      </div>

      {/* Contact Form */}
      <form className="space-y-5">
        <div>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Your Name"
          />
        </div>
        <div>
          <input
            type="email"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Your Email"
          />
        </div>
        <div>
          <textarea
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-white text-indigo-900 font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Send Message
        </button>
      </form>

      {/* Social Links */}
      <div className="flex gap-4 mt-6 text-white">
        <a href="#" aria-label="Facebook" className="hover:text-pink-400 transition">🌐 Facebook</a>
        <a href="#" aria-label="Twitter" className="hover:text-pink-400 transition">🐦 Twitter</a>
        <a href="#" aria-label="Instagram" className="hover:text-pink-400 transition">📸 Instagram</a>
      </div>
    </div>

    {/* Right: Image or Illustration */}
    <div className="flex justify-center md:justify-end">
      <div className="relative w-full h-64 md:h-[28rem] rounded-lg overflow-hidden">
        <Image
          src="/images/contact-illustration.jpg"
          alt="Contact Illustration"
          fill
          className="object-cover rounded-xl"
        />
      </div>
    </div>
  </div>
</section>


      </>
    )
}
  