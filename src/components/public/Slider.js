import { useState } from 'react'


const Slider = ({className, color, height, x, value, thumbScale, sliderRef, onMousedown, onClick}) => {
    // slider
    const sliderClass = [
        'slider',
        'w-full',
        'relative',
        'flex',
        'cursor-pointer',
        'items-center',
        'rounded-full',
        className
    ].join(' ')
    const sliderStyle = {
        height: `${height}px`,
    }
    

    // 
    const [scaleY, setScaleY] = useState(1)
    const onMouseenter = (e) => {
        e.preventDefault()

        setScaleY(2)
    }
    const onMouseleave = (e) => {
        e.preventDefault()

        setScaleY(1)
    }


    // slider track
    const sliderTrackClass = 'slider-track w-full h-full absolute rounded-full'
    const sliderTrackStyle = {
        background: color,
        opacity: '0.3',
        transform: `scaleY(${scaleY})`,
        transition: '0.3s transform'
    }


    // slider value
    const sliderValueClass = 'slider-value w-full h-full absolute rounded-full overflow-hidden pointer-events-none'
    const sliderValueStyle = {
        transform: `scaleY(${scaleY})`,
        transition: '0.3s transform'
    }
    const sliderValueChildClass = 'w-full h-full'
    const sliderValueChildStyle = {
        background: color,
        transformOrigin: 'left',
        transform: `scaleX(${value})`,
    }


    // slider thumb
    const sliderThumbClass = 'slider-thumb absolute left-0 rounded-full cursor-pointer'
    const sliderThumbStyle = {
        width: `${height}px`,
        height: `${height}px`,
        background: color,
        transform: `translateX(${x}px) scale(${thumbScale})`
    }


    return(
        <div
            className={sliderClass}
            style={sliderStyle}
            onMouseEnter={(e) => onMouseenter(e)}
            onMouseLeave={(e) => onMouseleave(e)}
        >

            <div
                className={sliderTrackClass}
                style={sliderTrackStyle}
                ref={sliderRef}
                onClick={onClick}
            >
            </div>

            <div
                className={sliderValueClass}
                style={sliderValueStyle}
            >
                <div 
                    className={sliderValueChildClass}
                    style={sliderValueChildStyle}
                >
                </div>
            </div>

            <div
                className={sliderThumbClass}
                style={sliderThumbStyle}
                onMouseDown={(e) => onMousedown(e)}
            >
            </div>

        </div>
    )
}


export default Slider