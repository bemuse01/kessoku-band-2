import { useEffect, useState } from 'react'
import usePlayerStore from '@/store/playerStore'

const ListItem = ({order, title, artist, color, idx}) => {
    // store
    const {setIdx, pause} = usePlayerStore()
    

    // list item
    const listItem = 'list-item w-full h-auto  flex flex-col p-[10px] cursor-pointer'
    const [background, setBackground] = useState('transparent')
    const listItemStyle = {
        borderRadius: '6px',
        background: background
    }


    const titleClass = 'title text-[16px] truncate'
    

    const artistClass = 'artist text-[12px] opacity-[0.55] truncate'


    // event
    const onClick = (e) => {
        e.preventDefault()
        e.stopPropagation()

        pause()
        setIdx(order)
    }


    useEffect(() => {
        if(idx === order) setBackground(color + '22')
        else setBackground('transparent')
    }, [idx, color])

 
    return(
        <div
            className={listItem}
            style={listItemStyle}
            onPointerUp={e => onClick(e)}
        >

            <div
                className={titleClass}
            >
                <span>
                    {title}
                </span>
            </div>

            <div
                className={artistClass}
            >
                <span>
                    {artist}
                </span>
            </div>

        </div>
    )
}


export default ListItem