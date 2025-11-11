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
      //   <footer className="pt-20 pb-7 bg-gray-200"> 
      //   <div className="container mx-auto">
      //     <div className="flex flex-wrap justify-between">
      //       <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
      //         <div className="mb-8">
      //           <div className="flex mb-8">
      //             <a href="#"><img src="/images/company-logo.png" alt="logo" className="dark w-3/5"/></a>
      //           </div>
      //           <div className="mb-12">
      //             <span className="block font-bold">Send Us an Email:</span>
      //             <a href="mailto:inforepairdekho@gmail.com" className="">inforepairdekho@gmail.com</a>
      //           </div>
      //           <div className="mb-8">
      //             <span className="block font-bold">Give Us a Call:</span>
      //             <a href="tel:+8750120761" className="">+91 8750120761</a>
      //           </div>
      //           <div className="mt-10">
      //             <span className="block font-bold">Follow Us</span>
      //             <ul className="flex space-x-4 mt-4">
      //               <li><a href="https://twitter.com/repair_dekho?s=09" target="_blank" className=""><FontAwesomeIcon className="icon tw" icon={faTwitter} /></a></li>
      //               <li><a href="https://www.facebook.com/repairdekho20?mibextid=ZbWKwL" target="_blank" className=""><FontAwesomeIcon className="icon fac" icon={faFacebookF} /></a></li>
      //               <li><a href="https://youtube.com/@repairdekho" target="_blank" className=""><FontAwesomeIcon className="icon you" icon={faYoutube} /></a></li>
      //               <li><a href="https://www.linkedin.com/in/repair-dekho-31a15b238" target="_blank" className=""><FontAwesomeIcon className="icon lin" icon={faLinkedin} /></a></li>
      //               <li><a href="https://instagram.com/repairdekho20?igshid=NTc4MTIwNjQ2YQ==" target="_blank" className=""><FontAwesomeIcon className="icon ins" icon={faInstagram} /></a></li>
      //             </ul>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
      //         <h5 className="font-bold mb-6">Company Links</h5>
      //         <ul>
      //           <li className="mb-2"><Link href="/aboutus" className="" onClick={() => updateLoading(true)}>About Us</Link></li>
      //           <li className="mb-2"><Link href="/repairmydevice" className="" onClick={() => updateLoading(true)}>Repair my device</Link></li>
      //           <li className="mb-2"><Link href="/offers" className="" onClick={() => updateLoading(true)}>Offers</Link></li>
      //           <li className="mb-2"><Link href="/blogs" className="" onClick={() => updateLoading(true)}>Blogs</Link></li>
      //           <li className="mb-2"><Link href="/contactus" className="" onClick={() => updateLoading(true)}>Contact Us</Link></li>
      //         </ul>
      //       </div>
      //       <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
      //         <h5 className="font-bold mb-6">Our Services</h5>
      //         <ul>
      //           <li className="mb-2"><Link href="/repairmydevice" className="" onClick={() => updateLoading(true)}>Mobile</Link></li>
      //           <li className="mb-2"><Link href="/ipads" className="" >Ipad</Link></li>
      //           <li className="mb-2"><Link href="/laptops" className="">Laptops</Link></li>
      //           <li className="mb-2"><Link href="/applewatch" className="" >Apple Watch</Link></li>
      //         </ul>
      //       </div>   
      //       <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
      //         <h5 className="font-bold mb-6">Service Location</h5>
      //         <ul>
      //           <li className="mb-2">Delhi</li>
      //           <li className="mb-2">Noida</li>
      //           <li className="mb-2">Gr Noida</li>
      //           <li className="mb-2">Ghaziabad</li>
      //         </ul>
      //       </div>   
      //     </div>
      //     <div className="pt-5 mt-15 border-t border-gray-700 border-white">
      //       <div className="text-center">
      //         <p className="">© 2022 All Rights Reserved</p>
      //         <ul className="flex justify-center space-x-4 mt-4">
      //           <li><Link href="/termsandconditions" className="">Terms of Use</Link></li>
      //           <li><Link href="/privacyandpolicy" className="">Privacy Policy</Link></li>
      //         </ul>
      //       </div>
      //     </div>
      //   </div>
      // </footer>
      <>
       <footer className="relative bg-black text-gray-400 pt-8 pb-6">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4">
        <h4 className="text-3xl font-bold text-slate-50">repairDekho.</h4>
        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
          Find us on any of these platforms, we respond 1-2 business days.
        </h5>
        <div className="mt-6 lg:mb-0 mb-6 flex gap-2">
          <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <FontAwesomeIcon icon={faTwitter} size="lg" className="text-sky-400"/></button><button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <FontAwesomeIcon icon={faFacebookF} size="lg" className="text-blue-500"/></button><button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <FontAwesomeIcon icon={faYoutube} size="lg" className="text-red-500"/></button><button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <FontAwesomeIcon icon={faInstagram} size="lg" className="text-pink-400"/>
          </button>
        </div>
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top mb-6">
          <div className="w-full lg:w-4/12 px-4 ml-auto">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Free Products</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-blueGray-300"/>
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2021</span>
          <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank"> Notus JS by </a>
          <a href="https://www.creative-tim.com?ref=njs-profile" className="text-blueGray-500 hover:text-blueGray-800">Creative Tim</a>.
        </div>
      </div>
    </div>
  </div>
</footer>
      </>
      
    )
  }
  