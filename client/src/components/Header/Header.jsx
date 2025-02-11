import { CgMenuRight } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";

import figureImg from "../../assets/images/avatar-icon.png";
import logo from "../../assets/images/logo.png";

const Header = () => {
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
  return (
    <>
      <header className="header flex items-center">
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
              <ul className="menu flex items-center gap-[2.7rem]">
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
          </div>
        </div>

        {/* {============== user section ==============} */}
        <div className="flex justify-center items-center gap-4">
          <Link to="/">
            <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
              <img src={figureImg} alt="user" className="w-full rounded-full" />
            </figure>
          </Link>

          <Link to="/login">
            <button className="text-white bg-primaryColor px-6 py-2 h-[44px] font-semibold flex items-center justify-center rounded-[50px] cursor-auto">
              Login
            </button>
          </Link>

          <div className="">
          <CgMenuRight />
          </div> 
        </div>
      </header>
    </>
  );
};

export default Header;
