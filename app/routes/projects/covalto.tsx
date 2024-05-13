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
          <p className="text-xl md:text-2xl dark:text-iron-300">
            Covalto is a Bank that was born from de Banco Finterra acquisition
            by Credijusto. This new bank{" "}
            <span className="text-bird">offers financial products </span> like
            personal and enterprise loans, debit accounts, factoring and leasing
            services, and investment instruments. But, one of the main goals in
            2022 was to launch a business credit card that was the best solution
            to manage business expenses.
          </p>
          <p className="text-xl md:text-2xl mt-4 dark:text-iron-300">
            The challenge was{" "}
            <span className="text-bird">
              {" "}
              design a mobile application or web app{" "}
            </span>{" "}
            that allows companies to request an expense card account in a 100%
            digital way, where the users can request and assign expense cards
            for the collaborators of their companies and monitor and restrict
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
              src="/assets/covalto/img6.png"
            />
            <h3 className="text-xl dark:text-white mt-6">Benchmark</h3>
            <p className="text-xl dark:text-iron-300 mt-2">
              Having considered the market option, We identified 20 options in
              the local and international markets with a similar offer. So, we
              analyzed and compared these financial products.
            </p>
          </div>
          <div className="w-full md:w-[380px] grow hover:-translate-y-4 transition-all">
            <img
              className="rounded-2xl h-[280px] object-cover w-full"
              src="/assets/covalto/img8.png"
            />
            <h3 className="text-xl dark:text-white mt-6">Interviews</h3>
            <p className="text-xl dark:text-iron-300 mt-2">
              {" "}
              I conducted deep-dive interviews with 12 participants to
              understand the needs, pain points, and opportunity areas around
              the business card services.
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
          After gleaning valuable insights from the 'understand' phase, We
          formed three personas – heavily influenced by the flexible
          questionnaire analysis. These were created to help craft a better
          experience later down the line when ideating.
        </p>
        <div className="flex flex-wrap md:flex-nowrap gap-16 mt-20">
          <div className="w-full md:w-[380px] grow transition-all">
            <img
              className="rounded-2xl  w-full object-cover rotate-3 hover:-rotate-3"
              src="/assets/covalto/user1.png"
            />
            <p className="text-sm dark:text-iron-300 mt-8">
              Sofia is in charge of managing the company's cards and expenses
              and is the one who normally has problems limiting employee
              spending and justifying all company expenses.
            </p>
          </div>
          <div className="w-full md:w-[380px] grow transition-all">
            <img
              className="rounded-2xl  object-cover w-full -rotate-3 hover:rotate-3"
              src="/assets/covalto/user2.png"
            />

            <p className="text-sm dark:text-iron-300 mt-8 ">
              {" "}
              Juan Carlos is the one who uses the business card for his daily
              expenses as a sales agent, but he has difficulties managing his
              expenses and being able to pay with it.
            </p>
          </div>
        </div>
        <p className="text-xl mt-20 dark:text-iron-300 ">
          A customer journey map was created to map the process step by step,
          from the need for the business credit card to its use or cancellation.{" "}
        </p>
        <div className="flex mt-20 gap-10">
          {/* <img
            className="rounded-2xl  object-cover "
            src="/assets/covalto/img1.png"
          /> */}
          <img
            className="rounded-2xl  object-cover "
            src="/assets/covalto/img2.png"
          />
        </div>
      </div>
      <hr className="h-[1px] border-[.5px] w-full border-white/15 my-12 md:my-28"></hr>{" "}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-black">
          What did data tell us?
        </h2>
        <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
          Important needs to come out of these surveys included:
        </p>
        <ul>
          <li className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            {" "}
            <span className="text-sun"> • 66% of users (companies)</span> use
            business cards or pantry cards
          </li>
          <li className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            {" "}
            <span className="text-sun"> • 58% of copmanies</span> use platforms
            that don't have card spending restriction options
          </li>
          <li className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            {" "}
            <span className="text-sun"> • </span>
            Employees who use pantry cards don't have an application to manage
            their expenses
          </li>
          <li className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            {" "}
            <span className="text-sun"> • 23% of users </span> have problems
            paying with their TDC (they are not accepted in all establishments)
          </li>
        </ul>
        <div className="flex justify-around mt-20 flex-wrap md:flex-nowrap">
          <img className="h-40" src="/assets/covalto/comment1.svg" />
          <img className="h-36" src="/assets/covalto/comment2.svg" />
        </div>
      </div>
      <hr className="h-[1px] border-[.5px] w-full border-white/15 my-12 md:my-28"></hr>{" "}
      <div>
        <h2 className="text-4xl font-bold dark:text-white text-black">
          Definition
        </h2>
        <p className="text-xl mt-4 dark:text-iron-300 ">
          Working closely with the Product VP, we defined per user type the
          features that the app must have to achieve the business goals and
          solve the user's needs improving his experience using business cards.
        </p>
        <img
          className="rounded-2xl  object-cover mt-10 "
          src="/assets/covalto/img9.jpg"
        />
        <p className="text-xs mt-4 dark:text-iron-300 ">
          *Some details of the product and process have been changed or omitted
          for privacy reasons.
        </p>
      </div>
      <hr className="h-[1px] border-[.5px] w-full border-white/15 my-12 md:my-28"></hr>{" "}
      <div>
        <h2 className="text-4xl font-bold dark:text-white text-black">
          Ideation & Prototyping
        </h2>
        {/* <p className="text-xl mt-4 dark:text-iron-300 ">
          Working closely with Product VP, we defined per user type the
          feautures that the app must have to archive the businees goals and
          solve the user needs improving his experience usisng business cards.*
        </p> */}
        <div className="flex flex-wrap md:flex-nowrap gap-16 mt-20">
          <div className="w-full md:w-[380px] grow hover:-translate-y-4 transition-all">
            <img
              className="rounded-2xl h-[200px] w-full object-cover"
              src="/assets/covalto/img3.png"
            />
            <h3 className="text-white text-xl mt-6">Site map</h3>
            <p className="text-xl dark:text-iron-300 mt-2">
              To ensure that content is found in the places where users expect
              to find it, I conducted an ideation session with some users.
            </p>
          </div>

          <div className="w-full md:w-[380px] grow hover:-translate-y-4 transition-all">
            <img
              className="rounded-2xl h-[200px] object-cover w-full"
              src="/assets/covalto/img4.png"
            />
            <h3 className="text-white text-xl mt-6">Wireframing</h3>
            <p className="text-xl dark:text-iron-300 mt-2">
              {" "}
              With the site map defined, I moved forward to design low-fidelity
              wireframes.
            </p>
          </div>
          <div className="w-full md:w-[380px] grow hover:-translate-y-4 transition-all">
            <img
              className="rounded-2xl h-[200px] object-cover w-full"
              src="/assets/covalto/img5.png"
            />
            <h3 className="text-white text-xl mt-6">Blueprint</h3>
            <p className="text-xl dark:text-iron-300 mt-2">
              We identified some issues related with the company documents
              verification, so I worked on a service blueprint to improve the
              workflow.
            </p>
          </div>
        </div>
        <h3 className="text-white text-xl mt-20">High fidelity wireframes</h3>
        <p className="text-xl dark:text-iron-300 mt-2">
          After reviewing the mid-fidelity wireframes with the product and
          development team, I continued with high-fidelity wireframes for IOS
          and Android.
        </p>
        <img className=" object-cover w-full" src="/assets/covalto/img7.png" />
      </div>
      <hr className="h-[1px] border-[.5px] w-full border-white/15 my-12 md:my-28"></hr>{" "}
      <div>
        <h2 className="text-4xl font-bold dark:text-white text-black">
          Next steps
        </h2>
        <p className="text-xl dark:text-iron-300 mt-2">
          Continuing to iterate the app, a beta launch was scheduled in February
          2020 to test the app (experientially and functionally) with real
          users. Iterations continued after this testing cycle.
        </p>
        <img className="w-20 mt-10" src="/assets/covalto/fur.png" />
      </div>
    </section>
  );
}
