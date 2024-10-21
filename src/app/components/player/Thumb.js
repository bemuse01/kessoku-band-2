import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import useDataStore from '@/store/dataStore'
import usePlayerStore from '@/store/playerStore'
import ImageComp from './ImageComp'


const Thumb = () => {
    const ThumbClass = 'thumb w-full h-full relative'

    const isFirstRender = useRef({effect1: true, effect2: true})

    // image
    const data = useDataStore((state) => state.data)
    const index = useDataStore((state) => state.index)
    const idx = usePlayerStore((state) => state.idx)
    const {increaseIdx} = usePlayerStore()
    const animClass = 'thumb-anim w-full h-full absolute'
    const [url, setUrl] = useState(null)
    const [oldUrl, setOldUrl] = useState(null)

    useEffect(() => {
        // prevent action when first render
        if(isFirstRender.current.effect1){
            isFirstRender.current.effect1 = false
            return
        }

        // when data and index loaded
        if(index !== null && data !== null){
            setOldUrl(url)

            const id = index[idx]
            const newUrl = data.find(i => i.id === id).thumbnail
            setUrl(newUrl)

            console.log('url changed', url, oldUrl, idx)
        }
    }, [data, index, idx])

    useEffect(() => {
        if(isFirstRender.current.effect2){
            isFirstRender.current.effect2 = false
            return
        }

        window.addEventListener('click', () => {
            increaseIdx()
            console.log('work')
        })
    }, [])


    return(
        <div
            className={ThumbClass}
        >   

            <AnimatePresence>
            
                {url !== oldUrl && 
                    <motion.div
                        key={url}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.3}}
                        className={animClass}
                    >
                        <ImageComp url={url} />
                    </motion.div>
                }

            </AnimatePresence>

        </div>
    )
}


export default Thumb