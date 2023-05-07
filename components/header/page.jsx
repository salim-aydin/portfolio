"use client"
import React, { useState, useRef } from 'react';
import Link from 'next/link';

const Header = () => {
const [showDropdown, setShowDropdown] = useState(false);
const timerRef = useRef(null);
const [hoverDropdown, setHoverDropdown] = useState(false);

const handleMouseEnter = () => {
if (timerRef.current) clearTimeout(timerRef.current);
setShowDropdown(true);
};

const handleMouseLeave = () => {
if (hoverDropdown) {
setShowDropdown(false);
} else {
timerRef.current = setTimeout(() => {
setShowDropdown(false);
}, 240);
}
};

const handleDropdownMouseEnter = () => {
setHoverDropdown(true);
};

const handleDropdownMouseLeave = () => {
setHoverDropdown(false);
timerRef.current = setTimeout(() => {
setShowDropdown(false);
}, 100);
};

return (
  <header className="bg-white mt-12">
  <div className="container mx-auto max-w-4xl px-4 py-2 flex justify-between items-center">
    <Link href="/" className="text-3xl font-semibold cursor-pointer">
      Salim Aydın
    </Link>
    <nav className="hidden md:flex space-x-6 text-l">
<Link href="/" className="text-gray-600 hover:text-gray-800 cursor-pointer">
Home
</Link>
<Link href="/about" className="text-gray-600 hover:text-gray-800 cursor-pointer">
About
</Link>
<div
         className="relative group"
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
       >
<div className="text-gray-600 hover:text-gray-800 cursor-pointer">Projects</div>
{showDropdown && (
<div
             className="absolute mt-1 bg-white border border-gray-200 text-gray-600 rounded-md shadow-lg group-hover:block"
             onMouseEnter={handleDropdownMouseEnter}
             onMouseLeave={handleDropdownMouseLeave}
           >
<Link href="/projects/reactt" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
React
</Link>
<Link href="/projects/vue" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
Vue
</Link>
<Link href="/projects/angular" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
Angular
</Link>
<Link href="/projects/other" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
Other
</Link>
</div>
)}
</div>
<Link href="/contact" className="text-gray-600 hover:text-gray-800 cursor-pointer">
Contact
</Link>
<Link href="/codes" className="text-gray-600 hover:text-gray-800 cursor-pointer">
Codes
</Link>
<Link href="/practice" className="text-gray-600 hover:text-gray-800 cursor-pointer">
Practice
</Link>
</nav>
</div>
</header>
);
};

export default Header;