import { useState, useEffect, useRef } from 'react'
import useDataStore from '@/store/dataStore'
import usePlayerStore from '@/store/playerStore'
import PlayButton from './PlayButton'
import NextButton from './NextButton'
import PrevButton from './PrevButton'
import VolumeArea from './VolumeArea'
import ListButton from './ListButton'
import ButtonWrapper from './ButtonWrapper'
import { DEFAULT_COLOR } from '@/config/style'
import useColor from '@/app/hooks/useColor'
import { alphaToHex } from '@/utils/color'


const ButtonBox = ({data, index, idx, player}) => {
    const isFirstRender = useRef({player: true, color: true})


    // store
    const {getDataById} = useDataStore()
    const {play, pause, change, increaseIdx, decreaseIdx, setDirection} = usePlayerStore()
    const isPlaying = usePlayerStore(state => state.isPlaying)
    

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
    const [color, setColor] = useState(DEFAULT_COLOR)
    const setColorByData = () => {
        const id = index[idx]
        const newColor = '#' + getDataById(id).main_color
        setColor(newColor)
    }
    const {newColor} = useColor(color)


    useEffect(() => {
        if(isFirstRender.current.color){
            isFirstRender.current.color = false
            return
        }

        if(data !== null && index !== null){
            setColorByData()
        }
    }, [data, index, idx])


    // button box
    const buttonBoxClass = [
        'button-box',
        'w-full',
        'flex',
        'flex-row',
        'relative',
        'drop-shadow-[0_0_8px_rgba(0,0,0,0.25)]',
        'gap-[2.5%]',
        'h-[45px] max-lg:h-[40px] max-md:h-[35px]'
    ].join(' ')
    const buttonBoxStyle = {
        color: newColor,
        filter: `drop-shadow(0 0 6px ${newColor + alphaToHex(0.5)})`
    }


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
            style={buttonBoxStyle}
        >

            <ButtonWrapper className={'flex-row'}>
                <ListButton color={newColor} />
            </ButtonWrapper>
            
            <ButtonWrapper className={'justify-center items-center gap-[5%]'}>
                <PrevButton color={newColor} onClick={prevMusic} />
                <PlayButton color={newColor} onClick={playMusic} isPlaying={isPlaying} />
                <NextButton color={newColor} onClick={nextMusic} />
            </ButtonWrapper>

            <ButtonWrapper className={'flex-row-reverse'}>
                <VolumeArea color={newColor} />
            </ButtonWrapper>

        </div>
    )
}


export default ButtonBox