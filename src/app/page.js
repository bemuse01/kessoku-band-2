'use client'

import { useEffect } from 'react'
import useDataStore from '@/store/dataStore'
import LoadingContainer from './components/loading/LoadingContainer'
import useData from '@/swr/dataSwr'


const Home = () => {
    // home
    const homeClass = 'w-screen h-screen absolute'


    // data
    const url = '/api/data'
    const {setData} = useDataStore()
    const onSuccessFetchData = (newData) => {
        console.log(newData)
        // setData(newData)
    }
    const config = {
        onSuccess: (data) => onSuccessFetchData(data)
    }
    const {data, isLoading, isError} = useData(url, config)


    // life cycle hook
    const onMounted = () => {
        console.log('mounted')
    }
    useEffect(() => {
        onMounted()
    }, [])


    return(
        <div className={homeClass}>

            <LoadingContainer />

        </div>
    )
}


export default Home