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
        <div className="w-full md:w-[30%]">
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
            March 2022
          </p>
          <p className="dark:text-white font-bold text-xl mt-10 mb-1">Role</p>
          <p className="text-base text-iron-500 dark:text-iron-300 ">
            Product Designer
          </p>
        </div>
        <div className="w-full md:w-[70%]">
          <p className="text-xl md:text-2xl dark:text-iron-300">
            Fixtergeek is a learning platform that offers on-demand development
            courses for programming languages or frameworks such as JavaScript,
            React, Remix, CSS, NodeJS, NextJs, Redux, etc. And also, you can
            find there my own UI Course 😉.
          </p>
          <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            How to create a useful platform where users can learn easily and
            enjoy the learning experience? What are the user needs? What is the
            learning workflo that we can follow?
          </p>
          <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            With this in mind, we identify two types of user: collaborator and
            student. As a collaborator, our user needed a way to view key data,
            manage courses (create them, upload content, and edit them), send
            the newsletter, and assign courses to enrolled students. And our
            student user needed to be able to see her courses, access each
            other's material and edit her profile.
          </p>
        </div>
      </div>
      <hr className="h-[1px] border-[.5px] w-full border-white/15 my-12 md:my-28"></hr>{" "}
      <div>
        <h2 className="text-4xl font-bold dark:text-white text-black">
          User Interface Design
        </h2>
        <p className="text-xl dark:text-iron-300 mt-6">
          The business requeriments and research results have been omitted for
          privacy reasons. So, based on the business requeriments and user
          needs, the first design iteration was done in two parts:
        </p>
        <div className="flex flex-wrap md:flex-nowrap gap-16 mt-20">
          <div className="w-full md:w-[380px] grow">
            <img
              className="rounded-xl rotate-3 h-[240px] md:h-[380px] w-full object-cover"
              src="/assets/lastplay/img3.png"
            />
            <p className="text-xl dark:text-iron-300 mt-8"> Moodboard</p>
          </div>
          <div className="w-full md:w-[380px] grow">
            <img
              className="rounded-xl -rotate-3  h-[240px] md:h-[380px]  w-full object-cover"
              src="/assets/lastplay/img4.png"
            />
            <p className="text-xl dark:text-iron-300 mt-8"> Styleguide</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-xl dark:text-iron-300 mt-12">
          After a research process, I identify two types of user: collaborator
          and student. As a collaborator, our user needed a way to view key
          data, manage courses (create them, upload content, and edit them),
          send the newsletter, and assign courses to enrolled students. And our
          student user needed to be able to see her courses, access each other's
          material and edit her profile.
        </p>
        <p className="text-xl dark:text-iron-300 mt-6">
          Whit this in mind, I continued with the definition and ideation
          process until reaching this result:
        </p>
        <p className="text-xs dark:text-iron-300 mt-6">
          *Some details of the product and process have been changed or omitted
          for privacy reasons.
        </p>
        <div className="flex flex-col  w-full">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl font-semibold text-black dark:text-white">
                  High fidelity <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    Wireframes{" "}
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
