import usePlayerStore from '@/store/playerStore'
import Record from './Record'
import { motion, AnimatePresence } from 'framer-motion'
import useUrl from '@/app/hooks/useUrl'
import { DEFAULT_SPRING } from '@/config/easing'


const RecordBox = ({data, index, idx}) => {
    // store
    const {url} = useUrl({data, index, idx})
    const isPlaying = usePlayerStore(state => state.isPlaying)


    // 
    const recordBoxClass = 'record-box w-full h-full'


    // record anim
    const recordAnimClass = 'record-anim w-full h-full flex justify-center items-center'
    const animVariants = {
        initial: {
            opacity: 0,
            x: '0'
        },
        animate: {
            opacity: 1,
            x: '50%',
            transition: {
                x: {...DEFAULT_SPRING},
                opacity: {
                    duration: 0.3
                }
            }
        },
        exit: {
            opacity: 0,
            x: '0',
            transition: {
                x: {...DEFAULT_SPRING},
                opacity: {
                    duration: 0.3
                }
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