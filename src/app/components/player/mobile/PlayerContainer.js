import PlayerBox from './PlayerBox'
import ThumbWrap from './ThumbWrap'
import ControlWrap from './ControlWrap'
import RecordWrap from './RecordWrap'
import ListWrap from './ListWrap'
import BgWrap from './BgWrap'
import useStateStore from '@/store/stateStore'


const PlayerContainer = () => {
    // store
    const isListOpen = useStateStore(state => state.isListOpen)


    // player container
    const playerContClass = 'player-container w-full h-full absolute flex justify-center items-center'


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