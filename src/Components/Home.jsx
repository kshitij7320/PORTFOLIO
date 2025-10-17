import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div className='h-screen'>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-[#5223ac] via-[#7c1dc9] to-[#19105c] text-white px-6 py-12 font-sans">
    <div className="max-w-3xl w-full bg-[#271048] bg-opacity-80 rounded-2xl shadow-lg p-8">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 tracking-tight">
        KSHITIJ HIMANSHU
      </h1>
      <p className="text-base md:text-lg mb-6 text-center">
        Entry-level Full Stack Developer skilled in MERN stack (MongoDB, Express.js, React.js, Node.js), REST API development, responsive UI with Material-UI, and database integration. Experienced in deploying projects on GitHub and Firebase, with strong problem-solving and debugging skills.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 text-sm md:text-base">
        <span>Noida</span>
        <span>+91-8789791324</span>
        <span>
          <a href="mailto:kshitij.himanshu.fullstack@gmail.com" className="hover:underline text-blue-300">kshitij.himanshu.fullstack@gmail.com</a>
        </span>
        <span>
          <a href="https://linkedin.com/in/kshitij-himanshu-9bba571b1" className="hover:underline text-blue-300" target="_blank" rel="noreferrer">LinkedIn</a>
        </span>
        <span>
          <a href="https://github.com/kshitij7320" className="hover:underline text-blue-300" target="_blank" rel="noreferrer">GitHub</a>
        </span>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-pink-300">Skills</h2>
        <div className="flex flex-wrap gap-2">
          <span className="bg-purple-800 rounded px-3 py-1 text-xs">Javascript</span>
          <span className="bg-purple-800 rounded px-3 py-1 text-xs">Python</span>
          <span className="bg-purple-800 rounded px-3 py-1 text-xs">HTML5</span>
          <span className="bg-purple-800 rounded px-3 py-1 text-xs">CSS3</span>
          <span className="bg-purple-800 rounded px-3 py-1 text-xs">React.js</span>
          <span className="bg-purple-800 rounded px-3 py-1 text-xs">Bootstrap</span>
          <span className="bg-purple-800 rounded px-3 py-1 text-xs">Material UI</span>
          <span className="bg-purple-800 rounded px-3 py-1 text-xs">Redux Toolkit</span>
          <span className="bg-purple-800 rounded px-3 py-1 text-xs">Tailwind</span>
          <span className="bg-purple-800 rounded px-3 py-1 text-xs">Node.js</span>
          <span className="bg-purple-800 rounded px-3 py-1 text-xs">Express.js</span>
          <span className="bg-purple-800 rounded px-3 py-1 text-xs">MongoDB</span>
          <span className="bg-purple-800 rounded px-3 py-1 text-xs">Firebase</span>
          <span className="bg-purple-800 rounded px-3 py-1 text-xs">Git</span>
          <span className="bg-purple-800 rounded px-3 py-1 text-xs">GitHub</span>
          <span className="bg-purple-800 rounded px-3 py-1 text-xs">VS Code</span>
          <span className="bg-purple-800 rounded px-3 py-1 text-xs">Linux</span>
          <span className="bg-purple-800 rounded px-3 py-1 text-xs">Vite</span>
          <span className="bg-purple-800 rounded px-3 py-1 text-xs">Responsive Web Design</span>
          <span className="bg-purple-800 rounded px-3 py-1 text-xs">DOM Manipulation</span>
          <span className="bg-purple-800 rounded px-3 py-1 text-xs">JSON</span>
          <span className="bg-purple-800 rounded px-3 py-1 text-xs">Fetch Api</span>
          <span className="bg-purple-800 rounded px-3 py-1 text-xs">Axios Api</span>
          <span className="bg-purple-800 rounded px-3 py-1 text-xs">CRUD Api</span>
          <span className="bg-purple-800 rounded px-3 py-1 text-xs">Api Integration</span>
          <span className="bg-purple-800 rounded px-3 py-1 text-xs">NPM</span>
          <span className="bg-purple-800 rounded px-3 py-1 text-xs">Deployment(Vercel,Netlify)</span>
          <span className="bg-purple-800 rounded px-3 py-1 text-xs">Debugging</span>
          <span className="bg-purple-800 rounded px-3 py-1 text-xs">Mongoose</span>
          <span className="bg-purple-800 rounded px-3 py-1 text-xs">CRA</span>
          <span className="bg-purple-800 rounded px-3 py-1 text-xs">DEV Tools</span>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-pink-300">Experience</h2>
        <div className="mb-2">
          <div className="font-semibold">
            Bluestock Fintech - SDE-1 Intern <span className="text-sm text-gray-300">(Jun 2025 - Jul 2025)</span>
          </div>
          <div className="ml-2 text-sm">Created an IPO section using React.js, CSS, Node.js, and Express.js.</div>
        </div>
        <div>
          <div className="font-semibold">
            Bluestock Fintech - SDE-1 Intern <span className="text-sm text-gray-300">(Nov 2024 - Dec 2024)</span>
          </div>
          <div className="ml-2 text-sm">Created a Real-time Stock Exchange Webpage using Python, HTML, CSS, and Django.</div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-pink-300">Projects</h2>
        <ul className="list-disc ml-6 text-base">
          <li>Perplexity AI-Clone (Using Puter AI API) - <a href="https://github.com/kshitij7320/perplexity-ai-clone" className="hover:underline text-blue-300">GitHub</a></li>
          <li>Weather App - <a href="https://github.com/kshitij7320/weather-app" className="hover:underline text-blue-300">GitHub</a></li>
          <li>Food Ordering Website - <a href="https://github.com/kshitij7320/food-ordering" className="hover:underline text-blue-300">GitHub</a></li>
          <li>Rock Paper Scissors Game - <a href="https://github.com/kshitij7320/rock-paper-scissors" className="hover:underline text-blue-300">GitHub</a></li>
          <li>CryptoPlace - <a href="https://github.com/kshitij7320/cryptoplace" className="hover:underline text-blue-300">GitHub</a></li>
          <li>Netflix Clone - <a href="https://github.com/kshitij7320/netflix-clone" className="hover:underline text-blue-300">GitHub</a></li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-pink-300">Education</h2>
        <div>
          <div className="font-semibold">GL Bajaj Institute of Technology and Management, Greater Noida</div>
          <div className="text-sm">B.Tech - Electronics And Communication, 60% (Jul 2025)</div>
        </div>
        <div className="mt-2">
          <div className="font-semibold">R.K. College, Aurangabad</div>
          <div className="text-sm">Higher Secondary - Science, 62% (Mar 2021)</div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-pink-300">Certifications</h2>
        <ul className="list-disc ml-6 text-base">
          <li>Cisco Networking Academy - Introduction to Cybersecurity</li>
          <li>Udemy - Amazing JavaScript Programming in One Day.</li>
          <li>Udemy - Python and Django For Beginners with Telusko.</li>
          <li>Udemy - C Programming for Beginners: Master the C language.</li>
          <li>Udemy - ReactJs - The Complete ReactJs Course For Beginners.</li>
          <li>Udemy - Linux Command Line Terminal Basic For Beginners.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-pink-300">Accomplishments</h2>
        <ul className="list-disc ml-6 text-base">
          <li>Solved 50+ DSA Questions on Platforms like CodeChef</li>
          <li>Naukri Campus Young Turks, 2025</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2 text-pink-300">Languages</h2>
        <div className="flex gap-4">
          <span>Hindi</span>
          <span>English</span>
        </div>
      </div>
    </div>
  </div>
        </div>
        
    </div>
  )
}

export default Home
