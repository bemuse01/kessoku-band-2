import ThumbBox from './ThumbBox'
import useMainData from '@/app/hooks/useMainData'
import { DROP_SHADOW_WRAP_ALPHA, DROP_SHADOW_WRAP_BLUR } from '@/config/style'
import useColor from '@/app/hooks/useColor'

const ThumbWrap = () => {
    // store
    const {data, index, idx} = useMainData()
    const {originalColor} = useColor({data, index, idx})


    // thumb wrap
    const thumbWrapClass = 'thumb-wrap w-full aspect-square flex justify-center items-center relative'
    const thumbWrapStyle = {
        filter: `drop-shadow(0 0 ${DROP_SHADOW_WRAP_BLUR} ${originalColor + DROP_SHADOW_WRAP_ALPHA})`
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