import usePlayerStore from '@/store/playerStore'
import useStateStore from '@/store/stateStore'
import PlayButton from './PlayButton'
import NextButton from './NextButton'
import PrevButton from './PrevButton'
import VolumeArea from './VolumeArea'
import ListButton from './ListButton'
import ButtonWrapper from './ButtonWrapper'
import useColor from '@/app/hooks/useColor'
import { alphaToHex } from '@/utils/color'


const ButtonBox = ({data, index, idx}) => {
    // store
    const {play, pause, increaseIdx, decreaseIdx, setDirection} = usePlayerStore()
    const isPlaying = usePlayerStore(state => state.isPlaying)
    const isLoaded = usePlayerStore(state => state.isLoaded)
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
        'h-[45px] max-lg:h-[40px] max-md:h-[35px]'
    ].join(' ')
    const buttonBoxStyle = {
        color,
        filter: `drop-shadow(0 0 6px ${color + alphaToHex(0.5)})`
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


    return(
        <div
            className={buttonBoxClass}
            style={buttonBoxStyle}
        >

            <ButtonWrapper className={'flex-row'}>
                <ListButton color={color} onClick={openList} />
            </ButtonWrapper>
            
            <ButtonWrapper className={'justify-center items-center gap-[5%]'}>
                <PrevButton color={color} onClick={prevMusic} />
                <PlayButton color={color} onClick={playMusic} isPlaying={isPlaying} />
                <NextButton color={color} onClick={nextMusic} />
            </ButtonWrapper>

            <ButtonWrapper className={'flex-row-reverse'}>
                <VolumeArea color={color} />
            </ButtonWrapper>

        </div>
    )
}


export default ButtonBox