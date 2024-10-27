import { useEffect, useRef } from 'react'
import useDataStore from '@/store/dataStore'
import usePlayerStore from '@/store/playerStore'
import PlayerBox from './PlayerBox'
import ThumbWrap from './ThumbWrap'
import ControlWrap from './ControlWrap'
import RecordWrap from './RecordWrap'
import ListWrap from './ListWrap'
// import LoadingContainer from '@/components/loading/LoadingContainer'
// import { PLAYER_BORDER_VALUE } from '@/config/style'


const PlayerContainer = () => {
    const isFirstRender = useRef({effect1: true, effect2: true})


    // store
    const data = useDataStore(state => state.data)
    const index = useDataStore(state => state.index)
    const idx = usePlayerStore(state => state.idx)
    const {getDataById} = useDataStore()
    const {setPlayer, change} = usePlayerStore()
    const player = usePlayerStore(state => state.player)


    // player container
    const PlayerContClass = 'player-container w-screen h-screen absolute flex justify-center items-center'

    // player
    const initPlayer = () => {
        const id = index[idx]
        const src = getDataById(id).media_file

        setPlayer()
        change(src)
    }
    const changeByData = () => {
        const id = index[idx]
        const media_file = getDataById(id).media_file
        change(media_file)
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

    useEffect(() => {
        if(isFirstRender.current.effect2){
            isFirstRender.current.effect2 = false
            return
        }

        if(player !== null){
            changeByData()
        }

    }, [player, idx])


    return(
        <div
            className={PlayerContClass}
        >
            
            <PlayerBox>

                <RecordWrap />

                <ListWrap />

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