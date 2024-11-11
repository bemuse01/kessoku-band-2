'use client'

import { useEffect, useState } from 'react'
import useDataStore from '@/store/dataStore'
import useStateStore from '@/store/stateStore'
import useData from '@/swr/dataSwr'
import LoadingContainer from '@/components/loading/LoadingContainer'
import PlayerDesktop from './components/player/PlayerDeskop'
import PlayerMobile from './components/player/PlayerMobile'
import { SM } from '@/config/viewport'
import useMainData from './hooks/useMainData'
import usePlayer from './hooks/usePlayer'


const Home = () => {
    // store
    const {setData, setIndex} = useDataStore()
    const {setIsMobile} = useStateStore()
    const isMobile = useStateStore(state => state.isMobile)


    // hooks
    const {data, index, idx} = useMainData()
    usePlayer({data, index, idx})
    

    // home
    const homeClass = 'app w-full h-full absolute'


    // data
    const [isLoading, setIsLoading] = useState(true)
    const url = '/api/data'
    const onSuccessFetchData = (newData) => {
        const {data, index} = newData.body
        
        console.log(data, index)

        setData(data)
        setIndex(index)
        setIsLoading(false)
    }
    const config = {
        refreshInterval: 0,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        onSuccess: (data) => onSuccessFetchData(data)
    }
    const {} = useData(url, config)


    // viewport
    const detectMobile = () => {
        const width = window.innerWidth
        if(width <= SM){
            setIsMobile(true)
        }else{
            setIsMobile(false)
        }
    }


    // 
    const onResize = () => {
        detectMobile()
    }
    const init = () => {
        detectMobile()

        window.addEventListener('resize', onResize)
    }
    const onUnmount = () => {
        window.removeEventListener('resize', onResize)
    }
    useEffect(() => {
        init()

        return () => onUnmount() 
    }, [])


    return(
        <div className={homeClass}>

            {/* player */}
            {isMobile ? <PlayerMobile /> : <PlayerDesktop />}

            {/* loading */}
            <LoadingContainer isLoading={isLoading} delay={1}/>
     
        </div>
    )
}


export default Home