import ThumbBox from './ThumbBox'
import useMainData from '@/app/hooks/useMainData'
import { MOBILE_THUMB_WIDHT } from '@/config/style'


const ThumbWrap = () => {
    const {data, index, idx} = useMainData()

    // thumb wrap
    const thumbWrapClass = 'thumb-wrap aspect-square flex justify-center items-center drop-shadow-[0_0_20px_rgba(0,0,0,0.2)] absolute'
    const thumbWrapStyle = {
        width: MOBILE_THUMB_WIDHT
    }


    return(
        <div
            className={thumbWrapClass}
            style={thumbWrapStyle}
        >

            <ThumbBox data={data} index={index} idx={idx} />
            
        </div>
    )
}


export default ThumbWrap