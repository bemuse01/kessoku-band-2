import Image from 'next/image'
import Thumb from './Thumb'
import defaultThumb from '@/public/images/default.jpg'
import { PLAYER_BORDER_VALUE } from '@/config/style'

const ThumbWrap = () => {
    const ThumbWrapClass = 'thumb-wrap w-full h-full'
    const ThumbWrapStyle = {
        borderRadius: `${PLAYER_BORDER_VALUE}px`
    }

    return(
        <div
            className={ThumbWrapClass}
            style={ThumbWrapStyle}
        >

            <Thumb />
            
        </div>
    )
}


export default ThumbWrap