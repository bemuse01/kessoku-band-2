import Button from '@/components/public/Button'
import NextShape from '@/components/shapes/NextShape'


const NextButton = ({color, onClick}) => {
    // next button
    const nextButtonClass = [
        'control-next-button',
        'aspect-square',
        'h-full',
        'p-[2%]'
    ].join(' ')


    return(
        <Button
            className={nextButtonClass}
            onClick={onClick}
        >
            <NextShape color={color} />
        </Button>
    )
}


export default NextButton