'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import LoadingImage from '@/public/images/loading.gif'
import Image from 'next/image'


const ImageLoading = ({imgClass, animClass}) => {
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
                alt='loading'
                src={LoadingImage}
                priority={true}
                draggable={false}
            />
        </motion.div>
    )
}

const ImageReal = ({url, imgClass, onLoad}) => {
    return(
        <Image
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={imgClass}
            src={url}
            alt='thumbnail'
            priority={true}
            onLoad={() => onLoad()}
            draggable={false}
        />
    )
}

const ImageComp = ({url}) => {
    // image comp
    const imageCompClass = 'image-comp w-full h-full overflow-hidden relative'


    // image
    const imgClass = 'w-full h-full object-cover absolute'
    const imgAnimClass = 'w-full h-full absolute'
    const [isLoading, setIsLoading] = useState(true)
    const onLoad = () => {
        setIsLoading(false)
    }


    return(
        <div
            className={imageCompClass}
        >   

            <ImageReal
                key={url}
                url={url}
                imgClass={imgClass}
                onLoad={onLoad}
            /> 

            <AnimatePresence>
            
                {isLoading && 
                    <ImageLoading
                        imgClass={imgClass}
                        imgAnimClass={imgAnimClass}
                    />
                }

            </AnimatePresence>

        </div>
    )
}


export default ImageComp