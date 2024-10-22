import Button from '@/components/public/Button'
import PlayShape from '@/components/shapes/PlayShape'
import PauseShape from '@/components/shapes/PauseShape'


const PlayButton = ({color, onClick, isPlaying}) => {
    // play button
    const playButtonClass = [
        'control-play-button',
        'aspect-square',
        'h-full',
        'pl-[0.75%]',
        'pr-[0.25%]',
        'py-[1%]'
    ].join(' ')


    return(
        <Button
            className={playButtonClass}
            onClick={onClick}
        >
            {
                isPlaying ?
                <PauseShape color={color} />
                :
                <PlayShape color={color} />
            }
        </Button>
    )
}


export default PlayButton