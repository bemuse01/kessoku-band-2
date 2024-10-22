import { useEffect, useMemo, useRef, useState } from 'react' 
import useDataStore from '@/store/dataStore'
import { alphaToHex } from '@/utils/color'
import { DEFAULT_COLOR } from '@/config/style'
import useColor from '@/app/hooks/useColor'


const InfoBox = ({data, index, idx}) => {
    const isFirstRender = useRef({effec1: true})


    // store
    const {getDataById} = useDataStore()


    // color
    const [color, setColor] = useState(DEFAULT_COLOR)
    const setColorByData = () => {
        const id = index[idx]
        const newColor = '#' + getDataById(id).main_color
        setColor(newColor)
    }
    const {newColor} = useColor(color)


    // info
    const infoBoxClass = [
        'info-box',
        'w-full',
        'relative',
        'h-auto',
    ].join(' ')
    const infoBoxStyle = {
        color: newColor,
        filter: `drop-shadow(0 0 6px ${newColor + alphaToHex(0.5)})`
    }

    const infoClass = 'info w-full h-auto relative flex flex-col px-[6px]'

    // title
    const titleClass = 'h-auto text-[30px] max-lg:text-[26px] max-md:text-[22px] text-center'
    const [title, setTitle] = useState()

    // artist
    const artistClass = 'h-auto text-[20px] max-lg:text-[18px] max-md:text-[16px] text-center'
    const [artist, setArtist] = useState()

    const setInfo = () => {
        const id = index[idx]
        const {title: newTitle, artist: newArtist} = getDataById(id)

        setTitle(newTitle)
        setArtist(newArtist)
    }


    useEffect(() => {
        if(isFirstRender.current.effec1){
            isFirstRender.current.effec1 = false
            return
        }

        if(data !== null && index !== null){
            setColorByData()
            setInfo()
        }
        
    }, [data, index, idx])
    

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