import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center flex-shrink-0">
            <img src="./logo.jpeg" alt="Logo" height={40} width={180} />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Our Team", href: "/our-team" },
              { name: "Projects", href: "/projects" },
              { name: "How We Work", href: "/how-we-work" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-gray-600 font-medium transition-colors hover:text-gray-900"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-full font-medium bg-purple-800 text-white hover:bg-blue-900 transform hover:scale-105 transition-all duration-200 shadow-md"
            >
              Start Building
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-50"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="p-4 flex flex-col space-y-4">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Our Team", href: "/our-team" },
              { name: "Projects", href: "/projects" },
              { name: "How We Work", href: "/how-we-work" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 font-medium transition-colors hover:text-gray-900"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-full font-medium bg-purple-800 text-white hover:bg-blue-900 transform hover:scale-105 transition-all duration-200 shadow-md"
            >
              Start Building
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
