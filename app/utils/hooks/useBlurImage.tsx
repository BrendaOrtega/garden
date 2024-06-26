import { useEffect, useState } from "react";

export function useBlurLoadingImage(hdImageSrc: string, lowImageSrc?: string) {
  const low = "https://i.imgur.com/16aC4jAt.png";
  const [src, setSrc] = useState<string>(lowImageSrc ?? low);

  useEffect(() => {
    const img = new Image();
    img.src = lowImageSrc ?? low;

    img.onload = () => {
      setSrc(hdImageSrc);
    };
  }, [hdImageSrc, lowImageSrc]);

  return [src, { blur: src !== hdImageSrc }];
}

export const BlurImage = ({
  lowSrc,
  src,
  full,
}: {
  lowSrc?: string;
  full?: boolean;
  src: string;
}) => {
  const [dynamicSrc, { blur }] = useBlurLoadingImage(src, lowSrc);
  return (
    <img
      alt="illustration"
      src={dynamicSrc}
      className="hover:scale-105  cursor-pointer"
      style={{
        height: "100%",
        minWidth: full ? "100%" : 500,
        transition: blur ? " all 1s ease" : "all .5s ease",
        filter: blur ? "blur(20px)" : "none",
        objectFit: "cover",
        clipPath: "inset(0px)",
      }}
    />
  );
};
