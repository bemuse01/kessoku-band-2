'use client'

import { useEffect, useState } from 'react'
import useDataStore from '@/store/dataStore'
import useData from '@/swr/dataSwr'
import LoadingContainer from '@/components/loading/LoadingContainer'
import PlayerContainer from './components/player/PlayerContainer'


const Home = () => {
    // home
    const homeClass = 'app w-screen h-screen absolute'


    // data
    const [isLoading, setIsLoading] = useState(true)
    const url = '/api/data'
    const {setData, setIndex} = useDataStore()
    const onSuccessFetchData = (newData) => {
        const {data, index} = newData.body
        
        console.log(data, index)

        setData(data)
        setIndex(index)
        setIsLoading(false)
    }
    const config = {
        refreshInterval: 0,
        onSuccess: (data) => onSuccessFetchData(data)
    }
    const {} = useData(url, config)


    // life cycle hook
    const onMounted = () => {
        console.log('mounted')
    }
    useEffect(() => {
        onMounted()
    }, [])


    return(
        <div className={homeClass}>

            {/* player */}
            <PlayerContainer />

            {/* loading */}
            <LoadingContainer isLoading={isLoading} delay={1}/>
     
        </div>
    )
}


export default Home