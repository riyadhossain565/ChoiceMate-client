import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

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
    <div className="bg-[#2f3239]">
      <div className="navbar w-11/12 mx-auto px-6">
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
              className="menu menu-sm dropdown-content text-white bg-[#2f3239] rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="text-2xl text-white">
            ChoiceMate
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal gap-2 text-white">{links}</ul>
        </div>
        <div className="navbar-end">
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
  );
};

export default Navbar;
