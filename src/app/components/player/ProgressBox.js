import ProgressBar from './ProgressBar'
import useColor from '@/app/hooks/useColor'

const ProgressBox = ({data, index, idx}) => {


    // main color
    const {color} = useColor({data, index, idx})


    const progressBoxClass = 'progress-box w-full h-auto relative'

    const progressWrapperClass = 'progress-wrapper w-full h-auto flex flex-col px-[3%]'


    return(
        <div
            className={progressBoxClass}
        >

            <div
                className={progressWrapperClass}
            >

                <ProgressBar color={color} idx={idx} />

            </div>

        </div>
    ) 
}


export default ProgressBox