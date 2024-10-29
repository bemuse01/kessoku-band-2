import useMainData from '@/app/hooks/useMainData'
import RecordBox from './RecordBox'
import { DROP_SHADOW_WRAP_ALPHA, DROP_SHADOW_WRAP_BLUR } from '@/config/style'
import useColor from '@/app/hooks/useColor'


const RecordWrap = () => {
    // store
    const {data, index, idx} = useMainData()
    const {originalColor} = useColor({data, index, idx})


    // record wrap
    const recordWrapClass = 'record-wrap w-full h-full relative flex justify-center'
    const recordWrapStyle = {
        filter: `drop-shadow(0 0 ${DROP_SHADOW_WRAP_BLUR} ${originalColor + DROP_SHADOW_WRAP_ALPHA})`
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