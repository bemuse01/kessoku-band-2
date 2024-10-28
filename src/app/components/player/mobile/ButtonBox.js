import usePlayerStore from '@/store/playerStore'
import useStateStore from '@/store/stateStore'
import PlayButton from './PlayButton'
import NextButton from './NextButton'
import PrevButton from './PrevButton'
import ListButton from './ListButton'
import ButtonWrapper from './ButtonWrapper'
import useColor from '@/app/hooks/useColor'
import { alphaToHex } from '@/utils/color'
import LoopButton from './LoopButton'
import { useEffect } from 'react'


const ButtonBox = ({data, index, idx}) => {
    // store
    const {play, pause, increaseIdx, decreaseIdx, setDirection, toggleLoop} = usePlayerStore()
    const isPlaying = usePlayerStore(state => state.isPlaying)
    const isLoaded = usePlayerStore(state => state.isLoaded)
    const isLoop = usePlayerStore(state => state.isLoop)
    const {toggleIsListOpen} = useStateStore()
    

    // main color
    const {color} = useColor({data, index, idx})


    // button box
    const buttonBoxClass = [
        'button-box',
        'w-full',
        'flex',
        'flex-row',
        'relative',
        'drop-shadow-[0_0_8px_rgba(0,0,0,0.25)]',
        'gap-[2.5%]',
        'h-[45px]'
    ].join(' ')
    const buttonBoxStyle = {
        color,
        filter: `drop-shadow(0 0 6px ${color + alphaToHex(0.5)})`
    }


    // button event
    const playMusic = () => {
        console.log('work')
        if(!isLoaded) return
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
    const openList = () => {
        toggleIsListOpen()
    }
    const loopMusic = () => {
        toggleLoop()
    }


    return(
        <div
            className={buttonBoxClass}
            style={buttonBoxStyle}
        >

            <ButtonWrapper className={'flex-row'}>
                <ListButton color={color} pointerup={openList} />
            </ButtonWrapper>
            
            <ButtonWrapper className={'justify-center items-center gap-[5%]'}>
                <PrevButton color={color} pointerup={prevMusic} />
                <PlayButton color={color} pointerup={playMusic} isPlaying={isPlaying} />
                <NextButton color={color} pointerup={nextMusic} />
            </ButtonWrapper>

            <ButtonWrapper className={'flex-row-reverse'}>
                <LoopButton color={color} pointerup={loopMusic} isLoop={isLoop}/>
            </ButtonWrapper>

        </div>
    )
}


export default ButtonBox