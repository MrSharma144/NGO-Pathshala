import React from "react";
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import goal from "../../assets/goal.png"
import vision from "../../assets/vision.png"
import mission from "../../assets/mission.png"
import volunteer1 from '../../assets/volunteer1.jpg';
import volunteer2 from '../../assets/volunteer2.jpg';
import volunteer3 from '../../assets/volunteer3.jpg';
import volunteer4 from '../../assets/volunteer4.jpg'; 

const teamMembers = [
  {
    name: 'Ananya Sharma',
    role: 'Education Coordinator',
    image: volunteer3,
    description:
      'Ananya ensures every child gets personal attention. She designs curriculums and volunteers weekly for mentoring.',
  },
  {
    name: 'Rohit Verma',
    role: 'Healthcare Support',
    image: volunteer2,
    description:
      'Rohit arranges free health camps and first-aid sessions for kids. He partners with local clinics and NGOs.',
  },
  {
    name: 'Megha Patel',
    role: 'Community Outreach Lead',
    image: volunteer4,
    description:
      'Megha organizes neighborhood events and drives to spread awareness about Pathshala’s mission and needs.',
  },
  {
    name: 'Aditya Jain',
    role: 'Technology Facilitator',
    image: volunteer1,
    description:
      'Aditya manages the digital classroom setup and ensures access to online learning for underprivileged children.',
  },
];


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

export default function About() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-green-200 text-gray-800 px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* 1. Introduction */}
        <section className="w-full bg-gradient-to-r from-green-200 to-green-300 py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-8 drop-shadow">
      About <span className="text-green-500">Pathshala</span>
    </h2>

    <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
      <p className="text-lg md:text-xl text-gray-800 leading-relaxed tracking-wide">
        Welcome to <strong>Pathshala</strong> — a sanctuary of learning and love for underprivileged children. 
        Founded with the belief that every child deserves a fair chance at a brighter future, we provide free education, 
        nutritious meals, healthcare support, and life skills training to empower young minds. 
        Our vibrant classrooms are not just places to study—they’re safe spaces filled with joy, curiosity, and creativity.
        <br /><br />
        At Pathshala, volunteers, donors, and educators come together as a family to nurture potential and create real impact. 
        Whether it's a drawing lesson, a storytelling circle, or a health checkup day, every moment at Pathshala is designed 
        to uplift and inspire. We are not just changing lives—we are planting seeds of hope, compassion, and resilience in 
        the hearts of tomorrow’s leaders.
        <br /><br />
        Join us in rewriting destinies. Be a part of something truly magical.
      </p>

      <div className="mt-10 flex justify-center">
        <button className="px-6 py-3 text-white bg-green-500 hover:bg-green-600 font-semibold rounded-full shadow-md transition duration-200 hover:scale-105">
          Become a Volunteer
        </button>
      </div>
    </div>
  </div>
</section>

        {/* 2. Our Mission */}
        <section className="bg-gradient-to-b from-green-50 to-green-100 py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-14">Our Purpose</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Mission */}
      <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-105 duration-300">
        <div className="mb-4 flex justify-center">
          <img src={mission} alt="Mission" className="w-20 h-20" />
        </div>
        <h3 className="text-2xl font-bold text-green-600 mb-3">Our Mission</h3>
        <p className="text-gray-700 leading-relaxed">
          To provide accessible, quality education and holistic support to underprivileged children,
          nurturing them into confident, skilled, and responsible individuals ready to shape a better world.
        </p>
      </div>

      {/* Vision */}
      <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-105 duration-300">
        <div className="mb-4 flex justify-center">
          <img src= {vision} alt="Vision" className="w-20 h-20" />
        </div>
        <h3 className="text-2xl font-bold text-green-600 mb-3">Our Vision</h3>
        <p className="text-gray-700 leading-relaxed">
          A future where every child, regardless of background, has equal access to education, opportunity,
          and the support needed to thrive and contribute positively to society.
        </p>
      </div>

      {/* Goals */}
      <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-105 duration-300">
        <div className="mb-4 flex justify-center">
          <img src={goal} alt="Goals" className="w-20 h-20" />
        </div>
        <h3 className="text-2xl font-bold text-green-600 mb-3">Our Goals</h3>
        <p className="text-gray-700 leading-relaxed">
          Expand to more communities, enrich our curriculum with life-skills training, strengthen healthcare partnerships,
          and continue building a safe, joyful space for learning and growth.
        </p>
      </div>
    </div>
  </div>
</section>



        {/* 4. Achievements */}
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

        {/* 6. Our Team */}
        <section
      className="py-20 px-6 bg-gradient-to-br from-green-100 via-white to-green-200"
      id="team"
    >
      <h2 className="text-4xl font-bold text-center text-green-700 mb-14">
        Meet Our Team
      </h2>

      <div className="max-w-7xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out"
          >
            <div className="w-full h-48 overflow-hidden rounded-xl mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold text-green-700">{member.name}</h3>
            <p className="text-green-500 font-medium mb-2">{member.role}</p>
            <p className="text-gray-700 text-sm">{member.description}</p>
          </div>
        ))}
      </div>
    </section>

      </div>
    </section>
  );
}
