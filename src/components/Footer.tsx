import useStore from "@/lib/store";
import { faFacebookF, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  const { updateLoading } = useStore();
  return (
    <footer className="bg-pink-600 text-white w-full overflow-x-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-8 md:py-10">
        
        {/* RESPONSIVE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          
          {/* BRAND + SOCIAL */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-2xl md:text-3xl font-extrabold">repairDekho.</h4>
            <p className="text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0">
              We're available on all social platforms. We usually respond within
              1–2 business days.
            </p>
            <div className="flex gap-3 pt-3 justify-center md:justify-start">
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <FontAwesomeIcon icon={faTwitter} className="text-sky-500 text-lg" />
              </div>
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <FontAwesomeIcon icon={faFacebookF} className="text-blue-600 text-lg" />
              </div>
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <FontAwesomeIcon icon={faYoutube} className="text-red-500 text-lg" />
              </div>
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <FontAwesomeIcon icon={faInstagram} className="text-pink-500 text-lg" />
              </div>
            </div>
          </div>

          {/* USEFUL LINKS */}
          <div className="text-center md:text-left">
            <h5 className="uppercase text-base md:text-lg font-semibold mb-4">
              Useful Links
            </h5>
            <ul className="space-y-3 text-sm md:text-base">
              <li>
                <Link href="/aboutus" className="hover:underline hover:text-gray-200 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:underline hover:text-gray-200 transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* OTHER LINKS */}
          <div className="text-center md:text-left">
            <h5 className="uppercase text-base md:text-lg font-semibold mb-4">
              Other Links
            </h5>
            <ul className="space-y-3 text-sm md:text-base">
              <li>
                <Link href="/terms-and-conditions" className="hover:underline hover:text-gray-200 transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline hover:text-gray-200 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contactus" className="hover:underline hover:text-gray-200 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/40 my-6 md:my-8"></div>

        {/* COPYRIGHT */}
        <p className="text-center text-sm md:text-base">
          © 2025 <span className="font-semibold">repairDekho</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}