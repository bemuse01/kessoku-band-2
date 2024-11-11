import { useEffect, useRef, useState } from 'react' 
import useDataStore from '@/store/dataStore'
// import usePlayerStore from '@/store/playerStore'
import { alphaToHex } from '@/utils/color'
import useColor from '@/app/hooks/useColor'


const InfoBox = ({data, index, idx}) => {
    // store
    const {getDataById} = useDataStore()
    // const isLoaded = usePlayerStore(state => state.isLoaded)


    // main color
    const {color} = useColor({data, index, idx})


    // info
    const infoBoxClass = [
        'info-box',
        'w-full',
        'relative',
        'h-auto',
        'mb-[4px]'
    ].join(' ')
    const infoBoxStyle = {
        color,
    }
    const infoClass = 'info w-full h-auto relative flex flex-col px-[6px]'

    // title
    const titleClass = 'h-auto text-[30px] text-center'
    const [title, setTitle] = useState()

    // artist
    const artistClass = 'h-auto text-[20px] text-center'
    const [artist, setArtist] = useState()

    const setInfo = (title, artist) => {
        if(title || artist){

            setTitle(title)
            setArtist(artist)

        }else{

            const id = index[idx]
            const {title: newTitle, artist: newArtist} = getDataById(id)
            setTitle(newTitle)
            setArtist(newArtist)

        }
    }

    useEffect(() => {
        if(data !== null && index !== null){
            setInfo()
        }
        
    }, [data, index, idx])

    // useEffect(() => {

    // }, [isLoaded])


    return(
        <div
            className={infoBoxClass}
            style={infoBoxStyle}
        >

            <div
                className={infoClass}
            >

                <div
                    className={titleClass}
                >
                    <p>{title}</p>
                </div>

                <div
                    className={artistClass}
                >
                    <p>{artist}</p>
                </div>

            </div>

        </div>
    )
}

export default InfoBox