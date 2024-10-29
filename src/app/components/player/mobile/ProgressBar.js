import { useRef, useEffect, useState } from 'react'
import Slider from '@/components/public/Slider'
import usePlayerStore from '@/store/playerStore'
import { clamp, normalize } from '@/utils/math'


const ProgressBar = ({color, idx}) => {
    // store
    const {setCurrentTime, getCurrentTime, getDuration, isLoaded} = usePlayerStore()
    const player = usePlayerStore(state => state.player)


    // progress
    const progressBarClass = 'progress-bar w-full h-auto flex justify-center items-center py-[6px]'

    const height = 4
    const hh = height / 2
    const thumbScale = 4
    const sliderRef = useRef(null)
    const [value, setValue] = useState(0)
    const [x, setX] = useState(-hh)
    const isDraggable = useRef(false)
    const initValue = () => {
        setValue(0)
        setX(-hh)
    }
    const calculate = (e) => {
        let clientX = 0

        if(e.touches === undefined) clientX = e.clientX
        else clientX = e.touches[0].clientX

        const {width, left} = sliderRef.current.getBoundingClientRect()
        const rx = clientX - left
        const cx = clamp(rx, 0, width)
        const nx = normalize(cx, -hh, width - hh, 0, width)

        const nv = cx / width
        
        const currentTime = getDuration() * nv

        setX(nx)
        setValue(nv)
        setCurrentTime(currentTime)
    }
    const update = () => {
        if(sliderRef.current === null) return

        const currentTime = getCurrentTime()
        const duration = getDuration()
        const nv = currentTime / duration

        const {width} = sliderRef.current.getBoundingClientRect()
        const rx = width * nv
        const nx = normalize(rx, -hh, width - hh, 0, width)

        setX(nx)
        setValue(nv)
    }
    const onTouchstart = (e) => {
        // e.preventDefault()

        isDraggable.current = true
    }
    const onTouchend = (e) => {
        // e.preventDefault()

        isDraggable.current = false
    }
    const onTouchmove = (e) => {
        if(!isDraggable.current) return
        if(sliderRef.current === null) return

        calculate(e)
    }
    const onTouch = (e) => {
        e.preventDefault()

        if(sliderRef.current === null) return

        calculate(e)
    }

    useEffect(() => {
        initValue()
    }, [idx])


    // on render
    const animate = () => {
        update()

        requestAnimationFrame(animate)
    }
    const init = () => {
        document.addEventListener('touchend', onTouchend)
        document.addEventListener('touchmove', onTouchmove, {passive: true})
    }
    const onUnmount = () => {
        document.removeEventListener('touchend', onTouchend)
        document.removeEventListener('touchmove', onTouchmove, {passive: true})
    }
    useEffect(() => {
        init()

        return () => onUnmount()
    }, [])
    useEffect(() => {
        if(player !== null) animate()

        return () => cancelAnimationFrame(animate)
    }, [player])


    return(
        <div
            className={progressBarClass}
        >

            <Slider color={color} value={value} x={x} height={height} thumbScale={thumbScale} sliderRef={sliderRef} pointerdown={onTouchstart} pointerup={isLoaded ? onTouch : () => {}}/>

        </div>
    )
}


export default ProgressBar