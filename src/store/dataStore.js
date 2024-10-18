import { create } from 'zustand'

const useDataStore = create((set, get) => ({
    data: null,
    error: null,


    // data
    setData: (newData) => set(() => ({data: newData})),
    getData: () => get().data || [],


    // 
    isLoading: () => get().data === null ? true : false
}))

export default useDataStore