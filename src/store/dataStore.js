import { create } from 'zustand'


const useDataStore = create((set, get) => ({
    data: null,
    index: null,
    error: null,


    // data
    setData: (newData) => set(() => ({data: newData})),
    getDataById: (id) => get().data.find(i => i.id === id),


    // index
    setIndex: (newIndex) => set(() => ({index: newIndex})),


    // 
    isLoading: () => get().data === null ? true : false
}))


export default useDataStore