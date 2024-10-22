import Button from '@/components/public/Button'
import NextShape from '@/components/shapes/nextShape'

const PrevButton = ({color}) => {
    // prev button
    const prevButtonClass = [
        'control-next-button',
        'aspect-square',
        'h-full',
        'scale-x-[-1]',
        'p-[2%]'
    ].join(' ')


    return(
        <Button
            className={prevButtonClass}
        >
            <NextShape color={color} />
        </Button>
    )
}


export default PrevButton