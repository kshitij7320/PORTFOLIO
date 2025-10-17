import React from 'react';
import Navbar from './Navbar';

const projects = [
  {
    title: "Perplexity-Ai Clone",
    stack: "React.js, TailwindCss, Puter-AI Api",
    link: "https://github.com/kshitij7320/Perplexity-Clone",
  },
  {
    title: "Weather App",
    stack: "React.js, OpenWeather API",
    link: "https://github.com/kshitij7320/weather-app",
  },
  {
    title: "Cryptoplace",
    stack: "React.js, Css, Fetch Api, React-Google-chart ",
    link: "https://github.com/kshitij7320/Cryptoplace",
  },
  {
    title: "Netflix-Clone",
    stack: "React.js, Css, Fetch Api, Firebase ",
    link: "https://github.com/kshitij7320/Netflix-clone",
  },
  {
    title: "Food-Ordering-Website",
    stack: "Html, Css, Jquery, Bootstrap ",
    link: "https://github.com/kshitij7320/Frontendwebsite",
  },
  {
    title: "Rock-Paper-Scissors",
    stack: "Html ,Css ,Javascript ",
    link: "https://github.com/kshitij7320/ROCKPAPERSCISSORS",
  },
];

const ProjectCard = ({ title, stack, link }) => (
  <div className="relative p-1 rounded-xl bg-gradient-to-tr from-purple-700 via-fuchsia-600 to-indigo-800 shadow-xl">
    <div className="rounded-xl bg-[#19102b] p-6 text-center">
      <h1 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400 mb-2">{title}</h1>
      <h2 className="text-sm text-purple-300 mb-4">{stack}</h2>
      <h4>
        <a href={link} target="_blank" rel="noopener noreferrer"
          className="text-indigo-400 hover:text-fuchsia-400 underline transition-colors">
          GitHub Link
        </a>
      </h4>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-[#2d0054] to-indigo-900 flex justify-center items-center">
      <div className="grid gap-8 p-8 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Projects;
