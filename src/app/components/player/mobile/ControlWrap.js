import { PLAYER_BORDER_VALUE, DROP_SHADOW_WRAP_ALPHA, DROP_SHADOW_WRAP_BLUR } from '@/config/style'
import ButtonBox from './ButtonBox'
import InfoBox from './InfoBox'
import ProgressBox from './ProgressBox'
import useMainData from '@/app/hooks/useMainData'
import useColor from '@/app/hooks/useColor'


const ControlWrap = () => {
    // store
    const {data, index, idx, player} = useMainData()
    const {originalColor} = useColor({data, index, idx})


    // 
    const controlWrapClass = [
        'control-wrap',
        'w-full',
        'relative',
        'h-auto',
        'bottom-0',
        'overflow-hidden',
        'bg-white',
    ].join(' ')
    const controlWrapStyle = {
        borderRadius: `${PLAYER_BORDER_VALUE}px ${PLAYER_BORDER_VALUE}px 0 0`,
        filter: `drop-shadow(0 0 ${DROP_SHADOW_WRAP_BLUR} ${originalColor + DROP_SHADOW_WRAP_ALPHA})`
    }

    const controlBoxClass = 'w-full h-auto relative px-[8px] py-[14px] flex flex-col gap-[8px]'


    return(
        <div
            className={controlWrapClass}
            style={controlWrapStyle}
        >

            <div
                className={controlBoxClass}
            >

                <InfoBox data={data} index={index} idx={idx} />

                <ProgressBox data={data} index={index} idx={idx} />

                <ButtonBox data={data} index={index} idx={idx} player={player} />

            </div>

        </div>
    )
}


export default ControlWrap