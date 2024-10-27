import PlayerContainer from './mobile/PlayerContainer'

const PlayerMobile = () => {
    const playerDesktopClass = 'player-mobile w-full h-full absolute overflow-hidden'

    return(
        <div
            className={playerDesktopClass}
        >

            <PlayerContainer />

        </div>
    )
}

export default PlayerMobile