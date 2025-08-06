import React, { useState } from 'react';
import { HeartHandshake, Users, GraduationCap, Globe2 } from 'lucide-react';
import volunteer1 from '../../assets/volunteer1.jpg';
import volunteer2 from '../../assets/volunteer2.jpg';
import volunteer3 from '../../assets/volunteer3.jpg';
import successGif from '../../assets/success.gif';

const roles = [
  {
    title: "Education Coordinator",
    front: "Educate underprivileged children.",
    back: "Plan learning modules, conduct classes, and mentor students weekly.",
  },
  {
    title: "Healthcare Support",
    front: "Assist health programs.",
    back: "Coordinate medical camps, assist doctors, and maintain patient records.",
  },
  {
    title: "Fundraising Lead",
    front: "Lead donation drives.",
    back: "Engage with donors, build campaigns, and raise awareness.",
  },
  {
    title: "Event Planner",
    front: "Organize events.",
    back: "Plan logistics, manage teams, and execute workshops.",
  },
];

const volunteers = [
  {
    name: 'Manoj Sharma',
    role: 'Education Coordinator',
    image: volunteer1,
    bio: 'Priya leads our education wing, helping rural kids gain quality education.',
    email: 'priya@pathshala.org',
    experience: '4 years',
    location: 'Lucknow, India',
  },
  {
    name: 'Amit Verma',
    role: 'Healthcare Assistant',
    image: volunteer2,
    bio: 'Amit supports health drives and organizes medical check-ups in villages.',
    email: 'amit@pathshala.org',
    experience: '2 years',
    location: 'Jaipur, India',
  },
  {
    name: 'Neha Singh',
    role: 'Fundraising Coordinator',
    image: volunteer3,
    bio: 'Neha plans and executes fundraising campaigns for better outreach.',
    email: 'neha@pathshala.org',
    experience: '3+ years',
    location: 'Patna, India',
  },
];


const benefits = [
  {
    icon: <HeartHandshake className="h-10 w-10 text-green-600" />,
    title: 'Make a Real Impact',
    description: 'Your time and effort directly contribute to improving lives in underprivileged communities.',
  },
  {
    icon: <Users className="h-10 w-10 text-green-600" />,
    title: 'Build Lifelong Connections',
    description: 'Meet like-minded individuals and expand your professional and personal network.',
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-green-600" />,
    title: 'Gain Experience & Skills',
    description: 'Sharpen your leadership, communication, and organizational skills through real-world work.',
  },
  {
    icon: <Globe2 className="h-10 w-10 text-green-600" />,
    title: 'Be a Global Citizen',
    description: 'Contribute to a global mission of education, equality, and empowerment.',
  },
];

const initialForm = {
  name: '',
  email: '',
  phone: '',
  role: '',
  why: '',
};

export default function Volunteer() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData(initialForm);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-12 text-gray-800">
      <h2 className="text-4xl font-bold text-center text-green-700">Join Pathshala as a Volunteer</h2>

      {/* Volunteer Role Cards */}
      <section>
        <h3 className="text-2xl text-center font-semibold mb-6 text-green-700">Volunteer Roles</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, i) => (
            <div key={i} className="relative group perspective h-52">
              <div className="w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180 rounded-xl shadow-md">
                {/* Front */}
                <div className="absolute w-full h-full backface-hidden bg-green-300 rounded-xl flex flex-col items-center justify-center p-4 text-center">
                  <h4 className="text-lg font-bold text-green-700">{role.title}</h4>
                  <p className="mt-2 text-sm">{role.front}</p>
                </div>
                {/* Back */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-green-700 text-white rounded-xl p-4 flex items-center justify-center">
                  <p className="text-sm">{role.back}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Volunteer Profiles */}
      <section className="bg-gray-50 py-16 px-6" id="volunteer">
      {/* Why Volunteer Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-green-700 mb-4">Why Volunteer With Us?</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Volunteering at Pathshala is more than service—it's a movement to uplift communities through education,
          healthcare, and empowerment. Join hands to create meaningful change.
        </p>
      </div>

      {/* Volunteers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
        {volunteers.map((volunteer, index) => (
          <div
            key={index}
            className="w-[280px] h-[400px] perspective group"
          >
            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute w-full h-full bg-white rounded-xl shadow-lg backface-hidden p-5 flex flex-col items-center text-center">
                <img
                  src={volunteer.image}
                  alt={volunteer.name}
                  className="w-28 h-28 rounded-full object-cover border-4 border-green-600 mt-2"
                />
                <h3 className="mt-4 text-xl font-semibold text-green-700">{volunteer.name}</h3>
                <p className="text-green-500 text-sm">{volunteer.role}</p>
                <p className="text-sm text-gray-600 mt-3 line-clamp-4">{volunteer.bio}</p>
                <span className="mt-auto text-xs text-gray-400">Hover to flip →</span>
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full bg-green-50 rounded-xl shadow-lg rotate-y-180 backface-hidden p-5 flex flex-col justify-center">
                <h4 className="text-lg font-bold text-green-700 mb-2">Details</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li><strong>Email:</strong> {volunteer.email}</li>
                  <li><strong>Experience:</strong> {volunteer.experience}</li>
                  <li><strong>Location:</strong> {volunteer.location}</li>
                </ul>
                <p className="mt-4 text-xs text-gray-400">← Flip back</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* Benefits Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-20 transition-all duration-300">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-4 animate-fade-in-up">
          Why Volunteer With <span className="text-green-500">Pathshala</span>?
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Discover how your support helps transform communities and lives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-2 transition duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4 animate-fade-in-up">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Application Form */}
      <section className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold mb-4 text-green-700">Apply to Become a Volunteer</h3>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          >
            <option value="">Select a Role</option>
            {roles.map((r, i) => (
              <option key={i} value={r.title}>{r.title}</option>
            ))}
          </select>
          <textarea
            name="why"
            value={formData.why}
            onChange={handleChange}
            className="border p-2 rounded"
            placeholder="Why do you want to volunteer?"
            rows="4"
            required
          />
          <button type="submit" className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition">
            Submit
          </button>
        </form>
      </section>

      {/* Animated Congrats */}
      {submitted && (
        <div className="flex flex-col items-center mt-6">
          <img src={successGif} alt="Success" className="h-36 animate-bounce" />
          <p className="text-green-700 text-lg font-semibold mt-2">Thanks for applying! We'll be in touch soon.</p>
        </div>
      )}
    </div>
  );
}
