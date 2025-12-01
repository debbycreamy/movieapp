import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900 shadow">
      <Link className="text-2xl font-bold dark:text-white" to="/">
        🎬 Movie Explorer
      </Link>

      <div className="flex gap-6 items-center">
        <Link to="/" className="dark:text-white">
          Home
        </Link>
        <Link to="/saved" className="dark:text-white">
          Saved
        </Link>

        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
