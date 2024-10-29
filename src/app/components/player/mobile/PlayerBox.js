const PlayerBox = ({children}) => {
    const PlayerBoxClass = [
        'player-box',
        'w-full',
        'h-full',
        'relative',
        'bottom-0',
        'flex',
        'flex-col',
        'items-center'
    ].join(' ')


    return(
        <div
            className={PlayerBoxClass}
        >
            {children}
        </div>
    )
}


export default PlayerBox