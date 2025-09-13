import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const teamMembers = [
  {
    name: "Man Bahadur Roka",
    role: "Business Consultant",
    image: "../../../member_2.jpeg",
    linkedin: "https://np.linkedin.com/in/manroka",
    contact: `Kathmandu, Nepal <br/>
              📧 <a href="mailto:mbroka@maptech.agency" class="text-blue-600 hover:underline">mbroka@viewnepal.com</a><br/>
              📞 <a href="WhatsApp:+977-9851033907" class="text-blue-600 hover:underline">+977-9851033907</a>`
              
  },
  {
    name: "Thomas Roka",
    role: "Designer",
    image: "../../../member_1.jpeg",
    linkedin: "#",
    contact: `Kathmandu, Nepal <br/>
              📧 <a href="mailto:thomasroka@maptech.agency" class="text-blue-600 hover:underline">thomasroka@viewnepal.com</a><br/>
               📞 <a href="WhatsApp:+977-9826119307" class="text-blue-600 hover:underline">+977-9826119307</a>
              `
          
  }

];

const remainingMembers = [
  { name: "Anil Nhemhafuki", role: "MERN Stack Developer", image: "../../../member_6.png", linkedin: "https://www.linkedin.com/in/anil-nhemhafuki-688583292/" },
  { name: "Pawan Bhattarai", role: "Software Engineer/QA", image: "../../../member_9.png", linkedin: "https://www.linkedin.com/in/pawanbhattarai/" },
  { name: "Pranab KC", role: "Software Developer", image: "../../../member_8.png", linkedin: "https://www.linkedin.com/in/pranab-raj-kc-pandey-6a12241b7/" },
  { name: "Shekhar Ghimire", role: "AI/ML Engineer", image: "../../../member_11.png", linkedin: "https://www.linkedin.com/in/shekhar-ghimire-147b401b9/" },
  { name: "Nabin Shrestha", role: "UI/UX Expert / Video Editor", image: "../../../member_7.png", linkedin: "https://www.linkedin.com/in/nabin-shrestha-791354196/" },
  { name: "Abishek Prajapati", role: "Creative Head", image: "../../../member_5.png", linkedin: "https://www.linkedin.com/in/abishekprajapati/" },
  { name: "Samit Nhemhafuki", role: "WordPress Developer", image: "../../../member_10.png", linkedin: "https://www.linkedin.com/in/samit-nhemhafuki/" },
  { name: "Alish Prajapati", role: "Content Writer / SEO Expert", image: "../../../member_4.png", linkedin: "https://www.linkedin.com/in/alish-prajapati-a9a06a342/"}
];

const Team = () => {
  return (
    <section className="py-16 px-4 md:px-8">
<div className="max-w-6xl mx-auto text-center mt-0 pt-0">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Our <span className="text-purple-700">Leaders</span>
        </h2>

        {/* Display the first three team members */}
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 w-72"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-600">{member.role || "Team Member"}</p>
              {member.contact && (
                    <p
                      className="text-gray-500 text-sm mt-2"
                      dangerouslySetInnerHTML={{ __html: member.contact }}
                    ></p>
                  )}
              <div className="flex justify-center gap-4 mt-4">
                {member.linkedin && (
                  <a href={member.linkedin} className="text-blue-700 hover:text-blue-900 transition">
                    <FaLinkedin className="text-xl" />
                  </a>
                )}
                {member.twitter && (
                  <a href={member.twitter} className="text-blue-500 hover:text-blue-700 transition">
                    <FaTwitter className="text-xl" />
                  </a>
                )}
                {member.github && (
                  <a href={member.github} className="text-gray-800 hover:text-gray-900 transition">
                    <FaGithub className="text-xl" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Paragraph before the second team section */}
        <p className="text-gray-700 mt-10 text-lg max-w-3xl mx-auto mb-10 font-semibold bg-yellow-100 p-4 rounded-lg shadow-md">
          We manage and execute projects with our in-house designers and developers based in
          <span className="text-purple-700 font-bold"> Kathmandu, Nepal</span>, ensuring high-quality development.
          Our team delivers <span className="text-purple-700 font-bold">cost-effective solutions</span> while maintaining global standards.
        </p>

        {/* Title for the second team section */}
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-6 mb-8">
          Our <span className="text-purple-700">Leading</span> Developer Team In <span className="text-purple-700">Nepal</span>
        </h3>

        {/* Display the remaining team members */}
        <div className="flex flex-wrap justify-center gap-8">
          {remainingMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 w-72"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-600">{member.role || "Team Member"}</p>
              {member.contact && <p className="text-gray-500 text-sm mt-2">{member.contact}</p>}

              <div className="flex justify-center gap-4 mt-4">
                {member.linkedin && (
                  <a href={member.linkedin} className="text-blue-700 hover:text-blue-900 transition">
                    <FaLinkedin className="text-xl" />
                  </a>
                )}
                {member.twitter && (
                  <a href={member.twitter} className="text-blue-500 hover:text-blue-700 transition">
                    <FaTwitter className="text-xl" />
                  </a>
                )}
                {member.github && (
                  <a href={member.github} className="text-gray-800 hover:text-gray-900 transition">
                    <FaGithub className="text-xl" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
