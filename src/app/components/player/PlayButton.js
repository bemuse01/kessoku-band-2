import Button from '@/components/public/Button'
import PlayShape from '@/components/shapes/PlayShape'
import PauseShape from '@/components/shapes/PauseShape'


const PlayButton = ({color, onClick, isPlaying}) => {
    const playButtonClass = 'control-play-button aspect-square h-full flex justify-center items-center pl-[0.5%]'

    // button
    const buttonClass = [
        'w-full',
        'h-full',
        'scale-[0.8]'
    ].join(' ')


    return(
        <div
            className={playButtonClass}
        >

            <Button
                className={buttonClass}
                onClick={onClick}
            >
                {
                    isPlaying ?
                    <PauseShape color={color} />
                    :
                    <PlayShape color={color} />
                }
            </Button>

        </div>
    )
}


export default PlayButton