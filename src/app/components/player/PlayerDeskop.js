import PlayerContainer from './desktop/PlayerContainer'

const PlayerDesktop = () => {
    const playerDesktopClass = 'player-desktop w-full h-full absolute overflow-hidden'

    return(
        <div
            className={playerDesktopClass}
        >

            <PlayerContainer />

        </div>
    )
}

export default PlayerDesktop