import React, { useState } from 'react'; // This line is already correct and imports React

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full max-w-md">
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-white/60"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-white/60"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-white/60"
          rows={5}
          required
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-white text-blue-500 font-semibold rounded hover:bg-gray-100 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;