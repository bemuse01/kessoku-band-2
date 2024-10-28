import Button from '@/components/public/Button'
import NextShape from '@/components/shapes/NextShape'


const NextButton = ({color, pointerup}) => {
    const nextButtonClass = 'control-next-button aspect-square h-full flex justify-center items-center'

    // button
    const buttonClass = [
        'w-full',
        'h-full',
        'scale-[0.58]'
    ].join(' ')


    return(
        <div
            className={nextButtonClass}
        >

            <Button
                className={buttonClass}
                pointerup={pointerup}
            >
                <NextShape color={color} />
            </Button>

        </div>
    )
}


export default NextButton