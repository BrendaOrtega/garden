import { Link } from "@remix-run/react";
import { Parallax } from "react-parallax";
import Layout from "~/components/Layout";
import Tag from "~/components/Tag";
import styles from "~/styles/about.css";

export default function fixter() {
  return (
    <section className="max-w-7xl mx-auto pt-[120px] md:pt-[200px]  w-[90%] md:w-full">
      <div className="w-full  h-[280px] md:h-[680px] overflow-hidden rounded-[40px] bg-[#E9786E]">
        <Parallax
          className="h-full w-[100%] mx-auto mt-10 md:mt-0 "
          bgImage="/assets/fixter/cover.png"
          bgImageAlt="the cat"
          strength={200}
        ></Parallax>
      </div>
      <div className="flex gap-12 mt-16 md:mt-28 flex-wrap md:flex-nowrap ">
        <div className="w-full md:w-[30%]">
          <a
            href="https://fixter.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-[180px] hover:scale-90 transition-all"
              src="/assets/fixter/logo.png"
            />
          </a>

          <div className="flex flex-wrap gap-4 mt-6">
            <Tag text="Website" />
            <Tag text="Product Design" />
            <Tag text="Figma" />
            <Tag text="ReactJs" />
            <Tag text="TailwindCSS" />
          </div>
          <p className="dark:text-white font-bold text-xl mt-10 mb-1">Date</p>
          <p className="text-base text-iron-500 dark:text-iron-300 ">
            Octubre 2023
          </p>
          <p className="dark:text-white font-bold text-xl mt-10 mb-1">Role</p>
          <p className="text-base text-iron-500 dark:text-iron-300 ">
            UX/UI Designer
          </p>
        </div>
        <div className="w-full md:w-[70%]">
          <p className="text-xl md:text-2xl dark:text-iron-300">
            Fixter.org is a{" "}
            <span className="text-brand-500"> Consultancy Agency</span> that
            offers IT services at affordable prices like{" "}
            <span className="text-brand-500">
              {" "}
              web design, web development, UX/UI services,{" "}
            </span>{" "}
            mobile apps development and programming language training courses.{" "}
          </p>
          <p className="text-xl md:text-2xl mt-6 dark:text-iron-300">
            Recently, Fixter.org's decided to improve the experience in the
            website based on the analytics data, update the brand guidelines,
            and also they decided add new features like offering an online
            quotation for his client's projects and they seek to show the list
            of Software As A Service created by them, so, the old website didn't
            have the architecture to display the new information it was
            necessary to design a new website without change the tone and voice
            brand.
          </p>
          <p className="text-xl md:text-2xl mt-6 dark:text-iron-300">
            My challenge in this project was{" "}
            <span className="text-brand-500">
              to redesign the website interface looking for a modern, simple,
              visual, and interactive look and feel.
            </span>
          </p>
        </div>
      </div>
      <hr className="h-[1px] border-[.5px] w-full border-white/15 my-12 md:my-28"></hr>{" "}
      <div>
        <h2 className="text-4xl font-bold dark:text-white text-black">
          UI Design
        </h2>
        <p className="text-xl dark:text-iron-300 mt-6">
          These are the old website screens designed before the interface
          updates and the screens after new brand guidelines were applied. The
          improvement included changes in the interface elements and UI
          patterns.
        </p>
        <div className="mt-10">
          <img src="/assets/fixter/img1.png" />
          <img src="/assets/fixter/img2.png" />
        </div>
      </div>
      <hr className="h-[1px] border-[.5px] w-full border-white/15 my-12 md:my-28"></hr>{" "}
      <div>
        <h2 className="text-4xl font-bold dark:text-white text-black">
          Next steps
        </h2>
        <p className="text-xl dark:text-iron-300 mt-6">
          The next steps are to organize user tests periodically as well as to
          track the website's analytics (users, views, conversions, session
          time, etc) to identify points of improvement and improve the usability
          and efficiency in the website.
        </p>
        <img className="w-20 mt-6" src="/assets/lastplay/fur.png" />
      </div>
    </section>
  );
}
