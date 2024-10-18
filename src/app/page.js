'use client'

import { useEffect } from 'react'
import useDataStore from '@/store/dataStore'
import LoadingContainer from './components/loading/LoadingContainer'
import useData from '@/swr/dataSwr'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'


const AnimLoading = ({isLoading}) => {
    const variants = {
        initial: {
            opacity: 1,
        },
        hidden: {
            opacity: 0,
            transition: {
                duration: 0.3,
                delay: 1
            }
        },
    }

    return(
        <AnimatePresence>
            
            {isLoading && (

                <motion.div
                    initial="initial"
                    exit="hidden"
                    variants={variants}
                >

                    <LoadingContainer />

                </motion.div>

            )}

        </AnimatePresence>
    )
}


const Home = () => {
    // home
    const homeClass = 'w-screen h-screen absolute'


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

            {/* loading */}
            <AnimLoading isLoading={isLoading}/>
     
        </div>
    )
}


export default Home