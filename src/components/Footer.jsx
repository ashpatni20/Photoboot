import { NavLink, useLocation } from "react-router-dom";
import { SiConvertio } from "react-icons/si";
import { ImBoxRemove } from "react-icons/im";
import { CiSearch, CiSettings } from "react-icons/ci";
import { GiLifeSupport } from "react-icons/gi";

let ptag = "w-[10px] m-auto text-xl";
let footerCss = "text-center w-1/5 ";

const Footer = () => {
  const location = useLocation();
  const currentRoute = location.pathname;

  // console.log(location, currentRoute);

  return (
    <div className="fixed flex justify-evenly p-2 w-full bottom-0 bg-[#121420] z-20">
      <NavLink
        to="/convert"
        className={
          currentRoute === "/convert" ? `${footerCss} text-[#48CAE4]` : footerCss + "text-white"
        }
      >
        <p className={ptag}>
          <SiConvertio />
        </p>
        <p>Convert</p>
      </NavLink>

      <NavLink
        to="/remove"
        className={
          currentRoute === "/remove" ? `${footerCss} text-[#48CAE4]` : footerCss + "text-white"
        }
      >
        <p className={ptag}>
          <ImBoxRemove />
        </p>
        <p>Remove</p>
      </NavLink>

      <NavLink
        to="/search"
        className={
          currentRoute === "/search" ? `${footerCss} text-[#48CAE4]` : footerCss + "text-white"
        }
      >
        <p className={ptag}>
          <CiSearch />
        </p>
        <p>Search</p>
      </NavLink>

      <NavLink
        to="/setting"
        className={
          currentRoute === "/setting" ? `${footerCss} text-[#48CAE4]` : footerCss + "text-white"
        }
      >
        <p className={ptag}>
          <CiSettings value={{ color: "blue",}}/>
        </p>
        <p>Settings</p>
      </NavLink>

      <NavLink
        to="/support"
        className={
          currentRoute === "/support" ? `${footerCss} text-[#48CAE4]` : footerCss + "text-white"
        }
      >
        <p className={ptag}>
          <GiLifeSupport />
        </p>
        <p>Support</p>
      </NavLink>
    </div>
  );
};

export default Footer;
