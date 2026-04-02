import { memo, useEffect, useState } from "react"
import { motion } from "framer-motion"

const PETAL_COLORS = [
    "#ffc2d1",  
    "#ffd6dc",   
    "#ffe4e6",   
    "#ffccd5",   
]

function Background() {
    const [petals, setPetals] = useState([])

    useEffect(() => {
        const petalCount = 15
        const newPetals = Array.from({ length: petalCount }).map((_, i) => ({
            id: `petal-${i}`,
            x: Math.random() * 100,
            delay: Math.random() * 10,
            duration: Math.random() * 10 + 10,
            size: Math.random() * 12 + 8,
            color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
            rotation: Math.random() * 360,
        }))
        setPetals(newPetals)
    }, [])

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-linear-to-b from-[#fff6f8] via-[#fff0f4] to-[#ffe5ec] w-full h-full">
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    background: `
                        radial-gradient(ellipse 80% 60% at 10% 10%, rgba(255, 192, 203, 0.12), transparent 60%),
                        radial-gradient(ellipse 70% 55% at 85% 85%, rgba(255, 182, 193, 0.10), transparent 65%),
                        `
                }}
            />

            {petals.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute -top-10"
                    style={{
                        left: `${p.x}%`,
                        width: p.size,
                        height: p.size,
                        backgroundColor: p.color,
                        borderRadius: "100% 0 100% 0",
                        opacity: 0.8,
                        boxShadow: "0 2px 10px rgba(255, 182, 193, 0.3)"
                    }}
                    initial={{ y: "0", opacity: 0 }}
                    animate={{
                        y: ["-2vh", "110vh"],
                        x: [0, Math.sin(p.delay) * 80, 0],
                        rotate: [p.rotation, p.rotation + 360],
                        opacity: [0.5, 1, 1, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: p.delay,
                        x: {
                            duration: 5,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut"
                        }
                    }}
                />
            ))}
        </div>
    )
}

export default memo(Background)