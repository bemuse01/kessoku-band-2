import { useEffect } from 'react'
import usePlayerStore from '@/store/playerStore'
import useDataStore from '@/store/dataStore'


const usePlayer = ({data, index, idx}) => {
    const {getDataById} = useDataStore()
    const {setPlayer, change} = usePlayerStore()
    const player = usePlayerStore(state => state.player)
    

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
}


export default usePlayer