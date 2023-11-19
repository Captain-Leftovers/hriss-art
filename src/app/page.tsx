import Image from 'next/image'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1 className="text-9xl my-auto p-4">
				<span className="animate-pulse1 transform duration-1000 bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent">
					Comming
				</span>{' '}
				<span className="animate-pulse2 transform duration-1000 bg-gradient-to-l from-purple-300 to-purple-400 bg-clip-text text-transparent">
					Soon
				</span>
			</h1>
		</main>
	)
}
