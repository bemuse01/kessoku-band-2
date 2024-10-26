import { PLAYER_BORDER_VALUE } from '@/config/style'
import useColor from '@/app/hooks/useColor'
import useDataStore from '@/store/dataStore'
import { useMemo } from 'react'
import ListItem from './ListItem'


const ListBox = ({data, index, idx}) => {
    // store
    const {color} = useColor({data, index, idx})
    const {getDataById} = useDataStore()
    

    // list box
    const listBoxClass = 'list-box w-full h-full absolute'


    // list wrapper
    const listWrapperClass = 'list-wrapper w-full h-full bg-white absolute translate-x-[-50%]'
    const listWrapperStyle = {
        borderRadius: `${PLAYER_BORDER_VALUE}px`
    }


    // list
    const listClass = 'list w-[50%] h-full absolute p-[12px]'


    // list scroll
    const listScrollClass = 'list-scroll w-full h-full relative overflow-x-hidden overflow-y-scroll pr-[6px]'
    const listScrollStyle = {
        color
    }


    const items = useMemo(() => {
        if(index === null && data === null) return []
        return index.map((id, i) => {
            const {artist, title} = getDataById(id)

            return{
                key: id,
                order: i,
                artist,
                title,
                len: index.length
            }
        })
    }, [data, index])


    return(
        <div
            className={listBoxClass}
        >

            <div
                className={listWrapperClass}
                style={listWrapperStyle}
            >

                <div
                    className={listClass}
                >

                    <div
                        className={listScrollClass}
                        style={listScrollStyle}
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

            </div>

        </div>
    )
}


export default ListBox