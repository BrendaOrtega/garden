import useTheme from "~/utils/hooks/useTheme";

export default function Footer() {
  return (
    <section className="w-full text-center py-10 lg:py-20">
      <div className="flex justify-center">
        <a
          href="https://twitter.com/brendaojs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/twitter-blue-dark.svg"
            className="w-6 h-6 mx-2  opacity-50 hover:opacity-30"
            alt="twitter logo blue"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/brendago/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/in-blue-dark.svg"
            className="w-6 h-6 mx-2  opacity-50 hover:opacity-30"
            alt="twitter logo blue"
          />
        </a>
        <a
          href="https://www.instagram.com/brenda_orteg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/insta-blue-dark.svg"
            className="w-6 h-6 mx-2  opacity-50 hover:opacity-30"
            alt="twitter logo blue"
          />
        </a>
        <a
          href="https://github.com/BrendaOrtega"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/git-dark.svg"
            className="w-6 h-6 mx-2  opacity-50 hover:opacity-30"
            alt="twitter logo blue"
          />
        </a>
      </div>

      <p className="mt-4 text-white/50">
        © 2022 Brenda González Ortega - All rights reserved.
      </p>
    </section>
  );
}
