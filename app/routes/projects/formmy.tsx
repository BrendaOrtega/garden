import { Link } from "@remix-run/react";
import Layout from "~/components/Layout";
import styles from "~/styles/about.css";

export default function formmy() {
  return (
    <section className="max-w-7xl mx-auto pt-[200px] ">
      <div className="w-full h-[680px] overflow-hidden rounded-[40px]">
        <img className="object-cover w-full" src="/assets/flink/cover.png" />
      </div>
      <div className="flex gap-12 mt-28 ">
        <div className="w-[30%]">
          <img src="/assets/flink/flink.png" />
          <p className="text-base text-iron-500 dark:text-iron-300  mt-4">
            Mobile app to make investments
          </p>
          <p className="dark:text-white font-bold text-xl mt-10 mb-1">Date</p>
          <p className="text-base text-iron-500 dark:text-iron-300 ">
            Noviembre 2022 - Julio 2023
          </p>
          <p className="dark:text-white font-bold text-xl mt-10 mb-1">Role</p>
          <p className="text-base text-iron-500 dark:text-iron-300 ">
            Product Designer
          </p>
        </div>
        <div className="w-[70%]">
          <p className="text-xl">
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
      <hr className="h-[1px] w-full bg-white/05 my-28"></hr>
      <div>
        <h2 className="text-4xl font-bold">Testing</h2>
      </div>
    </section>
  );
}
