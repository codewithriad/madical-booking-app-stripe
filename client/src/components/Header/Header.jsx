import { useState } from "react";
import { Link } from "react-router-dom";
import avater from '../../assets/images/avatar-icon.png';
import logo from "../../assets/images/logo.png";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(false);
  const navLinks = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/doctors",
      label: "Find a Doctors",
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

  return (
    <>
      <header className="header">
        <nav className="container">
          <div className="navbar">
            {/* ======== logo ========= */}
            <div className="navbar-start">
              <Link to="/">
                <img src={logo} alt="Logo" className="logo" />
              </Link>
            </div>
            {/* ======== navigation on center ======== */}
            <div className="navbar-center md:flex hidden">
              <ul className="menu menu-horizontal px-1">
                {navLinks.map((items, index) => {
                  return (
                    <li key={index}>
                      <Link to={items.path}>{items.label}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* ============= Hamburger menu =========== */}
            <div className="navbar-end flex justify-end gap-8">
              <figure>
                {user && <img src={avater} className="w-10" alt="login-user" />}
              </figure>
              <button className="btn bg-primaryColor text-white px-6  ">
                <Link to="/contact">Contact</Link>
              </button>
              <div className="flex md:hidden">
                <div className="dropdown relative flex">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex w-8 h-8 focus:outline-none z-20 relative"
                  >
                    {isOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 z-20"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h8m-8 6h16"
                        />
                      </svg>
                    )}
                  </button>
                  {isOpen && (
                    <>
                      {/*=============== Full Screen Overlay =========*/}

                      <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-10"
                        onClick={() => setIsOpen(false)}
                      ></div>

                      {/*============ Dropdown Menu =========*/}
                      <ul className="absolute right-0 bg-base-100 rounded-box z-10 mt-3 w-56 h-auto py-16 shadow flex flex-col justify-center items-center">
                        {navLinks.map((items, index) => (
                          <li key={index} className="hover:text-primaryColor">
                            <Link
                              to={items.path}
                              onClick={() => setIsOpen(false)}
                            >
                              {items.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
