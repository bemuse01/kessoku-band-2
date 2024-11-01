import { useEffect } from 'react'
import useDataStore from '@/store/dataStore'
import usePlayerStore from '@/store/playerStore'
import PlayerBox from './PlayerBox'
import ThumbWrap from './ThumbWrap'
import ControlWrap from './ControlWrap'
import RecordWrap from './RecordWrap'
import ListWrap from './ListWrap'
import BgWrap from './BgWrap'
import useStateStore from '@/store/stateStore'


const PlayerContainer = () => {
    // store
    const data = useDataStore(state => state.data)
    const index = useDataStore(state => state.index)
    const idx = usePlayerStore(state => state.idx)
    const {getDataById} = useDataStore()
    const {setPlayer, change} = usePlayerStore()
    const isListOpen = useStateStore(state => state.isListOpen)
    const player = usePlayerStore(state => state.player)


    // player container
    const playerContClass = 'player-container w-full h-full absolute flex justify-center items-center'


    // player
    const initPlayer = () => {
        const id = index[idx]
        const src = getDataById(id).media_file

        setPlayer(data, index)
        change(src)
    }
    const changeByIdx = () => {
        const id = index[idx]
        const media_file = getDataById(id).media_file
        change(media_file)
    }

    useEffect(() => {
        if(data !== null && index !== null){
            initPlayer()
        }

    }, [data, index])

    useEffect(() => {
        if(player !== null){
            changeByIdx()
        }

    }, [player, idx])


    // wrapper
    const playerWrapperClass  = 'player-wrapper w-full flex-1 flex flex-col items-center overflow-hidden'


    // list
    const listWrapperClass = 'list-wrapper w-full flex-1 relative overflow-hidden'


    return(
        <div
            className={playerContClass}
        >

            <PlayerBox>
                    
                <BgWrap />

                {!isListOpen && 
                    <div 
                        className={playerWrapperClass}
                    >

                        <RecordWrap />

                        <ThumbWrap />

                    </div>
                }
                
                <ControlWrap />
                    
                {isListOpen && 
                    <div
                        className={listWrapperClass}
                    >

                        <ListWrap />

                    </div>
                }

            </PlayerBox>

        </div>
    )
}


export default PlayerContainer