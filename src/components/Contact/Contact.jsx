

// // // import React, { useState } from 'react';

// // // export default function Contact() {
// // //   const [submitted, setSubmitted] = useState(false);

// // //   const handleSubmit = e => {
// // //     e.preventDefault();
// // //     setSubmitted(true);
// // //     setTimeout(() => setSubmitted(false), 3000);
// // //   };

// // //   return (
// // //     <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
// // //       <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
// // //         <div className="mt-8 overflow-hidden">
// // //           <div className="grid grid-cols-1 md:grid-cols-2">
// // //             <div className="p-6 mr-2 bg-green-200 sm:rounded-lg">
// // //               <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
// // //                 Get in touch:
// // //               </h1>
// // //               <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
// // //                 Fill in the form to start a conversation
// // //               </p>
// // //               <div className="flex items-center mt-8 text-gray-600">
// // //                 <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
// // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
// // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
// // //                 </svg>
// // //                 <div className="ml-4 text-md tracking-wide font-semibold w-40">
// // //                   NGO Pathshala, 7-Lok Kalyan Marg, New Delhi, 201013
// // //                 </div>
// // //               </div>
// // //               <div className="flex items-center mt-4 text-gray-600">
// // //                 <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
// // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
// // //                 </svg>
// // //                 <div className="ml-4 text-md tracking-wide font-semibold w-40">
// // //                   +44 1234567890
// // //                 </div>
// // //               </div>
// // //               <div className="flex items-center mt-2 text-gray-600">
// // //                 <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
// // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
// // //                 </svg>
// // //                 <div className="ml-4 text-md tracking-wide font-semibold w-40">
// // //                   info@ngopathshala.org
// // //                 </div>
// // //               </div>
// // //             </div>
// // //             <form className="p-6 flex flex-col justify-center" onSubmit={handleSubmit}>
// // //               <div className="flex flex-col">
// // //                 <label htmlFor="name" className="hidden">Full Name</label>
// // //                 <input
// // //                   type="text"
// // //                   name="name"
// // //                   id="name"
// // //                   placeholder="Full Name"
// // //                   className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
// // //                   required
// // //                 />
// // //               </div>
// // //               <div className="flex flex-col mt-2">
// // //                 <label htmlFor="email" className="hidden">Email</label>
// // //                 <input
// // //                   type="email"
// // //                   name="email"
// // //                   id="email"
// // //                   placeholder="Email"
// // //                   className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
// // //                   required
// // //                 />
// // //               </div>
// // //               <div className="flex flex-col mt-2">
// // //                 <label htmlFor="tel" className="hidden">Number</label>
// // //                 <input
// // //                   type="tel"
// // //                   name="tel"
// // //                   id="tel"
// // //                   placeholder="Telephone Number"
// // //                   className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
// // //                 />
// // //               </div>
// // //               <div className="flex flex-col mt-2">
// // //                 <label htmlFor="message" className="hidden">Message</label>
// // //                 <textarea
// // //                   name="message"
// // //                   id="message"
// // //                   placeholder="Your Message"
// // //                   rows="4"
// // //                   className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none resize-none"
// // //                   required
// // //                 />
// // //               </div>
// // //               <button
// // //                 type="submit"
// // //                 className="md:w-32 bg-green-500 text-white font-bold py-3 px-6 rounded-lg mt-3 shadow hover:bg-green-700 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400"
// // //               >
// // //                 {submitted ? "Submitted!" : "Submit"}
// // //               </button>
// // //             </form>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import React from "react";

// // const Contact = () => {
// //   return (
// //     <section className="bg-green-50 py-20 px-6">
// //       <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
// //         {/* Contact Details */}
// //         <div className="md:w-1/2">
// //           <h2 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-6 text-center md:text-left">
// //             Get in Touch
// //           </h2>
// //           <p className="text-gray-700 text-lg mb-4 leading-relaxed">
// //             We would love to hear from you! Whether you want to volunteer,
// //             donate, or simply learn more about Pathshala, feel free to reach
// //             out to us.
// //           </p>

