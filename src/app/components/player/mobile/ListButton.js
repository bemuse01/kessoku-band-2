import Button from '@/components/public/Button'
import ListShape from '@/components/shapes/ListShape'


const ListButton = ({color, onClick}) => {
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
                onClick={onClick}
            >

                <ListShape color={color}/>

            </Button>

        </div>
    )
}


export default ListButton