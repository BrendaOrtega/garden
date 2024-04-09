export default function Tag({ text }) {
  return (
    <button className="border border-[#27272A] rounded flex justify-center items-center px-3 bg-[#18181B] h-6 text-xs text-[#D4D4D8]">
      {text}
    </button>
  );
}
