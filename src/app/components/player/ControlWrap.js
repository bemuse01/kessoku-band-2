import { PLAYER_BORDER_VALUE } from '@/config/style'
import ButtonBox from './ButtonBox'

const ControlWrap = () => {
    const controlWrapClass = [
        'control-wrap',
        'w-full',
        'absolute',
        'h-auto',
        'bottom-0',
        'overflow-hidden',
        'bg-white',
        // 'w-[500px] max-lg:w-[400px] max-md:w-[320px]',
    ].join(' ')
    const controlWrapStyle = {
        borderRadius: `${PLAYER_BORDER_VALUE}px`
    }

    const controlBoxClass = 'w-full h-auto relative p-[6px] flex flex-col'

    return(
        <div
            className={controlWrapClass}
            style={controlWrapStyle}
        >

            <div
                className={controlBoxClass}
            >

                <ButtonBox />

            </div>

        </div>
    )
}


export default ControlWrap