"use client"

// import { useState } from 'react'
import { easeInOut, motion } from 'framer-motion'


export default function LoadingContainer(){

    const loadContClass = 'loading-container w-screen h-screen absolute bg-white'

    const loadWrapClass = 'loading-wrap w-full h-full flex justify-center items-center'

    const loadBoxClass = 'loading-box w-[200px] h-[200px]'


    // loading animation
    const loadParentClass = 'w-full h-full relative overflow-hidden'

    const loadChildCount = 5
    const loadChilds = Array.from({length: loadChildCount}, (_, i) => {

        const len = loadChildCount - 1
        const light = 85 - 85 / len * (len - i)

        const key = i
        const className = `w-[30px] h-[30px] absolute`
        const style = {
            background: `hsl(0, 0%, ${light}%)`,
            top: '50%',
            transform: 'translate(-105%, -50%)',
            zIndex: loadChildCount - i,
        }

        return {key, className, style}
    })
    const loadChildVar = {
        hidden: {
            left: '0',      
            transform: 'translate(-100%, -50%) rotate(0deg)'
        },
        visible: i => ({
            left: '115%',
            transform: 'translate(0, -50%) rotate(180deg)',
            transition: {
                delay: 0.08 * i,
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }),
    }


    return(
        <div className={loadContClass}>

            <div className={loadWrapClass}>

                <div className={loadBoxClass}>

                    <div
                        className={loadParentClass}
                    >
                        {loadChilds.map((child, i) => 
                            <motion.div 
                                key={child.key}
                                className={child.className}
                                style={child.style}
                                custom={i}
                                initial="hidden"
                                animate="visible"
                                variants={loadChildVar}
                            />
                        )}
                    </div>

                </div>

            </div>

        </div>
    )
}