import { useRef, useEffect, useState } from 'react'
import Slider from '@/components/public/Slider'
import usePlayerStore from '@/store/playerStore'
import { clamp, normalize } from '@/utils/math'


const VolumeBar = ({color, setIsHoldingBar}) => {
    const isFirstRender = useRef({player: true, render: true})


    // store
    const {setVolume, getVolume} = usePlayerStore()
    const player = usePlayerStore(state => state.player)


    const volumeBarClass = 'volume-bar w-full h-full flex justify-center items-center absolute p-[6px]'


    // volume
    const height = 4
    const hh = height / 2
    const thumbScale = 4
    const sliderRef = useRef(null)
    const [value, setValue] = useState(0)
    const [x, setX] = useState(0)
    const isDraggable = useRef(false)
    const initVolumeBar = () => {
        const volume = getVolume()
        const {width} = sliderRef.current.getBoundingClientRect()
        const rx = width * volume
        const cx = clamp(rx, 0, width)
        const nx = normalize(cx, -hh, width - hh, 0, width)

        setX(nx)
        setValue(volume)
    }
    const calculate = (e) => {
        const {clientX} = e

        const {width, left} = sliderRef.current.getBoundingClientRect()
        const rx = clientX - left
        const cx = clamp(rx, 0, width)
        const nx = normalize(cx, -hh, width - hh, 0, width)
        const nv = cx / width

        setX(nx)
        setValue(nv)
        setVolume(nv)
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
        if(sliderRef.current === null) return

        calculate(e)
    }
    const onClick = (e) => {
        e.preventDefault()

        if(sliderRef.current === null) return

        calculate(e)
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

            <Slider color={color} value={value} x={x} height={height} thumbScale={thumbScale} sliderRef={sliderRef} onMousedown={onMousedown} onClick={onClick}/>

        </div>
    )
}


export default VolumeBar