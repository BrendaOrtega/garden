import { Link } from "@remix-run/react";
import { Parallax } from "react-parallax";
import Layout from "~/components/Layout";
import Tag from "~/components/Tag";
import styles from "~/styles/about.css";

export default function flink() {
  return (
    <section className="max-w-7xl mx-auto  w-[90%] md:w-ful pt-[120px] md:pt-[200px] ">
      <div className="w-full h-[280px] md:h-[680px] overflow-hidden rounded-[40px] bg-ironblue">
        <Parallax
          className="h-full w-[80%] mx-auto "
          bgImage="/assets/flink/cover.png"
          bgImageAlt="the cat"
          strength={200}
        ></Parallax>
      </div>
      <div className="flex gap-12 mt-28 ">
        <div className="w-[30%]">
          <a
            href="https://miflink.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-[120px]" src="/assets/flink/flink.png" />
          </a>
          <div className="flex flex-wrap gap-4 mt-6">
            <Tag text="Mobile App" />
            <Tag text="Product Design" />
            <Tag text="Fintech" />
            <Tag text="Figma" />
          </div>
          <p className="dark:text-white font-bold text-xl mt-10 mb-1">Date</p>
          <p className="text-base text-iron-500 dark:text-iron-300 ">
            November 2022 - July 2023
          </p>
          <p className="dark:text-white font-bold text-xl mt-10 mb-1">Role</p>
          <p className="text-base text-iron-500 dark:text-iron-300 ">
            Product Designer
          </p>
        </div>
        <div className="w-full md:w-[70%]">
          <p className="text-xl md:text-2xl dark:text-iron-300">
            Flink is a <span className="text-ironblue">Fintech Startup</span>{" "}
            that seeks to{" "}
            <span className="text-ironblue">
              {" "}
              democratize stock investments.{" "}
            </span>
            With Flink you can invest on New York Stock Exchange (NYSE) and el
            National Association of Securities Dealers Automated Quotations
            (Nasdaq) and invest money in a savings account with daily returns,
            both from 30 mexican pesos.
          </p>
          <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            The app has the necessary workflows to invest in the market stock,
            but we are facing 3 challenges: a high percentage of users leave the
            onboarding process before finish it and the volume of transactions
            should increase and the users has problems to take investment
            decisions.
          </p>
        </div>
      </div>
      <hr className="h-[1px] border-[.5px] w-full border-white/15 my-12 md:my-28"></hr>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-black">
          Personas
        </h2>
        <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
          We had 4 user personas defined, but for focused on our 2 challenges we
          focused on two. Our user persona represent the 2 types of users to
          whom the application is oriented, that don't have extensive knowledge
          in investments and are risk takers.
        </p>
        <div className="flex flex-wrap md:flex-nowrap gap-16 mt-20">
          <div className="w-full md:w-[380px] grow">
            <img
              className="rounded-xl rotate-3"
              src="/assets/flink/user1.png"
            />
            <p className="text-base dark:text-iron-300 mt-8">
              {" "}
              Andrea is our younger user, she is looking for new ways to
              increase his heritage but she is not sure hoy she can do it.
            </p>
          </div>
          <div className="w-full md:w-[380px] grow">
            <img
              className="rounded-xl -rotate-3"
              src="/assets/flink/user2.png"
            />
            <p className="text-base dark:text-iron-300 mt-8">
              {" "}
              Bruno is our main user, he is young but his ambitions lead him to
              make risky decisions to get what he wants.
            </p>
          </div>
        </div>
      </div>
      <hr className="h-[1px] border-[.5px] w-full border-white/15 my-12 md:my-28"></hr>{" "}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-black">
          Understanding the problem - User needs
        </h2>
        <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
          Flink's mission is to become the easy and favorite investments
          application, it is important for customers to easly find stocks and
          understand the information related with to take good investment
          decisions. As the catalog and the information continue increasing , it
          was becoming evident that so much information overwhelms users. So,
          the mission of bringing users closer to investments is not being
          fulfilled.
        </p>
        <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
          Based on this assumption, we conducted deep dive interviews with 14
          participants to understand pain points, opportunity areas and
          understanding of planning needs around the places to stay section of
          the site.
        </p>
        <div className="bg-[#0E0E10] px-[10%] mt-20">
          <img className="" src="/assets/flink/img1.png" />
        </div>
      </div>
      <hr className="h-[1px] border-[.5px] w-full border-white/15 my-12 md:my-28"></hr>{" "}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-black">
          What did data tell us?
        </h2>
        <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
          Important needs to come out of this user testing included:
        </p>
        <ul>
          <li className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            {" "}
            <span className="text-greenlight"> • </span>41% of users use his
            application daily
          </li>
          <li className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            {" "}
            <span className="text-greenlight"> • </span>Just under 23% invest in
            stocks 1 time per week
          </li>
          <li className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            {" "}
            <span className="text-greenlight"> • </span> 50% of users consider
            that need more data or help to take better decisions
          </li>
          <li className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            {" "}
            <span className="text-greenlight"> • </span> 28% of users consider
            that need financial education
          </li>
        </ul>
        <div className="flex justify-around mt-20">
          <img className="h-40" src="/assets/flink/comment1.png" />
          <img className="h-36" src="/assets/flink/comment2.png" />
        </div>
      </div>
      <hr className="h-[1px] border-[.5px] w-full border-white/15 my-12 md:my-28"></hr>{" "}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-black">
          Plan of Action
        </h2>
        <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
          With all of the above in mind, design and product paired up to discuss
          ideas and proposals to solve our 2 main challenges:
        </p>
        <div className="flex  justify-center">
          <img className="w-[70%]" src="/assets/flink/img2.png" />
        </div>
        <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
          After analysis the user and business needs, our technical constrains
          and the user experience that we want to offer, the agreed work on:
        </p>
        <div className="flex justify-around mt-20">
          <img className="w-[480px]" src="/assets/flink/img3.png" />
          <img className="w-[480px]" src="/assets/flink/img4.png" />
        </div>
      </div>
      <hr className="h-[1px] border-[.5px] w-full border-white/15 my-12 md:my-28"></hr>{" "}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-black">
          Ideation & Prototyping
        </h2>
        <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
          After looking at data, analysing user needs, creating personas to
          match these insights and discussing business requeriments. I moved on
          to ideating. This was done in three parts:
        </p>
        <div className="flex flex-wrap md:flex-nowrap gap-16 mt-20">
          <div className="w-full md:w-[380px] grow">
            <img
              className="rounded-2xl h-[200px] w-full object-cover"
              src="/assets/flink/img5.png"
            />
            <p className="text-xl dark:text-iron-300 mt-6">
              A sketching session to explore diferent design proposals and
              adeeper analysis of some ideas to see which one to take forward
              into further exploration.
            </p>
          </div>
          <div className="w-full md:w-[380px] grow">
            <img
              className="rounded-2xl h-[200px] object-cover w-full"
              src="/assets/flink/img6.png"
            />
            <p className="text-xl dark:text-iron-300 mt-6">
              {" "}
              After scoring two ideas, move forward to high fidelity design.
            </p>
          </div>
          <div className="w-full md:w-[380px] grow">
            <img
              className="rounded-2xl h-[200px] object-cover w-full"
              src="/assets/flink/img7.png"
            />
            <p className="text-xl dark:text-iron-300 mt-6">
              {" "}
              User testing sessions to test our hypotheses and our design.
            </p>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-black mt-28">
          Design
        </h2>
        <div className="flex justify-center mt-20">
          <img className="w-[80%]" src="/assets/flink/img8.png" />
        </div>
      </div>
      <hr className="h-[1px] border-[.5px] w-full border-white/15 my-12 md:my-28"></hr>{" "}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-black">
          Measuring Success & Next steps
        </h2>
        <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
          Track the average daily purchases and sales, and the average per
          purchase-sale ticket, in addition to applying surveys to users to find
          out their opinion on the "Analysts recommend" section and its
          usefulness.
        </p>
        <img className="w-20 mt-10" src="/assets/flink/img9.png" />
      </div>
    </section>
  );
}
