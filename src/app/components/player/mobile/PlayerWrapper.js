import useColor from '@/app/hooks/useColor'

const PlayerWrapper = ({children, className = ''}) => {
    const playerWrapperClass  = 'player-wrapper w-full flex-1 flex ' + className


    return(
        <div
            className={playerWrapperClass}
        >
            {children}
        </div>
    )
}


export default PlayerWrapper