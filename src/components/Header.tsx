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
     <nav className="p-5 bg-white shadow lg:flex lg:items-center lg:justify-between sticky top-0 z-50">
  <div className="flex justify-between items-center w-full lg:w-auto">
    <div className="flex items-center space-x-4">
      <span className="text-3xl cursor-pointer lg:hidden block" onClick={showMenuHandler}>
        <FontAwesomeIcon icon={showMenu ? faClose : faBars} />
      </span>
      <span className="text-2xl cursor-pointer">
        <Link href="/">
          <div className="flex shrink-0 items-center">
            <h2 className="text-3xl text-black font-bold">repairDekho.</h2>
          </div>
        </Link>
      </span>
    </div>

    <div className="flex items-center space-x-4">
      <span className="text-lg cursor-pointer lg:hidden block">
        <button
          className="bg-pink-600 text-white duration-500 px-6 py-2 hover:bg-cyan-500 rounded-lg"
          onClick={handleRouteAuth}
        >
          {status === "authenticated"
            ? userInfo.username === "repairdekhoadmin"
              ? "Admin"
              : `${userInfo.username}`
            : "Login"}
        </button>

        {showDropdown && (
          <div className="absolute mt-2 w-28 right-22 bg-white rounded-md shadow-lg z-10">
            <ul>
              <Link href={userInfo.username === "repairdekhoadmin" ? "/adminpanel" : "/profile"}>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center font-bold">
                  <FontAwesomeIcon icon={faUser} className="mr-2" /> Profile
                </li>
              </Link>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center font-bold"
                onClick={() => signOut()}
              >
                <FontAwesomeIcon icon={faArrowRightFromBracket} className="mr-2" /> Logout
              </li>
            </ul>
          </div>
        )}
      </span>

      <Link href="/cart">
        <span className="text-lg cursor-pointer lg:hidden block">
          <FontAwesomeIcon icon={faCartArrowDown} size="lg" />
        </span>
      </Link>
    </div>
  </div>

  <ul
    className={`lg:flex lg:items-center custom-menu-css lg:z-auto lg:static absolute w-full left-0 lg:w-auto lg:py-0 py-4 lg:pl-0 pl-7 transition-all ease-in duration-500 ${
      showMenu ? "top-16 opacity-100" : "top-[-600px] opacity-100"
    }`}
  >
   
    <li className="my-6 lg:my-0 mx-2 lg:mx-2 xl:mx-4">
      <Link href="/aboutus" className="xl:text-lg lg:text-lg text-black hover:bg-white hover:text-orange-600 font-medium duration-500 px-2 py-2 rounded-md">
        About us
      </Link>
    </li>

    <li className="my-6 lg:my-0 mx-2 lg:mx-2 xl:mx-4">
      <Link href="/repairmydevice" className="xl:text-lg lg:text-lg text-black hover:bg-white hover:text-orange-600 font-medium duration-500 px-2 py-2 rounded-md">
        Repair my device
      </Link>
    </li>

    <li className="my-6 lg:my-0 mx-2 lg:mx-2 xl:mx-4">
      <Link href="/offers" className="xl:text-lg lg:text-lg text-black hover:bg-white hover:text-orange-600 font-medium duration-500 px-2 py-2 rounded-md">
        Offers
      </Link>
    </li>

    <li className="my-6 lg:my-0 mx-2 lg:mx-2 xl:mx-4">
      <Link href="/blogs" className="xl:text-lg lg:text-lg text-black hover:bg-white hover:text-orange-600 font-medium duration-500 px-2 py-2 rounded-md">
        Blogs
      </Link>
    </li>

    <li className="my-6 lg:my-0 mx-2 lg:mx-2 xl:mx-4">
      <Link href="/contactus" className="xl:text-lg lg:text-lg text-black hover:bg-white hover:text-orange-600 font-medium duration-500 px-2 py-2 rounded-md">
        Contact us
      </Link>
    </li>

    <li className="my-6 lg:my-0 mx-2 lg:mx-2 xl:mx-4">
      <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center">
        <FontAwesomeIcon icon={faPhone} onClick={() => handlePhonePad()} />
      </div>
    </li>

    {showMenu === false && (
      <li className="my-6 lg:my-0 mx-2 lg:mx-2 xl:mx-4" onClick={handleRouteAuth}>
        <button className="bg-pink-600 text-white duration-500 px-6 py-2 hover:bg-cyan-500 rounded-lg font-semibold">
          {status === "authenticated"
            ? userInfo.username === "repairdekhoadmin"
              ? "Admin"
              : `${userInfo.username}`
            : "Login"}
        </button>

        {showDropdown && (
          <div className="lg:absolute mt-2 w-24 right-22 bg-white rounded-md shadow-lg z-10">
            <ul>
              <Link href={userInfo.username === "repairdekhoadmin" ? "/adminpanel" : "/profile"}>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center font-bold">
                  <FontAwesomeIcon icon={faUser} className="mr-2" /> Profile
                </li>
              </Link>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center font-bold"
                onClick={() => signOut()}
              >
                <FontAwesomeIcon icon={faArrowRightFromBracket} className="mr-2" /> Logout
              </li>
            </ul>
          </div>
        )}
      </li>
    )}

    {showMenu === false && (
      <li className="xl:mx-4 my-6 lg:my-0 lg:mx-2 lg:block cursor-pointer">
        <Link href="/cart">
          <FontAwesomeIcon icon={faCartArrowDown} size="lg" color="black" />
        </Link>
      </li>
    )}
  </ul>
</nav>

      </>
   

  );
};

export default Header;
