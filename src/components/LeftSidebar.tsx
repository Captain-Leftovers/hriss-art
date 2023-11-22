import { cn } from "@/lib/utils";
import Image from "next/image";


type LeftSidebarProps = {
    className?: string;
  }
export default function LeftSidebar({
  className,
}: LeftSidebarProps) {


return (
  <aside className={cn('bg-black p-2 flex flex-col items-center',className)}  >
    <Image src='/images/b-brush.png' alt="" width={60} height={60} className=""/>
     Left Side
  </aside>
  )
}