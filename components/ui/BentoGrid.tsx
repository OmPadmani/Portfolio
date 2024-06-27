import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
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
  img,
  imgClassName,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?:string;
  id?:number;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 ",
        className
      )}
      // rgb(4,7,29)
      // style={{background:'rgb(17, 25, 40)',backgroundColor:'gradient...'}}
      // style={{backgroundColor: 'rgb(2,0,36)',
      //         background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(12,9,121,0.9780287114845938) 47%, rgba(48,0,152,0.938813025210084) 83%)',
      //       }}
      style={{backgroundColor: 'rgb(18,16,14)',
        background: 'linear-gradient(90deg, rgba(18,16,14,1) 0%, rgba(30,27,57,0.9) 100%)'
        // background: 'linear-gradient(90deg, rgba(18,16,14,1) 0%, rgba(29,44,65,0.98) 100%, rgba(36,32,69,0.9) 100%)'

        // background-color: #000000;
        // background-image: linear-gradient(315deg, #000000 0%, #a29bfe 74%);
        // background-color: #2b1331;
        // background-image: linear-gradient(315deg, #2b1331 0%, #b9abcf 74%);
        // background-color: #8d5185;
        // background-image: linear-gradient(315deg, #8d5185 0%, #a1bafe 74%);
        // background-color: #4c4177;
        // background-image: linear-gradient(315deg, #4c4177 0%, #2a5470 74%);
        // background-color: #7a7adb;
        // background-image: linear-gradient(315deg, #7a7adb 0%, #170e13 74%);
        // background-color: #090947;
        // background-image: linear-gradient(315deg, #090947 0%, #5a585a 74%);
        // background-color: #2b4162;
        // background-image: linear-gradient(315deg, #2b4162 0%, #12100e 74%);
      }}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
