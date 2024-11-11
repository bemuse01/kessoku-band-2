import PlayerBox from './PlayerBox'
import ThumbWrap from './ThumbWrap'
import ControlWrap from './ControlWrap'
import RecordWrap from './RecordWrap'
import ListWrap from './ListWrap'


const PlayerContainer = () => {
    // player container
    const PlayerContClass = 'player-container w-screen h-screen absolute flex justify-center items-center'


    return(
        <div
            className={PlayerContClass}
        >
            
            <PlayerBox>

                <RecordWrap />

                <ListWrap />

                <ThumbWrap />

                <ControlWrap />

            </PlayerBox>

        </div>
    )
}


export default PlayerContainer