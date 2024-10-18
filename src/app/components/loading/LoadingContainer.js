"use client"

import LoadingWrap from './LoadingWrap'
import { AnimatePresence, motion } from 'framer-motion'

const LoadingContainer = ({isLoading}) => {

    const loadContClass = 'loading-container w-screen h-screen absolute bg-white'

    const variants = {
        initial: {
            opacity: 1,
        },
        hidden: {
            opacity: 0,
            transition: {
                duration: 0.5,
                delay: 1
            }
        },
    }

    return(
        <AnimatePresence>

            {isLoading && (
                <motion.div
                    className={loadContClass}
                    initial="initial"
                    exit="hidden"
                    variants={variants}
                >

                    <LoadingWrap />

                </motion.div>
            )}

        </AnimatePresence>
    )
}

export default LoadingContainer