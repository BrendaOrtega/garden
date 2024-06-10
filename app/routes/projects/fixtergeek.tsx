import { Link } from "@remix-run/react";
import { Parallax } from "react-parallax";
import Layout from "~/components/Layout";
import Tag from "~/components/Tag";
import { ContainerScroll } from "~/components/container-scroll-animation";
import styles from "~/styles/about.css";

export default function fixtergeek() {
  return (
    <section className="max-w-7xl mx-auto pt-[120px] md:pt-[200px]  w-[90%] md:w-full">
      <div className="w-full h-[280px] md:h-[680px] overflow-hidden rounded-[40px] bg-gradient-to-r from-[#5265F6] to-[#835EF6]">
        <Parallax
          className="h-full w-[100%] mx-auto mt-10 md:mt-0 "
          bgImage="/assets/geeks/cover.png"
          bgImageAlt="the cat"
          strength={200}
        ></Parallax>
      </div>
      <div className="flex gap-12 mt-16 md:mt-28 flex-wrap md:flex-nowrap ">
        <div className="w-full md:w-[30%] relative">
          <Link to="/">
            <p className="uppercase text-white/30 text-xs absolute -top-10">
              <span className="hover:text-mora"> Projects </span> ⇢{" "}
              <span className="text-white"> Fixtergeek</span>
            </p>
          </Link>
          <a
            href="https://fixtergeek.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-[220px] hover:scale-90 transition-all"
              src="/assets/geeks/logo.png"
            />
          </a>

          <div className="flex flex-wrap gap-4 mt-6">
            <Tag text="Website" />
            <Tag text="Product Design" />
            <Tag text="Figma" />
            <Tag text="ReactJs" />
            <Tag text="TailwindCSS" />
            <Tag text="Remix" />
          </div>
          <p className="dark:text-white font-bold text-xl mt-10 mb-1">Date</p>
          <p className="text-base text-iron-500 dark:text-iron-300 ">
            Julio 2022
          </p>
          <p className="dark:text-white font-bold text-xl mt-10 mb-1">Role</p>
          <p className="text-base text-iron-500 dark:text-iron-300 ">
            Product Designer
          </p>
        </div>
        <div className="w-full md:w-[70%]">
          <p className="text-xl md:text-2xl dark:text-iron-300">
            Fixtergeek is a{" "}
            <span className="text-mora">
              learning platform that offers on-demand development courses{" "}
            </span>{" "}
            for programming languages or frameworks such as JavaScript, React,
            Remix, CSS, NodeJS, NextJs, Redux, etc. And also, you can find there
            my own UI Course 😉.
          </p>
          <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            <span className="text-mora">
              How to create a useful platform where users can learn easily and
              enjoy the learning experience? What are the user needs? What is
              the learning workflow that we can follow?{" "}
            </span>{" "}
          </p>
          <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            With this in mind, I identified two types of users: collaborators
            and students. As a collaborator, our users need a way to view key
            data, manage courses (create them, upload content, and edit them),
            send the newsletter, and assign courses to enrolled students. And as
            a student, users need to be able to see their courses, access each
            other's material, and edit his profile.
          </p>
          <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            After defining the users, user stories, user flows, and the site map
            and having had sketching sessions, I moved forward to work on
            high-fidelity wireframes, including happy and unhappy paths.
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-col  w-full">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-xl font-semibold text-black dark:text-white">
                  High fidelity wirefranes
                  <br />
                  <span className="text-3xl md:text-[4rem] font-bold mt-1 leading-none">
                    User Interface Design{" "}
                  </span>
                </h1>
              </>
            }
          >
            <img
              src={`/assets/geeks/img1.png`}
              alt="hero"
              className="mx-auto h-auto rounded-2xl  w-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </div>
      </div>
    </section>
  );
}
