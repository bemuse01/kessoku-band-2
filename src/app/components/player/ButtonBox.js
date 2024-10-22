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

    const isFirstRender = useRef({player: true, color: true})


    const data = useDataStore(state => state.data)
    const index = useDataStore(state => state.index)
    const idx = usePlayerStore(state => state.idx)
    const {getDataById} = useDataStore()
    const {play, pause, change, increaseIdx, decreaseIdx, setDirection} = usePlayerStore()
    const isPlaying = usePlayerStore(state => state.isPlaying)
    const player = usePlayerStore(state => state.player)
    

    // player
    const changeByData = () => {
        const id = index[idx]
        const media_file = getDataById(id).media_file
        change(media_file)
    }

    useEffect(() => {
        if(isFirstRender.current.player){
            isFirstRender.current.player = false
            return
        }

        if(player !== null){
            changeByData()
        }

    }, [player, idx])


    // main color
    const [color, setColor] = useState('#222222')
    const setColorByData = () => {
        const id = index[idx]
        const newColor = '#' + getDataById(id).main_color
        setColor(newColor)
    }

    useEffect(() => {
        if(isFirstRender.current.color){
            isFirstRender.current.color = false
            return
        }

        if(data !== null && index !== null){
            setColorByData()
        }
    }, [data, index, idx])


    // button event
    const playMusic = () => {
        if(isPlaying) pause()
        else play()
    }
    const prevMusic = () => {
        if(idx === 0) return
        pause()
        decreaseIdx(data.length - 1)
        setDirection(-1)
    }
    const nextMusic = () => {
        if(idx === data.length - 1) return
        pause()
        increaseIdx(data.length - 1)
        setDirection(1)
    }


    return(
        <div
            className={buttonBoxClass}
        >

            <PrevButton color={color} onClick={prevMusic} />

            <PlayButton color={color} onClick={playMusic} isPlaying={isPlaying} />

            <NextButton color={color} onClick={nextMusic} />

        </div>
    )
}


export default ButtonBox