import { Outlet } from "react-router-dom";
import { NavBar } from "../components/navbar/NavBar";
import { useState, useEffect } from "react";

export default function Layout() {
  const [isMobile, setIsMobile] = useState<boolean>(true);

  const handleWindowWidth = () => {
    const userWidthSize: number = window.innerWidth;
    const mobileWidthSize: number = 800;

    userWidthSize >= mobileWidthSize ? setIsMobile(false) : setIsMobile(true);
  };

  useEffect(() => {
    handleWindowWidth();
    window.addEventListener("resize", handleWindowWidth);
    return () => {
      window.removeEventListener("resize", handleWindowWidth);
    };
  }, []);

  return (
    <>
      <main className="relative flex h-full w-full flex-col items-center justify-center font-poppins">
        <NavBar isMobile={isMobile} />

        <Outlet />
      </main>
    </>
  );
}
