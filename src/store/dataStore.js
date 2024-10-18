import { create } from 'zustand'

const useDataStore = create((set, get) => ({
    data: null,
    index: null,
    error: null,


    // data
    setData: (newData) => set(() => ({data: newData})),
    getData: () => get().data || [],


    // index
    setIndex: (newIndex) => set(() => ({index: newIndex})),
    getIndex: () => get().index || [],


    // 
    isLoading: () => get().data === null ? true : false
}))

export default useDataStore