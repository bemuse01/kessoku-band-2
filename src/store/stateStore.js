import { create } from 'zustand'


const useStateStore = create((set, get) => ({
    isListOpen: false,


    // list
    toggleIsListOpen: () => set(state => ({isListOpen: !state.isListOpen}))
}))


export default useStateStore