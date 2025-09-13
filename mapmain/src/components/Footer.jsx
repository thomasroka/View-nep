import {
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">View Nepal</h3>
            <p className="text-gray-400 text-sm">
              Driving innovation through cutting-edge technology and creative
              solutions.

            </p>
            <p className="text-white-400 text-sm font-bold">
            View Nepal allocates <span className="text-yellow-400">5%</span> of its revenue to support children's education and healthcare in Nepal.
</p>


          </div>

          {/* Quick Links
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/home" },
                { name: "Projects", path: "/projects" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/how-we-work" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Nepal Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nepal Office</h3>
            <div className="space-y-3">
              <p className="text-gray-400 flex justify-start">
                <FaMapMarkerAlt className="mr-3 text-gray-300" />
                <span className="text-gray-500">Kathmandu, Nepal</span>
              </p>
              <p className="text-gray-400 flex justify-start">
                <FaEnvelope className="mr-3 text-gray-300" />
                <a href="mailto:info@viewnepal.com" className="text-gray-500">
                  info@viewnepal.com
                </a>
              </p>
              <p className="text-gray-400 flex justify-start">
                <FaPhone className="mr-3 text-gray-300" />
                <a href="tel:+9779851033907" className="text-gray-500">
                  +977-9851033907/9826119307
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
          © 1995-2025 View Nepal Web Hosting P.Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
