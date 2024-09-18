import { cn } from "@/lib/utils";
import Link from "next/link";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid auto-rows-[19rem] grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 md:max-w-3xl lg:max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  image,
  id
}) => {
  return (
    <Link
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:border-white/[0.2] dark:bg-[#151030] bg-white border border-gray-200 flex flex-col w-full justify-between min-h-[270px] max-w-[296px]",
        className
      )}
      href={`models/${id}`}
    >
       <img src={image} alt='image' className="rounded-xl"/>
       <div className="group-hover/bento:translate-x-2 transition duration-200 flex flex-col space-y-2">
        <div className="font-inter font-bold dark:text-gray-200 text-black text-sm sm:text-base">
          {title}
        </div>
        <div className="font-poppins font-normal text-gray-400 sm:text-sm tracking-wide text-xs">
          {description}
        </div>
        </div>
        <button className="bg-transparent rounded-md py-1.5 px-5 hover:bg-black hover:text-white dark:hover:bg-gray-800 dark:border-white/75 dark:text-white text-black border border-black transition-all text-center text-sm font-inter flex items-center justify-center">
          Try out
        </button>
    </Link>
  );
};