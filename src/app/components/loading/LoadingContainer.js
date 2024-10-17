"use client"

import LoadingBox from './LoadingBox'

const LoadingContainer = () => {

    const loadContClass = 'loading-container w-screen h-screen absolute bg-white'

    const loadWrapClass = 'loading-wrap w-full h-full flex justify-center items-center'

    return(
        <div className={loadContClass}>

            <div className={loadWrapClass}>

                <LoadingBox />

            </div>

        </div>
    )
}

export default LoadingContainer