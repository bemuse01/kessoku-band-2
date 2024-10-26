import { PLAYER_BORDER_VALUE } from '@/config/style'
import useColor from '@/app/hooks/useColor'
import useDataStore from '@/store/dataStore'
import { useEffect, useMemo } from 'react'
import ListItem from './ListItem'


const ListScroll = ({items, color}) => {
    // list scroll
    const listScrollClass = 'list-scroll w-[50%] h-full absolute p-[12px]'


    // list
    const listClass = 'list w-full h-full relative overflow-x-hidden overflow-y-scroll pr-[6px]'
    const listStyle = {
        color
    }


    // scroll bar
    const setScrollThumbColor = () => {
        document.documentElement.style.setProperty('--scrollbar-color', color)
    }

    useEffect(() => {
        setScrollThumbColor()
    }, [color])


    return(
        <div
            className={listScrollClass}
        >

            <div
                className={listClass}
                style={listStyle}
            >

                {items.map(item => (
                    <ListItem 
                        key={item.key} 
                        title={item.title}
                        artist={item.artist}
                        order={item.order}
                        len={item.len}
                        color={color}
                    />
                ))}

            </div>

        </div>
    )
}


export default ListScroll