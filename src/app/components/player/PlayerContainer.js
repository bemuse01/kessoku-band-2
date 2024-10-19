import PlayerBox from './PlayerBox'
import ThumbWrap from './ThumbWrap'
import LoadingContainer from '@/components/loading/LoadingContainer'
import { PLAYER_BORDER_VALUE } from '@/config/style'


const PlayerContainer = () => {
    const PlayerContClass = 'player-container w-screen h-screen absolute flex justify-center items-center'

    return(
        <div
            className={PlayerContClass}
        >
            
            <PlayerBox>

                <ThumbWrap />

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