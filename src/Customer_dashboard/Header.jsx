import { useState, useRef, useEffect } from "react";
import { X, Menu } from "lucide-react";
import { HomeIcon, BedDouble, CalendarCheck, Info, Phone } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { NavLink } from "react-router-dom";
import { use } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallOpen, setIsSmallOpen] = useState(false);
  const [isMediumUp, setIsMediumUp] = useState(window.innerWidth >= 768);
  const menuRef = useRef();
  const menuIconRef = useRef();
  const buttonRef = useRef();
  const mobileMenuRef = useRef();
  // Handle menu toggle
  const openMenu = () => {
    setIsOpen(!isOpen);
  };
  const openSmallMenu = () => {
    setIsSmallOpen(!isSmallOpen);
  };
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMediumUp(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // GSAP Animation for Heading
  useGSAP(() => {
    gsap.from(".load", {
      duration: 2, opacity: 0, y: -180
    })

  });
  //GSAP Animation for mobile menu
  useGSAP(() => {
  if (!isSmallOpen || !mobileMenuRef.current) return;

  gsap.fromTo(
    mobileMenuRef.current,
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.5 }
  );
}, [isSmallOpen]);

  // GSAP Animation for Menu Card
  useGSAP(() => {
    if (isOpen) {
      // Open Menu Animation
      gsap.to(
        menuRef.current,
        { opacity: 1, duration: 1, y: 0 }
      );
      // Rotate Menu Button
      gsap.to(menuIconRef.current, { duration: 1, x: 130 });
      //Button Animation
      gsap.to(buttonRef.current, { opacity: 0, duration: 0.2, y: -50 })
    } else {
      // Close Menu Animation
      gsap.to(menuRef.current, { opacity: 0, duration: 0, y: -50 });
      // Reset Menu Button Rotation
      gsap.to(menuIconRef.current, { rotate: 0, duration: 1, x: 0 });
      //Button Animation
      gsap.to(buttonRef.current, { opacity: 1, duration: 1, y: 0 })
    }
  }, [isOpen]);
  return (
    <header className=" text-white py-4 px-6 flex items-center justify-between">

      {/* Logo */}
      <div className="load flex flex-col items-center">
        <p className="text-4xl font-medium font-serif">Luxury</p>
      </div>

      {/* Buttons */}
      <div className="px-4 gap-10 flex justify-around">
        {/* Menu Card */}

        <nav ref={menuRef} className={`absolute flex gap-5 text-white p-2 text-lg right-36`}>
          <NavLink to="/" className="flex gap-1 items-center text-white font-semibold text-xl" onClick={openMenu}><HomeIcon size={16} />Home</NavLink>
          <NavLink to="/aboutus" className="flex gap-1 items-center text-white font-semibold text-xl" onClick={openMenu}><Info size={16} />About</NavLink>
          <NavLink to="/rooms" className="flex gap-1 items-center text-white font-semibold text-xl" onClick={openMenu}><BedDouble size={16} />Rooms</NavLink>
          <NavLink to="/booking" className="flex gap-1 items-center text-white font-semibold text-xl" onClick={openMenu}><CalendarCheck size={16} />Booking</NavLink>

        </nav>
        <button ref={isMediumUp ? menuIconRef : null} onClick={isMediumUp ? openMenu : openSmallMenu} className=" hover:cursor-pointer">
          {
            isMediumUp
              ? (isOpen ? <X size={35} /> : <Menu size={35} />)
              : (isSmallOpen ? <X size={35} /> : <Menu size={35} />)
          }

        </button>
        <NavLink to="/contactus"  ref={buttonRef} className={`md:block hidden bg-white text-[#9D256B] px-4 py-2 rounded-lg font-semibold`}>
          GET STARTED
        </NavLink>

      </div>
      {isSmallOpen && (
  <div
    ref={mobileMenuRef}
    className="md:hidden mobilemenu absolute flex flex-col bg-white gap-5 text-black font-semibold text-xl top-15 h-60 w-60 rounded-lg p-3"
  >
    <NavLink to="/" className="flex gap-1 items-center font-semibold text-xl" onClick={openSmallMenu}><HomeIcon size={16} />Home</NavLink>
    <NavLink to="/aboutus" className="flex gap-1 items-center font-semibold text-xl" onClick={openSmallMenu}><Info size={16} />About Us</NavLink>
    <NavLink to="/rooms" className="flex gap-1 items-center font-semibold text-xl" onClick={openSmallMenu}><BedDouble size={16} />Rooms</NavLink>
    <NavLink to="/booking" className="flex gap-1 items-center font-semibold text-xl" onClick={openSmallMenu}><CalendarCheck size={16} />Booking</NavLink>
    <NavLink to="/contactus" className="flex gap-1 items-center font-semibold text-xl" onClick={openSmallMenu}><Phone size={16} />Contact Us</NavLink>
  </div>
)}

    </header>
  );
};

export default Header;
