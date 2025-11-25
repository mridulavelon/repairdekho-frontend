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
      <nav className="p-5 bg-orange-500 shadow md:flex md:items-center md:justify-between sticky top-0 z-50">
<div className="flex justify-between items-center w-full md:w-auto">
  <div className="flex items-center space-x-4">
    <span className="text-3xl cursor-pointer md:hidden block" onClick={showMenuHandler}>
      <FontAwesomeIcon icon={showMenu ? faClose : faBars} />
    </span>
    <span className="text-2xl cursor-pointer">
      <Link href="/">
         <div className="flex shrink-0 items-center">
              <h2 className="text-3xl text-white font-bold">repairDekho.</h2>
        </div>
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
      <ul className={`md:flex md:items-center md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 transition-all ease-in duration-500 ${showMenu ? 'top-16 opacity-100' : 'top-[-600px] opacity-100'}`}>
      <li className="my-6 md:my-0 mx-2 lg:mx-2 xl:mx-4">
          <Link href="/" className="xl:text-lg  md:text-xs lg:text-lg sm:text-lg text-white hover:bg-white hover:text-orange-600 font-medium duration-500 px-2 py-2 rounded-md" onClick={() => handleRouteState("/")}>Home</Link>
        </li>
        <li className="my-6 md:my-0 mx-2 lg:mx-2 xl:mx-4">
          <Link href="/aboutus" className="xl:text-lg  md:text-xs lg:text-lg sm:text-lg text-white hover:bg-white hover:text-orange-600 font-medium duration-500 px-2 py-2 rounded-md"  onClick={() => handleRouteState("/aboutus")}>About us</Link>
        </li>
        <li className="my-6 md:my-0 mx-2 lg:mx-2 xl:mx-4">
          <Link href="/repairmydevice" className="xl:text-lg  md:text-xs lg:text-lg sm:text-lg text-white hover:bg-white hover:text-orange-600 font-medium duration-500 px-2 py-2 rounded-md" onClick={() => handleRouteState("/repairmydevice")} >Repair my device</Link>
        </li>
        <li className="my-6 md:my-0 mx-2 lg:mx-2 xl:mx-4">
          <Link href="/offers" className="xl:text-lg  md:text-xs lg:text-lg sm:text-lg text-white hover:bg-white hover:text-orange-600 font-medium duration-500 px-2 py-2 rounded-md" onClick={() => handleRouteState("/offers")}>Offers</Link>
        </li>
        <li className="my-6 md:my-0 mx-2 lg:mx-2 xl:mx-4">
          <Link href="/blogs" className="xl:text-lg  md:text-xs lg:text-lg sm:text-lg text-white hover:bg-white hover:text-orange-600 font-medium duration-500 px-2 py-2 rounded-md" onClick={() => handleRouteState("/blogs")}>Blogs</Link>
        </li>
        <li className="my-6 md:my-0 mx-2 lg:mx-2 xl:mx-4">
          <Link href="/contactus" className="xl:text-lg  md:text-xs lg:text-lg sm:text-lg text-white hover:bg-white hover:text-orange-600 font-medium duration-500 px-2 py-2 rounded-md" onClick={() => handleRouteState("/contactus")}>Contact us</Link>
        </li>
        <li className="my-6 md:my-0 mx-2 lg:mx-2 xl:mx-4">
          <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faPhone}  onClick={() => handlePhonePad()}/>
          </div>
        </li>
        {showMenu === false && (
         <li className="my-6 md:my-0 mx-2 lg:mx-2 xl:mx-4" onClick={handleRouteAuth}>
         <button className="bg-pink-600 text-white duration-500 px-6 py-2 hover:bg-cyan-500 rounded-lg">{status === "authenticated" ? userInfo.username === "repairdekhoadmin" ? "Admin" : `${userInfo.username}` : "Login"}</button>
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
              <FontAwesomeIcon icon={faCartArrowDown} size="lg" color='white' />
            </Link>
          </li>
        )}
      </ul>
    </nav>
      </>
   

  );
};

export default Header;
