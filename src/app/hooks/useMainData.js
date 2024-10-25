import useDataStore from '@/store/dataStore'
import usePlayerStore from '@/store/playerStore'


const useMainData = () => {
    const data = useDataStore(state => state.data)
    const index = useDataStore(state => state.index)
    const idx = usePlayerStore(state => state.idx)
    const player = usePlayerStore(state => state.player)

    return {data, index, idx, player}
}


export default useMainData