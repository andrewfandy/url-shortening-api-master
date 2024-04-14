import { MouseEventHandler } from "react";
import hamburgerMenu from "../assets/hamburger-menu-svgrepo-com.svg";

export default function HambrgerMenu() {
  const handleMenuOnClick: MouseEventHandler = (event) => {
    event.preventDefault();
    console.log("Menu clicked");
  };
  return (
    <button className="">
      <img
        onClick={handleMenuOnClick}
        className="w-10"
        src={hamburgerMenu}
        alt="hamburger-menu"
      />
    </button>
  );
}
