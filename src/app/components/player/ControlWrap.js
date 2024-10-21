import { PLAYER_BORDER_VALUE } from '@/config/style'
import ControlButtonBox from './ControlButtonBox'

const ControlWrap = () => {
    const controlWrapClass = [
        'control-wrap',
        'w-full',
        'absolute',
        'h-[35%]',
        'bottom-0',
        'overflow-hidden',
        'bg-[#fafafa]'
        // 'w-[500px] max-lg:w-[400px] max-md:w-[320px]',
    ].join(' ')
    const controlWrapStyle = {
        borderRadius: `${PLAYER_BORDER_VALUE}px`
    }

    const controlBoxClass = 'w-full h-full relative p-[12px] flex flex-col'

    return(
        <div
            className={controlWrapClass}
            style={controlWrapStyle}
        >

            <div
                className={controlBoxClass}
            >

                <ControlButtonBox />

            </div>

        </div>
    )
}


export default ControlWrap