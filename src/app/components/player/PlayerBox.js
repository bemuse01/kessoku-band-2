

const PlayerBox = ({children}) => {
    const PlayerBoxClass = [
        'w-[500px] max-lg:w-[400px] max-md:w-[320px]',
        'rounded-[10px]',
        'aspect-square',
        'bg-black'
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