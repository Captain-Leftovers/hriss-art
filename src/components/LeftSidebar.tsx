import { cn } from "@/lib/utils";
import Image from "next/image";


type LeftSidebarProps = {
    className?: string;
  }
export default function LeftSidebar({
  className,
}: LeftSidebarProps) {


return (
  <aside className={cn('',className)}  >
    <Image src='/images/brush.png' alt="" width={70} height={70} className=""/>
     Left Side
  </aside>
  )
}