// import React, { useState } from "react";
// const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// This could be extracted to a separate file if it grows larger
// const NavLink = ({ children, href, current }: any) => (
//   <a
//     href={href}
//     className={`rounded-md px-3 py-2 text-sm font-medium ${
//       current
//         ? "bg-gray-900 text-white"
//         : "text-gray-300 hover:bg-gray-700 hover:text-white"
//     }`}
//     aria-current={current ? "page" : undefined}
//   >
//     {children}
//   </a>
// );

// export default function Navbar() {
//   return (
//     <nav className="bg-gray-800">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           {/* Mobile menu button and logo omitted for brevity */}
//           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//             {/* Logo and menu items omitted for brevity */}
//             <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4">
//                 {/* Navigation Links */}
//                 <NavLink href="#" current>
//                   Dashboard
//                 </NavLink>
//                 <NavLink href="#">Team</NavLink>
//                 <NavLink href="#">Projects</NavLink>
//                 <NavLink href="#">Calendar</NavLink>
//               </div>
//             </div>
//           </div>
//           {/* Profile dropdown and mobile menu omitted for brevity */}
//         </div>
//       </div>
//     </nav>
//   );
// }
"use client";
// import React, { useState } from "react";

// export default function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <>
//       <nav className="bg-gray-800">
//         <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//           <div className="relative flex items-center justify-between h-16">
//             <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//               {/* Mobile menu button */}
//               <button
//                 type="button"
//                 className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//                 aria-controls="mobile-menu"
//                 aria-expanded={isMobileMenuOpen ? "true" : "false"}
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {/* Icon when menu is closed */}
//                 <svg
//                   className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   />
//                 </svg>
//                 {/* Icon when menu is open */}
//                 <svg
//                   className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </div>
//             <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
//               <div className="flex-shrink-0 flex items-center">
//                 <img
//                   className="block lg:hidden h-8 w-auto"
//                   src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
//                   alt="Workflow"
//                 />
//                 <img
//                   className="hidden lg:block h-8 w-auto"
//                   src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
//                   alt="Workflow"
//                 />
//               </div>
//               <div className="hidden sm:block sm:ml-6">
//                 <div className="flex space-x-4">
//                   {/* Navigation links */}
//                   <a
//                     href="#"
//                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Dashboard
//                   </a>
//                   <a
//                     href="#"
//                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Team
//                   </a>
//                   <a
//                     href="#"
//                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Projects
//                   </a>
//                   <a
//                     href="#"
//                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Calendar
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile menu, toggle based on menu state */}
//         <div
//           className={`${isMobileMenuOpen ? "block" : "hidden"} sm:hidden`}
//           id="mobile-menu"
//         >
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             {/* Mobile navigation links */}
//             <a
//               href="#"
//               className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Dashboard
//             </a>
//             <a
//               href="#"
//               className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Team
//             </a>
//             <a
//               href="#"
//               className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Projects
//             </a>
//             <a
//               href="#"
//               className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Calendar
//             </a>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }
// Import React, useState hook, and Next.js Link component
import React, { useState } from "react";
import Link from "next/link";

// Define a TypeScript interface for the link items
interface NavItem {
  name: string;
  href: string;
}

// Define a TypeScript interface for the Navbar props
interface NavbarProps {
  navItems: NavItem[];
}

// Navbar component definition with props
const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icons for menu open/close */}
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
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
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Navigation links for large screens */}
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <Link href={item.href} key={item.name}>
                  <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    {item.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${isMobileMenuOpen ? "block" : "hidden"} sm:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link href={item.href} key={item.name}>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
