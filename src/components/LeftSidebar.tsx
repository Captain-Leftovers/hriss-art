import { cn } from "@/lib/utils";
import Image from "next/image";


type LeftSidebarProps = {
    className?: string;
  }
export default function LeftSidebar({
  className,
}: LeftSidebarProps) {


return (
  <aside className={cn('bg-cyan-950 text-white p-2 flex flex-col items-center relative',className)}  >
    
			<div className="flex items-center justify-center absolute rounded-full aspect-square w-16 bg-gradient-radial from-stone-500 to-stone-700  shadow-bubbleShadow animate-bubble transition ">

				<Image
					src="/images/b-brush.png"
					alt=""
					width={50}
          height={50}
					className=" transition -rotate-90 absolute"
          />
          </div>
  

  </aside>
  )
}