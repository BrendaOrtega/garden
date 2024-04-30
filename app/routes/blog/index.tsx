import { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import dbConnection, { type PostType } from "~/db/db.server";
import { Icon } from "~/components/BaulCard";

export const loader: LoaderFunction = async () => {
  const db = await dbConnection();
  const posts = await db.Post.find({ main: false }).sort({ index: -1 });
  // const main = await db.Post.findOne({ main: true });
  return { posts };
};

export default function blog() {
  const { posts } = useLoaderData();

  return (
    <section className="max-w-7xl mx-auto pt-[160px] md:pt-[240px] w-full px-4 md:px-0">
      <div className=" px-4  md:px-20 ">
        <h2 className="text-center text-4xl md:text-5xl text-black dark:text-white leading-relaxed">
          {" "}
          📰 Something to read today
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 justify-center md:mt-[120px]  gap-y-20 gap-x-6 md:gap-x-10">
        {posts.map((post: PostType) => (
          <CardPost
            {...post}
            key={post.slug}
            image={post.metaImage}
            cover={post.image}
            title={post.title}
            description={post.body}
            tag={post.tag}
          />
        ))}
      </div>
    </section>
  );
}

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
export const IconHover = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#E9786E"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#E9786E"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

const CardPost = ({ image, description, title, tag, slug, subTag }) => {
  const truncate = (str, no_words, start = 0) => {
    return str.split(" ").splice(start, no_words).join(" ") + "...";
  };
  return (
    <div className=" group border bg-black border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
      <Icon className="transition-all absolute group-hover:hidden h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="transition-all absolute group-hover:hidden h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="transition-all absolute group-hover:hidden h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="transition-all absolute group-hover:hidden h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      <IconHover className=" transition-all absolute hidden group-hover:block h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <IconHover className="transition-all absolute hidden group-hover:block h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <IconHover className="transition-all absolute hidden group-hover:block h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <IconHover className="transition-all absolute hidden group-hover:block h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <Link prefetch="intent" to={slug}>
        <div className="relative transition-all rounded-lg cursor-pointer">
          <div className="w-full h-[320px] overflow-hidden">
            <img
              className="w-full h-full object-cover transition-all group-hover:scale-105"
              src={image}
              alt="blog post main banner"
            />
          </div>
          <div className="flex mt-4 gap-3">
            <span className="text-sm text-iron-400">{tag}</span>
            <span className="text-sm text-iron-400 ">{subTag}</span>
          </div>
          <h2 className="text-xl mb-1 mt-2 transition-all h-[84px] flex items-center text-white">
            {" "}
            {title}
          </h2>
        </div>
      </Link>
    </div>
  );
};
