import Button from '@/components/public/Button'
import LoopShape from '@/components/shapes/LoopShape'
import UnloopShape from '@/components/shapes/UnloopShape'


const LoopButton = ({color, onClick, isLoop}) => {
    const loopButtonClass = 'control-loop-button aspect-square h-full flex justify-center items-center pl-[2px]'

    // button
    const buttonClass = [
        'w-full',
        'h-full',
        'scale-[0.58]'
    ].join(' ')


    return(
        <div
            className={loopButtonClass}
        >

            <Button
                className={buttonClass}
                onClick={onClick}
            >
                {
                    isLoop ?
                    <LoopShape color={color} />
                    :
                    <UnloopShape color={color} />
                }
            </Button>

        </div>
    )
}


export default LoopButton