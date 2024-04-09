import { Link } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import MarkDown from "~/components/MarkDown";
import styles from "~/styles/markdown.css";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import dbConnection from "~/db/db.server";
import { TracingBeam } from "../../components/TracingBeam";
import { useEffect, useRef } from "react";

const twitter =
  "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Ftwitter-blue.svg?alt=media&token=24dcc7cc-1de7-461d-8ab1-8f1fd9a63d26";
const linkedin =
  "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Fin-blue.svg?alt=media&token=86cad868-5f6d-471c-b4fd-e35e389b797a";
const facebook =
  "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Finsta-blue.svg?alt=media&token=60b894e4-a5cc-4eed-b692-aba9496349a9";
const link =
  "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Fbe-blue.svg?alt=media&token=162cb60e-4cd6-4dd3-8735-fa0551538cd8";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export async function loader({ params }) {
  const slug = params.slug;
  const db = await dbConnection();
  const post = await db.Post.findOne({ slug });
  if (!slug) {
    return redirect("/blog");
  }
  return { post };
}

export default function () {
  const { post } = useLoaderData();

  // HACK PARA ASEGURARSE DE QUE EL TRACING FUNCIONE
  useEffect(() => {
    if (localStorage.getItem("initial") === "1") {
      localStorage.removeItem("initial");
    } else {
      localStorage.setItem("initial", "1");
      setTimeout(() => location.reload(), 100);
    }
  }, []); //

  return (
    <section>
      <div
        style={{ backgroundImage: `url('${post.cover}')` }}
        className="w-full h-[280px] lg:h-[540px] bg-cover bg-center  grayscale-[80%]"
      />
      <TracingBeam className="px-6">
        <div className="py-8 max-w-xl relative mx-auto">
          <Link to="/blog">
            <button
              className="text-white hover:bg-[#212123] -left-[68px] top-12 rounded-lg flex justify-center items-center text-2xl
             h-10 w-[56px] absolute"
            >
              <HiOutlineArrowSmLeft />
            </button>
          </Link>
          <h2 className="pb-4 w-full text-4xl md:text-[40px] leading-normal mt-10 md:mt-[inherit] text-white ">
            {" "}
            {post.title}
          </h2>
          <div className="flex justify-between border-b-[1px] items-center border-white/10 pb-8">
            <div className="flex gap-4">
              <div
                style={{ backgroundImage: `url(${post.authorImage})` }}
                className="w-12 h-12 rounded-full bg-cover bg-center "
              />
              <div>
                <p className="mb-0 font-bold text-white">
                  Brenda Gonzalez Ortega
                </p>
                <span className="text-[#767676]">{post.authorAt}</span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <img
                className="w-6 h-6 opacity-50 hover:opacity-30 transition-all"
                src="/images/twitter-blue-dark.svg"
                alt="twitter icon"
              />
              <img
                className="w-6 h-6 opacity-50 hover:opacity-30 transition-all"
                src="/images/face.svg"
                alt="twitter icon"
              />
              <img
                className="w-6 h-6 opacity-50 hover:opacity-30 transition-all"
                src="/images/in-blue-dark.svg"
                alt="twitter icon"
              />
              <img
                className="w-6 h-6 opacity-50 hover:opacity-30 transition-all"
                src="/images/link.svg"
                alt="twitter icon"
              />
            </div>
          </div>
          <MarkDown>{post.body}</MarkDown>
        </div>
      </TracingBeam>
    </section>
  );
}
