import Button from '@/components/public/Button'
import NextShape from '@/components/shapes/nextShape'

const NextButton = ({color}) => {
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
        >
            <NextShape color={color} />
        </Button>
    )
}


export default NextButton