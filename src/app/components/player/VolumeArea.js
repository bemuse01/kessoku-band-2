const VolumeArea = ({children}) => {
    const volumeButtonClass = 'volume-area w-full h-full flex flex-row-reverse gap-[5%]'

    return(
        <div
            className={volumeButtonClass}
        >
           {children}
        </div>
    )
}


export default VolumeArea