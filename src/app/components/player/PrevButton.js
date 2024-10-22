import Button from '@/components/public/Button'
import NextShape from '@/components/shapes/nextShape'

const PrevButton = ({color, onClick}) => {
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
            onClick={onClick}
        >
            <NextShape color={color} />
        </Button>
    )
}


export default PrevButton