import { Link } from "@remix-run/react";
import { Parallax } from "react-parallax";
import Layout from "~/components/Layout";
import Tag from "~/components/Tag";
import styles from "~/styles/about.css";

export default function formmy() {
  return (
    <section className="max-w-7xl mx-auto  w-[90%] md:w-ful pt-[120px] md:pt-[200px] ">
      <div className="w-full h-[680px] overflow-hidden rounded-[40px] bg-formmy">
        <Parallax
          className="h-full w-[80%] mx-auto "
          bgImage="/assets/formmy/cover.png"
          bgImageAlt="the cat"
          strength={200}
        ></Parallax>
      </div>
      <div className="flex gap-12 mt-28 ">
        <div className="w-[30%]">
          <a
            href="https://www.formmy.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-[240px]" src="/assets/formmy/logo.svg" />
          </a>
          <div className="flex flex-wrap gap-4 mt-6">
            <Tag text="Web App" />
            <Tag text="UI/UX Design" />
            <Tag text="Saas" />
            <Tag text="Figma" />
            <Tag text="React" />
            <Tag text="TailwindCSS" />
          </div>
          <p className="dark:text-white font-bold text-xl mt-10 mb-1">Date</p>
          <p className="text-base text-iron-500 dark:text-iron-300 ">
            December 2024
          </p>
          <p className="dark:text-white font-bold text-xl mt-10 mb-1">Role</p>
          <p className="text-base text-iron-500 dark:text-iron-300 ">
            Product Designer
          </p>
        </div>
        <div className="w-full md:w-[70%]">
          <p className="text-xl md:text-2xl dark:text-iron-300">
            Formmy is a web application
            <span className="text-lila"> for adding contact forms</span> to your
            website. With Formmy you can create your form and customize it to
            add it to your website just by copying and pasting an iframe into
            your code and manage your client's messages from the dashboard.
          </p>
          <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            What type of inputs are necessary for the users? How might we
            configure all form items in a way which entices users to implemented
            in their websites? Is the step by step implementation process clear
            to users?
          </p>
        </div>
      </div>
    </section>
  );
}
