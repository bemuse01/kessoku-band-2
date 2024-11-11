import { create } from 'zustand'


const useStateStore = create((set, get) => ({
    isListOpen: false,
    isMobile: false,


    // list
    toggleIsListOpen: () => set(state => ({isListOpen: !state.isListOpen})),


    // device
    setIsMobile: (newValue) => set(() => ({isMobile: newValue}))
}))


export default useStateStore