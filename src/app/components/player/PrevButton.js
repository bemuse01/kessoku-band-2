import Button from '@/components/public/Button'
import NextShape from '@/components/shapes/NextShape'


const PrevButton = ({color, onClick}) => {
    const prevButtonClass = 'control-prev-button aspect-square h-full flex justify-center items-center'

    // button
    const buttonClass = [
        'w-full',
        'h-full',
        'scale-x-[-0.58]',
        'scale-y-[0.58]'
    ].join(' ')


    return(
        <div
            className={prevButtonClass}
        >

            <Button
                className={buttonClass}
                onClick={onClick}
            >
                <NextShape color={color} />
            </Button>

        </div>
    )
}


export default PrevButton