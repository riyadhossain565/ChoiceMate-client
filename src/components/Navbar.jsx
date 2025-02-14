import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { AuthContext } from "../Provider/AuthProvider";
import logo from "../assets/logo/logo.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);


  const handleSignOut = () => {
    logOut();
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => `
           px-4 py-2 transition-all ${
             isActive
               ? "font-bold bg-[#ff7361]"
               : "font-bold hover:bg-[#ff7361]"
           }
          `}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/queries"
          className={({ isActive }) => `
           px-4 py-2 transition-all ${
             isActive
               ? "font-bold bg-[#ff7361]"
               : "font-bold hover:bg-[#ff7361]"
           }
          `}
        >
          Queries
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/recommendations-for-me"
            className={({ isActive }) => `
           px-4 py-2 transition-all ${
             isActive
               ? "font-bold bg-[#ff7361]"
               : "font-bold hover:bg-[#ff7361]"
           }
          `}
          >
            Recommendations For Me
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            to="/my-queries"
            className={({ isActive }) => `
           px-4 py-2 transition-all ${
             isActive
               ? "font-bold bg-[#ff7361]"
               : "font-bold hover:bg-[#ff7361]"
           }
          `}
          >
            My Queries
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            to="/my-recommendations"
            className={({ isActive }) => `
           px-4 py-2 transition-all ${
             isActive
               ? "font-bold bg-[#ff7361]"
               : "font-bold hover:bg-[#ff7361]"
           }
          `}
          >
            My recommendations
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="fixed w-full z-10"> 
      <div className="bg-[#2f3239]">
        <div className="navbar md:w-10/12 mx-auto px-0">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="text-2xl p-2 bg-white rounded-xl mr-2 lg:hidden"
              >
                <MdMenu />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content text-white bg-[#2f3239] rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <Link to="/" className="text-2xl text-white flex ite">
              <img className="w-12" src={logo} alt="logo" />
              <span>ChoiceMate</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu-horizontal gap-2 text-white">{links}</ul>
          </div>
          <div className="navbar-end">

          <label className="swap swap-rotate mr-4">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={theme === "light" ? false : true}
          />

          {/* sun icon */}
          <svg
            className="swap-on h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off h-8 w-8 fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>

            {user ? (
              <>
                <div>
                  <img
                    className="w-10 h-10 rounded-full mr-2"
                    title={user?.displayName}
                    src={user?.photoURL}
                    alt="User Profile Photo"
                  />
                </div>
                <button
                  onClick={handleSignOut}
                  className="text-white bg-[#ff7361] px-4 py-2 rounded-lg hover:bg-transparent transition-all font-bold shadow-lg 
                border border-[#ff7361]"
                >
                  Log-out
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="text-white bg-[#ff7361] px-4 py-2 rounded-lg hover:bg-transparent transition-all font-bold shadow-lg border border-[#ff7361]"
              >
                Log-in
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
