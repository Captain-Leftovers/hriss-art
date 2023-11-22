import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-around p-24 pt-0 bg-black">
		<Image src='/images/b-brush.png' alt="" width={400} height={400} className=' transition -rotate-90 ' />
		</main>
	)
}
