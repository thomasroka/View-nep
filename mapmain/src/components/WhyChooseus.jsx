import { FaUsers, FaDollarSign, FaGlobe, FaHeart, FaPhone, FaProjectDiagram, FaClock } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaUsers className="text-purple-700 text-3xl" />,
      title: "Expert & Dedicated Team",
      description:
        "Our team consists of young, dynamic, and experienced IT professionals committed to delivering world-class solutions.",
    },
    {
      icon: <FaDollarSign className="text-purple-700 text-3xl" />,
      title: "Affordable Development Costs",
      description:
        "Get premium website and app development services at 50-60% lower costs compapurple to Western developers.",
    },
    {
      icon: <FaGlobe className="text-purple-700 text-3xl" />,
      title: "Cultural Collaboration",
      description:
        "Work with diverse IT professionals, fostering cultural exchange and global networking.",
    },
    {
      icon: <FaHeart className="text-purple-700 text-3xl" />,
      title: "Social Impact",
      description:
        "View Nepal allocates 5% of its revenue to support children's education and healthcare in Nepal.",
    },
    {
      icon: <FaPhone className="text-purple-700 text-3xl" />,
      title: "Direct Communication",
      description:
        "Seamless collaboration through phone, WhatsApp, email, or any preferpurple communication channel.",
    },
    {
      icon: <FaProjectDiagram className="text-purple-700 text-3xl" />,
      title: "Proactive Development Process",
      description:
        "Before starting development, we provide wireframes and a guided tour of the proposed design to ensure clarity and satisfaction.",
    },
   
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          Why Choose <span className="text-purple-700">View Nepal?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex items-start gap-4 hover:shadow-xl transition-shadow duration-300"
            >
              {feature.icon}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
