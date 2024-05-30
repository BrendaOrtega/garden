import { Link } from "@remix-run/react";
import { Parallax } from "react-parallax";
import Layout from "~/components/Layout";
import Tag from "~/components/Tag";
import styles from "~/styles/about.css";

export default function flink() {
  return (
    <section className="max-w-7xl mx-auto  w-[90%] md:w-ful pt-[120px] md:pt-[200px] pb-20">
      <div className="w-full h-[280px] md:h-[680px] overflow-hidden rounded-[40px] bg-flink bg-cover">
        <Parallax
          className="h-full w-full md:w-[80%] mx-auto "
          bgImage="/assets/flink/cover.png"
          bgImageAlt="the cat"
          strength={200}
        ></Parallax>
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-12 mt-16 md:mt-28 ">
        <div className="w-full md:w-[30%]">
          <a
            href="https://miflink.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-[120px] md:w-[160px] hover:scale-90 transition-all"
              src="/assets/flink/Flink.png"
            />
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
            With Flink users can invest in the New York Stock Exchange (NYSE)
            and the National Association of Securities Dealers Automated
            Quotations (Nasdaq) shares with as little as 30 MXP to later sell
            their stocks at higher prices and make profits or dividends. They
            can also invest money in low-risk products and obtain daily returns
            with the savings account.
          </p>

          <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            When I joined the company, the app was in the official store
            but was experiencing three challenges.{" "}
            <span className="text-ironblue">
              The volume of daily transactions wasn´t increasing enough, the
              users didn’t have the best experience with the app, so they found
              it difficult to make investment decisions,
            </span>{" "}
            and a high percentage of users left before completing the onboarding
            process.
          </p>
          <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            In this case study, I will focus on the first and second challenges
            but will not address the third for privacy reasons.
          </p>
        </div>
      </div>
      <hr className="h-[1px] border-[.5px] w-full border-white/15 my-12 md:my-28"></hr>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-black">
          Personas
        </h2>
        <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
          We had 4 user personas defined, but to address the two challenges, we
          focused on two. Our user persona represents the 2 types of users that
          don't have extensive knowledge in investments but are risk takers.
        </p>
        <div className="flex flex-wrap md:flex-nowrap gap-16 mt-20">
          <div className="w-full md:w-[380px] grow">
            <img
              className="rounded-xl rotate-3 hover:-rotate-3 transition-all"
              src="/assets/flink/user1.png"
            />
            <p className="text-base dark:text-iron-300 mt-8">
              {" "}
              Andrea is our younger user; she is looking for new ways to
              increase his legacy but she is not sure how to do it.
            </p>
          </div>
          <div className="w-full md:w-[380px] grow">
            <img
              className="rounded-xl -rotate-3 hover:rotate-3 transition-all"
              src="/assets/flink/user2.png"
            />
            <p className="text-base dark:text-iron-300 mt-8">
              {" "}
              Bruno is our main user; he is young but his ambitious nature leads
              him to make rash decisions to get what he wants.
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
          Flink's mission is to become the favorite investment application and
          the easiest to use. it is important for customers to easily find
          stocks and understand the information needed to make good investment
          decisions. As the catalog and the information continued increasing, it
          became evident that the volume of information overwhelmed users. So,
          the mission of bringing users closer to investments is not being
          fulfilled.
        </p>
        <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
          Based on this assumption, we conducted deep-dive interviews with 14
          participants to understand pain points and areas of opportunity and
          define what actions to take.
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
            <span className="text-ironblue"> • 41% of users</span> use their
            application daily
          </li>
          <li className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            {" "}
            <span className="text-ironblue"> • </span>Just under{" "}
            <span className="text-ironblue"> 23% </span> invest in stocks once
            per week
          </li>
          <li className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            {" "}
            <span className="text-ironblue"> •</span> 50% of users feel they
            more data or help to make better decisions
            <span className="text-ironblue">
              {" "}
              help to take better decisions
            </span>
          </li>
          <li className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            {" "}
            <span className="text-ironblue"> • 28% of users </span> want
            financial education
          </li>
        </ul>
        <div className="flex justify-around mt-20 flex-wrap md:flex-nowrap">
          <img className="h-40" src="/assets/flink/comment1.svg" />
          <img className="h-36" src="/assets/flink/comment2.svg" />
        </div>
      </div>
      <hr className="h-[1px] border-[.5px] w-full border-white/15 my-12 md:my-28"></hr>{" "}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-black">
          Plan of Action
        </h2>
        <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
          With all of the above in mind, the design and product teams paired up
          to discuss ideas and proposals to solve our challenges:
        </p>
        <div className="flex  justify-center">
          <img className="w-[70%]" src="/assets/flink/img2.png" />
        </div>
        <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
          After analyzing the user and business needs, our technical constraints
          and the user experience that we want to offer, we agreed on the
          following steps:
        </p>
        <div className="flex justify-around mt-20 flex-wrap md:flex-nowrap">
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
          Ideating was done in three parts:
        </p>
        <div className="flex flex-wrap md:flex-nowrap gap-16 mt-20">
          <div className="w-full md:w-[380px] grow hover:-translate-y-4 transition-all">
            <img
              className="rounded-2xl h-[200px] w-full object-cover"
              src="/assets/flink/img5.png"
            />
            <h3 className="text-white text-xl mt-6">A sketching session</h3>
            <p className="text-xl dark:text-iron-300 mt-2">
              We used this session to explore different design proposals and
              conduct a deeper analysis of the best ideas to choose one to take
              forward into further exploration.
            </p>
          </div>

          <div className="w-full md:w-[380px] grow hover:-translate-y-4 transition-all">
            <img
              className="rounded-2xl h-[200px] object-cover w-full border border-white/10"
              src="/assets/flink/img7.png"
            />
            <h3 className="text-white text-xl mt-6">Prototyping and testing</h3>
            <p className="text-xl dark:text-iron-300 mt-2">
              {" "}
              We worked on low-fidelity wireframes based on the most
              highly-rated idea; then, we did usability tests with 6 users to
              test our hypothesis and our design.
            </p>
          </div>
          <div className="w-full md:w-[380px] grow hover:-translate-y-4 transition-all">
            <img
              className="rounded-2xl h-[200px] object-cover w-full"
              src="/assets/flink/img6.png"
            />
            <h3 className="text-white text-xl mt-6">
              High fidelity Wireframes
            </h3>
            <p className="text-xl dark:text-iron-300 mt-2">
              {" "}
              After analyzing the results, we moved on to high-fidelity
              wireframes using our Design System: Enchiridion.
            </p>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-black mt-28">
          Design
        </h2>
        <p className="  dark:text-iron-300 text-xl mt-10">
          {" "}
          The first proposal to help users make better investment decisions was
          a small but complex section in the stock detail view. In this section
          we suggested actions to take, based on expert opinion accompanied by
          analysis and related graphs. This strategy helped users and, at the
          same time, it helps increase the number of daily transactions.
        </p>
        <div className="flex justify-center mt-20">
          <img className="w-[80%]" src="/assets/flink/img8.png" />
        </div>
        <p className="  dark:text-iron-300 text-xl mt-20">
          {" "}
          The second proposal focused on increasing the buying and selling of
          shares without impacking the user experience. This proposal offers
          users the option to create combos of shares, which can be shared by
          expert users and purchased by others.
        </p>
        <div className="flex justify-center mt-20">
          <img className="w-[80%]" src="/assets/flink/img10.png" />
        </div>
      </div>
      <hr className="h-[1px] border-[.5px] w-full border-white/15 my-12 md:my-28"></hr>{" "}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-black">
          Measuring Success & Next steps
        </h2>
        <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
          The next steps are to track the average daily purchases and sales and
          the average per purchase-sale ticket. In addition to survey users to
          find out more about their experience on the "Analysts recommend"
          section and its usefulness in their investment decision-making.
        </p>
        <img className="w-20 mt-10" src="/assets/flink/img9.png" />
      </div>
    </section>
  );
}
