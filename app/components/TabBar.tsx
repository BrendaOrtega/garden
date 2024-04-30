import {
  Flex,
  Box,
  Text,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Nav({
  onClick,
  active,
}: {
  active: number;
  onClick: (arg0: number) => void;
}) {
  return (
    <div className="hideScroll my-8 lg:my-12 ">
      <div className="bg-[#1D1C20] px-3 py-2 rounded-full flex w-[500px] mx-auto  ">
        <TabActive
          onClick={() => onClick(0)}
          isActive={active === 0}
          text="📖 Books"
        />
        <TabActive
          onClick={() => onClick(1)}
          isActive={active === 1}
          text="🎥 Courses"
        />
        <TabActive
          onClick={() => onClick(2)}
          isActive={active === 2}
          text="📇 Blogs"
        />
        <TabActive
          onClick={() => onClick(3)}
          isActive={active === 3}
          text="📑 Docs"
        />
      </div>
    </div>
  );
}

const TabActive = ({
  onClick,
  text,
  isActive,
}: {
  onClick: () => void;
  text: string;
  isActive: boolean;
}) => {
  return (
    <div
      onClick={onClick}
      className={`h-10 cursor-pointer w-[138px] flex items-center justify-center text-center rounded-full ${
        isActive ? "bg-white text-black" : "bg-transparent text-white/50"
      }`}
    >
      <p className="h-10 flex items-center"> {text}</p>
    </div>
  );
};
