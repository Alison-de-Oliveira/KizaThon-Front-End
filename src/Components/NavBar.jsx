import { Link } from "react-router-dom";
import "../App.css";

function NavBar() {
  return (
    <div>
      <nav className="display flex justify-center p-6">
        <Link>
          {" "}
          <img></img>
        </Link>
        <ul className="display flex items-center ">
          <li className="mr-6 zelda-text text-3xl text-[#E2DED3] hover:text-amber-400">
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li className="mr-6 zelda-text text-3xl text-[#E2DED3] hover:text-amber-400">
            {" "}
            <Link to="/category">Category</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
