import { useMemo, useEffect, useState } from 'react'
import { BRIGHTNESS_THRESHOLD_WHITE, BRIGHTNESS_THRESHOLD_BLACK, DEFAULT_COLOR, DEFAULT_COLOR_2 } from '@/config/style'
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

        if(bright < BRIGHTNESS_THRESHOLD_WHITE) return color
        else return DEFAULT_COLOR
    }, [color])

    const newColor2 = useMemo(() => {
        const bright = getBrightness(color)

        if(bright < BRIGHTNESS_THRESHOLD_BLACK) return DEFAULT_COLOR_2
        else return color
    }, [color])


    useEffect(() => {

        if(data !== null && index !== null){
            setColorByData()
        }
        
    }, [data, index, idx])
    

    return {color: newColor, color2: newColor2, originalColor: color}
}


export default useColor