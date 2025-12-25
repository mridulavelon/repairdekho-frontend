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
    updateLoading(false);
  }, []);

  return (
    <>
      <Metaseo
        title="Contact Us"
        description="Contact Us on our specified email inforepairdekho@gmail.com and mobile number +91 8750120761 for your queries and complaints "
        keywords="Contact on your email and phone number"
        metadataBase=""
        urlslug={''}
      />

      <div className="min-w-0 w-full overflow-x-hidden">
        <section className="bg-white text-gray-900 w-full overflow-hidden">
  
          {/* HERO */}
          <div className="w-full bg-gradient-to-b from-[#e6f0ff] to-white
            border-b border-gray-200 py-12 sm:py-16 md:py-20 px-4 sm:px-6 text-center overflow-hidden">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-3 sm:mb-4 break-words px-2 leading-tight">
              We're Here to Help
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto text-base sm:text-lg break-words px-4">
              Reach out to us anytime. We usually respond within a few minutes.
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-14 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-14 w-full">

            {/* LEFT */}
            <div className="flex flex-col justify-center w-full min-w-0">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 break-words">
                Contact Information
              </h2>

              <p className="text-gray-500 leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base break-words">
                Whether you need help with a repair, have a question about pricing, or just
                want to talk — we're always available.
              </p>

              {/* INFO BOXES */}
              <div className="space-y-8 sm:space-y-10 w-full">

                {/* PHONE */}
                <div className="flex items-start space-x-3 sm:space-x-4 w-full min-w-0">
                  <FontAwesomeIcon icon={faPhone} className="text-xl sm:text-2xl text-gray-400 flex-shrink-0 mt-1" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-gray-500">Call Us Anytime</p>
                    <p className="text-base sm:text-lg font-medium mt-1 break-words">
                      +91 8750120761
                    </p>
                  </div>
                </div>

                {/* WHATSAPP */}
                <div className="flex items-start space-x-3 sm:space-x-4 w-full min-w-0">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-xl sm:text-2xl text-gray-400 flex-shrink-0 mt-1" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-gray-500">Chat on WhatsApp</p>
                    <p className="text-base sm:text-lg font-medium mt-1 break-words">
                      +91 8750120761
                    </p>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start space-x-3 sm:space-x-4 w-full min-w-0">
                  <FontAwesomeIcon icon={faEnvelope} className="text-xl sm:text-2xl text-gray-400 flex-shrink-0 mt-1" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-gray-500">Email Us</p>
                    <p className="text-base sm:text-lg font-medium mt-1 break-all">
                      contactusrepairdekho@gmail.com
                    </p>
                  </div>
                </div>

              </div>

              {/* SOCIAL */}
              <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 w-full">
                <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">Follow us for updates</p>
                <div className="flex flex-wrap gap-4 sm:gap-6 text-xl sm:text-2xl">
                  <a className="text-gray-400 hover:text-gray-800 transition" href="#" aria-label="Twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a className="text-gray-400 hover:text-gray-800 transition" href="#" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a className="text-gray-400 hover:text-gray-800 transition" href="#" aria-label="YouTube">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                  <a className="text-gray-400 hover:text-gray-800 transition" href="#" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a className="text-gray-400 hover:text-gray-800 transition" href="#" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT: FORM */}
            <div className="w-full min-w-0">
              <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8 md:p-10 w-full">
                <h3 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6 break-words">
                  Send us a Message
                </h3>

                <Contactform />
              </div>
            </div>

          </div>
        </section>
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