import { create } from 'zustand'

const useDataStore = create((set, get) => ({
    data: null,
    index: null,
    error: null,


    // data
    setData: (newData) => set(() => ({data: newData})),


    // index
    setIndex: (newIndex) => set(() => ({index: newIndex})),


    // 
    isLoading: () => get().data === null ? true : false
}))

export default useDataStore