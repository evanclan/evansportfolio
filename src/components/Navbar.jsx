import { links } from "../constants";
const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="flex justify-center items-center space-x-6 text-lg font-mono pt-4">
          {links.map((link, index) => {
            return (
              <li className="hover:bg-red-400 px-2" key={index}>
                <a href={link.url}>{link.text}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
