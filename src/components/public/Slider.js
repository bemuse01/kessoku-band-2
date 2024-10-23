import { clamp } from '@/utils/math'

const Slider = ({className, color, height, trackRef, thumbRef, valueRef, onMousedown}) => {
    // slider
    const sliderClass = [
        'slider',
        'w-full',
        'relative',
        'flex',
        className,
    ].join(' ')
    const sliderStyle = {
        height: `${height}px`
    }
    

    // slider track
    const sliderTrackClass = 'slider-track w-full h-full absolute rounded-full'
    const sliderTrackStyle = {
        background: color,
        opacity: '0.3'
    }


    // slider value
    const sliderValueClass = 'slider-value w-full h-full absolute rounded-full'
    const sliderValueStyle = {
        background: color,
        transformOrigin: 'left',
        // transform: `scaleX(${value})`
    }


    // slider thumb
    const sliderThumbClass = 'slider-thumb aspect-square h-full absolute left-0 rounded-full cursor-pointer'
    const sliderThumbStyle = {
        background: color,
        // transform: `translateX(${x}px) scale(3)`
    }


    return(
        <div
            className={sliderClass}
            style={sliderStyle}
        >

            <div
                className={sliderTrackClass}
                style={sliderTrackStyle}
                ref={trackRef}
            >
            </div>

            <div
                className={sliderValueClass}
                style={sliderValueStyle}
                ref={valueRef}
            >
            </div>

            <div
                className={sliderThumbClass}
                style={sliderThumbStyle}
                onMouseDown={(e) => onMousedown(e)}
                ref={thumbRef}
            >
            </div>

        </div>
    )
}


export default Slider