import { create } from 'zustand'

const usePlayerStore = create((set, get) => ({
    player: null,
    isPlaying: false,
    idx: 0,


    // player
    setPlayer: (newPlayer) => set({player: newPlayer}),


    // idx
    setIdx: (newIdx) => set(() => ({idx: newIdx})),
    increaseIdx: () => set((state) => ({idx: state.idx + 1}))
}))

export default usePlayerStore