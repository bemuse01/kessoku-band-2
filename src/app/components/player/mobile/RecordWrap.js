import useMainData from '@/app/hooks/useMainData'
import RecordBox from './RecordBox'
import { MOBILE_THUMB_WIDHT } from '@/config/style'


const RecordWrap = () => {
    // store
    const {data, index, idx} = useMainData()


    // record wrap
    const recordWrapClass = 'record-wrap w-full h-full relative flex justify-center'
    const recordWrapStyle = {
        // width: MOBILE_THUMB_WIDHT
    }


    return(
        <div
            className={recordWrapClass}
            style={recordWrapStyle}
        >

            <RecordBox data={data} index={index} idx={idx} />

        </div>
    )
}


export default RecordWrap