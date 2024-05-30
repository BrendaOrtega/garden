import { Link } from "@remix-run/react";
import Gato from "./Gato";
import ToggleButton from "../components/ToggleButton.tsx";
import useTheme from "~/utils/hooks/useTheme";
const logo =
  "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Fmichis.svg?alt=media&token=2bbd2928-0306-4475-919a-aea70c84f250";

export default function Nav() {
  const { theme, setDarkTheme, setLightTheme } = useTheme("dark");
  return (
    <section className="flex justify-center  w-full h-20 min-w-7xl fixed z-[200]">
      <div className=" mx-auto w-[1280px] flex items-center justify-between   px-4 md_px-8 bg-black/70 backdrop-blur-md	 rounded-full h-16 md:h-20  mt-4 md:mt-8 shadow-[ 0px_4px_16px_0px_rgba(0, 0, 0, 0.80)]">
        <div className="  items-center">
          <Link to="/">
            <div className="flex items-center justify-center cursor-pointer  z-50 relative">
              <div className=" cursor-pointer z-[100] w-[60px] h-[60px] absolute left-0"></div>
              <Gato />
              <img className="h-[28px] ml-4 hidden md:block" src="/name.png" />
            </div>
          </Link>
        </div>
        <div className="flex gap-0 lg:gap-4">
          <Link to="/about">
            <p className="text-md flex items-center text-center rounded-full lg:text-lg text-white font-medium hover:bg-[rgba(233,237,246,.03)] h-10 px-2 lg:px-4">
              About
            </p>
          </Link>
          <Link to="/blog">
            <p className="text-md flex items-center text-center rounded-full lg:text-lg text-white font-medium hover:bg-[rgba(233,237,246,.03)] h-10 px-2 lg:px-4">
              Blog
            </p>
          </Link>
          <Link to="/resources">
            <p className="text-md flex items-center text-center rounded-full lg:text-lg text-white font-medium hover:bg-[rgba(233,237,246,.03)] h-10 px-2 lg:px-4">
              Resources
            </p>
          </Link>
        </div>
        {/* <ToggleButton
          defaultValue={theme}
          onChange={(value) => {
            if (value) {
              setDarkTheme();
            } else {
              setLightTheme();
            }
          }}
        /> */}
      </div>
    </section>
  );
}
