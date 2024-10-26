import { PLAYER_BORDER_VALUE } from '@/config/style'
import useColor from '@/app/hooks/useColor'
import useDataStore from '@/store/dataStore'
import { useMemo } from 'react'
import ListScroll from './ListScroll'

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


    // 
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

               <ListScroll items={items} color={color} />

            </div>

        </div>
    )
}


export default ListBox