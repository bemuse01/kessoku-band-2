import { useRef, useEffect, useState } from 'react'
import Slider from '@/components/public/Slider'
import usePlayerStore from '@/store/playerStore'
import { clamp, normalize } from '@/utils/math'


const ProgressBar = ({color, idx}) => {
    const isFirstRender = useRef({player: true, render: true})


    // store
    const {setCurrentTime, getCurrentTime, getDuration} = usePlayerStore()
    const player = usePlayerStore(state => state.player)


    const progressBarClass = 'progress-bar w-full h-auto flex justify-center items-center py-[6px]'


    // progress
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
        const {clientX} = e

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
        const currentTime = getCurrentTime()
        const duration = getDuration()
        const nv = currentTime / duration

        const {width} = sliderRef.current.getBoundingClientRect()
        const rx = width * nv
        const nx = normalize(rx, -hh, width - hh, 0, width)

        setX(nx)
        setValue(nv)
    }
    const onMousedown = (e) => {
        e.preventDefault()

        isDraggable.current = true
    }
    const onMouseup = (e) => {
        e.preventDefault()

        isDraggable.current = false
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
            animate()
        }

    }, [player])

    useEffect(() => {
        initValue()
    }, [idx])


    // on render
    const animate = () => {
        update()

        requestAnimationFrame(animate)
    }
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
            className={progressBarClass}
        >

            <Slider color={color} value={value} x={x} height={height} thumbScale={thumbScale} sliderRef={sliderRef} onMousedown={onMousedown} onClick={onClick}/>

        </div>
    )
}


export default ProgressBar