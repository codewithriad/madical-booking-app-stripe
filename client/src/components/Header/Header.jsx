import { CgMenuRight } from "react-icons/cg";
import { RiCloseLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

import { useEffect, useRef, useState } from "react";
import figureImg from "../../assets/images/avatar-icon.png";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const [menu, setMenu] = useState(true);
  const headerRef = useRef(null);
  

  const handleScroll = () => {
    if (window.scrollY > 100) {
      headerRef.current.classList.add("sticky__header");
    } else {
      headerRef.current.classList.remove("sticky__header");
    }
  }

  useEffect(() => {
    handleScroll()
  
    return () => window.removeEventListener("scroll", handleScroll)
  })
  


  const navLinks = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/doctors",
      label: "Doctors",
    },
    {
      path: "services",
      label: "Services",
    },
    {
      path: "/contact",
      label: "Contact",
    },
  ];

  const openMenu = () => {
    return (
      <>
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.path}
              className={(navClass) =>
                navClass.isActive
                  ? "text-primaryColor text-[16px] leading-7 font-semibold"
                  : "text-textColor text-[16px] leading-7 font-medium"
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </>
    );
  };
  return (
    <>
      <header className="header flex items-center" ref={headerRef}>
        <div className="container">
          <div className="flex items-center justify-between">
            {/* {============== logo ==============} */}
            <div>
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            {/* {============== navigation ==============} */}
            <nav className="navigation">
              <ul className="menu sm:hidden md:flex items-center gap-[2.7rem]">
                {navLinks.map((link, index) => {
                  return (
                    <li key={index}>
                      <NavLink
                        to={link.path}
                        className={(navClass) =>
                          navClass.isActive
                            ? "text-primaryColor text-[16px] leading-7 font-semibold"
                            : "text-textColor text-[16px] leading-7 font-medium"
                        }
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
            {/* {============== user section ==============} */}
            <div className="flex justify-center items-center gap-4">
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img
                    src={figureImg}
                    alt="user"
                    className="w-full rounded-full"
                  />
                </figure>
              </Link>

              <Link to="/login">
                <button className="text-white bg-primaryColor px-6 py-2 h-[44px] font-semibold flex items-center justify-center rounded-[50px] cursor-auto">
                  Login
                </button>
              </Link>
              {/* =========== Hamburger menu ============ */}
              <div>
                <div
                  className={`cursor-pointer md:hidden sm:flex`}
                  onClick={() => setMenu(!menu)}
                >
                  {menu ? (
                    <CgMenuRight className="w-7 h-7 transition-transform" />
                  ) : (
                    <RiCloseLine className="w-7 h-7 transition-transform" />
                  )}

                  {!menu && (
                    <div className="flex justify-center items-center flex-col absolute top-[40px] right-[4rem]">
                      <ul>{openMenu()}</ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
