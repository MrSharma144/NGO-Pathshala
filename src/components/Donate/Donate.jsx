import React, { useState } from 'react';

const Donate = () => {
  const [donors, setDonors] = useState([
    {
      name: 'Aman Verma',
      amount: 1000,
      email: 'aman@example.com',
      message: 'For the children’s future!',
      photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Sneha Sharma',
      amount: 500,
      email: 'sneha@example.com',
      message: 'Keep up the great work!',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Rohit Mehra',
      amount: 2000,
      email: 'rohit@example.com',
      message: 'Glad to contribute!',
      photo: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    message: '',
    photo: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDonor = {
      name: formData.name,
      amount: parseFloat(formData.amount),
      email: formData.email,
      message: formData.message,
      photo: formData.photo || 'https://randomuser.me/api/portraits/lego/2.jpg',
    };

    setDonors([newDonor, ...donors]);
    setFormData({ name: '', email: '', amount: '', message: '', photo: '' });
    setSuccessMessage('🎉 Thank you for your donation!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const toggleExpand = (index) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-green-600 mb-4">Support NGO Pathshala</h2>
      <p className="text-center text-gray-600 mb-10 text-lg">
        Help us educate underprivileged children. Your contribution empowers their future.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-xl p-6 space-y-5 border border-green-200">
        <h3 className="text-2xl font-semibold text-green-600 mb-2">Make a Donation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block font-medium">Donation Amount (INR)</label>
            <input
              type="number"
              name="amount"
              required
              min="1"
              value={formData.amount}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block font-medium">Photo URL (optional)</label>
            <input
              type="text"
              name="photo"
              placeholder="https://your-photo-link.jpg"
              value={formData.photo}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-400"
            />
          </div>
        </div>

        <div>
          <label className="block font-medium">Message (optional)</label>
          <textarea
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition-all duration-300"
        >
          💚 Donate Now
        </button>

        {successMessage && (
          <div className="text-green-600 font-medium text-center mt-4 animate-pulse">
            {successMessage}
          </div>
        )}
      </form>

      {/* Donors */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">🌟 Our Generous Donors</h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {donors.map((donor, index) => (
            <div
              key={index}
              className="bg-white border border-green-200 shadow-md rounded-xl overflow-hidden transition-all duration-500 hover:shadow-lg"
            >
              <div
                className="p-4 flex flex-col items-center cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <img
                  src={donor.photo}
                  alt={donor.name}
                  className="w-24 h-24 rounded-full border-4 border-green-300 object-cover mb-3"
                />
                <h4 className="font-bold text-lg text-green-700">{donor.name}</h4>
                <p className="text-green-500 font-semibold">₹{donor.amount}</p>
                <p className="text-sm text-gray-500">Click to {expandedIndex === index ? 'hide' : 'view'} message</p>
              </div>

              {/* Slide Down Details */}
              <div
                className={`px-5 pb-5 transition-all duration-300 ease-in-out text-sm text-gray-700 ${
                  expandedIndex === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <hr className="my-2 border-green-300" />
                <p><strong>Message:</strong> <em>“{donor.message || 'No message shared'}”</em></p>
                <p className="mt-2"><strong>Email:</strong> {donor.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Donate;
