import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const DropdownMenu = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      setDropdownOpen(false);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full py-2 pl-3 pr-4 bg-violet-100 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        aria-haspopup="true"
        aria-expanded={isDropdownOpen}
      >
        Techskills{" "}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {isDropdownOpen && (
        <div
          className="absolute z-10 right-0 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdownMenuButton"
        >
          <div className="py-2 text-sm text-gray-700 dark:text-gray-400" role="none">
            <Link
              href="/techskills/html"
              role="menuitem"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={closeDropdown}
            >
              HTML
            </Link>
            <Link
              href="/techskills/css"
              role="menuitem"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={closeDropdown}
            >
              CSS
            </Link>
            <Link
              href="/techskills/javascript"
              role="menuitem"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={closeDropdown}
            >
              JavaScript
            </Link>
            <Link
              href="/techskills/react"
              role="menuitem"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={closeDropdown}
            >
              React
            </Link>
            <Link
              href="/techskills/advanced-react"
              role="menuitem"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={closeDropdown}
            >
              Advanced React
            </Link>
            
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => (
  <nav className="bg-violet-100  dark:bg-gray-900">
    <div className="bg-violet-100 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
      <div className="flex items-center">
        {/* Link to the homepage */}
        <Link href="/"></Link>
        <img src="/webhookicon.png" className="h-8 mr-3" alt="Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Prepare4Tech
        </span>
      </div>
      <button
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-dropdown"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      {/* {isDropdownOpen &&( */}
      <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
        <div className="bg-violet-100 flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-violet-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <Link
              href="/"
              role="menuitem"
              className=" bg-violet-100 block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Home
            </Link>
            <Link
              href="/generator"
              role="menuitem"
              className="bg-violet-100 block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Cover Letter
            </Link>
            <Link
              href="/softskills"
              role="menuitem"
              className="bg-violet-100 block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              
            >
              Softskills
            </Link>
          
            {/* Use the DropdownMenu component for the dropdown */}
            <DropdownMenu />
          

          
        </div>
        
      </div>
    </div>
  </nav>
  
);

export default Navbar;
