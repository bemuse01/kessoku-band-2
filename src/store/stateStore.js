import { create } from 'zustand'
import { isMobileDevice } from '@/utils/helper'


const useStateStore = create((set, get) => ({
    isListOpen: false,
    isMobile: isMobileDevice(),


    // list
    toggleIsListOpen: () => set(state => ({isListOpen: !state.isListOpen})),
    setIsMobile: (newValue) => set(() => ({isMobile: newValue}))
}))


export default useStateStore