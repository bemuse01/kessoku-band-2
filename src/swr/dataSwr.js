'use client'

import fetcher from '@/utils/fetcher'
import useSWR from 'swr'


const useData = (url, config) => {
    const {data, isLoading, error} = useSWR(url, fetcher, config)

    return{
        data,
        isLoading,
        isError: error
    }
}


export default useData