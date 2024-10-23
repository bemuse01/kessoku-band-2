const Slider = ({className}) => {
    // slider
    const sliderClass = [
        className,
        'w-full',
        'h-full',
        'relative'
    ].join(' ')
    

    // slider track
    const sliderTrackClass = 'slider-track w-full h-full absolute'


    // slider value
    const sliderValueClass = 'slider-value h-full absolute'


    // slider thumb
    const sliderThumbClass = 'slider-thumb w-full h-full absolute'


    return(
        <div
            className={sliderClass}
        >

            <div
                className={sliderTrackClass}
            >
            </div>

            <div
                className={sliderValueClass}
            >
            </div>

            <div
                className={sliderThumbClass}
            >
            </div>

        </div>
    )
}

export default Slider