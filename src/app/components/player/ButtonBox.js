import { useState, useEffect, useRef } from 'react'
import useDataStore from '@/store/dataStore'
import usePlayerStore from '@/store/playerStore'
import PlayButton from './PlayButton'
import NextButton from './NextButton'
import PrevButton from './PrevButton'


const ButtonBox = () => {
    const buttonBoxClass = [
        'button-box',
        'w-full',
        'flex',
        'justify-center',
        'items-center',
        'relative',
        'drop-shadow-[0_0_8px_rgba(0,0,0,0.25)]',
        'gap-[2.5%]',
        'h-[46px] max-lg:h-[42px] max-md:h-[38px]'
    ].join(' ')

    const isFirstRender = useRef({effect1: true})

    // main color
    const data = useDataStore((state) => state.data)
    const index = useDataStore((state) => state.index)
    const idx = usePlayerStore((state) => state.idx)
    const [color, setColor] = useState('#222222')
    const {getDataById} = useDataStore()
    const setColorByData = () => {
        const id = index[idx]
        const newColor = '#' + getDataById(id).main_color
        setColor(newColor)
    }

    useEffect(() => {
        // prevent action when first render
        if(isFirstRender.current.effect1){
            isFirstRender.current.effect1 = false
            return
        }

        if(data !== null && index !== null){
            setColorByData()
        }
    }, [data, index, idx])


    // button event

    return(
        <div
            className={buttonBoxClass}
        >

            <PrevButton color={color} />

            <PlayButton color={color} />

            <NextButton color={color} />

        </div>
    )
}


export default ButtonBox