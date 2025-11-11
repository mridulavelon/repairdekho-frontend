import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faArrowRightToBracket, faBars, faCartArrowDown, faClose, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import useStore from '@/lib/store';
import { useRouter } from 'next/router';
import { isMobile } from 'react-device-detect';
import { jwtDecode } from 'jwt-decode';

const Header = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [userInfo,setUserInfo] = useState<any>({});
  const { updateLoading,updateShowLogin } = useStore();
  const phoneNumber = "8750120761";
  const [showDropdown,setShowDropdown] = useState(false);
  const { data : session, status } : any = useSession();

  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  const handlePhonePad = () => {
    if (isMobile) {
       window.location.href = `tel:${phoneNumber}`;
     } else {
       navigator.clipboard.writeText("8750120761")
     }
 }

  const handleRouteAuth = () => {
    if(status === "authenticated"){
      setShowDropdown(!showDropdown);
      setShowMenu(false);
    }else{
      updateShowLogin(true);
    }
  }

  useEffect(() => {
    if(status === "authenticated"){
         const decoded = jwtDecode(session?.user?.account?.userdetail?.token);
         setUserInfo(decoded);
    }
  },[status])



  const handleRouteState = (path:string) => {
    if(router.pathname === path){
      updateLoading(false);  
    }else{
      updateLoading(true);
    }
    setShowMenu(false);
    setShowDropdown(false);
  }

  return (
      <>
      {/* <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between sticky top-0 z-50">
<div className="flex justify-between items-center w-full md:w-auto">
  <div className="flex items-center space-x-4">
    <span className="text-3xl cursor-pointer md:hidden block" onClick={showMenuHandler}>
      <FontAwesomeIcon icon={showMenu ? faClose : faBars} />
    </span>
    <span className="text-2xl font-[Poppins] cursor-pointer">
      <Link href="/">
        <img src="/images/company-logo.png" alt="logo" className="w-24 sm:w-32 md:w-32 lg:w-48 xl:w-56" />
      </Link>
    </span>
  </div>
  <div className="flex items-center space-x-4">
    <span className="text-lg cursor-pointer md:hidden block">
      <button className="bg-orange-500 text-white duration-500 px-2 py-2 hover:bg-cyan-500 rounded-lg" onClick={handleRouteAuth}>
      {status === "authenticated" ? userInfo.username === "repairdekhoadmin" ? "Admin" : `${userInfo.username}` : "Login"}
      </button>
      {showDropdown &&
             <div className="absolute mt-2 w-28 right-22 bg-white rounded-md shadow-lg z-10">
             <ul>
             <Link href={userInfo.username === "repairdekhoadmin" ? "/adminpanel" : "/profile"} >
             <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center font-bold">
                 <FontAwesomeIcon icon={faUser} className="mr-2"/> Profile
               </li>
               </Link>
               <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center font-bold" onClick={() => signOut()}>
                 <FontAwesomeIcon icon={faArrowRightFromBracket} className="mr-2" /> Logout
               </li>
             </ul>
           </div>
         }
    </span>
    <Link href="/cart">
    <span className="text-lg cursor-pointer md:hidden block">
        <FontAwesomeIcon icon={faCartArrowDown} size="lg" />
    </span>
    </Link>
  </div>
</div>
      <ul className={`md:flex md:items-center md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 transition-all ease-in duration-500 ${showMenu ? 'top-16 opacity-100' : 'top-[-600px] opacity-100'}`}>
      <li className="my-6 md:my-0 mx-2 lg:mx-2 xl:mx-4">
          <Link href="/" className="xl:text-xl  md:text-xs lg:text-lg sm:text-lg hover:text-cyan-500 duration-500" onClick={() => handleRouteState("/")}>Home</Link>
        </li>
        <li className="my-6 md:my-0 mx-2 lg:mx-2 xl:mx-4">
          <Link href="/aboutus" className="xl:text-xl  md:text-xs lg:text-lg sm:text-lg hover:text-cyan-500 duration-500"  onClick={() => handleRouteState("/aboutus")}>About us</Link>
        </li>
        <li className="my-6 md:my-0 mx-2 lg:mx-2 xl:mx-4">
          <Link href="/repairmydevice" className="xl:text-xl md:text-xs lg:text-lg sm:text-lg hover:text-cyan-500 duration-500" onClick={() => handleRouteState("/repairmydevice")} >Repair my device</Link>
        </li>
        <li className="my-6 md:my-0 mx-2 lg:mx-2 xl:mx-4">
          <Link href="/offers" className="xl:text-xl md:text-xs lg:text-lg sm:text-lg hover:text-cyan-500 duration-500" onClick={() => handleRouteState("/offers")}>Offers</Link>
        </li>
        <li className="my-6 md:my-0 mx-2 lg:mx-2 xl:mx-4">
          <Link href="/blogs" className="xl:text-xl md:text-xs lg:text-lg sm:text-lg hover:text-cyan-500 duration-500" onClick={() => handleRouteState("/blogs")}>Blogs</Link>
        </li>
        <li className="my-6 md:my-0 mx-2 lg:mx-2 xl:mx-4">
          <Link href="/contactus" className="xl:text-xl md:text-xs lg:text-lg  sm:text-lg hover:text-cyan-500 duration-500" onClick={() => handleRouteState("/contactus")}>Contact us</Link>
        </li>
        <li className="my-6 md:my-0 mx-2 lg:mx-2 xl:mx-4">
          <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faPhone}  onClick={() => handlePhonePad()}/>
          </div>
        </li>
        {showMenu === false && (
         <li className="my-6 md:my-0 mx-2 lg:mx-2 xl:mx-4" onClick={handleRouteAuth}>
         <button className="bg-orange-500 text-white duration-500 px-6 py-2 hover:bg-cyan-500 rounded-lg">{status === "authenticated" ? userInfo.username === "repairdekhoadmin" ? "Admin" : `${userInfo.username}` : "Login"}</button>
         {showDropdown && showMenu === false &&
             <div className="lg:absolute mt-2 w-24 right-22 bg-white rounded-md shadow-lg z-10 md:relative">
             <ul>
             <Link href={userInfo.username === "repairdekhoadmin" ? "/adminpanel" : "/profile"}  onClick={() => handleRouteState(userInfo.username === "repairdekhoadmin" ? "/adminpanel" : "/profile")}>
             <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center font-bold">
                 <FontAwesomeIcon icon={faUser} className="mr-2"/> Profile
               </li>
               </Link>
               <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center font-bold" onClick={() => signOut()}>
                 <FontAwesomeIcon icon={faArrowRightFromBracket} className="mr-2" /> Logout
               </li>
             </ul>
           </div>
         }
       </li>
        )}
        {showMenu === false && (
            <li className="xl:mx-4 my-6 md:my-0 lg:mx-2 md:hidden lg:block cursor-pointer">
            <Link href="/cart">
              <FontAwesomeIcon icon={faCartArrowDown} size="lg" />
            </Link>
          </li>
        )}
      </ul>
    </nav> */}
    
    <nav className="bg-orange-500 sticky top-0 z-50 py-1">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Hamburger Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={showMenuHandler}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={showMenu}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${showMenu ? 'hidden' : 'block'} size-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${showMenu ? 'block' : 'hidden'} size-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Brand */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <h2 className="text-3xl text-white font-bold">repairDekho.</h2>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">Dashboard</a>
                <a href="#" className="text-white hover:bg-orange-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
                <a href="#" className="text-white hover:bg-orange-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
                <a href="#" className="text-white hover:bg-orange-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
              </div>
            </div>
          </div>

          {/* Notification/User */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
           <div className="flex items-center space-x-2 px-2">
  {/* Input field - shown only on large screens */}
  <div className="hidden lg:block w-80">
    <input
      type="text"
      placeholder="Search..."
      className="w-full rounded-full shadow-lg px-4 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"
    />
  </div>

  {/* Search Icon - shown on small and medium screens */}
  <div className="block lg:hidden text-white cursor-pointer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 6.65a7.5 7.5 0 010 10.6z" />
    </svg>
  </div>
</div>
            
            <button className="rounded-lg bg-slate-50 px-2 py-2 hover:bg-black hover:text-slate-50 font-semibold" onClick={handleRouteAuth}>
              {status === "authenticated" ? userInfo.username === "repairdekhoadmin" ? "Admin" : `${userInfo.username}` : "Login"}
            </button>
            <button
              type="button"
              className="relative rounded-full bg-pink-600 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white px-2 ml-2"
            >
              <FontAwesomeIcon icon={faUser} className="text-slate-50"/>
            </button>
            {/* <div className="ml-3">
              <button
                type="button"
                className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="size-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e..."
                  alt=""
                />
              </button>
            </div> */}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            
            <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium">Dashboard</a>
            <a href="#" className="text-white hover:bg-orange-600 block rounded-md px-3 py-2 text-base font-medium">Team</a>
            <a href="#" className="text-white hover:bg-orange-600 block rounded-md px-3 py-2 text-base font-medium">Projects</a>
            <a href="#" className="text-white hover:bg-orange-600 block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
          </div>
        </div>
      )}
    </nav>

      </>
   

  );
};

export default Header;
