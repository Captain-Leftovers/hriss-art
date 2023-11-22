import Image from "next/image";


export default function loading() {

    

return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-0 bg-black">
    <Image src='/images/b-brush.png' alt="" width={400} height={400} className='animate-spin transition ' />
    </main>
  )
}