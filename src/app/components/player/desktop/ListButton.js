import Button from '@/components/public/Button'
import ListShape from '@/components/shapes/ListShape.js'


const ListButton = ({color, pointerup}) => {
    const ListButtonClass = 'control-list-button aspect-square h-full flex justify-center items-center'

    // button
    const buttonClass = [
        'w-full',
        'h-full',
        'scale-[0.54]'
    ].join(' ')


    return(
        <div
            className={ListButtonClass}
        >

            <Button
                className={buttonClass}
                pointerup={pointerup}
            >

                <ListShape color={color}/>

            </Button>

        </div>
    )
}


export default ListButton