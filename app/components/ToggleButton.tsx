// import { Switch } from "@headlessui/react";
// import { useState } from "react";

// export default function ToggleButton({
//   onChange,
//   defaultValue,
//   isDisabled,
// }: {
//   isDisabled?: boolean;
//   defaultValue?: "dark" | "light";
//   onChange?: (arg0: boolean) => void;
// }) {
//   const [enabled, setEnabled] = useState(defaultValue === "dark");

//   return (
//     <Switch
//       checked={enabled}
//       onChange={() => {
//         if (isDisabled) return;
//         setEnabled(!enabled);
//         if (onChange) {
//           onChange(!enabled);
//         }
//       }}
//       className={`dark:bg-[#000000] bg-[#F1F1F1] relative inline-flex h-8 w-[52px] items-center rounded-full`}
//     >
//       <span
//         className={`dark:bg-[url('/images/luna.svg')] dark:translate-x-6 translate-x-1 bg-cover bg-[url('/images/sol.svg')] inline-block h-6 w-6 transform rounded-full  transition dark:bg-[#080808] bg-[#F1F1F1]`}
//       />
//     </Switch>
//   );
// }
