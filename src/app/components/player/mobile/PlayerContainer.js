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
import { AnimatePresence, motion } from 'framer-motion'
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


    // list
    const listAnimClass = 'list-anim w-full flex-1 relative'
    const animVariants = {
        initial: {
            flexGrow: 0
        },
        animate: {
            flexGrow: 1
        },
        exit: {
            y: '100%',
            flexGrow: 1
        },
        transition: {
            duration: 0.3,
            ease: 'easeInOut'
        }
    }


    return(
        <div
            className={playerContClass}
        >

            <AnimatePresence>

                <PlayerBox>
                        
                    <BgWrap />

                    <PlayerWrapper className={'flex-col relative'}>

                        <RecordWrap />

                        <ThumbWrap />

                    </PlayerWrapper>
                
                    <ControlWrap />
                        
                    {isListOpen && 
                        <motion.div
                            className={listAnimClass}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition="transition"
                            variants={animVariants}
                        >
                            <ListWrap />
                        </motion.div>
                    }

                    {/* <LoadingContainer 
                        isLoading={true} 
                        reverse={true} 
                        opactity={0.6} 
                        styleConfig={{borderRadius: `${PLAYER_BORDER_VALUE}px`}}
                    /> */}

                </PlayerBox>

            </AnimatePresence>

        </div>
    )
}


export default PlayerContainer