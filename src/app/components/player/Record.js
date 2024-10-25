import Image from 'next/image'
import ImageComp from './ImageComp'
import VinylImage from '@/public/images/vinyl.png'
import VinylOverlayImage from '@/public/images/vinyl_overlay.png'


const Record = ({url, w, h}) => {
    const recordClass = 'record relative flex justify-center items-center'
    const recordStyle = {
        width: w,
        height: h,
    }

    const recordAnimClass = 'w-full h-full flex justify-center items-center absolute'
    const recordAnimStyle = {
        animation: 'rotating 15s linear infinite'
    }

    const recordThumbClass = 'record-thumb w-[50%] h-[50%] absolute rotate-[-40deg]'

    const recordVinylClass = 'record-vinyl w-full h-full absolute'

    const recordOverlayClass = 'record-overlay w-full h-full mix-blend-overlay absolute'


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