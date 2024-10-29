import Button from '@/components/public/Button'
import VolumeShape from '@/components/shapes/VolumeShape'


const VolumeButton = ({color, pointerup, mouseenter, mouseleave}) => {
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
            onMouseEnter={() => mouseenter()}
            onMouseLeave={() => mouseleave()}
        >

            <Button
                className={buttonClass}
                pointerup={pointerup}
            >

                <VolumeShape color={color}/>

            </Button>

        </div>
    )
}


export default VolumeButton