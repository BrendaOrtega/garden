import { Link } from "@remix-run/react";
import { Parallax } from "react-parallax";
import Layout from "~/components/Layout";
import Tag from "~/components/Tag";
import styles from "~/styles/about.css";

export default function formmy() {
  return (
    <section className="max-w-7xl mx-auto  w-[90%] md:w-full pt-[120px] md:pt-[200px] ">
      <div className="w-full  h-[280px] md:h-[680px]  overflow-hidden rounded-[40px] bg-formmy">
        <Parallax
          className="h-full w-[80%] mt-10 md:mt-0 mx-auto "
          bgImage="/assets/formmy/cover.png"
          bgImageAlt="the cat"
          strength={200}
        ></Parallax>
      </div>
      <div className="flex gap-12 mt-16 md:mt-28 flex-wrap md:flex-nowrap ">
        <div className="w-full md:w-[30%] relative">
          <Link to="/">
            <p className="uppercase text-white/30 text-xs absolute -top-10">
              <span className="hover:text-lila"> Projects </span> ⇢{" "}
              <span className="text-white"> Formmy</span>
            </p>
          </Link>
          <a
            href="https://www.formmy.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-[200px] md:w-[240px] hover:scale-90 transition-all"
              src="/assets/formmy/logo.svg"
            />
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
            December 2023
          </p>
          <p className="dark:text-white font-bold text-xl mt-10 mb-1">Role</p>
          <p className="text-base text-iron-500 dark:text-iron-300 ">
            Product Designer
          </p>
        </div>
        <div className="w-full md:w-[70%]">
          <p className="text-xl md:text-2xl dark:text-iron-300">
            Formmy is a web application
            <span className="text-lila">
              {" "}
              that allows you to add contact forms{" "}
            </span>{" "}
            to your website. With Formmy you can create your form, customize it,
            and add it to your website just by copying and pasting an iframe
            into your code. Then, you can manage your client's messages from the
            dashboard.
          </p>
          <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            What type of inputs are necessary for the users? How might we
            configure all form items in a way which entices users to put it on
            their websites? Is the step-by-step implementation process clear to
            users?
          </p>
        </div>
      </div>
    </section>
  );
}
