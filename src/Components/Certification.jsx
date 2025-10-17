import React from 'react';
import Navbar from './Navbar';

const certifications = [
  {
    title: "Introduction to Cybersecurity",
    organization: "Cisco Networking Academy",
    link: "",
  },
  {
    title: "Amazing JavaScript Programming in One Day",
    organization: "Udemy",
    link: "https://drive.google.com/file/d/15xr3mg6rM6bWT_RWHzMKepYIic9zehOw/view?usp=sharing",
  },
  {
    title: "Python and Django For Beginners with Telusko",
    organization: "Udemy",
    link: "https://drive.google.com/file/d/1_H46iTelPRjuHJb27vk9iL8iDmjQTdPY/view?usp=sharing",
  },
  {
    title: "C Programming for beginners – Master the C language",
    organization: "Udemy",
    link: "https://drive.google.com/file/d/12udmWsWdsbNCWMxijWNK8KWkAdzt2Fl0/view?usp=sharing",
  },
  {
    title: "ReactJs - The Complete ReactJs Course For Beginners",
    organization: "Udemy",
    link: "https://drive.google.com/file/d/1k0ZXV74mJ2GhFiRUOqqQGU6iRTZ7yHWS/view?usp=sharing",
  },
  {
    title: "Linux Command Line Terminal Basic For Beginners",
    organization: "Udemy",
    link: "https://drive.google.com/file/d/1n-xsaUi3mDCO-pEHUsEt_t_lo8Qw_Ht4/view?usp=sharing",
  },
];

const CertificateCard = ({ title, organization, link }) => (
  <div className="relative p-1 rounded-xl bg-gradient-to-tr from-purple-700 via-fuchsia-600 to-indigo-800 shadow-xl">
    <div className="rounded-xl bg-[#19102b] p-6 text-center">
      <h1 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400 mb-2">{title}</h1>
      <h2 className="text-sm text-purple-300 mb-4">{organization}</h2>
      <h4>
        <a href={link} target="_blank" rel="noopener noreferrer"
          className="text-indigo-400 hover:text-fuchsia-400 underline transition-colors">
          Certificate Link
        </a>
      </h4>
    </div>
  </div>
);

const Certification = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-[#2d0054] to-indigo-900 flex justify-center items-center">
      <div className="grid gap-8 p-8 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {certifications.map((certification, idx) => (
          <CertificateCard key={idx} {...certification} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Certification;
