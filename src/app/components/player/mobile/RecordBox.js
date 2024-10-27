import usePlayerStore from '@/store/playerStore'
import Record from './Record'
import { motion, AnimatePresence, cubicBezier } from 'framer-motion'
import useUrl from '@/app/hooks/useUrl'
import { DEFAULT_SPRING, easeOutCirc } from '@/config/easing'
// import useColor from '@/app/hooks/useColor'


const RecordBox = ({data, index, idx}) => {
    // store
    const {url} = useUrl({data, index, idx})
    const isPlaying = usePlayerStore(state => state.isPlaying)
    // const {color} = useColor({data, index, idx})


    // 
    const recordBoxClass = 'record-box w-full h-full'


    // record anim
    const recordAnimClass = 'record-anim w-full h-full flex justify-center items-center'
    const animVariants = {
        initial: {
            opacity: 0,
            y: '0'
        },
        animate: {
            opacity: 1,
            y: '-50%',
            transition: {
                y: {...DEFAULT_SPRING},
                opacity: {
                    duration: 0.3
                }
            }
        },
        exit: {
            opacity: 0,
            y: '0',
            transition: {
                ease: cubicBezier(...easeOutCirc),
                duration: 0.3
            }
        }
    }


    // record
    const w = '90%'
    const h = '90%'
    

    return(
        <div
            className={recordBoxClass}
        >
            <AnimatePresence>

                {isPlaying &&
                    <motion.div
                        className={recordAnimClass}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={animVariants}
                    >

                        <Record url={url} w={w} h={h} />

                    </motion.div>
                }

            </AnimatePresence>

        </div>
    )
}


export default RecordBox