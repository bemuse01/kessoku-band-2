import { PLAYER_BORDER_VALUE } from '@/config/style'

const PlayerBox = ({children}) => {
    const PlayerBoxClass = [
        'w-[500px] max-lg:w-[400px] max-md:w-[320px]',
        'aspect-square',
        'bg-red-900',
        'relative',
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