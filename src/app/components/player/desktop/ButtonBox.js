import usePlayerStore from '@/store/playerStore'
import useStateStore from '@/store/stateStore'
import PlayButton from './PlayButton'
import NextButton from './NextButton'
import PrevButton from './PrevButton'
import VolumeArea from './VolumeArea'
import ListButton from './ListButton'
import ButtonWrapper from './ButtonWrapper'
import useColor from '@/app/hooks/useColor'
import LoopButton from './LoopButton'


const ButtonBox = ({data, index, idx}) => {
    // store
    const {play, pause, increaseIdx, decreaseIdx, setDirection, toggleLoop} = usePlayerStore()
    const isPlaying = usePlayerStore(state => state.isPlaying)
    const isLoaded = usePlayerStore(state => state.isLoaded)
    const {toggleIsListOpen} = useStateStore()
    const isLoop = usePlayerStore(state => state.isLoop)
    

    // main color
    const {color} = useColor({data, index, idx})


    // button box
    const buttonBoxClass = [
        'button-box',
        'w-full',
        'flex',
        'flex-row',
        'relative',
        'gap-[2.5%]',
        'h-[45px] max-lg:h-[40px] max-md:h-[35px]'
    ].join(' ')
    const buttonBoxStyle = {
        color,
    }


    // button event
    const playMusic = () => {
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
                <VolumeArea color={color} />
            </ButtonWrapper>

        </div>
    )
}


export default ButtonBox