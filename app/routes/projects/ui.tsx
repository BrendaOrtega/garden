import { Link } from "@remix-run/react";
import { Parallax } from "react-parallax";
import Layout from "~/components/Layout";
import Tag from "~/components/Tag";
import styles from "~/styles/about.css";

export default function ui() {
  return (
    <section className="max-w-7xl mx-auto  w-[90%] md:w-full pt-[120px] md:pt-[200px] ">
      <div className="w-full  h-[280px] md:h-[680px]  overflow-hidden rounded-[40px] ">
        <Parallax
          className="h-full w-[100%]  mt mx-auto mt-10 md:mt-0  "
          bgImage="/assets/ui/cover.gif"
          bgImageAlt="the cat"
          strength={200}
        ></Parallax>
      </div>
      <div className="flex gap-12 mt-16 md:mt-28 flex-wrap md:flex-nowrap ">
        <div className="w-full md:w-[30%] relative">
          <Link to="/">
            <p className="uppercase text-white/30 text-xs absolute -top-10">
              <span className="hover:text-[#B37CF2]"> Projects </span> ⇢{" "}
              <span className="text-white"> UI Course </span>
            </p>
          </Link>
          <a
            href="https://ui.fixtergeek.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-[220px] hover:scale-90 transition-all"
              src="/assets/ui/Logo.png"
            />
          </a>
          <div className="flex flex-wrap gap-4 mt-6">
            <Tag text="Landing page" />
            <Tag text="Figma" />
            <Tag text="React" />
            <Tag text="TailwindCSS" />
          </div>
          <p className="dark:text-white font-bold text-xl mt-10 mb-1">Date</p>
          <p className="text-base text-iron-500 dark:text-iron-300 ">
            March 2024
          </p>
          <p className="dark:text-white font-bold text-xl mt-10 mb-1">Role</p>
          <p className="text-base text-iron-500 dark:text-iron-300 ">
            Product Designer & Frontend Developer
          </p>
        </div>
        <div className="w-full md:w-[70%]">
          <p className="text-xl md:text-2xl dark:text-iron-300">
            This is the website of my own{" "}
            <span className="text-[#B37CF2]">
              {" "}
              User Interface Design course
            </span>
            , which is part of the fixtergeek.com offer. This course is for
            designers or developers who want to master the basics of UI design,
            make better design decisions and support them with best practices.
          </p>
          <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            In this course, participants learn both theoretically and
            practically how to choose color palettes and typographies. They also
            learn about web elements and their use cases, current design trends,
            create a prototype, and organize and apply usability tests to
            design.
          </p>
          <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            <span className="text-[#B37CF2]">
              The landing page has been designed to be clear through the copy,
              structure, and visual content,
            </span>{" "}
            directly and simply presenting the information that users want to
            know about the course through effective storytelling while the
            interface seeks
            <span className="text-[#B37CF2]">
              {" "}
              to be attractive, efficient, consistent, and interactive.
            </span>
          </p>
        </div>
      </div>

      <div className="mt-[240px]">
        <div className="mt-28 px-[10%]">
          <img
            className="rounded-[80px] border border-white/10  rotate-6 hover:rotate-0 transition-all hover:scale-90"
            src="/assets/ui/img1.png"
          />
          <img
            className="rounded-[80px] border border-white/10  -rotate-6 hover:rotate-0 transition-all hover:scale-90"
            src="/assets/ui/img2.png"
          />
          <img
            className="rounded-[80px] border border-white/10  rotate-6 hover:rotate-0 transition-all hover:scale-90"
            src="/assets/ui/img3.png"
          />
          <img
            className="rounded-[80px] border border-white/10  -rotate-6 hover:rotate-0 transition-all hover:scale-90"
            src="/assets/ui/img4.png"
          />
          <img
            className="rounded-[80px] border border-white/10  rotate-6 hover:rotate-0 transition-all hover:scale-90"
            src="/assets/ui/img5.png"
          />
          <img
            className="rounded-[80px] border border-white/10  -rotate-6 hover:rotate-0 transition-all hover:scale-90"
            src="/assets/ui/img6.png"
          />
        </div>
      </div>
    </section>
  );
}
