import { PLAYER_BORDER_VALUE } from '@/config/style'
import useDataStore from '@/store/dataStore'
import usePlayerStore from '@/store/playerStore'
import ButtonBox from './ButtonBox'
import InfoBox from './InfoBox'
import ProgressBox from './ProgressBox'


const ControlWrap = () => {
    const controlWrapClass = [
        'control-wrap',
        'w-full',
        'absolute',
        'h-auto',
        'bottom-0',
        'overflow-hidden',
        'bg-white',
    ].join(' ')
    const controlWrapStyle = {
        borderRadius: `${PLAYER_BORDER_VALUE}px`
    }

    const controlBoxClass = 'w-full h-auto relative p-[8px] flex flex-col gap-[8px]'

    const data = useDataStore(state => state.data)
    const index = useDataStore(state => state.index)
    const idx = usePlayerStore(state => state.idx)
    const player = usePlayerStore(state => state.player)


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