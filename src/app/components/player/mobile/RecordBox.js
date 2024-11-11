import usePlayerStore from '@/store/playerStore'
import Record from './Record'
import { motion, AnimatePresence, cubicBezier } from 'framer-motion'
import useUrl from '@/app/hooks/useUrl'
import { DEFAULT_SPRING, easeInOutQuint, easeOutCirc, DEFAULT_SPRING_2 } from '@/config/easing'
import { useEffect, useRef, useState } from 'react'
import useColor from '@/app/hooks/useColor'


const RecordBox = ({data, index, idx}) => {
    // store
    const {url, oldUrl} = useUrl({data, index, idx})
    const direction = usePlayerStore(state => state.direction)
    const {originalColor} = useColor({data, index, idx})


    // record box
    const [recordSize, setRecordSize] = useState(0)
    const recordBoxClass = 'record-box aspect-square absolute bottom-0'
    const recordBoxStyle = {
        height: `${recordSize}px`,
        transform: 'scale(0.7)',
        transformOrigin: 'bottom'
    }
    const setRecordBox = () => {
        const height = window.innerHeight
        
        setRecordSize(height)
    }


    // record anim
    const recordAnimClass = 'record-anim w-full h-full flex justify-center items-center absolute '
    const animVariants = {
        initial: {
            rotate: 120,
            transition: {
                rotate: {...DEFAULT_SPRING_2},
            }
        },
        animate: {
            rotate: 0,
            transition: {
                rotate: {...DEFAULT_SPRING_2},
            }
        },
        exit: {
            rotate: -120,
            transition: {
                drotate: {...DEFAULT_SPRING_2},
            }
        }
    }


    // record
    const w = '100%'
    const h = '100%'
    

    // event
    const onResize = () => {
        setRecordBox()
    }
    const init = () => {
        setRecordBox()
        window.addEventListener('resize', onResize)
    }
    const onUnmount = () => {
        window.removeEventListener('resize', onResize)
    }
    useEffect(() => {
        init()

        return () => onUnmount()
    }, [])


    return(
        <div
            className={recordBoxClass}
            style={recordBoxStyle}
        >

            <AnimatePresence>

                {url !== oldUrl &&
                    <motion.div
                        key={url}
                        className={recordAnimClass}
                        initial={direction === 1 ? 'initial' : 'exit'}
                        animate="animate"
                        exit={direction === 1 ? 'exit' : 'initial'}
                        variants={animVariants}
                    >

                        <Record url={url} w={w} h={h} color={originalColor} />

                    </motion.div>
                }

            </AnimatePresence>

        </div>
    )
}


export default RecordBox