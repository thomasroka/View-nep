import {
  FaUsers,
  FaLightbulb,
  FaProjectDiagram,
  FaCode,
  FaMobileAlt,
  FaGlobe,
  FaPalette,
  FaTasks,
  FaCodeBranch,
  FaSyncAlt,
  FaCheckCircle,
  FaUsersCog,
  
} from "react-icons/fa";
import { motion } from "framer-motion";
import { FaBagShopping, FaWebflow } from "react-icons/fa6";

const HowWeWork = () => {
  return (
    <section className=" py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto md:text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          How We Work at <span className="text-purple-700">View Nepal</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
          View Nepal acts as a bridge between <b>international clients</b> and our
          <b> expert developers in Nepal.</b> You can either:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 flex items-start gap-4 hover:shadow-xl transition-shadow duration-300">
            <FaUsers className="text-purple-700 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Hire Dedicated Designers & Developers
              </h3>
              <p className="text-gray-600 mt-2">
                Work directly with skilled professionals for your project.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex items-start gap-4 hover:shadow-xl transition-shadow duration-300">
            <FaProjectDiagram className="text-purple-700 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Assign Your Project
              </h3>
              <p className="text-gray-600 mt-2">
                Let our expert team manage and develop your website or app from
                start to finish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Custom websites & web apps with modern technologies.",
    },
    {
      icon: <FaBagShopping />,
      title: "E-commerce",
      description: "Make modern and fully responsive ecommerce website.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      description: "Android & iOS app development with top frameworks.",
    },
    {
      icon: <FaGlobe />,
      title: "UI/UX Design",
      description:
        "Beautiful, user-friendly interfaces tailopurple to your needs.",
    },
    {
      icon: <FaPalette />,
      title: "Graphic Design",
      description:
        "Stunning visuals and creative designs that captivate your audience.",
    },
    
  ];

  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto md:text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Our <span className="text-purple-700">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow-lg rounded-lg p-6 flex items-start gap-4 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-purple-700 text-4xl">{service.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AgileDevelopment = () => {
  const steps = [
    {
      icon: <FaLightbulb />,
      title: "Idea & Planning",
      description: "Brainstorming and defining project goals.",
    },
    {
      icon: <FaTasks />,
      title: "Backlog Creation",
      description: "Listing tasks and prioritizing development items.",
    },
    {
      icon: <FaCodeBranch />,
      title: "Development Sprints",
      description: "Iterative coding with regular feedback loops.",
    },
    {
      icon: <FaUsersCog />,
      title: "Team Collaboration",
      description: "Developers, designers & testers working together.",
    },
    {
      icon: <FaSyncAlt />,
      title: "Continuous Integration",
      description: "Frequent testing and merging code for stability.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Delivery & Feedback",
      description: "Deploying & refining based on user feedback.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto md:text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Agile <span className="text-purple-700">Development</span> Process
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
          We follow a structured Agile methodology, ensuring flexibility,
          collaboration, and continuous improvement at every step.
        </p>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative bg-white shadow-lg rounded-xl p-6 flex flex-col items-center md:text-center border-t-4 border-purple-700 hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute -top-7 w-14 h-14 bg-purple-700 text-white flex items-center justify-center rounded-full shadow-lg text-2xl">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-8">
                {step.title}
              </h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OurWork = () => {
  return (
    <div>
      <HowWeWork />
      <Services />
      <AgileDevelopment />
    </div>
  );
};

export default OurWork;
