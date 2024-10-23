import { useRef, useEffect, useState } from 'react'
import Slider from '@/components/public/Slider'
import usePlayerStore from '@/store/playerStore'
import { clamp, normalize } from '@/utils/math'


const VolumeBar = ({color, setIsHoldingBar}) => {
    const isFirstRender = useRef({player: true, render: true})


    // store
    const {setVolume, getVolume} = usePlayerStore()
    const player = usePlayerStore(state => state.player)


    const volumeBarClass = 'volume-area w-full h-full flex justify-center items-center absolute'


    // volume
    const height = 5
    const hh = height / 2
    const trackRef = useRef(null)
    const valueRef = useRef(null)
    const thumbRef = useRef(null)
    const isDraggable = useRef(false)
    const initVolumeBar = () => {
        const volume = getVolume()
        const {width} = trackRef.current.getBoundingClientRect()
        const rx = width * volume
        const cx = clamp(rx, 0, width)
        const nx = normalize(cx, -hh, width - hh, 0, width)

        thumbRef.current.style.transform = `translateX(${nx}px) scale(3)`
        valueRef.current.style.transform = `scaleX(${volume})`
    }
    const onMousedown = (e) => {
        e.preventDefault()

        isDraggable.current = true
        setIsHoldingBar(true)
    }
    const onMouseup = (e) => {
        e.preventDefault()

        isDraggable.current = false
        setIsHoldingBar(false)
    }
    const onMousemove = (e) => {
        e.preventDefault()
        
        
        if(!isDraggable.current) return
        if(trackRef.current === null || thumbRef.current === null) return

        const {clientX} = e

        const {width, left} = trackRef.current.getBoundingClientRect()
        const rx = clientX - left
        const cx = clamp(rx, 0, width)
        const nx = normalize(cx, -hh, width - hh, 0, width)
        thumbRef.current.style.transform = `translateX(${nx}px) scale(3)`

        const nv = cx / width
        valueRef.current.style.transform = `scaleX(${nv})`

        setVolume(nv)
    }

    useEffect(() => {
        if(isFirstRender.current.player){
            isFirstRender.current.player = false
            return
        }

        if(player !== null){
            initVolumeBar()
        }

    }, [player])


    // on render
    const init = () => {
        document.addEventListener('mouseup', (e) => onMouseup(e))
        document.addEventListener('mousemove', (e) => onMousemove(e))
    }
    useEffect(() => {
        if(isFirstRender.current.render){
            init()

            isFirstRender.current.render = false
        }
    }, [])


    return(
        <div
            className={volumeBarClass}
        >

            <Slider color={color} height={height} trackRef={trackRef} thumbRef={thumbRef} valueRef={valueRef} onMousedown={onMousedown}/>

        </div>
    )
}


export default VolumeBar