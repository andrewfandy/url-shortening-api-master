import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
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
      <main className="flex flex-col justify-center items-center font-poppins w-full h-full relative">
        <NavBar isMobile={isMobile} />
        <Outlet />
      </main>
    </>
  );
}
