import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import useDataStore from '@/store/dataStore'
import usePlayerStore from '@/store/playerStore'
import ImageComp from './ImageComp'


const ThumbBox = () => {
    const ThumbClass = 'thumb-box w-full h-full relative'

    const isFirstRender = useRef({effect1: true})


    // store
    const data = useDataStore(state => state.data)
    const index = useDataStore(state => state.index)
    const idx = usePlayerStore(state => state.idx)
    const direction = usePlayerStore(state => state.direction)
    const {getDataById} = useDataStore()


    // image
    const animClass = 'thumb-anim w-full h-full absolute'
    const [url, setUrl] = useState(null)
    const [oldUrl, setOldUrl] = useState(null)
    const animVariants = {
        initial: {
            x: '15%',
            opacity: 0,
        },
        animate: {
            x: '0',
            opacity: 1
        },
        exit: {
            x: '-15%',
            opacity: 0
        },
        transition: {
            duration: 0.3            
        }
    }
    const changeUrl = () => {
        setOldUrl(url)

        const id = index[idx]
        const newUrl = getDataById(id).thumbnail
        setUrl(newUrl)

        console.log(url, oldUrl, idx)
    }

    useEffect(() => {
        if(isFirstRender.current.effect1){
            isFirstRender.current.effect1 = false
            return
        }
        
        if(data !== null && index !== null){
            changeUrl()
        }

    }, [data, index, idx])


    return(
        <div
            className={ThumbClass}
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