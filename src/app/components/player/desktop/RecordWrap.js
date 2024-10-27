import useMainData from '@/app/hooks/useMainData'
import RecordBox from './RecordBox'


const RecordWrap = () => {
    // store
    const {data, index, idx} = useMainData()


    // record wrap
    const recordWrapClass = 'record-wrap w-full h-full absolute'


    return(
        <div
            className={recordWrapClass}
        >

            <RecordBox data={data} index={index} idx={idx} />

        </div>
    )
}


export default RecordWrap