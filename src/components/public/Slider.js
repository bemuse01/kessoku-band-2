import { useState } from 'react'


const Slider = ({
        className, 
        color, 
        height, 
        x, 
        value, 
        thumbScale, 
        isThumbHover = false, 
        sliderRef,
        mouseenter = () => {},
        mouseleave = () => {},
        mousedown = () => {},
        click = () => {}
    }) => {
    // 
    const [scaleY, setScaleY] = useState(1)


    // slider
    const sliderClass = [
        'slider',
        'w-full',
        'relative',
        'flex',
        'cursor-pointer',
        'items-center',
        'py-[5px]',
        className
    ].join(' ')
    const sliderStyle = {
    }


    // slider wrapper
    const sliderWrapperClass = 'slide-wrapper w-full rounded-full relative'
    const sliderWrapperStyle = {
        height: `${height}px`,
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
    const [scale, setScale] = useState(isThumbHover ? 0 : thumbScale)
    const sliderThumbClass = 'slider-thumb absolute left-0 cursor-pointer'
    const sliderThumbStyle = {
        width: `${height}px`,
        height: `${height}px`,
        transform: `translateX(${x}px)`
    }
    const sliderThumbChildClass = 'slider-thumb-child w-full h-full rounded-full'
    const sliderThumbChildStyle = {
        background: color,
        transform: `scale(${scale})`,
        transition: '0.3s transform'
    }


    // event
    const onMouseenter = (e) => {
        e.preventDefault()

        mouseenter(e)
        setScaleY(2)
        if(isThumbHover) setScale(thumbScale)
    }
    const onMouseleave = (e) => {
        e.preventDefault()

        mouseleave(e)
        setScaleY(1)
        if(isThumbHover) setScale(0)
    }
    const onMousedown = (e) => {
        e.preventDefault()
    
        mousedown(e)
    }
    const onClick = (e) => {
        e.preventDefault()
        
        click(e)
    }


    return(
        <div
            className={sliderClass}
            style={sliderStyle}
            onMouseEnter={(e) => onMouseenter(e)}
            onMouseLeave={(e) => onMouseleave(e)}
        >

            <div
                className={sliderWrapperClass}
                style={sliderWrapperStyle}
            >

                <div
                    className={sliderTrackClass}
                    style={sliderTrackStyle}
                    ref={sliderRef}
                    onClick={(e) => onClick(e)}
                    onMouseDown={(e) => onMousedown(e)}
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
                    <div
                        className={sliderThumbChildClass}
                        style={sliderThumbChildStyle}
                    >
                    </div>
                </div>

            </div>

        </div>
    )
}


export default Slider