import HamburgerMenu from "./HamburgerMenu";
import UserAccount from "./UserAccount";
import ShortlyLogo from "./ShortyLogo";
import NavBarLinks from "./NavBarLinks";

interface NavBarProps {
  isMobile: boolean;
}

export function NavBar(props: NavBarProps) {
  return (
    <nav className="fixed top-0 z-50 flex w-full justify-center py-2">
      <div className="relative flex w-3/4 justify-between">
        {!props.isMobile ? (
          <>
            <div className="flex gap-7">
              <ShortlyLogo />
              <NavBarLinks />
            </div>
            <div className="flex gap-7">
              <UserAccount />
            </div>
          </>
        ) : (
          <>
            <ShortlyLogo />
            <HamburgerMenu />
          </>
        )}
      </div>
    </nav>
  );
}
