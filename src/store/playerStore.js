import { create } from 'zustand'

const usePlayerStore = create((set, get) => ({
    isPlaying: false,
    idx: 0,


    // idx
    setIdx: (newIdx) => set(() => ({idx: newIdx})),
    increaseIdx: () => set((state) => ({idx: state.idx + 1}))
}))

export default usePlayerStore