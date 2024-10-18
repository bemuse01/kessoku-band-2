

const PlayerBox = ({children}) => {
    const PlayerBoxClass = 'w-[540px] h-[540px] bg-black'

    return(
        <div
            className={PlayerBoxClass}
        >
            {children}
        </div>
    )
}


export default PlayerBox