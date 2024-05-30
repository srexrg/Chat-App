import { FaGithub } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="text-white flex-1 flex items-center justify-center" id="home">
      <div className="width-90% text-center">
        <h2 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Welcome to ChatEase</h2>
        <p className="mb-8 text-lg font-light drop-shadow-md">
          Connect with your friends and family instantly!
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center">
        <Link to="/signup">
        <button className="bg-white text-gray-800 px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105 mb-4 md:mb-0 md:mr-4">
            Get Started
          </button>
        </Link>
         
          <a href="https://github.com/srexrg/Chat-App" target='_blank' rel="noreferrer">
            <button className="bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out flex items-center">
              <FaGithub className="mr-2" /> Check out GitHub
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
