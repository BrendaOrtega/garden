import { Link } from "@remix-run/react";
import { Parallax } from "react-parallax";
import Layout from "~/components/Layout";
import Tag from "~/components/Tag";
import styles from "~/styles/about.css";

export default function santander() {
  return (
    <section className="max-w-7xl mx-auto pt-[120px] md:pt-[200px]  w-[90%] md:w-full">
      <div className="w-full  h-[280px] md:h-[680px]  overflow-hidden rounded-[40px] bg-[#BD5648]">
        <Parallax
          className="h-full w-[90%] mx-auto  "
          bgImage="/assets/santander/cover.png"
          bgImageAlt="the cat"
          strength={200}
        ></Parallax>
      </div>

      <div className="flex gap-12 mt-16 md:mt-28 flex-wrap md:flex-nowrap ">
        <div className="w-full md:w-[30%] relative">
          <Link to="/">
            <p className="uppercase text-white/30 text-xs absolute -top-10">
              <span className="hover:text-salmon"> Projects </span> ⇢{" "}
              <span className="text-white"> Santander </span>
            </p>
          </Link>
          <a
            href="https://www.santander.com.mx/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-[140px] md:w-[180px] hover:scale-90 transition-all"
              src="/assets/santander/logo.png"
            />
          </a>
          <div className="flex flex-wrap gap-4 mt-6">
            <Tag text="Mobile App" />
            <Tag text="IOS/Android" />
            <Tag text="Product Design" />
            <Tag text="Banking" />
            <Tag text="Sketch" />
          </div>
          <p className="dark:text-white font-bold text-xl mt-10 mb-1">Date</p>
          <p className="text-base text-iron-500 dark:text-iron-300 ">
            Marzo 2019 - Junio 2020
          </p>
          <p className="dark:text-white font-bold text-xl mt-10 mb-1">Role</p>
          <p className="text-base text-iron-500 dark:text-iron-300 ">
            UX/UI Designer
          </p>
        </div>
        <div className="w-full md:w-[70%]">
          <p className="text-xl md:text-2xl dark:text-iron-300 mt-0">
            Santander App is the application of Santander Bank, which offers
            banking services such as transfers, investments, credit card
            payments and management, payment for financial services, among
            others.
          </p>
          <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            I worked on different features and flows within the application.
            However, I was directly responsible for 3 specific features:
            <span className="text-salmon">
              card payments, service payments, and investments.
            </span>
          </p>
          <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            Staying consistent with the guidelines and the previously defined
            design system, I worked on the credit card payment flows: own and
            third parties, registration, cancellation; services payments such as
            registration of services (electricity, internet, and telephone) and
            domiciliation of services; and the investment flow where users can
            choose the type of investment they want, as well as details such as
            the term and amount. I also worked
            <span className="text-salmon">
              {" "}
              on testing the components of the design system (in code).
            </span>
          </p>
          <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            For privacy reasons, I am unable to provide more details about this
            project.
          </p>
        </div>
      </div>
    </section>
  );
}
