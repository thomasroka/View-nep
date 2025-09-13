import { useState } from "react";
import { FaEnvelope, FaCalendarAlt } from "react-icons/fa";

const Contact = () => {
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [appointmentData, setAppointmentData] = useState({
    fullName: "",
    email: "",
    date: "",
    time: "",
    notes: "",
  });

  const [loadingContact, setLoadingContact] = useState(false);
  const [loadingAppointment, setLoadingAppointment] = useState(false);
  const [popup, setPopup] = useState({ show: false, message: "", success: false });

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  const handleAppointmentChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData({ ...appointmentData, [name]: value });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setLoadingContact(true);

    try {
      const response = await fetch("https://contact.maptech.agency/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactData),
      });

      const result = await response.json();
      setLoadingContact(false);

      if (result.success) {
        setPopup({ show: true, message: "We received your message successfully! We will respond to you soon!", success: true });
        setContactData({ fullName: "", email: "", phone: "", message: "" });
      } else {
        setPopup({ show: true, message: "Error sending message, please try again.", success: false });
      }
    } catch (error) {
      setLoadingContact(false);
      setPopup({ show: true, message: "Error sending message, please try again.", success: false });
    }
  };

  const handleAppointmentSubmit = async (e) => {
    e.preventDefault();
    setLoadingAppointment(true);

    try {
      const response = await fetch("https://contact.maptech.agency/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appointmentData),
      });

      const result = await response.json();
      setLoadingAppointment(false);

      if (result.success) {
        setPopup({ show: true, message: "Your appointment has been successfully booked!", success: true });
        setAppointmentData({ fullName: "", email: "", date: "", time: "", notes: "" });
      } else {
        setPopup({ show: true, message: "Error booking appointment, please try again.", success: false });
      }
    } catch (error) {
      setLoadingAppointment(false);
      setPopup({ show: true, message: "Error booking appointment, please try again.", success: false });
    }
  };

  return (
    <section className="py-16 bg-gray-50 relative">
      {popup.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-md z-50">
          <div className={`bg-white p-6 rounded-lg shadow-lg text-center ${popup.success ? "border-green-500" : "border-red-500"} border-2`}>
            <p className="text-lg font-semibold">{popup.message}</p>
            <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md" onClick={() => setPopup({ show: false, message: "", success: false })}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <FaEnvelope className="text-purple-600 text-3xl" />
              <h2 className="text-2xl font-semibold">Contact Us</h2>
            </div>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <input type="text" name="fullName" value={contactData.fullName} required onChange={handleContactChange} placeholder="Full Name" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
              <input type="email" name="email" value={contactData.email} required onChange={handleContactChange} placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
              <input type="tel" name="phone" value={contactData.phone} required onChange={handleContactChange} placeholder="Phone" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
              <textarea name="message" rows="4" value={contactData.message} required onChange={handleContactChange} placeholder="Your Message" className="w-full px-4 py-2 border border-gray-300 rounded-md"></textarea>
              <button type="submit" disabled={loadingContact} className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700">
                {loadingContact ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <FaCalendarAlt className="text-green-600 text-3xl" />
              <h2 className="text-2xl font-semibold">Book an Appointment</h2>
            </div>
            <form onSubmit={handleAppointmentSubmit} className="space-y-4">
              <input type="text" name="fullName" value={appointmentData.fullName} required onChange={handleAppointmentChange} placeholder="Full Name" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
              <input type="email" name="email" value={appointmentData.email} required onChange={handleAppointmentChange} placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
              <input type="date" name="date" value={appointmentData.date} required onChange={handleAppointmentChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
              <select name="time" value={appointmentData.time} required onChange={handleAppointmentChange} className="w-full px-4 py-2 border border-gray-300 rounded-md">
                <option value="">Choose a time</option>
                <option value="09:00">09:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="14:00">02:00 PM</option>
                <option value="15:00">03:00 PM</option>
                <option value="16:00">04:00 PM</option>
              </select>
              <textarea name="notes" rows="3" value={appointmentData.notes} required onChange={handleAppointmentChange} placeholder="Additional Notes" className="w-full px-4 py-2 border border-gray-300 rounded-md"></textarea>
              <button type="submit" disabled={loadingAppointment} className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700">
                {loadingAppointment ? "Booking..." : "Book Appointment"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
