import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">ChatEase</h1>
        <nav>
          <Link to="/login">
          <button className="bg-white text-black px-4 py-2 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Login
          </button>

          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
