const Aboutus = () => {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto md:text-center mb-16">
            <span className="text-purple-800 font-semibold tracking-wide uppercase">
              About Us
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              Innovating the Future of Technology
            </h2>
            <p className="text-lg text-gray-600">
              We're a passionate team of innovators, developers, and dreamers
              working to transform the way people interact with technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:text-center">
              <div className="text-4xl font-bold text-purple-800 mb-2">
                100+
              </div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="md:text-center">
              <div className="text-4xl font-bold text-purple-800 mb-2">10+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="md:text-center">
              <div className="text-4xl font-bold text-purple-800 mb-2">95%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/about_2/about.jpg"
                alt="Team collaboration"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 mb-6 text-justify">
  At View Nepal, we are dedicated to fostering sustainable, high-skilled job opportunities for IT professionals in Nepal. Our mission is to:  
</p>  
<ul className="text-gray-600 mb-6 list-disc list-inside">  
  <li>Empower local talent, reducing youth migration by creating career opportunities within Nepal.</li>  
  <li>Strengthen the national economy through IT exports and global collaboration.</li>  
  <li>Give back to the community by supporting children's education and healthcare through charitable initiatives.</li>  
</ul>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
