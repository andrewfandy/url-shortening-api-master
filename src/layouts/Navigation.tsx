import { useEffect, useState } from "react"
import HamburgerMenu from "../components/HamburgerMenu";
import ButtonNoBox from "../components/ButtonNoBox";



 
export default function Navigation() {
    const[isMobile, setIsMobile] = useState(true);

    const handleWindowWidth = () => {
        const userWidthSize = window.innerWidth;
        const mobileWidthSize = 540;
        userWidthSize >= mobileWidthSize ? setIsMobile(false) : setIsMobile(true)
    }

    useEffect(() => {
        handleWindowWidth();
        window.addEventListener('resize', handleWindowWidth)
        return () => {
            window.removeEventListener('resize', handleWindowWidth)
        }
    }, [])


    return(
        <div className="flex justify-between bg-red-500 px-5  py-3 w-full">
            {
                !isMobile ?
                <>
                    <a className="text-3xl font-bold" href="#">Shortly</a>
                    <ButtonNoBox text="test"/>
                    <ButtonNoBox text="test"/>
                    <ButtonNoBox text="test"/>
                </>
                :
                <HamburgerMenu />
            }
        </div>
    )
}