import Image from 'next/image'
import ImageComp from './ImageComp'
import VinylImage from '@/public/images/vinyl.png'
import VinylOverlayImage from '@/public/images/vinyl_overlay.png'
import usePlayerStore from '@/store/playerStore'


const Record = ({url, w, h}) => {
    // store
    const isPlaying = usePlayerStore(state => state.isPlaying)


    // recrod
    const recordClass = 'record relative flex justify-center items-center'
    const recordStyle = {
        width: w,
        height: h,
    }

    const recordAnimClass = 'w-full h-full flex justify-center items-center absolute'
    const recordAnimStyle = {
        animation: `rotating 15s linear infinite ${isPlaying ? 'running' : 'paused'}`
    }

    const recordThumbClass = 'record-thumb w-[50%] h-[50%] absolute rotate-[-180deg]'

    const recordVinylClass = 'record-vinyl w-full h-full absolute'

    const recordOverlayClass = 'record-overlay w-full h-full mix-blend-overlay absolute scale-[0.99] rotate-[90deg]'


    return(
        <div
            className={recordClass}
            style={recordStyle}
        >

            <div
                className={recordAnimClass}
                style={recordAnimStyle}
            >

                <div
                    className={recordThumbClass}
                >
                    <ImageComp url={url} />
                </div>

                <div
                    className={recordVinylClass}
                >
                    <Image
                        src={VinylImage}
                        alt='vinyl'
                        priority={true}
                        draggable={false}
                    />
                </div>

            </div>

            <div
                className={recordOverlayClass}
            >
                <Image 
                    src={VinylOverlayImage}
                    alt='vinyl overlay'
                    priority={true}
                    draggable={false}
                />
            </div>

        </div>
    )
}


export default Record