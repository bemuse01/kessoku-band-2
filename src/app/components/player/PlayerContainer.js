import PlayerBox from './PlayerBox'


const PlayerContainer = () => {
    const PlayerContClass = 'w-screen h-screen absolute flex justify-center items-center'

    return(
        <div
            className={PlayerContClass}
        >
            
            <PlayerBox>
                <div></div>
            </PlayerBox>

        </div>
    )
}


export default PlayerContainer