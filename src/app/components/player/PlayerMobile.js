import { useEffect, useState } from 'react'
import PlayerContainer from './mobile/PlayerContainer'

const PlayerMobile = () => {
    const [playerMobileHeight, setPlayerMobileHeight] = useState(0)
    const playerMobileClass = 'player-mobile w-full h-full absolute overflow-hidden'
    const playerMobileStyle = {
        height: `${playerMobileHeight}px`
    }

    // render
    const onResize = () => {
        const height = window.innerHeight

        // console.log(height)

        setPlayerMobileHeight(height)
    }
    const init = () => {
        onResize()

        window.addEventListener('resize', onResize)
    }
    const onUnmount = () => {
        window.removeEventListener('resize', onResize)
    }
    useEffect(() => {
        init()

        return () => onUnmount()
    }, [])


    return(
        <div
            className={playerMobileClass}
            style={playerMobileStyle}
        >

            <PlayerContainer />

        </div>
    )
}

export default PlayerMobile