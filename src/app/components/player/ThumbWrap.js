import ThumbBox from './ThumbBox'
import { PLAYER_BORDER_VALUE } from '@/config/style'


const ThumbWrap = () => {
    const ThumbWrapClass = 'thumb-wrap w-full h-full absolute'
    const ThumbWrapStyle = {
        borderRadius: `${PLAYER_BORDER_VALUE}px`
    }

    return(
        <div
            className={ThumbWrapClass}
            style={ThumbWrapStyle}
        >

            <ThumbBox />
            
        </div>
    )
}


export default ThumbWrap