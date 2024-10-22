import Button from '@/components/public/Button'
import PlayShape from '@/components/shapes/PlayShape'


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
            <PlayShape color={color} />
        </Button>
    )
}


export default PlayButton