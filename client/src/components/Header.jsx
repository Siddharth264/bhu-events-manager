import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-sky-500">
      <Link to="/">
        <div className="flex sm:ml-16 md:ml-36 font-bold p-3">
          <span className="p-0.5 m-0.5  text-purple-300">B</span>
          <span className="p-0.5 m-0.5 text-yellow-600">H</span>
          <span className="p-0.5 m-0.5 text-gray-500">U</span>
        </div>
      </Link>

      <ul className="flex justify-between sm:mr-12 md:mr-36 ">
        <Link to="/">
          <li className="p-2 font-bold text-black-500  hover:bg-sky-600 border rounded-lg border-hidden">
            Home
          </li>
        </Link>
        <Link to="/about">
          <li className="p-2 font-bold text-black-500  hover:bg-sky-600 border rounded-lg border-hidden">
            About
          </li>
        </Link>
        <Link to="/signin">
          <li className="p-2 font-bold text-black-500  hover:bg-sky-600 border rounded-lg border-hidden">
            SignIn
          </li>
        </Link>
      </ul>
    </header>
  );
}
