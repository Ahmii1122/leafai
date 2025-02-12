import logo from "../assets/Group.png";
const Navbar = () => {
  return (
    <nav className="">
      <div className="max-w-contained flex justify-between items-center mt-[40px] mx-[90px]">
        <div className="">
          <img src={logo} alt="Leaf Ai logo" />
        </div>
        <div className=" flex items-center font-opensans  gap-[48px] text-nowrap">
          {navLinks.map(({ link, title }, index) => (
            <a
              href={link}
              key={index}
              className="font-opensans font-normal text-[16px]"
            >
              {title}
            </a>
          ))}
          <a
            href="#getstarted"
            className="bg-primary font-opensans text-[16px] text-white px-5 py-3 rounded-md"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const navLinks = [
  { link: "/home", title: "Home" },
  { link: "/solutions", title: "Solutions" },
  { link: "/products", title: "Products" },
  { link: "/about-us", title: "About Us" },
  { link: "/contacts", title: "Contacts" },
];
