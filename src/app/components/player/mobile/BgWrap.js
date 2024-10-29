import ImageComp from './ImageComp'
import useUrl from '@/app/hooks/useUrl'
import useMainData from '@/app/hooks/useMainData'


const BgWrap = () => {
    // store
    const {data, index, idx} = useMainData()
    const {url} = useUrl({data, index, idx})


    // bg wrap
    const bgWrapClas = 'bg-wrap w-full h-full absolute flex justify-center items-center scale-[1.3]'


    // bg box
    const bgBoxClass = 'bg-box aspect-square h-full absolute blur-lg'


    // bg frame
    // const bgFrameClass = 'bg-frame w-full h-full absolute bg-[rgba(0,0,0,0.0)]'


    return(
        <div
            className={bgWrapClas}
        >

            <div
                className={bgBoxClass}
            >
                <ImageComp url={url} />
            </div>

            {/* <div
                className={bgFrameClass}
            >
            </div> */}

        </div>
    )
}


export default BgWrap