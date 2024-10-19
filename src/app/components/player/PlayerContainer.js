import PlayerBox from './PlayerBox'
import LoadingContainer from '@/components/loading/LoadingContainer'
import { PLAYER_BORDER_VALUE } from '@/config/style'


const PlayerContainer = () => {
    const PlayerContClass = 'w-screen h-screen absolute flex justify-center items-center'

    return(
        <div
            className={PlayerContClass}
        >
            
            <PlayerBox>

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