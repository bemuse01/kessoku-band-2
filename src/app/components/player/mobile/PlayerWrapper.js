import useColor from '@/app/hooks/useColor'

const PlayerWrapper = ({data, index, idx, children, className = ''}) => {
    // store
    const {originalColor} = useColor({data, index, idx})


    const playerWrapperClass  = 'player-wrapper w-full flex-1 flex relative ' + className
    const playerWrapperStyle = {
        filter: `drop-shadow(0 0 16px ${originalColor + '55'})`
    }


    return(
        <div
            className={playerWrapperClass}
            style={playerWrapperStyle}
        >
            {children}
        </div>
    )
}


export default PlayerWrapper