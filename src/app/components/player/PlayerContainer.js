import { useEffect, useRef } from 'react'
import useDataStore from '@/store/dataStore'
import usePlayerStore from '@/store/playerStore'
import PlayerBox from './PlayerBox'
import ThumbWrap from './ThumbWrap'
import ControlWrap from './ControlWrap'
// import LoadingContainer from '@/components/loading/LoadingContainer'
// import { PLAYER_BORDER_VALUE } from '@/config/style'


const PlayerContainer = () => {
    const PlayerContClass = 'player-container w-screen h-screen absolute flex justify-center items-center'

    const isFirstRender = useRef({effect1: true, effect2: true})

    // player
    const data = useDataStore((state) => state.data)
    const index = useDataStore((state) => state.index)
    const idx = usePlayerStore((state) => state.idx)
    const {getDataById} = useDataStore()
    const {setPlayer, change} = usePlayerStore()
    const initPlayer = () => {
        const id = index[idx]
        const src = getDataById(id).media_file

        setPlayer()
        change(src)
    }

    useEffect(() => {
        if(isFirstRender.current.effect1){
            isFirstRender.current.effect1 = false
            return
        }

        if(data !== null && index !== null){
            initPlayer()
        }

    }, [data, index])


    return(
        <div
            className={PlayerContClass}
        >
            
            <PlayerBox>

                <ThumbWrap />

                <ControlWrap />

                {/* <LoadingContainer 
                    isLoading={true} 
                    reverse={true} 
                    opactity={0.6} 
                    styleConfig={{borderRadius: `${PLAYER_BORDER_VALUE}px`}}
                /> */}

            </PlayerBox>

        </div>
    )
}


export default PlayerContainer