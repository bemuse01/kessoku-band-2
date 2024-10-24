import { create } from 'zustand'
import Player from '@/app/lib/player'
import { clamp } from '@/utils/math'

const usePlayerStore = create((set, get) => ({
    player: null,
    isLoaded: false,
    isPlaying: false,
    idx: 0,
    direction: 1,


    // player
    setPlayer: () => set({player: new Player(set)}),
    play: () => get().player.play(),
    pause: () => get().player.pause(),
    change: src => get().player.change(src),
    setVolume: volume => get().player.setVolume(volume),
    getVolume: () => get().player.getVolume(),
    getDuration: () => get().player.getDuration(),
    setCurrentTime: (time) => get().player.setCurrentTime(time),
    getCurrentTime: () => get().player.getCurrentTime(),



    // idx
    setIdx: (newIdx) => set(() => ({idx: newIdx})),
    increaseIdx: (max) => set(state => ({idx: clamp(state.idx + 1, 0, max)})),
    decreaseIdx: (max) => set(state => ({idx: clamp(state.idx - 1, 0, max)})),


    // direction
    setDirection: (newDirection) => set({direction: newDirection})
}))

export default usePlayerStore