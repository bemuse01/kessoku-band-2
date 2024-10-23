import Button from '@/components/public/Button'
import VolumeShape from '@/components/shapes/VolumeShape'


const VolumeButton = ({color, onClick}) => {
    const volumeButtonClass = 'control-volume-button aspect-square h-full flex justify-center items-center'

    // button
    const buttonClass = [
        'w-full',
        'h-full',
        'scale-[0.6]'
    ].join(' ')


    return(
        <div
            className={volumeButtonClass}
        >

            <Button
                className={buttonClass}
                onClick={onClick}
            >

                <VolumeShape color={color}/>

            </Button>

        </div>
    )
}


export default VolumeButton