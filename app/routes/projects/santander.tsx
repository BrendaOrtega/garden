import { Link } from "@remix-run/react";
import { Parallax } from "react-parallax";
import Layout from "~/components/Layout";
import Tag from "~/components/Tag";
import styles from "~/styles/about.css";

export default function santander() {
  return (
    <section className="max-w-7xl mx-auto pt-[200px] ">
      <div className="w-full h-[680px] overflow-hidden rounded-[40px] bg-[#BD5648]">
        <Parallax
          className="h-full w-[90%] mx-auto "
          bgImage="/assets/santander/cover.png"
          bgImageAlt="the cat"
          strength={200}
        ></Parallax>
      </div>

      <div className="flex gap-12 mt-28 ">
        <div className="w-[30%]">
          <a
            href="https://www.santander.com.mx/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-[180px]" src="/assets/santander/logo.png" />
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
        <div className="w-[70%]">
          <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            Santander App is the application of Banco Santander, which offered
            banking services such as: transfers, investments, card payments,
            payment of services, card management, etc.
          </p>
          <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            <span className="text-salmon"> I worked </span>in a general way on
            different features and flows within the application. But I directly
            had responsibility for 3 specific features:{" "}
            <span className="text-salmon">
              Card payments, payment of services and Investments.
            </span>
          </p>
          <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            Based on the guidelines and the previously defined design system, I
            worked on the credit card payment flows (own and third parties,
            registration, cancellation and payment of services (electricity,
            internet, etc.), and the investment flow where As a user you can
            choose type of investment, term, amount, etc. Likewise, I worked on{" "}
            <span className="text-salmon">
              testing the components of the design system (in code).
            </span>
          </p>
          <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            for privacy reasons, I can't show more information about it.
          </p>
        </div>
      </div>
    </section>
  );
}
