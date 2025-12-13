import useStore from "@/lib/store"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter"
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function Footer() {
   const { updateLoading } = useStore();
    return (
<footer className="bg-pink-600 text-slate-100 pt-12 pb-6 border-t border-gray-200">
  <div className="container mx-auto px-6">
    {/* TOP SECTION */}
    <div className="flex flex-wrap gap-10 lg:gap-0 justify-between">
      
      {/* BRAND + SOCIAL */}
      <div className="w-full lg:w-5/12 space-y-4">
        <h4 className="text-3xl font-extrabold">repairDekho.</h4>
        <p className="text-gray-200">
          We’re available on all social platforms. We usually respond within 1–2 business days.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex gap-3 pt-2">
          <button className="bg-white shadow-sm hover:shadow-md transition rounded-full h-10 w-10 flex items-center justify-center">
            <FontAwesomeIcon icon={faTwitter} className="text-sky-500" />
          </button>
          <button className="bg-white shadow-sm hover:shadow-md transition rounded-full h-10 w-10 flex items-center justify-center">
            <FontAwesomeIcon icon={faFacebookF} className="text-blue-600" />
          </button>
          <button className="bg-white shadow-sm hover:shadow-md transition rounded-full h-10 w-10 flex items-center justify-center">
            <FontAwesomeIcon icon={faYoutube} className="text-red-500" />
          </button>
          <button className="bg-white shadow-sm hover:shadow-md transition rounded-full h-10 w-10 flex items-center justify-center">
            <FontAwesomeIcon icon={faInstagram} className="text-pink-500" />
          </button>
        </div>
      </div>

      {/* USEFUL LINKS */}
      <div className="w-full sm:w-1/2 lg:w-3/12">
        <h5 className="uppercase text-sm font-semibold mb-3">Useful Links</h5>
        <ul className="space-y-2">
          <li>
            <Link href="/about-us" className="hover:text-gray-900 font-medium">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-gray-900 font-medium">
              Blog
            </Link>
          </li>
        </ul>
      </div>

      {/* OTHER LINKS */}
      <div className="w-full sm:w-1/2 lg:w-3/12">
        <h5 className="uppercase text-sm font-semibold mb-3">Other Links</h5>
        <ul className="space-y-2">
          <li>
            <Link href="/terms-and-conditions" className="hover:text-gray-900 font-medium">
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link href="/privacy-policy" className="hover:text-gray-900 font-medium">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/contactus" className="hover:text-gray-900 font-medium">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>

    {/* DIVIDER */}
    <hr className="my-8 border-gray-300" />

    {/* BOTTOM COPYRIGHT */}
    <div className="text-center text-sm text-white">
      © 2025 <span className="font-semibold">repairDekho</span>. All rights reserved.
    </div>
  </div>
</footer>      
    )
  }
  