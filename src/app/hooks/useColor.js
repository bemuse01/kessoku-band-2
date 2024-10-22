import { useMemo } from 'react'
import { BRIGHTNESS_THRESHOLD } from '@/config/style'
import { getBrightness } from '@/utils/color'


const useColor = (color) => {
    const newColor = useMemo(() => {
        const bright = getBrightness(color)

        if(bright < BRIGHTNESS_THRESHOLD) return color
        else return '#000000'
    }, [color])

    return {newColor}
}


export default useColor