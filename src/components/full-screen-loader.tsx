'use client' // Indicates to next.js that this component is client side.
import { useEffect, useState } from 'react'

export default function FullScreenLoader() {
	const [show, setShow] = useState(true)
	useEffect(() => {
		setTimeout(() => {
			setShow(false)
		}, 2100)
	}, [])

	if (!show) return null

	return (

        <div className='absolute h-screen w-screen z-50 bg-black flex flex-col items-center justify-center animate-slide-down'>
            	<h1 className="text-9xl my-auto p-4">
				<span className="animate-pulse1 transform duration-1000 bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent">
					Comming
				</span>{' '}
				<span className="animate-pulse2 transform duration-1000 bg-gradient-to-l from-purple-300 to-purple-400 bg-clip-text text-transparent">
					Soon
				</span>
			</h1>
        </div>
    )
}
