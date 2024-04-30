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
      <div className="flex flex-wrap md:flex-nowrap gap-12 mt-12 md:mt-28 ">
        <div className="w-full md:w-[30%]">
          <a
            href="https://constructoken.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-[240px]"
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
            <span className="text-greenlight">Fintech Startup</span> that seeks
            to{" "}
            <span className="text-greenlight">
              {" "}
              facilitate to self-producers of housing the construction or
              remodeling of their housing
            </span>{" "}
            from any area of Mexico through financial products and prepayment of
            materials.
          </p>
          <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            The self-producers of housing carry out each part of the
            construction independently, from making the plan of the
            construction, searching for materials, even supervising the work. To
            help self-producers with this complicated process, it's necessary to
            know their needs in each part of the process and identify at which
            points Construtoken can help them.
          </p>
        </div>
      </div>
      <hr className="h-[1px] border-[.5px] w-full border-white/15 my-12 md:my-28"></hr>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-black">
          Understanding the process
        </h2>
        <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
          In order to get to grips with the problem areas around the
          autoproduction housing process, I'd carried out three different
          exercises to collect as much information as possible around the
          challenge. These were:
        </p>
        <div className="flex flex-wrap md:flex-nowrap gap-16 mt-20">
          <div className="w-full md:w-[380px] grow">
            <img
              className="rounded-2xl"
              src="https://i.imgur.com/tRz5Xfg.png"
            />
            <p className="text-xl dark:text-iron-300 mt-6">
              {" "}
              Desktop research on similar products or services on the market,
              where we find 3 direct competitors: Construrama, Keobra and
              Criptoladrillo.
            </p>
          </div>
          <div className="w-full md:w-[380px] grow">
            <img src="https://i.imgur.com/tRz5Xfg.png" />
            <p className="text-xl dark:text-iron-300 mt-6">
              {" "}
              Application of quantitative and qualitative surveys in 4 diferent
              city in México to idenfity goals and needs.
            </p>
          </div>
          <div className="w-full md:w-[380px] grow">
            <img src="https://i.imgur.com/tRz5Xfg.png" />
            <p className="text-xl dark:text-iron-300 mt-6">
              {" "}
              Contextual observation, identifing the pains and needs in each
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
          After gleaning valuable insights from the 'understand' phase, I'd
          formed three personas – heavily influenced from the flexible
          questionnaire analysis. These were created in order to help craft a
          better experience later down the line when ideating.
        </p>
        <img
          className="w-[320px] mt-20"
          src="https://i.imgur.com/aveFBUy.png"
        />
      </div>
      <hr className="h-[1px] border-[.5px] w-full border-white/15 my-12 md:my-28"></hr>{" "}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-black">
          Ideation
        </h2>
        <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
          After looking at data, analysing user needs, creating personas to
          match these insights and discussing business requeriments. I moved on
          to ideating. This was done in three parts:
          <p />
          <ul>
            <li>
              {" "}
              <span className="text-greenlight"> • </span>A sketching session
              using a technique called Crazy Eights (getting lots of ideas down
              in a short time frame).
            </li>
            <li>
              {" "}
              <span className="text-greenlight"> • </span>A deeper analysis of
              two ideas I thought had longevity from the sketching session
            </li>
            <li>
              {" "}
              <span className="text-greenlight"> • </span> Scoring the two ideas
              I liked against the list of user needs to see which one to take
              forward into further exploration
            </li>
          </ul>
        </p>
      </div>
      <hr className="h-[1px] border-[.5px] w-full border-white/15 my-12 md:my-28"></hr>{" "}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-black">
          Developing the idea
        </h2>

        <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
          After tallying up two strong ideas against user needs, the 'search &
          social' concept came out the winner (just!). I then began developing
          this idea with low & high fidelity wireframes for both desktop and
          mobile.
        </p>
        <div className="grid-cols-1 md:grid-cols-3 grid mt-20">
          <div className="bg-[#F2F4F6] h-[340px] overflow-hidden flex items-center justify-center ">
            <img
              className="w-[80%] mt-8"
              src="/assets/constructoken/img02.png"
            />
          </div>
          <div className="bg-[#1D1C20] h-[340px] overflow-hidden flex items-center justify-center ">
            <img
              className="w-[80%] mt-8"
              src="/assets/constructoken/img01.png"
            />
          </div>
          <div className="bg-[#F2F4F6] h-[340px] overflow-hidden flex items-center justify-center ">
            <img
              className="w-[80%] mt-8"
              src="/assets/constructoken/img03.png"
            />
          </div>
          <div className="bg-[#1D1C20] h-[340px] overflow-hidden flex items-center justify-center ">
            <img
              className="w-[80%] -mt-8"
              src="/assets/constructoken/img04.png"
            />
          </div>
          <div className="bg-[#F2F4F6] h-[340px] overflow-hidden flex items-center justify-center ">
            <img
              className="w-[80%] -mt-8"
              src="/assets/constructoken/img05.png"
            />
          </div>
          <div className="bg-[#1D1C20] h-[340px] overflow-hidden flex items-center justify-center ">
            <img
              className="w-[80%] -mt-8"
              src="/assets/constructoken/img06.png"
            />
          </div>
        </div>
      </div>
      <hr className="h-[1px] border-[.5px] w-full border-white/15 my-12 md:my-28"></hr>{" "}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-black">
          Next Steps & Involvement
        </h2>
        <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
          Next steps: Test the prototype with the users who partook in the
          flexible questionnaire and iterate on the design based on user
          feedback before taking into development.
        </p>
        <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
          Involvement: As this was an interview task, this piece was conducted
          directly by myself, with the help of Edwina Nolan to source existing
          data and questionnaire results around the Coast & Sea section.
        </p>
      </div>
    </section>
  );
}
