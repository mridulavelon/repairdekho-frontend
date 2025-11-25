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
     <section className="bg-white text-gray-900">
  
  {/* HERO */}
<div className="w-full bg-gradient-to-b from-[#e6f0ff] to-white
  border-b border-gray-200 py-20 px-4 text-center">
  <h1 className="text-5xl font-semibold tracking-tight mb-4">
    We're Here to Help
  </h1>
  <p className="text-gray-600 max-w-xl mx-auto text-lg">
    Reach out to us anytime. We usually respond within a few minutes.
  </p>
</div>


  {/* MAIN CONTENT */}
  <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-14">

    {/* LEFT */}
    <div className="flex flex-col justify-center">
      <h2 className="text-3xl font-semibold mb-6">Contact Information</h2>

      <p className="text-gray-500 leading-relaxed mb-10">
        Whether you need help with a repair, have a question about pricing, or just
        want to talk — we’re always available.
      </p>

      {/* INFO BOXES */}
      <div className="space-y-10">

        {/* PHONE */}
        <div className="flex items-start space-x-4">
          <FontAwesomeIcon icon={faPhone} className="text-2xl text-gray-400" />
          <div>
            <p className="text-sm text-gray-500">Call Us Anytime</p>
            <p className="text-lg font-medium mt-1">
              +91 8750120761
            </p>
          </div>
        </div>

        {/* WHATSAPP */}
        <div className="flex items-start space-x-4">
          <FontAwesomeIcon icon={faWhatsapp} className="text-2xl text-gray-400" />
          <div>
            <p className="text-sm text-gray-500">Chat on WhatsApp</p>
            <p className="text-lg font-medium mt-1">
              +91 8750120761
            </p>
          </div>
        </div>

        {/* EMAIL */}
        <div className="flex items-start space-x-4">
          <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-gray-400" />
          <div>
            <p className="text-sm text-gray-500">Email Us</p>
            <p className="text-lg font-medium mt-1">
              contactusrepairdekho@gmail.com
            </p>
          </div>
        </div>

      </div>

      {/* SOCIAL */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-500 mb-4">Follow us for updates</p>
        <div className="flex space-x-6 text-2xl">
          <a className="text-gray-400 hover:text-gray-800 transition" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a className="text-gray-400 hover:text-gray-800 transition" href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a className="text-gray-400 hover:text-gray-800 transition" href="#"><FontAwesomeIcon icon={faYoutube} /></a>
          <a className="text-gray-400 hover:text-gray-800 transition" href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a className="text-gray-400 hover:text-gray-800 transition" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
    </div>

    {/* RIGHT: FORM */}
    <div>
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-10">
        <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>

        <Contactform />
      </div>
    </div>

  </div>
</section>


      </>
    )
}
  