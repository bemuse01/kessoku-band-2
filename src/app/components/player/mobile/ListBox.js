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


    // list items
    const items = useMemo(() => {
        if(index === null && data === null) return []
        return index.map((id, i) => {
            const {artist, title} = getDataById(id)

            return{
                key: id,
                order: i,
                artist,
                title,
                len: index.length,
            }
        })
    }, [data, index])


    return(
        <div
            className={listBoxClass}
        >

            <ListScroll items={items} color={color} idx={idx} />

        </div>
    )
}


export default ListBox