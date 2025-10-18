import React from 'react';
import Navbar from './Navbar';
import gmail from "../assets/gmail.png"
import linkedin from "../assets/linkedin.png"
import programming from "../assets/programming.png"
import github from "../assets/github.png"
import freelancer from "../assets/freelancer.png"

const about = [
  { 
    icon: gmail,
    title: "Gmail",
    link: "kshitij.himanshu.fullstack@gmail.com",
  },
  { 
    icon: linkedin,
    title: "Linkedin",
    link: "https://www.linkedin.com/in/kshitij-himanshu-9bba571b1/",
  },
  {
    icon:  programming,
    title: "CodeChef",
    link: "https://www.codechef.com/users/open_woven_64",
  },
  {
    icon:  github,
    title: "GitHub",
    link: "https://github.com/kshitij7320/",
  },
  {
    icon: freelancer ,
    title: "Freelancer",
    link: "https://www.freelancer.in/u/kshitijh",
  },
  {
    icon: freelancer ,
    title: "Truelancer",
    link: "https://www.truelancer.com/freelancer/kshitijhimanshu18",
  },
];

const AboutCard = ({ icon, title, link }) => (
  <div className="relative p-1 rounded-xl bg-gradient-to-tr from-purple-700 via-fuchsia-600 to-indigo-800 shadow-xl">
    <div className="rounded-xl bg-[#19102b] p-6 text-center">
    <img src={icon} alt={title} className="mx-auto mb-2 w-12 h-12 rounded-full shadow-lg bg-white/10 p-2" />
      <h1 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400 mb-2">{title}</h1>
      <h4>
        <a href={link} target="_blank" rel="noopener noreferrer"
          className="text-indigo-400 hover:text-fuchsia-400 underline transition-colors">
          Profile Link
        </a>
      </h4>
    </div>
  </div>
);

const About = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-[#2d0054] to-indigo-900 flex justify-center items-center">
      <div className="grid gap-8 p-8 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {about.map((about, idx) => (
          <AboutCard key={idx} {...about} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default About;
