import Button from '@/components/public/Button'
import PlayShape from '@/components/shapes/PlayShape'
import NextShape from '@/components/shapes/nextShape'
import useDataStore from '@/store/dataStore'
import usePlayerStore from '@/store/playerStore'
import { useState, useEffect, useRef } from 'react'


const ControlButtonBox = () => {
    const buttonBoxClass = 'control-button-box w-full h-[30%] flex justify-center items-center relative drop-shadow-[0_0_8px_rgba(0,0,0,0.25)] gap-[2.5%]'

    const isFirstRender = useRef({effect1: true})

    // main color
    const data = useDataStore((state) => state.data)
    const index = useDataStore((state) => state.index)
    const idx = usePlayerStore((state) => state.idx)
    const [color, setColor] = useState('#222222')
    const {getDataById} = useDataStore()

    useEffect(() => {
        // prevent action when first render
        if(isFirstRender.current.effect1){
            isFirstRender.current.effect1 = false
            return
        }

        if(data !== null && index !== null){
            const id = index[idx]
            const newColor = '#' + getDataById(id).main_color
            setColor(newColor)
        }
    }, [data, index, idx])


    // buttons
    const buttonPublicClass = ' aspect-square h-full'

    // play button
    const playButtonClass = 'control-play-button pl-[0.75%] pr-[0.25%] py-[1%]' + buttonPublicClass

    // previous button
    const prevButtonClass = 'control-prev-button scale-x-[-1] p-[2%]' + buttonPublicClass

    // next button
    const nextButtonClass = 'control-next-button p-[2%]' + buttonPublicClass


    return(
        <div
            className={buttonBoxClass}
        >

            <Button
                className={prevButtonClass}
            >
                <NextShape color={color} />
            </Button>

            <Button
                className={playButtonClass}
            >
                <PlayShape color={color} />
            </Button>

            <Button
                className={nextButtonClass}
            >
                <NextShape color={color} />
            </Button>

        </div>
    )
}


export default ControlButtonBox