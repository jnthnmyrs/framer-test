"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"
import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"

const MotionTestDiv = () => {

    const router = useRouter()

    const [firstClick, setFirstClick] = useState(false)
    const [stuff, setStuff] = useState({
        rotation: 0,
        scale: 1,
        opacity: 1,
    })
    const [xValue, setXValue] = useState(0)
    const [yValue, setYValue] = useState(0)
    const [score, setScore] = useState(0)


    const squareClasses = () => {
        if (!firstClick) {
            return "w-96 h-96 bg-orange-200  animate-pulse rounded-xl hover:bg-orange-400 cursor-pointer active:bg-orange-600 transition-colors"
        } else {
            return "w-96 h-96 bg-orange-600 rounded-xl hover:bg-orange-700 cursor-pointer active:bg-orange-900 transition-colors"
        }
    }

    // here's a little function to componetize toast a little bit

    const launchToast = (message: string) => {
        toast(message,
            {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            })
    }

    const makeItDoStuff = () => {
        setFirstClick(true)
        setStuff({
            rotation: stuff.rotation + 98,
            scale: 1,
            opacity: 1,
        })

        setXValue(Math.random() * 80 - 40)
        setYValue(Math.random() * 80 - 40)

        if (stuff.rotation >= 1078) {
            setStuff({
                rotation: 0,
                scale: stuff.scale,
                opacity: stuff.opacity,
            })
            // launchToast("🏆  C H A M P I O N  🏆")
            setXValue(0)
            setYValue(0)
            setScore(score + 1)

            // swtich to determine toast message
            switch (score) {
                case 0: {
                    launchToast("✨ You did it! Now for your prize... ✨ ")
                    setTimeout(() => {
                        router.push("https://www.youtube.com/watch?v=jzj7STruKgQ")
                    }, 2000)
                }
                    break;
            }
        }
    }

    return (
        <>
            <div className="flex flex-col justify-between ">
                <div className="grid mx-auto justify-center grid-cols-1 md:grid-cols-2 gap-16">
                    <motion.div
                        onClick={makeItDoStuff}
                        className={squareClasses()}
                        initial={{
                            x: `${Math.random() * 90 - 45}vw`,
                            y: `${Math.random() * 90 - 45}vh`,
                            opacity: 1,
                            scale: 0.5,
                            rotate: 0,
                        }}
                        animate={{
                            x: `${xValue}vw`,
                            y: `${yValue}vh`,
                            rotate: stuff.rotation,
                            scale: stuff.scale,
                            opacity: stuff.opacity,
                        }}
                        transition={{ duration: 0.5, type: "spring" }}
                        whileTap={{ scale: 0.8 }}
                    />
                    <div className="grid grid-cols-1 gap-8 md:gap-2 pointer-events-none user-select-none">

                        <p className="text-white z-50 text-4xl pointer-events-none user-select-none"><span className="text-white/50">ROTATION:</span> {stuff.rotation}°</p>
                        <p className="text-white z-50 text-4xl pointer-events-none user-select-none"><span className="text-white/50">X:</span> {Math.round(xValue)}</p>
                        <p className="text-white z-50 text-4xl pointer-events-none user-select-none"><span className="text-white/50">Y:</span> {Math.round(yValue)}</p>
                        <p className="text-white z-50 text-4xl pointer-events-none user-select-none"><span className="text-white/50">SCORE:</span> {score} </p>
                        {/* <button onClick={secretReset} className=" text-stone-700">secret reset</button> */}

                    </div>

                </div>
                {/* <div className="relative flex justify-end">
                    <div className=" text-white flex flex-col items-center justify-center">
                        <Link href="https://jonathanandrewmyers.com" target="_blank">
                            <Image src="/jamsig.png?v=2" alt="made by jam" width={40} height={40} />
                        </Link>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default MotionTestDiv