import { useState, useEffect } from 'react'
import useDataStore from '@/store/dataStore'
import defaultThumb from '@/public/images/default.jpg'


const useUrl = ({data, index, idx}) => {
    const {getDataById} = useDataStore()

    const [url, setUrl] = useState(defaultThumb.src)
    const [oldUrl, setOldUrl] = useState(null)
    const changeUrl = () => {
        setOldUrl(url)

        const id = index[idx]
        const newUrl = getDataById(id).thumbnail
        setUrl(newUrl)

        // console.log(url, oldUrl, idx)
    }

    useEffect(() => {
        if(data !== null && index !== null){
            changeUrl()
        }

    }, [data, index, idx])


    return {url, oldUrl}
}


export default useUrl