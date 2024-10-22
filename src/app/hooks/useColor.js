import { useMemo } from 'react'
import { BRIGHTNESS_THRESHOLD, DEFAULT_COLOR } from '@/config/style'
import { getBrightness } from '@/utils/color'


const useColor = (color) => {
    const newColor = useMemo(() => {
        const bright = getBrightness(color)

        if(bright < BRIGHTNESS_THRESHOLD) return color
        else return DEFAULT_COLOR
    }, [color])

    return {newColor}
}


export default useColor