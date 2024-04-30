import { Link } from "@remix-run/react";
import { Parallax } from "react-parallax";
import Layout from "~/components/Layout";
import Tag from "~/components/Tag";
import styles from "~/styles/about.css";

export default function personal() {
  return (
    <section className="max-w-7xl mx-auto pt-[200px] ">
      <div className="w-full h-[680px] overflow-hidden rounded-[40px] bg-[#E63737]">
        <Parallax
          className="h-full w-[80%] mx-auto "
          bgImage="/assets/personal/cover.png"
          bgImageAlt="the cat"
          strength={200}
        ></Parallax>
      </div>

      <div className="flex gap-12 mt-28 ">
        <div className="w-[30%]">
          <a
            href="https://www.santander.com.mx/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-[180px]" src="/assets/personal/logo.png" />
          </a>

          <div className="flex flex-wrap gap-4 mt-6">
            <Tag text="Mobile App" />
            <Tag text="Web App" />
            <Tag text="IOS/Android" />
            <Tag text="Product Design" />
            <Tag text="Banking" />
            <Tag text="Figma" />
          </div>
          <p className="dark:text-white font-bold text-xl mt-10 mb-1">Date</p>
          <p className="text-base text-iron-500 dark:text-iron-300 ">
            Marzo 2019 - Junio 2020
          </p>
          <p className="dark:text-white font-bold text-xl mt-10 mb-1">Role</p>
          <p className="text-base text-iron-500 dark:text-iron-300 ">
            UX/UI Designer
          </p>
        </div>
        <div className="w-[70%]">
          <p className="text-xl md:text-2xl mt-4 dark:text-iron-300">
            Santander Personal is an{" "}
            <span className="text-blood">
              omnichannel platform for the bank's high-income clients.
            </span>{" "}
            It is available as a web platform for the bank's internal users and
            in the mobile application for end users.
          </p>
          <p className="text-xl md:text-2xl mt-4 dark:text-iron-300">
            As its name indicates, it is a special section within the
            application that only premium Santander customers have access to,
            through which they receive{" "}
            <span className="text-blood">
              personalized attention to contract financial services in a 100%
              digital way.
            </span>{" "}
            While on the internal side, it is an administrative platform that
            allows you to track all contracts for financial products, keep a
            record of each movement and directly assign the client to an agent
            who will provide permanent support.
          </p>
          <p className="text-xl md:text-2xl mt-4 dark:text-iron-300">
            I worked on this project from start to finish, from the initial kick
            off, research, definition and design to platform testing. However,
            for privacy reasons, I can't show more information about it.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
