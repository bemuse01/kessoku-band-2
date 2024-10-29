import { useEffect } from 'react'
import useDataStore from '@/store/dataStore'
import usePlayerStore from '@/store/playerStore'
import PlayerBox from './PlayerBox'
import ThumbWrap from './ThumbWrap'
import ControlWrap from './ControlWrap'
import RecordWrap from './RecordWrap'
import ListWrap from './ListWrap'
import BgWrap from './BgWrap'
import PlayerWrapper from './PlayerWrapper'
// import LoadingContainer from '@/components/loading/LoadingContainer'
// import { PLAYER_BORDER_VALUE } from '@/config/style'


const PlayerContainer = () => {
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


    return(
        <div
            className={PlayerContClass}
        >
            
            <PlayerBox>
                
                <BgWrap />

                <PlayerWrapper data={data} index={index} idx={idx} className={'flex-col'}>

                    <RecordWrap />

                    <ThumbWrap />

                    {/* <ListWrap /> */}

                </PlayerWrapper>

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