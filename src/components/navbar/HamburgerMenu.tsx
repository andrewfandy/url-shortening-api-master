import { MouseEventHandler, useState } from "react";
import hamburgerMenu from "../../assets/hamburger-menu-svgrepo-com.svg";
import crossIcon from "../../assets/cross-svgrepo-com (1).svg";
import NavBarLinks from "./NavBarLinks";
import UserAccount from "./UserAccount";

export default function HambrgerMenu() {
  const [isClicked, setIsClicked] = useState(false);
  const handleMenuOnClick: MouseEventHandler = (event) => {
    event.preventDefault();
    if (isClicked) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
    console.log("Menu clicked");
  };

  return (
    <button>
      {!isClicked ? (
        <img
          onClick={handleMenuOnClick}
          className="w-10"
          src={hamburgerMenu}
          alt="hamburger-menu"
        />
      ) : (
        <>
          <img
            onClick={handleMenuOnClick}
            className="w-10 "
            src={crossIcon}
            alt="cross-icon"
          />
          <div className="top-50 absolute left-0 z-50 w-full">
            <nav className="rounded-md bg-primary-dark-violet p-10">
              <div className="mb-4 gap-7 border border-l-0 border-r-0 border-t-0 border-b-neutral-gray-violet pb-5 text-white">
                <NavBarLinks />
              </div>
              <div className="mb-4">
                <UserAccount />
              </div>
            </nav>
          </div>
        </>
      )}
    </button>
  );
}
