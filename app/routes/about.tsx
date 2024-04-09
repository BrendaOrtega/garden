import { useEffect, useRef } from "react";
import { PinContainer } from "~/components/3d-pin";
import { AnimatedTooltip } from "~/components/AnimatedTooltip";
import { InfiniteMovingCards } from "~/components/InfiniteMovingCards";
import styles from "~/styles/about.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

const tags = [
  {
    text: "Design System",
  },
  {
    text: "🤖",
  },
  {
    text: "Mobile first",
  },
  {
    text: "📱",
  },
  {
    text: "Accesibility",
  },
  {
    text: "👁️",
  },

  {
    text: "Components",
  },
  {
    text: "🧩",
  },
  {
    text: "Testing",
  },
  {
    text: "🎯",
  },

  {
    text: "Heuristics",
  },
  {
    text: "🧐",
  },
  {
    text: "Animations",
  },
  {
    text: "🔥",
  },
  {
    text: "Layout",
  },
  {
    text: "🎨",
  },
  {
    text: "Usability",
  },
  {
    text: "👋🏻",
  },
  {
    text: "Interfaces",
  },
  {
    text: "✨",
  },
  {
    text: "Color",
  },
  {
    text: "🖌",
  },
  {
    text: "Responsive Design",
  },
  {
    text: "🧑🏻",
  },
];
const testimonials = [
  {
    text: "ReactJS",
  },
  {
    text: "🧑🏻‍💻",
  },
  {
    text: "Firebase",
  },
  {
    text: "⚡️",
  },
  {
    text: "Chakra UI",
  },
  {
    text: "🌈",
  },
  {
    text: "TailwindCSS",
  },
  {
    text: "🖌",
  },
  {
    text: "Useberry",
  },
  {
    text: "👁️‍🗨️",
  },
  {
    text: "Invision",
  },
  {
    text: "🤖",
  },
  {
    text: "HTML & CSS",
  },
  {
    text: "👻",
  },
  {
    text: "Accesibility",
  },
  {
    text: "👁️",
  },

  {
    text: "👩🏻‍🏫",
  },
  {
    text: "Components",
  },
  {
    text: "🧩",
  },
  {
    text: "Testing",
  },
  {
    text: "🎯",
  },
  {
    text: "Typography",
  },
  {
    text: "📝",
  },
  {
    text: "Heuristics",
  },
  {
    text: "🧐",
  },
  {
    text: "UI Patterns",
  },
  {
    text: "🔥",
  },
];

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.pexels.com/photos/706137/pexels-photo-706137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.pexels.com/photos/706137/pexels-photo-706137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function about() {
  const ref = useRef();
  useEffect(() => {
    setTimeout(() => (ref.current.style = "background:transparent"), 2000);
  }, []);
  return (
    <section className="pt-[120px] md:pt-[200px]  mx-auto">
      <div className="w-[90%] md:w-full pb-10 lg:pb-10 flex-wrap-reverse md:flex-wrap lg:flex-nowrap flex justify-center items-start pt-10 gap-12 md:gap-0 max-w-7xl mx-auto ">
        <img
          className="w-full md:w-[680px] rounded-3xl "
          src="https://i.imgur.com/eDktKC9.png"
        />
        <div className="bg-transparent md:bg-black px-0 md:px-10 pt-0 md:pt-10 -ml-0 md:-ml-16 mt-0 md:mt-[400px] rounded-3xl">
          <img className="w-[100px]" src="/images/yarn.png" />
          <h2 className="text-4xl md:text-5xl font-bold mt-8">About me</h2>
          <p className="text-xl md:text-2xl text-iron-400 mt-8">
            {" "}
            I’m Brenda, I am Product & UX Designer based on Mexico. I studied
            economics before start my tech career as frontend developer. So,
            I’ve been working on web and mobile applications for more than 8
            years, and I absolutely love what I do.
          </p>
          <p className="text-xl md:text-2xl mt-8 text-iron-400 ">
            I focus on designing complex and functional products that help user
            and business reach their goals. I really enjoy create experiences
            that users find useful and easy to understand.
          </p>
          <p className="text-xl md:text-2xl mt-8 text-iron-400 ">
            If you want to know more about me, know more about what I’m working
            on, or talk about working together, feel free to{" "}
            <a href="mailto:bremin11.20.93@gmail.com">
              {" "}
              <span className="text-brand-500 ">email me</span>
            </a>
            .
          </p>
        </div>
      </div>
      <div className="my-0 md:my-[120px]">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
        <InfiniteMovingCards items={tags} direction="left" speed="slow" />
      </div>
      <div className="max-w-7xl w-[90%] md:w-full mx-auto text-center py-20 md:py-[160px]">
        <h2 className="text-4xl md:text-5xl font-bold mt-8">
          Some companies I've worked with
        </h2>
        <p className="text-xl md:text-2xl mt-8 text-iron-400">
          Touch them to reveal more information
        </p>
        <div className="flex flex-wrap md:flex-nowrap justify-between mt-12 md:mt-[120px]">
          <div className=" flex gap-2 md:gap-16 flex-col">
            <Company
              title="miflink.com"
              href="https://miflink.com/"
              image="/assets/Flink_logo.png"
            />

            <Company
              title="constructoke.com"
              href="https://constructoken.com/"
              image="/assets/constructoken_logo.png"
            />
          </div>
          <div className="pt-10 md:pt-20 flex gap-2 md:gap-16 flex-col">
            <Company
              title="gft.com"
              href="https://www.gft.com/mx/es"
              image="/assets/Gft_logo.png"
            />
            <Company
              title="laboratoriosazteca.com.mx"
              href="https://laboratorioazteca.com.mx/"
              image="/assets/azteca.png"
            />
          </div>
          <div className="flex gap-2 md:gap-16 flex-col">
            <Company
              title="santander.com"
              href="https://www.santander.com.mx/"
              image="/assets/santander_logo.png"
            />
            <Company
              title="oddpleasures.com"
              href="https://oddpleasures.com/"
              image="/assets/odd.png"
            />
          </div>
          <div className="pt-10 md:pt-20flex gap-2 md:gap-16 flex-col">
            <Company
              title="covalto.com"
              href="https://covalto.com/"
              image="/assets/covalto_logo.png"
            />
            <Company
              title="concamin.org.mx"
              href="https://www.concamin.org.mx/inicio"
              image="/assets/concamin.png"
            />
          </div>
          <div className="flex gap-2 md:gap-16 flex-col">
            <Company
              title="potentiia.com"
              href="https://potentiia.com/"
              image="/assets/potentia.png"
            />
            <Company
              title="lastplay.app"
              href="https://www.lastplay.app/"
              image="/assets/lastplay.png"
            />
          </div>
          <div className="pt-10 md:pt-20 flex gap-2 md:gap-16 flex-col">
            <Company
              title="lomasdecocoyoc.com"
              href="https://lomasdecocoyoc.com/"
              image="/assets/cocoyoc_logo.png"
            />
            <Company
              title="unikko.es"
              href="https://www.unikko.es/"
              image="/assets/unikko.png"
            />
          </div>
        </div>
      </div>

      {/* <div className="text-center py-20 md:py-[120px]">
        <h2 className="text-4xl md:text-5xl font-bold mt-8">
          Let's work together
        </h2>
        <p className="text-xl md:text-2xl mt-8 text-iron-400">
          I'd love to learn more about you and what we can design and build
          together.
        </p>
        <section className="w-full md:w-[680px] mx-auto mt-16 ">
          <iframe
            ref={ref}
            frameBorder="0"
            id="formmy-iframe"
            title="formmy"
            width="100%"
            height="560"
            src="https://formmy.app/embed/660c7c0d495f273b3c096bba"
            style={{
              margin: "0 auto",
              display: "block",
            }}
          ></iframe>
        </section>{" "}
      </div> */}
    </section>
  );
}

const Company = ({ title, href, image }) => {
  return (
    <PinContainer title={title} href={href}>
      <div className="flex basis-full flex-col p-0 tracking-tight text-slate-100/50 sm:basis-1/2 w-28 h-28 rounded-full ">
        <img className="grayscale w-[80%] mx-auto my-auto" src={image} />
      </div>
    </PinContainer>
  );
};
