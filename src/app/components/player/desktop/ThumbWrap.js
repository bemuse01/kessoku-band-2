import ThumbBox from './ThumbBox'
import { PLAYER_BORDER_VALUE } from '@/config/style'
import useMainData from '@/app/hooks/useMainData'


const ThumbWrap = () => {
    const {data, index, idx} = useMainData()

    // thumb wrap
    const ThumbWrapClass = 'thumb-wrap w-full h-full absolute overflow-hidden'
    const ThumbWrapStyle = {
        borderRadius: `${PLAYER_BORDER_VALUE + 2}px`
    }


    return(
        <div
            className={ThumbWrapClass}
            style={ThumbWrapStyle}
        >

            <ThumbBox data={data} index={index} idx={idx} />
            
        </div>
    )
}


export default ThumbWrap