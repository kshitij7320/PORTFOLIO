import React from 'react';
import Navbar from './Navbar';

const accomplishments = [
  {
    title: "CodeChef",
    Details: "Solved 50+ DSA Questions",
    link: "https://www.codechef.com/users/open_woven_64",
  },
  {
    title: "Naukri",
    Details: "Naukri Campus Young Turks, 2025",
    link: "https://drive.google.com/file/d/1Vii0lD8j4bbSseS3UrOfsonybH-wlwaA/view?usp=sharing",
  },
];

const AccomplishmentCard = ({ title, Details, link }) => (
  <div className="relative p-1 rounded-xl bg-gradient-to-tr from-purple-700 via-fuchsia-600 to-indigo-800 shadow-xl">
    <div className="rounded-xl bg-[#19102b] p-6 text-center">
      <h1 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400 mb-2">{title}</h1>
      <h2 className="text-sm text-purple-300 mb-4">{Details}</h2>
      <h4>
        <a href={link} target="_blank" rel="noopener noreferrer"
          className="text-indigo-400 hover:text-fuchsia-400 underline transition-colors">
          Link
        </a>
      </h4>
    </div>
  </div>
);

const Accomplishment = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-[#2d0054] to-indigo-900 flex justify-center items-center">
      <div className="grid gap-8 p-8 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {accomplishments.map((accomplishment, idx) => (
          <AccomplishmentCard key={idx} {...accomplishment} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Accomplishment;
