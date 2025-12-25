import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard,
  faArrowRightFromBracket,
  faUserGear,
  faBars,
  faCartArrowDown,
  faClose,
  faPhone,
  faUser,
  faBoxOpen,
  faHome,
  faWrench,
  faTag,
  faRss,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import useStore from '@/lib/store';
import { useRouter } from 'next/router';
import { isMobile } from 'react-device-detect';
import { jwtDecode } from 'jwt-decode';

const Header = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [userInfo, setUserInfo] = useState<any>({});
  const { cart,updateLoading, updateShowLogin } = useStore();
  const phoneNumber = "8750120761";
  const [showDropdown, setShowDropdown] = useState(false);
  const { data: session, status }: any = useSession();

  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  const handlePhonePad = () => {
    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      navigator.clipboard.writeText("8750120761");
    }
    setShowMenu(false);
  };

  const handleRouteAuth = () => {
    if (status === "authenticated") {
      setShowDropdown(!showDropdown);
      setShowMenu(false);
    } else {
      updateShowLogin(true);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      const decoded = jwtDecode(session?.user?.account?.userdetail?.token);
      setUserInfo(decoded);
    }
  }, [status]);

  const handleRouteState = (path: string) => {
    if (router.pathname === path) {
      updateLoading(false);
    } else {
      updateLoading(true);
    }
    setShowMenu(false);
    setShowDropdown(false);
  };

  const handleNavClick = (path: string) => {
    handleRouteState(path);
  };

  return (
    <>
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 w-full">
        {/* Mobile/Tablet Header */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3">
          <button onClick={showMenuHandler} className="text-gray-700 p-2">
            <FontAwesomeIcon icon={faBars} className="text-xl" />
          </button>
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" onClick={() => handleNavClick('/')}>
              <h2 className="text-xl text-gray-800 font-bold">repairDekho.</h2>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={handleRouteAuth} className="text-gray-700">
              <FontAwesomeIcon icon={faUser} className="text-lg" />
            </button>
            <Link href="/cart" onClick={() => handleNavClick('/cart')}>
              <div className="relative">
                <FontAwesomeIcon icon={faCartArrowDown} className="text-lg text-gray-700" />
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cart.length}
                </span>
              </div>
            </Link>
            {showDropdown && (
              <div className="absolute top-14 right-4 w-60 bg-white rounded-lg shadow-xl border border-gray-100 z-50">
                <ul className="py-2">
                  <Link href={userInfo.username === "repairdekhoadmin" ? "/adminpanel" : "/account"} onClick={() => handleNavClick(userInfo.username === "repairdekhoadmin" ? "/adminpanel" : "/account")}>
                    <li className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-100/70 transition-all duration-200 rounded-lg mx-2 text-gray-700 font-semibold">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3">
                        <FontAwesomeIcon icon={faUserGear} />
                      </div>
                      Account
                    </li>
                  </Link>
                  <Link href="/orders" onClick={() => handleNavClick('/orders')}>
                    <li className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-100/70 transition-all duration-200 rounded-lg mx-2 text-gray-700 font-semibold">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-3">
                        <FontAwesomeIcon icon={faBoxOpen} />
                      </div>
                      My Orders
                    </li>
                  </Link>
                  <Link href="/addresses" onClick={() => handleNavClick('/addresses')}>
                    <li className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-100/70 transition-all duration-200 rounded-lg mx-2 text-gray-700 font-semibold">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mr-3">
                        <FontAwesomeIcon icon={faAddressCard} />
                      </div>
                      Manage Address
                    </li>
                  </Link>
                  <li
                    className="flex items-center px-4 py-3 cursor-pointer hover:bg-red-50 transition-all duration-200 rounded-lg mx-2 text-gray-700 font-semibold"
                    onClick={() => signOut()}
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 mr-3">
                      <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    </div>
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-between px-20 py-4">
          <Link href="/" onClick={() => handleNavClick('/')}>
            <h2 className="text-2xl text-black font-bold">repairDekho.</h2>
          </Link>
          <ul className="flex items-center space-x-8">
            <li><Link href="/aboutus" onClick={() => handleNavClick('/aboutus')} className="text-base text-gray-700 hover:text-pink-600 font-medium duration-300">About us</Link></li>
            <li><Link href="/repairmydevice" onClick={() => handleNavClick('/repairmydevice')} className="text-base text-gray-700 hover:text-pink-600 font-medium duration-300">Repair my device</Link></li>
            <li><Link href="/offers" onClick={() => handleNavClick('/offers')} className="text-base text-gray-700 hover:text-pink-600 font-medium duration-300">Offers</Link></li>
            <li><Link href="/blogs" onClick={() => handleNavClick('/blogs')} className="text-base text-gray-700 hover:text-pink-600 font-medium duration-300">Blogs</Link></li>
            <li><Link href="/contactus" onClick={() => handleNavClick('/contactus')} className="text-base text-gray-700 hover:text-pink-600 font-medium duration-300">Contact us</Link></li>
          </ul>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button className="bg-pink-600 text-white duration-500 px-8 py-2.5 hover:bg-pink-700 rounded-full font-medium" onClick={handleRouteAuth}>
                {status === "authenticated"
                  ? userInfo.username === "repairdekhoadmin"
                    ? "Admin"
                    : `${userInfo.username}`
                  : "Login"}
              </button>
              {showDropdown && (
                <div className="absolute mt-3 w-64 bg-white rounded-xl shadow-xl border border-gray-100 z-50 right-0">
                  <ul className="py-2">
                    <Link href={userInfo.username === "repairdekhoadmin" ? "/adminpanel" : "/account"} onClick={() => handleNavClick(userInfo.username === "repairdekhoadmin" ? "/adminpanel" : "/account")}>
                      <li className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-100/70 transition-all duration-200 rounded-lg mx-2 text-gray-700 font-semibold">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3"><FontAwesomeIcon icon={faUserGear} /></div>
                        Account
                      </li>
                    </Link>
                    <Link href="/orders" onClick={() => handleNavClick('/orders')}>
                      <li className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-100/70 transition-all duration-200 rounded-lg mx-2 text-gray-700 font-semibold">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-3"><FontAwesomeIcon icon={faBoxOpen} /></div>
                        My Orders
                      </li>
                    </Link>
                    <Link href="/addresses" onClick={() => handleNavClick('/addresses')}>
                      <li className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-100/70 transition-all duration-200 rounded-lg mx-2 text-gray-700 font-semibold">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mr-3"><FontAwesomeIcon icon={faAddressCard} /></div>
                        Manage Address
                      </li>
                    </Link>
                    <li className="flex items-center px-4 py-3 cursor-pointer hover:bg-red-50 transition-all duration-200 rounded-lg mx-2 text-gray-700 font-semibold" onClick={() => signOut()}>
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 mr-3"><FontAwesomeIcon icon={faArrowRightFromBracket} /></div>
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <Link href="/cart" onClick={() => handleNavClick('/cart')}>
              <div className="relative cursor-pointer">
                <FontAwesomeIcon icon={faCartArrowDown} className="text-2xl text-gray-700" />
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">{cart.length}</span>
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {showMenu && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300" onClick={() => setShowMenu(false)} />
      )}

      {/* Updated Sidebar */}
      <div className={`lg:hidden fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${showMenu ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Top Header - White with Logo and Close */}
        <div className="flex items-center justify-between px-6 py-5 bg-white border-b border-gray-200">
          <h2 className="text-2xl text-pink-600 font-bold">repairDekho.</h2>
          <button onClick={() => setShowMenu(false)} className="text-gray-700 text-2xl">
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>

        {/* Navigation Links - White Background */}
        <nav className="flex-1 px-6 pt-6 pb-8">
          <ul className="space-y-8">
            <li>
              <Link href="/aboutus" onClick={() => handleNavClick('/aboutus')}>
                <div className="flex items-center text-gray-800 text-lg font-medium hover:text-pink-600 transition">
                  <FontAwesomeIcon icon={faHome} className="mr-6 text-xl" />
                  About us
                </div>
              </Link>
            </li>
            <li>
              <Link href="/repairmydevice" onClick={() => handleNavClick('/repairmydevice')}>
                <div className="flex items-center text-gray-800 text-lg font-medium hover:text-pink-600 transition">
                  <FontAwesomeIcon icon={faWrench} className="mr-6 text-xl" />
                  Repair my device
                </div>
              </Link>
            </li>
            <li>
              <Link href="/offers" onClick={() => handleNavClick('/offers')}>
                <div className="flex items-center text-gray-800 text-lg font-medium hover:text-pink-600 transition">
                  <FontAwesomeIcon icon={faTag} className="mr-6 text-xl" />
                  Offers
                </div>
              </Link>
            </li>
            <li>
              <Link href="/blogs" onClick={() => handleNavClick('/blogs')}>
                <div className="flex items-center text-gray-800 text-lg font-medium hover:text-pink-600 transition">
                  <FontAwesomeIcon icon={faRss} className="mr-6 text-xl" />
                  Blogs
                </div>
              </Link>
            </li>
            <li>
              <Link href="/contactus" onClick={() => handleNavClick('/contactus')}>
                <div className="flex items-center text-gray-800 text-lg font-medium hover:text-pink-600 transition">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-6 text-xl" />
                  Contact us
                </div>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Call Us Section - Pink Background */}
        <div className="bg-pink-600 px-6 py-8">
          <button
            onClick={handlePhonePad}
            className="w-full bg-white text-pink-600 rounded-full py-4 flex items-center justify-center shadow-lg hover:bg-gray-50 transition font-semibold text-lg"
          >
            <FontAwesomeIcon icon={faPhone} className="mr-3" />
            Call Us
          </button>
        </div>
      </div>

      <div className="h-[60px]" />
    </>
  );
};

export default Header;