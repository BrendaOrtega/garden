import { Link } from "@remix-run/react";
import Layout from "~/components/Layout";
import Tag from "~/components/Tag";
import styles from "~/styles/about.css";
import { Parallax } from "react-parallax";

export default function constructoken() {
  return (
    <section className="max-w-7xl mx-auto  w-[90%] md:w-ful pt-[120px] md:pt-[200px] ">
      <div className="w-full h-[280px] md:h-[680px] overflow-hidden rounded-[40px] bg-[#6CC597]">
        <Parallax
          className="h-full w-[80%] mx-auto "
          bgImage="/assets/constructoken/cover.png"
          bgImageAlt="the cat"
          strength={200}
        ></Parallax>
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-12 mt-16 md:mt-28 ">
        <div className="w-full md:w-[30%]">
          <a
            href="https://constructoken.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-[240px] hover:scale-90 transition-all"
              src="/assets/constructoken/constru_logo.png"
            />
          </a>

          <div className="flex gap-4 mt-6">
            <Tag text="Mobile App" />
            <Tag text="UI Design" />
            <Tag text="Fintech" />
            <Tag text="Figma" />
          </div>
          <p className="dark:text-white font-bold text-xl mt-10 mb-1">Date</p>
          <p className="text-base text-iron-500 dark:text-iron-300 ">
            October 2023 - January 2024
          </p>
          <p className="dark:text-white font-bold text-xl mt-10 mb-1">Role</p>
          <p className="text-base text-iron-500 dark:text-iron-300 ">
            Product Designer
          </p>
        </div>
        <div className="w-full md:w-[70%]">
          <p className="text-xl md:text-2xl dark:text-iron-300">
            Constructoken is a{" "}
            <span className="text-greenlight">Fintech Startup</span> seeks to{" "}
            <span className="text-greenlight">
              {" "}
              provide an alternative to bank financing for people who want to
              construct a home or renovate their current homes
            </span>{" "}
            from any place in Mexico our the United States. And looking to
            provide a complete experience, they offer other services to their
            clients like location based automatic quotations (considering local
            prices), standard house plans, and attractive rewards to users who
            meet their goals.
          </p>
          <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            Clients carry out each part of the construction independently, from
            making the plan of the construction, procuring materials, to
            supervising the work. To help self-producers with this complicated
            process, was necessary to know their needs in each part of the
            process and identify at which points Construtoken can help them in a
            way that is useful to users and gives them the value necessary to
            use it.
          </p>
        </div>
      </div>
      <hr className="h-[1px] border-[.5px] w-full border-white/15 my-12 md:my-28"></hr>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-black">
          Understanding the process
        </h2>
        <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
          To fully understand the problem areas around the auto production
          housing process, I carried out three different research tasks to
          collect as much information as possible about the challenges. These
          were:
        </p>
        <div className="flex flex-wrap md:flex-nowrap gap-16 mt-20">
          <div className="w-full md:w-[380px] grow  hover:-translate-y-4 transition-all">
            <img
              className="rounded-2xl h-[280px]"
              src="/assets/constructoken/img04.png"
            />
            <p className="text-xl dark:text-iron-300 mt-6">
              {" "}
              Desktop research of similar products or services in the market; we
              found three direct competitors: Construrama, Keobra, and
              Criptoladrillo.
            </p>
          </div>
          <div className="w-full md:w-[380px] grow  hover:-translate-y-4 transition-all">
            <img
              className="rounded-2xl h-[280px] object-cover"
              src="/assets/constructoken/img05.png"
            />
            <p className="text-xl dark:text-iron-300 mt-6">
              {" "}
              Application of quantitative and qualitative surveys in 4 different
              cities in Mexico to identify goals and needs.
            </p>
          </div>
          <div className="w-full md:w-[380px] grow  hover:-translate-y-4 transition-all">
            <img
              className="rounded-2xl h-[280px] object-cover"
              src="/assets/constructoken/img06.png"
            />
            <p className="text-xl dark:text-iron-300 mt-6">
              {" "}
              Contextual observation, identifying the pains and needs in each
              step of the autoconstruction process.
            </p>
          </div>
        </div>
      </div>
      <hr className="h-[1px] border-[.5px] w-full border-white/15 my-12 md:my-28"></hr>{" "}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-black">
          Generating Personas
        </h2>
        <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
          After gleaning valuable insights from the 'understand' phase, plotting
          an affinity diagram and an empathy map, I formed two personas –
          heavily influenced by the flexible questionnaire analysis. These were
          created to help craft a better experience later down the line in the
          ideation stage.
        </p>
        <div className="flex flex-wrap md:flex-nowrap gap-16 mt-20">
          <div className="w-full md:w-[380px] grow">
            <img
              className="rounded-xl rotate-3 hover:-rotate-3 transition-all"
              src="/assets/constructoken/img07.png"
            />
            <p className="text-base dark:text-iron-300 mt-8">
              {" "}
              Emiliano is a user who wants to build his house but he doesn't
              have access to traditional bank financial products.
            </p>
          </div>
          <div className="w-full md:w-[380px] grow">
            <img
              className="rounded-xl -rotate-3 hover:rotate-3 transition-all"
              src="/assets/constructoken/img08.png"
            />
            <p className="text-base dark:text-iron-300 mt-8">
              {" "}
              Luis lives in the United States and has been planning to build a
              house in Mexico for a long time, but finds it difficult to make
              much progress from the United States.
            </p>
          </div>
        </div>
      </div>
      <hr className="h-[1px] border-[.5px] w-full border-white/15 my-12 md:my-28"></hr>{" "}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-black">
          Definition & Ideation
        </h2>
        <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
          After looking at data, analyzing user needs, creating personas to
          match these insights, and discussing business requirements, I moved on
          to the ideating stage. This was done in three parts:
          <p />
          <div className="flex flex-wrap md:flex-nowrap gap-16 mt-20">
            <div className="w-full md:w-[380px] grow  hover:-translate-y-4 transition-all">
              <img
                className="rounded-2xl h-[240px] object-cover"
                src="/assets/constructoken/img10.jpg"
              />
              <h3 className="text-white text-xl mt-6">MoSCoW method</h3>
              <p className="text-xl dark:text-iron-300 mt-6">
                {" "}
                After working with the product and development team on a value
                proposition canvas and defining the user stories, I moved
                forward to prioritize the features with the MoSCoW method.
              </p>
            </div>
            <div className="w-full md:w-[380px] grow  hover:-translate-y-4 transition-all">
              <img
                className="rounded-2xl h-[240px] object-cover"
                src="/assets/constructoken/img13.jpg"
              />
              <h3 className="text-white text-xl mt-6">Site map</h3>
              <p className="text-xl dark:text-iron-300 mt-6">
                {" "}
                Having identify the prioritized features, I worked on the app
                architecture.
              </p>
            </div>
            <div className="w-full md:w-[380px] grow  hover:-translate-y-4 transition-all">
              <img
                className="rounded-2xl h-[240px] object-cover"
                src="/assets/constructoken/img14.png"
              />
              <h3 className="text-white text-xl mt-6">
                Sketching & User flow{" "}
              </h3>
              <p className="text-xl dark:text-iron-300 mt-6">
                {" "}
                I started with a sketching session to define the user flows in
                the app, including happy paths and unhappy paths.
              </p>
            </div>
          </div>
        </p>
      </div>
      <hr className="h-[1px] border-[.5px] w-full border-white/15 my-12 md:my-28"></hr>{" "}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-black">
          Developing the idea
        </h2>

        <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
          After ensuring that the user flows match the users’ needs, I began
          working on a style guide based on the brand guidelines and then
          continued with the high-purpose wireframes of both the application and
          the website.
        </p>
        <div className=" flex flex-col gap-20 mt-20 ">
          <img src="/assets/constructoken/img15.png" />
          <img
            className="w-full mx-auto "
            src="/assets/constructoken/img16.png"
          />
          <img
            className="w-full mx-auto"
            src="/assets/constructoken/img09.png"
          />
        </div>
      </div>
      <hr className="h-[1px] border-[.5px] w-full border-white/15 my-12 md:my-28"></hr>{" "}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-black">
          Next Steps
        </h2>
        <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
          Test the prototype with users and iterate on the design based on user
          feedback before taking it into development and then start with a beta
          test with 10 users to continue collecting feedback and iterating the
          design.
        </p>
        <img className="w-20 mt-10" src="/assets/constructoken/fur.png" />
      </div>
    </section>
  );
}
