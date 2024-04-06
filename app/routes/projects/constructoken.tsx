import { Link } from "@remix-run/react";
import Layout from "~/components/Layout";
import Tag from "~/components/Tag";
import styles from "~/styles/about.css";
import { Parallax } from "react-parallax";

export default function constructoken() {
  return (
    <section className="max-w-7xl mx-auto pt-[200px] ">
      <div className="w-full h-[680px] overflow-hidden rounded-[40px] bg-[#6CC597]">
        <Parallax
          className="h-full w-[80%] mx-auto "
          bgImage="/assets/constructoken/cover.png"
          bgImageAlt="the cat"
          strength={200}
        ></Parallax>
      </div>
      <div className="flex gap-12 mt-28 ">
        <div className="w-[30%]">
          <img
            className="w-[240px]"
            src="/assets/constructoken/constru_logo.png"
          />

          <div className="flex gap-4 mt-6">
            <Tag text="Mobile App" />
            <Tag text="UI Design" />
            <Tag text="Fintech" />
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
        <div className="w-[70%]">
          <p className="text-xl">
            Constructoken is a Fintech Startup that offers construction products
            offers financial services and specia Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Voluptates quibusdam error veniam
            iste natus dolores, iusto quos blanditiis unde excepturi maxime quod
            autem? Doloribus, impedit ipsa possimus totam minima exercitationem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde labore
            recusandae voluptate aliquid. Totam quod nisi omnis libero dicta
            odit, beatae, consectetur quidem vel saepe asperiores natus atque,
            neque laboriosam!
          </p>
          <p className="text-xl mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            quibusdam error veniam iste natus dolores, iusto quos blanditiis
            unde excepturi maxime quod autem? Doloribus, impedit ipsa possimus
            totam minima exercitationem. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Unde labore recusandae voluptate aliquid. Totam
            quod nisi omnis libero dicta odit, beatae, consectetur quidem vel
            saepe asperiores natus atque, neque laboriosam!
          </p>
          <p className="text-xl mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            quibusdam error veniam iste natus dolores, iusto quos blanditiis
            unde excepturi maxime quod autem? Doloribus, impedit ipsa possimus
            totam minima exercitationem. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Unde labore recusandae voluptate aliquid. Totam
            quod nisi omnis libero dicta odit, beatae, consectetur quidem vel
            saepe asperiores natus atque, neque laboriosam!
          </p>
        </div>
      </div>
      <hr className="h-[1px] w-full bg-white/05 my-28"></hr>
      <div>
        <h2 className="text-4xl font-bold">User Research</h2>
      </div>
      <hr className="h-[1px] w-full bg-white/05 my-28"></hr>
      <div>
        <h2 className="text-4xl font-bold">User Personas</h2>
      </div>
      <hr className="h-[1px] w-full bg-white/05 my-28"></hr>
      <div>
        <h2 className="text-4xl font-bold">Definition</h2>
      </div>
      <hr className="h-[1px] w-full bg-white/05 my-28"></hr>
      <div>
        <h2 className="text-4xl font-bold">Design</h2>
      </div>
    </section>
  );
}
