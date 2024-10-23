import Button from '@/components/public/Button'
import PlayShape from '@/components/shapes/PlayShape'
import PauseShape from '@/components/shapes/PauseShape'


const VolumeButton = ({color, onClick}) => {
    // play button
    const playButtonClass = [
        'control-volume-button',
        'aspect-square',
        'h-full',
        'p-[2%]'
    ].join(' ')


    return(
        <Button
            className={playButtonClass}
            onClick={onClick}
        >
        </Button>
    )
}


export default VolumeButton