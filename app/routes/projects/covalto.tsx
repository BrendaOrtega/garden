import { Link } from "@remix-run/react";
import { Parallax } from "react-parallax";
import Layout from "~/components/Layout";
import Tag from "~/components/Tag";
import styles from "~/styles/about.css";

export default function covalto() {
  return (
    <section className="max-w-7xl mx-auto  w-[90%] md:w-ful pt-[120px] md:pt-[200px] ">
      {" "}
      <div className="w-full  h-[280px] md:h-[680px] overflow-hidden rounded-[40px] bg-[#F2C557]">
        <Parallax
          className="h-full w-[100%] mx-auto "
          bgImage="/assets/covalto/cover2.png"
          bgImageAlt="the cat"
          strength={200}
        ></Parallax>
      </div>
      <div className="flex gap-12 mt-16 md:mt-28 flex-wrap md:flex-nowrap ">
        <div className="w-full md:w-[30%]">
          <a
            href="https://covalto.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-[200px] hover:scale-90 transition-all"
              src="/assets/covalto/logo.png"
            />
          </a>
          <div className="flex flex-wrap gap-4 mt-6">
            <Tag text="Mobile App" />
            <Tag text="IOS/Android" />
            <Tag text="Fintech" />
            <Tag text="Figma" />
          </div>
          <p className="dark:text-white font-bold text-xl mt-10 mb-1">Date</p>
          <p className="text-base text-iron-500 dark:text-iron-300 ">
            Junio 2020 - Junio 2022
          </p>
          <p className="dark:text-white font-bold text-xl mt-10 mb-1">Role</p>
          <p className="text-base text-iron-500 dark:text-iron-300 ">
            UX/UI Designer
          </p>
        </div>
        <div className="w-full md:w-[70%]">
          <p className="text-xl dark:text-iron-300">
            Covalto is a Bank that born from de Banco Finterra acquisition by
            Credijusto. This new bank{" "}
            <span className="text-bird">offers financial products </span> like:
            personal and enterprisse loans, debit accounts, factoring and
            leasing services and investment instruments. But, one of the main
            goals in 2022 was launch a business credit card that was the best
            solution to manage business expenses.
          </p>
          <p className="text-xl mt-4 dark:text-iron-300">
            The challenge was{" "}
            <span className="text-bird">
              {" "}
              design a mobile application or web app{" "}
            </span>{" "}
            that allows companies to request an expenses cards account in a 100%
            digital way, where the users can request and assign expenses cards
            for the collaborators of their companies and monitore and restrict
            the expenses as well in each card.
          </p>
        </div>
      </div>
      <hr className="h-[1px] border-[.5px] w-full border-white/15 my-12 md:my-28"></hr>{" "}
      <div>
        <h2 className="text-4xl font-bold dark:text-white text-black">
          Understanding the problem - User needs
        </h2>
        <p className="text-xl mt-4 dark:text-iron-300">
          To understand the user needs around the business credit card, I
          started with the research that was done in two parts:
        </p>
        <div className="flex flex-wrap md:flex-nowrap gap-16 mt-20">
          <div className="w-full md:w-[380px] grow hover:-translate-y-4 transition-all">
            <img
              className="rounded-2xl h-[280px] w-full object-cover"
              src="/assets/covalto/img5.png"
            />
            <p className="text-xl dark:text-white mt-6">Benchmark</p>
            <p className="text-sm dark:text-iron-300 mt-6">
              Having considered the market option, I identified 3 options in the
              local market and 3 more international options with a similar
              offer.
            </p>
          </div>
          <div className="w-full md:w-[380px] grow hover:-translate-y-4 transition-all">
            <img
              className="rounded-2xl h-[280px] object-cover w-full"
              src="/assets/flink/img6.png"
            />
            <p className="text-xl dark:text-white mt-6">Surveys & Interviews</p>
            <p className="text-sm dark:text-iron-300 mt-6">
              {" "}
              I applied surveys to 50 participants and conducted a deep dive
              interviews with 12 participants to understand needs, pain points
              and opportunity areas around the business card services.
            </p>
          </div>
        </div>
      </div>
      <hr className="h-[1px] border-[.5px] w-full border-white/15 my-12 md:my-28"></hr>{" "}
      <div>
        <h2 className="text-4xl font-bold dark:text-white text-black">
          User Personas & Journeymap
        </h2>
        <p className="text-xl mt-4 dark:text-iron-300">
          After gleaning valuable insights from the 'understand' phase, We'd
          formed three personas – heavily influenced from the flexible
          questionnaire analysis. These were created in order to help craft a
          better experience later down the line when ideating.
        </p>
        <img className="mt-20" src="/assets/covalto/img1.png" />
        <p className="text-xl mt-20 dark:text-iron-300 ">
          A customer journey map was created to map the process step by step,
          from the need for the business credit card to its use or cancellation.{" "}
        </p>
        <div className="flex justify-around flex-wrap md:flex-nowrap">
          <img className="mt-20" src="/assets/covalto/img1.png" />
          <img className="mt-20" src="/assets/covalto/img2.png" />
        </div>
      </div>
      <hr className="h-[1px] border-[.5px] w-full border-white/15 my-12 md:my-28"></hr>{" "}
      <div>
        <h2 className="text-4xl font-bold dark:text-white text-black">
          Ideation & Prototyping
        </h2>
        <p className="text-xl mt-20 dark:text-iron-300 ">
          A customer journey map was created to map the process step by step,
          from the need for the business credit card to its use or cancellation.{" "}
        </p>
        <img className="mt-20" src="/assets/covalto/img3.png" />
        <p className="text-xl mt-20 dark:text-iron-300 ">
          A customer journey map was created to map the process step by step,
          from the need for the business credit card to its use or cancellation.{" "}
        </p>
        <img className="mt-20" src="/assets/covalto/img4.png" />
        <p className="text-xl mt-20 dark:text-iron-300 ">
          A customer journey map was created to map the process step by step,
          from the need for the business credit card to its use or cancellation.{" "}
        </p>
        <img className="mt-20" src="/assets/covalto/img7.png" />
      </div>
      <hr className="h-[1px] border-[.5px] w-full border-white/15 my-12 md:my-28"></hr>{" "}
      <div>
        <h2 className="text-4xl font-bold dark:text-white text-black">
          Next steps
        </h2>
      </div>
    </section>
  );
}
