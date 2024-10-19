import { create } from 'zustand'

const usePlayerStore = create((set, get) => ({
    isPlaying: false,
    idx: 0,


    // idx
    setIdx: (newIdx) => set(() => ({idx: newIdx})),
    getIdx: () => get().idx,
}))

export default usePlayerStore