// //           <div className="space-y-4 text-gray-800">
// //             <div className="flex items-start gap-4">
// //               <span className="text-green-600 text-xl">📍</span>
// //               <p>
// //                 <strong>Pathshala Foundation</strong><br />
// //                 21 Harmony Lane, Shivpuri, Delhi 110059, India
// //               </p>
// //             </div>
// //             <div className="flex items-start gap-4">
// //               <span className="text-green-600 text-xl">📞</span>
// //               <p>+91 98765 43210</p>
// //             </div>
// //             <div className="flex items-start gap-4">
// //               <span className="text-green-600 text-xl">✉️</span>
// //               <p>contact@pathshala.org</p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Image or Map */}
// //         <div className="md:w-1/2">
// //           <div className="rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-300">
// //             <img
// //               src="/assets/contact-map.jpg" // <-- Save this in your public/assets folder
// //               alt="Pathshala Location"
// //               className="object-cover w-full h-full"
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Contact;

// import React, { useState } from 'react';

// const Contact = () => {
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormSubmitted(true);
//     setTimeout(() => {
//       setFormSubmitted(false);
//     }, 3000);
//   };

//   return (
//     <section className="bg-green-50 py-20 px-6" id="contact">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
//           Contact Us
//         </h2>

//         <div className="flex flex-col md:flex-row gap-12">
//           {/* Map and Address */}
//           <div className="md:w-1/2 space-y-6">
//             <div className="rounded-lg shadow-lg overflow-hidden">
//               <iframe
//                 className="w-full h-48 md:h-60"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.500943680379!2d77.2090218!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce377c2dc68cb%3A0xf8a34b1479c3c8b6!2sShivpuri%2C%20Delhi!5e0!3m2!1sen!2sin!4v1691700000000!5m2!1sen!2sin"
//                 allowFullScreen=""
//                 loading="lazy"
//                 title="Pathshala Location"
//               ></iframe>
//             </div>

//             <div className="bg-white p-5 rounded-md shadow-md text-gray-700 space-y-3">
//               <p className="flex items-start gap-2">
//                 📍
//                 <span>
//                   <strong>Pathshala Foundation</strong><br />
//                   21 Harmony Lane, Shivpuri, Delhi 110059
//                 </span>
//               </p>
//               <p className="flex items-center gap-2">📞 +91 98765 43210</p>
//               <p className="flex items-center gap-2">✉️ contact@pathshala.org</p>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
//             {formSubmitted ? (
//               <div className="text-center animate-bounce text-green-600 text-xl font-semibold">
//                 🎉 Thank you! We'll reach out soon.
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <div>
//                   <label className="block mb-1 font-medium text-green-700">Name</label>
//                   <input
//                     type="text"
//                     required
//                     className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
//                   />
//                 </div>
//                 <div>
//                   <label className="block mb-1 font-medium text-green-700">Email</label>
//                   <input
//                     type="email"
//                     required
//                     className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
//                   />
//                 </div>
//                 <div>
//                   <label className="block mb-1 font-medium text-green-700">Subject</label>
//                   <input
//                     type="text"
//                     required
//                     className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
//                   />
//                 </div>
//                 <div>
//                   <label className="block mb-1 font-medium text-green-700">Message</label>
//                   <textarea
//                     rows="4"
//                     required
//                     className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
//                   ></textarea>
//                 </div>
//                 <button
//                   type="submit"
//                   className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:scale-105 transition-all duration-200"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React, { useState } from 'react';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <section
      className="relative py-20 px-6 bg-gradient-to-br from-green-200 via-green-150 to-green-300 overflow-hidden"
      id="contact"
    >
      {/* Decorative background circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-green-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-green-700 rounded-full opacity-10 blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12 drop-shadow-lg">
          Contact Us
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Map and Address */}
          <div className="md:w-1/2 space-y-6">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <iframe
                className="w-full h-40 md:h-80"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.500943680379!2d77.2090218!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce377c2dc68cb%3A0xf8a34b1479c3c8b6!2sShivpuri%2C%20Delhi!5e0!3m2!1sen!2sin!4v1691700000000!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                title="Pathshala Location"
              ></iframe>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md text-gray-700 space-y-3">
              <p className="flex items-start gap-2">
                📍
                <span>
                  <strong>Pathshala Foundation</strong><br />
                  21 Harmony Lane, Shivpuri, Delhi 110059
                </span>
              </p>
              <p className="flex items-center gap-2">📞 +91 98765 43210</p>
              <p className="flex items-center gap-2">✉️ contact@pathshala.org</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 bg-white p-8 rounded-2xl shadow-xl">
            {formSubmitted ? (
              <div className="text-center animate-bounce text-green-600 text-xl font-semibold">
                🎉 Thank you! We'll reach out soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block mb-1 font-medium text-green-700">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-green-700">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-green-700">Subject</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-green-700">Message</label>
                  <textarea
                    rows="4"
                    required
                    className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:scale-105 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
