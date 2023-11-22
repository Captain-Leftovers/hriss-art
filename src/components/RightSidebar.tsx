
import { cn } from '@/lib/utils';

type RightSidebarProps = {
    
   className?: string;
  }
export default function RightSidebar({className}: RightSidebarProps) {


return (
  <aside className={cn('',className)} >
     Right Side
  </aside>
  )
}