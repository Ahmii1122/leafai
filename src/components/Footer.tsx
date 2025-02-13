import logo from "../assets/Group.png";
import fb from "../assets/Facebook.png";
import insta from "../assets/Instagram.png";
import linkedin from "../assets/Linkedin.png";
import twitter from "../assets/Twitter.png";

const footerLinks = [
  {
    title: "Resources",
    links: ["Features", "Pricing", "Login"],
  },
  {
    title: "Our Products",
    links: ["Terms of Use", "Privacy Policy", "Legal Notice"],
  },
  {
    title: "Media",
    links: ["Feedback", "Privacy Policy", "Legal Notice"],
  },
  {
    title: "Privacy",
    links: ["Feedback", "Privacy Policy", "Legal Notice"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Social Section */}
          <div className="flex flex-col space-y-4 md:col-span-2 lg:col-span-2">
            <img src={logo} alt="LeafAI Logo" className="w-24" />
            <p className="text-gray font-opensans font-normal text-[18px]">
              We use multi-mic and echo cancellation technology so that everyone
              can use the device.
            </p>
            {/* Social Icons */}
            <div className="flex">
              <a href="#" className="p-2">
                <img src={fb} alt="Facebook" />
              </a>
              <a href="#" className="p-2">
                <img src={insta} alt="Instagram" />
              </a>
              <a href="#" className="p-2">
                <img src={twitter} alt="Twitter" />
              </a>
              <a href="#" className="p-2">
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </div>
          </div>

          {/* Links Section - Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[83px] lg:col-span-3">
            {footerLinks.map((category, index) => (
              <div key={index}>
                <h4 className="font-semibold text-black font-roboto text-[24px] text-nowrap">
                  {category.title}
                </h4>
                <ul className="mt-3 space-y-2 text-[18px] font-normal text-gray">
                  {category.links.map((link, i) => (
                    <li key={i}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
