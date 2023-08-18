import { Link, NavLink } from "react-router-dom";
import navLogo from "../../../assets/logo/logo.png";
import { FaAngleRight, FaPlus } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { auth, user, logOut } = useContext(AuthContext)
  console.log(auth);

  const handleLogOut = () => {
    console.log('clicked');
    logOut()
      .then()
      .catch(error => console.log(error));
  }

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar shadow-xl">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <img className="w-20" src={navLogo} alt="navLogo" />
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              InsightQuest
            </h1>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal items-center space-x-5">
              {/* Navbar menu content here */}
              <NavLink
                to="/"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "rgb(14 165 233)",
                  };
                }}
              >
                Home
              </NavLink>
              <FaAngleRight />
              <NavLink
                to="/services"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "rgb(14 165 233)",
                  };
                }}
              >
                Services
              </NavLink>
              <FaAngleRight />
              <NavLink
                to="/about"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "rgb(14 165 233)",
                  };
                }}
              >
                About us
              </NavLink>
              <FaAngleRight />
              <NavLink
                to="contactUs"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "rgb(14 165 233)",
                  };
                }}
              >
                Contact us
              </NavLink>
              <button className="btn btn-sm text-white bg-gradient-to-r from-cyan-500 to-blue-500 h-10">
                <Link to='login'>
                  <FaPlus className="inline-flex items-center" /> Create new
                  survey
                </Link>
              </button>

              {auth.currentUser && <Link > <button onClick={handleLogOut} className="bg-transparent text-black hover:bg-gray-100 hover:text-gray-800 px-3 py-2 border border-white hover:border-transparent rounded">
                Log Out
              </button></Link>}

              {!auth.currentUser &&
                <Link to='/login'> <button className="bg-transparent text-black hover:bg-gray-100 hover:text-gray-800 px-3 py-2 border border-white hover:border-transparent rounded">
                  Login
                </button></Link>}

            </ul>

          </div>
        </div>
        {/* Page content here */}

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 space-y-2">
          {/* Sidebar content here */}
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Services</Link>
          </li>
          <li>
            <Link>About us</Link>
          </li>
          <li>
            <Link>Contact us</Link>
          </li>
          <button className="btn btn-sm text-white rounded-none bg-gradient-to-r from-cyan-500 to-blue-500 h-10">
            <Link to='login'>
              <FaPlus className=" inline-flex items-center" /> Create new survey
            </Link>
          </button>
        </ul>
        {/* <div className="hidden md:flex items-center space-x-4">

          {
            user &&
            <div className="online">
              <div>
                <button className="btn btn-xs">{user.displayName}</button>
              </div>
            </div>
          }
          {user ? <button onClick={handleLogOut} className="bg-transparent text-white hover:bg-gray-100 hover:text-gray-800 px-3 py-2 border border-white hover:border-transparent rounded">
            Logout
          </button> :
            <Link to='/login'> <button className=" text-black hover:bg-gray-100 hover:text-gray-800 px-3 py-2 border border-white hover:border-transparent rounded">
              Login
            </button></Link>}


        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
