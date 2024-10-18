import { create } from 'zustand'

const useDataStore = create((set, get) => ({
    isPlaying: false,
    idx: 0,


    // idx
    setIdx: (newIdx) => set(() => ({idx: newIdx})),
    getIdx: () => get().idx,
}))

export default useDataStore