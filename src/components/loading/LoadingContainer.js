"use client"

import LoadingWrap from './LoadingWrap'
import { AnimatePresence, motion } from 'framer-motion'

const LoadingContainer = ({isLoading, size, delay, reverse, opactity, styleConfig = {}}) => {

    const color = reverse ? 0 : 255
    const o = opactity || 1
    const loadContClass = 'loading-container w-full h-full absolute'
    const loadContStyle = {
        ...styleConfig,
        background: `rgba(${color}, ${color}, ${color}, ${o})`
    }

    const variants = {
        initial: {
            opacity: 1,
        },
        hidden: {
            opacity: 0,
            transition: {
                duration: 0.3,
                delay: delay || 0
            }
        },
    }

    return(
        <AnimatePresence>

            {isLoading && (
                <motion.div
                    className={loadContClass}
                    style={loadContStyle}
                    initial="initial"
                    exit="hidden"
                    variants={variants}
                >

                    <LoadingWrap size={size} reverse={reverse} />

                </motion.div>
            )}

        </AnimatePresence>
    )
}

export default LoadingContainer