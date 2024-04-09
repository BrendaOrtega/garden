import { Link } from "@remix-run/react";
import Gato from "./Gato";

const logo =
  "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Fmichis.svg?alt=media&token=2bbd2928-0306-4475-919a-aea70c84f250";

export default function Nav() {
  return (
    <section className="flex justify-center  w-full h-20 min-w-7xl fixed z-50">
      <div className=" mx-auto w-[1280px] flex items-center justify-between   px-4 md_px-8 bg-black rounded-full h-16 md:h-20  mt-4 md:mt-8 shadow-[ 0px_4px_16px_0px_rgba(0, 0, 0, 0.80)]">
        <div className="  items-center">
          <Link to="/">
            <div className="flex items-center justify-center">
              <div>
                <Gato />
              </div>
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

        {/* <Button
              onClick={toggleColorMode}
              borderRadius="24px"
              bg={useColorModeValue("second.50", "black")}
            >
              {colorMode === "light" ? (
                <Image
                  w="18px"
                  h="18px"
                  src="/images/sol.svg"
                  alt="sun blue icon"
                />
              ) : (
                <Image
                  w="18px"
                  h="18px"
                  src="/images/luna.svg"
                  alt="moon white icon"
                />
              )}
            </Button> */}
      </div>
    </section>
  );
}
