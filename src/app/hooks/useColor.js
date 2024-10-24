import { useMemo, useEffect, useState } from 'react'
import { BRIGHTNESS_THRESHOLD, DEFAULT_COLOR } from '@/config/style'
import { getBrightness } from '@/utils/color'
import useDataStore from '@/store/dataStore'


const useColor = ({data, index, idx}) => {
    const {getDataById} = useDataStore()

    const [color, setColor] = useState(DEFAULT_COLOR)
    const setColorByData = () => {
        const id = index[idx]
        const mainColor = '#' + getDataById(id).main_color
        setColor(mainColor)
    }
    
    const newColor = useMemo(() => {
        const bright = getBrightness(color)

        if(bright < BRIGHTNESS_THRESHOLD) return color
        else return DEFAULT_COLOR
    }, [color])


    useEffect(() => {

        if(data !== null && index !== null){
            setColorByData()
        }
        
    }, [data, index, idx])
    

    return {color: newColor}
}


export default useColor