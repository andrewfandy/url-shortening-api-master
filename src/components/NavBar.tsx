import HamburgerMenu from "../components/HamburgerMenu";
import ButtonNoBox from "../components/ButtonNoBox";
import ButtonBox from "./ButtonBox";
import { NavLink } from "react-router-dom";

interface NavBarProps {
  isMobile: boolean;
}

interface NavBarStyles {
  default: string;
  active: string;
}

export function NavBar(props: NavBarProps) {
  const baseStyle = "flex justify-center items-center";
  const styles: NavBarStyles = {
    default: baseStyle,
    active: `${baseStyle} underline decoration-primary-cyan`,
  };
  return (
    <nav className="sticky top-0 flex w-3/4 justify-between py-3">
      {!props.isMobile ? (
        <>
          <div className="flex gap-7">
            <NavLink to="/" className="text-3xl font-bold">
              Shortly
            </NavLink>

            <NavLink
              className={({ isActive }) => {
                return isActive ? styles.active : styles.default;
              }}
              to={"/features"}
            >
              <ButtonNoBox text={"Features"} />
            </NavLink>

            <NavLink
              className={({ isActive }) => {
                return isActive ? styles.active : styles.default;
              }}
              to={"/pricing"}
            >
              <ButtonNoBox text={"Pricing"} />
            </NavLink>

            <NavLink
              className={({ isActive }) => {
                return isActive ? styles.active : styles.default;
              }}
              to={"/resource"}
            >
              <ButtonNoBox text={"Resource"} />
            </NavLink>
          </div>
          <div className="flex gap-7">
            <NavLink
              className={({ isActive }) => {
                return isActive ? styles.active : styles.default;
              }}
              to={"/login"}
            >
              <ButtonNoBox text={"Login"} />
            </NavLink>
            <ButtonBox text={"Register"} variant="rounded-lg" />
          </div>
        </>
      ) : (
        <>
          <NavLink to="/" className="text-3xl font-bold">
            Shortly
          </NavLink>
          <HamburgerMenu />
        </>
      )}
    </nav>
  );
}
