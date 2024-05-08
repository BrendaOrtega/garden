import { Link } from "@remix-run/react";
import { Parallax } from "react-parallax";
import Layout from "~/components/Layout";
import Tag from "~/components/Tag";
import styles from "~/styles/about.css";

export default function lastplay() {
  return (
    <section className="max-w-7xl mx-auto  w-[90%] md:w-full pt-[120px] md:pt-[200px] ">
      <div className="w-full  h-[280px] md:h-[680px] overflow-hidden rounded-[40px] bg-[#262F5F]">
        <Parallax
          className="h-full w-[100%] mx-auto pt-10 md:pt-0 "
          bgImage="/assets/lastplay/cover.png"
          bgImageAlt="the cat"
          strength={200}
        ></Parallax>
      </div>
      <div className="flex gap-12 mt-16 md:mt-28 flex-wrap md:flex-nowrap ">
        <div className="w-full md:w-[30%]">
          <a
            href="https://www.lastplay.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-[100px] hover:scale-90 transition-all"
              src="/assets/lastplay/logo.png"
            />
          </a>
          <p className="text-base text-iron-500 dark:text-iron-300  mt-4">
            Mobile app to manage sports tournaments
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <Tag text="Mobile App" />
            <Tag text="IOS/Android" />
            <Tag text="UI Design" />
            <Tag text="Figma" />
          </div>
          <p className="dark:text-white font-bold text-xl mt-10 mb-1">Date</p>
          <p className="text-base text-iron-500 dark:text-iron-300 ">
            January 2023
          </p>
          <p className="dark:text-white font-bold text-xl mt-10 mb-1">Role</p>
          <p className="text-base text-iron-500 dark:text-iron-300 ">
            UI Designer
          </p>
        </div>
        <div className="w-full md:w-[70%]">
          <p className="text-xl md:text-2xl dark:text-iron-300">
            <span className="text-water">Lastplay is a mobile application</span>{" "}
            that offers specialized{" "}
            <span className="text-water">
              free services to manage sports tournaments{" "}
            </span>{" "}
            (tochito, soccer and basketball). Considering the user involved in
            this type of tournments, we identified three user types with
            diferent needs: admin, player and guest.{" "}
          </p>
          <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            Based on the busines and User needs, we defined the minium features
            that they need to have a good experience in the app. As an admin you
            can create a tournament, add teams, players, published the game
            schedule and track the score of each match ; as a player, you can
            register for a team, keep track of your game schedule, and view
            general tournament information and as a visitor you can be aware of
            the schedule of your favorite teams.
          </p>
          <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            My role in this project was to{" "}
            <span className="text-water">
              improve the user interface, take the brand guidelines and redefine
              the user experience through improvements to copy, workflows, and
              user interface elements
            </span>{" "}
            considering the technical limitations and business requirements.
          </p>
        </div>
      </div>
      <hr className="h-[1px] border-[.5px] w-full border-white/15 my-12 md:my-28"></hr>{" "}
      <div>
        <h2 className="text-4xl font-bold dark:text-white text-black">
          Understanding and definition
        </h2>
        <p className="text-xl dark:text-iron-300 mt-6">
          The business requeriments and research results have been omitted for
          privacy reasons. So, based on the research step results, the first
          design proposal was done in two parts:
        </p>
        <div className="flex flex-wrap md:flex-nowrap gap-16 mt-20">
          <div className="w-full md:w-[380px] grow">
            <img
              className="rounded-xl rotate-3 hover:-rotate-3 h-[240px] md:h-[380px] w-full object-cover transition-all"
              src="/assets/lastplay/img3.jpg"
            />
            <p className="text-base dark:text-iron-300 mt-8">
              {" "}
              Site map / Information Architecture
            </p>
          </div>
          <div className="w-full md:w-[380px] grow">
            <img
              className="rounded-xl -rotate-3 hover:rotate-3 transition-all h-[240px] md:h-[380px] w-full object-cover"
              src="/assets/lastplay/img4.png"
            />
            <p className="text-base dark:text-iron-300 mt-8">
              {" "}
              Low-fidelity wireframes from scratch
            </p>
          </div>
        </div>
      </div>
      <hr className="h-[1px] border-[.5px] w-full border-white/15 my-12 md:my-28"></hr>{" "}
      <div>
        <h2 className="text-4xl font-bold dark:text-white text-black">
          UI Design
        </h2>
        <p className="text-xl dark:text-iron-300 mt-6">
          After advancing to medium fidelity wireframes and testing them, a
          moodboard and style guide were created to get started with high
          fidelity wireframes.
        </p>
        <p className="text-xl dark:text-iron-300 mt-6">
          These are the screens designed before the interface updates and the
          screen after new brand guidelines were applied. The improvement
          included copy changes, redefinition of workflows, new alternative
          flows that considered errors and empty states within the application,
          and a large change related to interface elements and UI patterns.
        </p>
        <div className="flex flex-col justify-center items-center mt-10">
          <img src="/assets/lastplay/img1.png" />
          <img className="w-12 md:w-[120px]" src="/assets/lastplay/color.png" />
          <img src="/assets/lastplay/img2.png" />
        </div>
      </div>
      <hr className="h-[1px] border-[.5px] w-full border-white/15 my-12 md:my-28"></hr>{" "}
      <div>
        <h2 className="text-4xl font-bold dark:text-white text-black">
          Next steps
        </h2>
        <p className="text-xl dark:text-iron-300 mt-6">
          The next steps will be to measure the use of the application and
          organize surveys and user tests to verify the effectiveness,
          efficiency, usability and user satisfaction when using the application
          and continue iterating based on the results. Ay the same time, start
          to work on the admin panel that will be manage by internal staff.
        </p>
        <img className="w-20 mt-6" src="/assets/lastplay/fur.png" />
      </div>
    </section>
  );
}
