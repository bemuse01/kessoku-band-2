'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import LoadingImage from '@/public/images/loading.gif'
import defaultThumb from '@/public/images/default.jpg'
import Image from 'next/image'
import { PLAYER_BORDER_VALUE } from '@/config/style'


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
    const imageCompClass = 'image-comp w-full h-full overflow-hidden relative'
    const imageCompStyle = {
        borderRadius: `${PLAYER_BORDER_VALUE}px`,
    }

    const isFirstRender = useRef({effect1: true})

    // image
    const imgClass = 'w-full h-full object-cover absolute'
    const imgAnimClass = 'w-full h-full absolute'
    const [src, setSrc] = useState(defaultThumb.src)
    const [isLoading, setIsLoading] = useState(true)
    const onLoad = () => {
        setIsLoading(false)
    }
    
    useEffect(() => {
        if(isFirstRender.current.effect1){
            isFirstRender.current.effect1 = false
            return
        }

        setSrc(url)

    }, [url])


    return(
        <div
            className={imageCompClass}
            style={imageCompStyle}
        >   

            <ImageReal
                key={src}
                url={src}
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