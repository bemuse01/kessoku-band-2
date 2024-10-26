import { useState } from 'react'

const ListItem = ({order, len, title, artist, color, idx}) => {
    const listItem = 'list-item w-full h-auto  flex flex-col p-[8px] cursor-pointer'
    const [background, setBackground] = useState('transparent')
    const listItemStyle = {
        borderRadius: '6px',        
        background: background
    }


    const titleClass = 'title text-[16px] truncate'
    

    const artistClass = 'artist text-[12px] opacity-[0.55] truncate'


    // event
    const onMouseenter = (e) => {
        e.preventDefault()
        e.stopPropagation()
        
        setBackground(color + '22')
    }
    const onMouseleave = (e) => {
        e.preventDefault()
        e.stopPropagation()
        
        setBackground('transparent')
    }

 
    return(
        <div
            className={listItem}
            style={listItemStyle}
            onMouseEnter={e => onMouseenter(e)}
            onMouseLeave={e => onMouseleave(e)}
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