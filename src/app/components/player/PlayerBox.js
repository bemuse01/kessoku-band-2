import { PLAYER_BORDER_VALUE } from '@/config/style'

const PlayerBox = ({children}) => {
    const PlayerBoxClass = [
        'player-box',
        'w-[500px] max-lg:w-[400px] max-md:w-[320px]',
        'aspect-square',
        'bg-red-900',
        'relative',
        'drop-shadow-[0_0_20px_rgba(0,0,0,0.25)]'
    ].join(' ')
    const PlayerBoxStyle = {
        borderRadius: `${PLAYER_BORDER_VALUE}px`
    }

    return(
        <div
            className={PlayerBoxClass}
            style={PlayerBoxStyle}
        >
            {children}
        </div>
    )
}


export default PlayerBox