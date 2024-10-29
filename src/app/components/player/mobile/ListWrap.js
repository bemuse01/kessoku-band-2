import useMainData from '@/app/hooks/useMainData'
import ListBox from './ListBox'


const ListWrap = () => {
    // store
    const {data, index, idx} = useMainData()


    // list wrap
    const listWrapClass = 'list-wrap w-full h-full absolute bg-white'


    return(
        <div
            className={listWrapClass}
        >

            <ListBox data={data} index={index} idx={idx} />

        </div>
    )
}


export default ListWrap