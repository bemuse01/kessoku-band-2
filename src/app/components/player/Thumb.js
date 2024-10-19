import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import defaultThumb from '@/public/images/default.jpg'
import useDataStore from '@/store/dataStore'
import usePlayerStore from '@/store/playerStore'


const Placeholder = ({animClass, imgClass}) => {
    return(
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.3}}
            className={animClass}
        >
            <Image
                className={imgClass}
                alt='placeholder'
                src={defaultThumb}
                priority={true}
            />
        </motion.div>
    )
}

const Thumbnail = ({url, animClass, imgClass, onLoad}) => {
    return(
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.3}}
            className={animClass}
        >
            <Image
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={imgClass}
                src={url}
                alt='thumbnail'
                priority={true}
                onLoad={() => onLoad()}
            />
        </motion.div>
    )
}

const Thumb = () => {
    const ThumbClass = 'thumb w-full h-full relative'


    // image
    const data = useDataStore((state) => state.data)
    const index = useDataStore((state) => state.index)
    const idx = usePlayerStore((state) => state.idx)
    const [isLoaded, setIsLoaded] = useState(false)
    const imgAnimClass = 'w-full h-full absolute'
    const imgClass = 'w-full h-full object-cover absolute'
    const [url, setUrl] = useState(null)
    const onLoadImage = () => {
        console.log('loaded')
        setIsLoaded(true)
    }
    useEffect(() => {
        if(index !== null && data !== null){
            const id = index[idx]
            const url = data.find(i => i.id === id).thumbnail
            setUrl(url)
        }
    }, [data, index, idx])


    return(
        <div
            className={ThumbClass}
        >   

            <AnimatePresence>

                {isLoaded && 
                    <Placeholder
                        key="0"
                        animClass={imgAnimClass} 
                        imgClass={imgClass} 
                    /> 
                }
            
                {url && 
                    <Thumbnail
                        key="1"
                        url={url} 
                        animClass={imgAnimClass} 
                        imgClass={imgClass} 
                        onLoad={onLoadImage} 
                    /> 
                }

            </AnimatePresence>

        </div>
    )
}


export default Thumb