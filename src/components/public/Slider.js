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


    // slider real
    const sliderRealClass = 'slider-real w-full h-full absolute'


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

            <input 
                className={sliderRealClass}
                type="range"
                min="0"
                max="100"
            />

        </div>
    )
}

export default Slider