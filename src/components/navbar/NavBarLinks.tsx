import { NavLink } from "react-router-dom";
import ButtonNoBox from "../buttons/ButtonNoBox";

interface NavBarStyles {
  default: string;
  active: string;
}
export default function NavBarLinks() {
  const baseStyle = "flex justify-center items-center";
  const styles: NavBarStyles = {
    default: baseStyle,
    active: `${baseStyle} md:underline md:decoration-primary-cyan`,
  };

  return (
    <>
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
    </>
  );
}
