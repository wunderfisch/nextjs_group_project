
import Link from "next/link";
import { useState } from "react";
 import homeicon from "../../public/homeicon.png"
import Image from "next/image";

const NavBar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleModeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
    // Add logic here to toggle the dark mode for the entire website
    // You can use a CSS class on the body tag or use a global state manager
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <nav className={`bg-gray-800 rounded-lg border-gray-200 ${darkMode ? "dark:bg-gray-900 dark:border-gray-700" : ""}`}>
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <div className="border-b border-gray-700">
          <Link href="/" passHref>
            <span
              className={`self-center text-lg font-semibold whitespace-nowrap ${
                darkMode ? "text-white" : "text-gray-300"
              } hover:text-blue-500 dark:hover:text-blue-500`}
              style={{ padding: "0.5rem", margin: "0.5rem" }}
              onClick={closeDropdown}
            >
              <Image src={homeicon} alt="Homepage Icon" className="icon" width={24} height={24} style={{ marginRight: "0.5rem" }} />
                    Homepage
          
            </span>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="md:hidden">
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-multi-level"
            aria-expanded={isDropdownOpen ? "true" : "false"}
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          </div>
          <div className={`w-full md:w-auto md:block md:flex-grow ${isDropdownOpen ? "block" : "hidden"}`} id="navbar-multi-level">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-700 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-800 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href="/softskills">
                  <span
                    className={`block py-2 pl-3 pr-4 ${
                      darkMode ? "text-white" : "text-gray-300"
                    } rounded hover:bg-gray-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent`}
                    style={{ padding: "0.5rem", margin: "0.5rem" }}
                    onClick={closeDropdown}
                  >
                    Soft Skills
                  </span>
                </Link>
              </li>
              <li>
                <div
                  onClick={toggleDropdown}
                  className={`flex items-center justify-between w-full py-2 pl-3 pr-4 ${
                    darkMode ? "text-gray-300" : "text-gray-300"
                  } border-b border-gray-100 hover:bg-gray-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-600 md:dark:hover:bg-transparent`}
                  aria-expanded={isDropdownOpen ? "true" : "false"}
                  style={{ padding: "0.5rem", margin: "0.5rem" }}
                >
                  Tech Skills
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1 4 4 4-4" />
                  </svg>
                </div>
                <div
                  id="dropdownNavbar"
                  className={`z-10 ${isDropdownOpen ? "block" : "hidden"} font-normal bg-gray-800 md:bg-transparent divide-y divide-gray-100 rounded-lg shadow w-full md:w-44 ${darkMode ? "dark:bg-gray-700 dark:divide-gray-600" : ""}`}
                >
                  <ul className="py-2 text-sm text-gray-300 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                      <Link href="/techskills/html">
                        <span
                          className={`block px-4 py-2 hover:bg-gray-600 ${
                            darkMode ? "dark:hover:bg-gray-500 dark:text-white" : "dark:text-gray-400"
                          }`}
                          onClick={closeDropdown}
                        >
                          HTML
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/techskills/css">
                        <span
                          className={`block px-4 py-2 hover:bg-gray-600 ${
                            darkMode ? "dark:hover:bg-gray-500 dark:text-white" : "dark:text-gray-400"
                          }`}
                          onClick={closeDropdown}
                        >
                          CSS
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/techskills/javascript">
                        <span
                          className={`block px-4 py-2 hover:bg-gray-600 ${
                            darkMode ? "dark:hover:bg-gray-500 dark:text-white" : "dark:text-gray-400"
                          }`}
                          onClick={closeDropdown}
                        >
                          JavaScript
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/techskills/react">
                        <span
                          className={`block px-4 py-2 hover:bg-gray-600 ${
                            darkMode ? "dark:hover:bg-gray-500 dark:text-white" : "dark:text-gray-400"
                          }`}
                          onClick={closeDropdown}
                        >
                          React
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/techskills/advanced-react">
                        <span
                          className={`block px-4 py-2 hover:bg-gray-600 ${
                            darkMode ? "dark:hover:bg-gray-500 dark:text-white" : "dark:text-gray-400"
                          }`}
                          onClick={closeDropdown}
                        >
                          Advanced React
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
