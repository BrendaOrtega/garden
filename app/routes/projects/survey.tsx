import { Link } from "@remix-run/react";
import { Parallax } from "react-parallax";
import Layout from "~/components/Layout";
import Tag from "~/components/Tag";
import styles from "~/styles/about.css";

export default function formmy() {
  return (
    <section className="max-w-7xl mx-auto  w-[90%] md:w-full pt-[120px] md:pt-[200px] ">
      <div className="w-full  h-[280px] md:h-[680px] overflow-hidden rounded-[40px] bg-[#F9D054]">
        <Parallax
          className="h-full w-[90%] mx-auto "
          bgImage="/assets/survey/cover.png"
          bgImageAlt="the cat"
          strength={200}
        ></Parallax>
      </div>
      <div className="flex gap-12 mt-16 md:mt-28 flex-wrap md:flex-nowrap ">
        <div className="w-full md:w-[30%]">
          <img
            className="w-[200px] hover:scale-90 transition-all"
            src="/assets/survey/logo.png"
          />
          <div className="flex flex-wrap gap-4 mt-6">
            <Tag text="Web App" />
            <Tag text="UI/UX Design" />
            <Tag text="Figma" />
            <Tag text="React" />
            <Tag text="Chakra UI" />
          </div>
          <p className="dark:text-white font-bold text-xl mt-10 mb-1">Date</p>
          <p className="text-base text-iron-500 dark:text-iron-300 ">
            August - December 2022
          </p>
          <p className="dark:text-white font-bold text-xl mt-10 mb-1">Role</p>
          <p className="text-base text-iron-500 dark:text-iron-300 ">
            Product Designer
          </p>
        </div>
        <div className="w-full md:w-[70%]">
          <p className="text-xl md:text-2xl dark:text-iron-300">
            SurveyUp is a{" "}
            <span className="text-sun">
              {" "}
              surveys platform focused on Market studies
            </span>
            , you can contract survey up's services to aplied specific surveys
            in specific demographics. SurveyUp is{" "}
            <span className="text-sun">
              responsible for finding users who fit the profile required by your
              study
            </span>
            , applying the surveys (which are shared by you) and managing the
            responses to carry out a general analysis of the study results and
            share it with you along with the data in the necessary formats.At
            the same time, an account is created for you through which you can
            access the platform and see the results of the surveys in real time.
          </p>
          <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            What type of users will use the platform? What are the needs of each
            user?{" "}
            <span className="text-sun">
              How can we create a useful and understandable interface for users?
            </span>{" "}
            The challenge was analyze the market, deepen on the business
            requeriments and the user needs, define the basic futures that the
            webapp needs to work, and design the user flows.
          </p>
        </div>
      </div>
    </section>
  );
}
