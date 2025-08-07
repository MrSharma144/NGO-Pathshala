

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import {Link} from 'react-router-dom'
import kids1 from '../../assets/kids2.jpg'
import kids2 from '../../assets/kids4.jpg'

const Achievement = ({ label, end }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const props = useSpring({
    from: { number: 0 },
    number: inView ? end : 0,
    delay: 200,
    config: { duration: 1500 },
  });

  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl text-center"
    >
      <animated.h3 className="text-4xl md:text-5xl font-extrabold text-green-700 drop-shadow-md">
        {props.number.to((n) => `${Math.floor(n)}+`)}
      </animated.h3>
      <p className="mt-2 text-lg font-medium text-gray-700">{label}</p>
    </div>
  );
};


const Home = () => {
  return (
    <div className="font-sans">

      {/* Hero Section */}
      <section className="relative bg-green-100 text-green-900 py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">
              Empowering Children Through <span className="text-green-600">Education</span>
            </h1>
            <p className="text-lg mb-6 text-gray-700">
              At Pathshala, we believe that every child deserves the right to quality education. Join us in transforming lives.
            </p>
            <Link to="/donate" className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg text-lg transition">
              💚 Donate Now
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src={kids2}
              alt="Children learning"
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* <Achivements */}
      <section
  id="achievements"
  className="w-full bg-gradient-to-r from-green-100 to-green-50 py-20 px-6"
>
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-12 drop-shadow-sm">
      Achievements at <span className="text-green-600">Pathshala</span>
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
      <Achievement label="Children Educated" end={500} />
      <Achievement label="Health Checkups" end={320} />
      <Achievement label="Volunteers Engaged" end={120} />
      <Achievement label="Workshops Conducted" end={40} />
    </div>
  </div>
</section>

      {/* Features */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-green-600 mb-12">Our Initiatives</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 border border-green-200 rounded-xl shadow hover:shadow-lg transition">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Free Education</h3>
              <p className="text-gray-600">We provide access to quality education for underprivileged children without any cost.</p>
            </div>
            <div className="p-6 border border-green-200 rounded-xl shadow hover:shadow-lg transition">
              <img src="https://cdn-icons-png.flaticon.com/512/201/201623.png" className="w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nutrition Programs</h3>
              <p className="text-gray-600">Healthy minds need healthy bodies. We provide meals to support our students’ growth.</p>
            </div>
            <div className="p-6 border border-green-200 rounded-xl shadow hover:shadow-lg transition">
              <img src="https://cdn-icons-png.flaticon.com/512/3322/3322105.png" className="w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Skill Development</h3>
              <p className="text-gray-600">We empower children with life skills and training to make them self-reliant in the future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-green-50 py-20">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img 
              src={kids1}
              alt="Kids smiling"
              className="rounded-xl shadow-lg h-[200]"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-green-700 mb-4">About Pathshala</h2>
            <p className="text-lg text-gray-700 mb-4">
              Pathshala is a non-profit organization founded with the mission to bring education to the underserved sections of our society. Through community engagement and volunteer programs, we have impacted hundreds of children in rural and urban slums.
            </p>
            <p className="text-lg text-gray-700">
              Our approach blends classroom learning with creative, emotional, and social development to prepare students for a brighter future.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      
<section className="relative w-full h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center" style={ {backgroundImage:`url(${kids1})` }}>
  {/* Overlay */}
  <div className="absolute inset-0 bg-green-400/40 backdrop-blur-sm z-0"></div>

  {/* Content */}
  <div className="relative z-10 max-w-3xl mx-auto text-center px-6 py-10 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
    <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-md mb-4">
      Transform Lives with One Click
    </h2>
    <p className="text-lg text-gray-200 mb-8 leading-relaxed">
      Your support gives children hope, education, and a future they deserve. 
      Together, we can break the cycle of poverty.
    </p>
    <div>
  <Link
    to="/donate"
    className="inline-block px-10 py-3 bg-gradient-to-r from-yellow-300 to-yellow-500 text-green-900 font-bold text-lg rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition duration-300"
  >
    💚 Donate Now
  </Link>
  </div>
  </div>
</section>


    </div>
  );
};

export default Home;
