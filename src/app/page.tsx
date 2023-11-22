import Image from 'next/image'

export default function Home() {
	return (
		<main className="relative flex min-h-screen flex-col items-center justify-around p-24 pt-0 bg-stone-800">
			<div className="relative w-[500px] aspect-square flex items-center justify-center ">
				<div className="absolute rounded-full aspect-square w-[700px]   shadow-bubbleShadow animate-bubble transition" />
				<Image
					src="/images/b-brush.png"
					alt=""
					fill
					className=" transition -rotate-90 absolute"
				/>
			</div>
		</main>
	)
}
