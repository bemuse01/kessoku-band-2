import { AnimatePresence, motion } from 'framer-motion'
import usePlayerStore from '@/store/playerStore'
import ImageComp from './ImageComp'
import useUrl from '@/app/hooks/useUrl'
import { DEFAULT_SPRING } from '@/config/easing'


const ThumbBox = ({data, index, idx}) => {
    // store
    const direction = usePlayerStore(state => state.direction)


    // thumb box
    const ThumbBoxClass = 'thumb-box w-full aspect-square aspect-square relative'


    // image
    const {url, oldUrl} = useUrl({data, index, idx})
    const animClass = 'thumb-anim w-full h-full absolute'
    const animVariants = {
        initial: {
            x: '15%',
            opacity: 0,
        },
        animate: {
            x: '0',
            opacity: 1,
            transition: {
                x: {...DEFAULT_SPRING},
                opacity: {
                    duration: 0.3
                }
            }
        },
        exit: {
            x: '-15%',
            opacity: 0,
            transition: {
                x: {...DEFAULT_SPRING},
                opacity: {
                    duration: 0.3
                }
            }
        },
    }
    

    return(
        <div
            className={ThumbBoxClass}
        >   

            <AnimatePresence>
            
                {url !== oldUrl && 
                    <motion.div
                        key={url}
                        initial={direction === 1 ? 'initial' : 'exit'}
                        animate="animate"
                        exit={direction === 1 ? 'exit' : 'initial'}
                        variants={animVariants}
                        className={animClass}
                    >
                        <ImageComp url={url} />
                    </motion.div>
                }

            </AnimatePresence>

        </div>
    )
}


export default ThumbBox