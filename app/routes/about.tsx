import { AnimatedTooltip } from "~/components/AnimatedTooltip";
import { InfiniteMovingCards } from "~/components/InfiniteMovingCards";

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
    text: "Accesibilidad",
  },
  {
    text: "👁️",
  },
  {
    text: "Educación",
  },
  {
    text: "👩🏻‍🏫",
  },
  {
    text: "Componentes",
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
    text: "Fuentes tipográficas",
  },
  {
    text: "📝",
  },
  {
    text: "Heurísticas",
  },
  {
    text: "🧐",
  },
  {
    text: "Patrones de diseño",
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
    text: "Usabilidad",
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
    text: "Diseño responsivo",
  },
  {
    text: "🧑🏻",
  },
];
const testimonials = [
  {
    text: "Layout",
  },
  {
    text: "🎨",
  },
  {
    text: "Usabilidad",
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
    text: "Diseño responsivo",
  },
  {
    text: "🧑🏻",
  },
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
    text: "Accesibilidad",
  },
  {
    text: "👁️",
  },
  {
    text: "Educación",
  },
  {
    text: "👩🏻‍🏫",
  },
  {
    text: "Componentes",
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
    text: "Fuentes tipográficas",
  },
  {
    text: "📝",
  },
  {
    text: "Heurísticas",
  },
  {
    text: "🧐",
  },
  {
    text: "Patrones de diseño",
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
  return (
    <section className="pt-[200px]">
      <div className="pb-0 lg:pb-10 flex-wrap lg:flex-nowrap flex justify-center items-start pt-10 gap-12 md:gap-0 max-w-7xl mx-auto ">
        <img
          className="w-[680px] rounded-3xl"
          src="https://i.imgur.com/eDktKC9.png"
        />
        <div className="bg-black px-10 pt-10 -ml-16 mt-[400px] rounded-3xl">
          <img className="w-[100px]" src="/images/yarn.png" />
          <h2 className="text-5xl font-bold mt-8">About me</h2>
          <p className="text-2xl mt-8">
            {" "}
            I’m Brenda, I am Product & UX Designer. I’ve been working on web and
            mobile applications for 8 years and I absolutely love what I do.
            <br /> <br />I studied economics, when i fall in love with
            technology. I learned software development for the curiosity of
            knowing how things work an now I am passionate about User Center
            Design.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold mt-8">
          Some companies I've worked with
        </h2>
        <AnimatedTooltip items={people} />
      </div>
      <div className="my-[120px]">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
        <InfiniteMovingCards items={tags} direction="left" speed="slow" />
      </div>
      <div className="text-center">
        <h2 className="text-5xl font-bold mt-8">Let's work together</h2>
        <iframe
          frameBorder="0"
          id="formmy-iframe"
          title="formmy"
          width="560"
          height="760"
          src="https://formmy.app/embed/660c7c0d495f273b3c096bba"
          style={{ margin: "0 auto", display: "block" }}
        ></iframe>
      </div>
    </section>
  );
}
