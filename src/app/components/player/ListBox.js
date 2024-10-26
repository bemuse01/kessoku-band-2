import { PLAYER_BORDER_VALUE } from '@/config/style'
import useColor from '@/app/hooks/useColor'
import useDataStore from '@/store/dataStore'
import useStateStore from '@/store/stateStore'
import { useMemo } from 'react'
import ListScroll from './ListScroll'
import { motion, cubicBezier } from 'framer-motion'
import { DEFAULT_SPRING, easeOutCirc } from '@/config/easing'


const ListBox = ({data, index, idx}) => {
    // store
    const {color} = useColor({data, index, idx})
    const {getDataById} = useDataStore()
    const isListOpen = useStateStore(state => state.isListOpen)
    

    // list box
    const listBoxClass = 'list-box w-full h-full absolute'


    // list wrapper
    const listWrapperClass = 'list-wrapper w-full h-full bg-white absolute translate-x-[-50%]'
    const listWrapperStyle = {
        borderRadius: `${PLAYER_BORDER_VALUE}px`
    }
    const animVariants = {
        initial: {
            x: '0',
            opacity: 0
        },
        animate: {
            x: '-50%',
            opacity: 1,
            transition: {
                x: {...DEFAULT_SPRING},
                opacity: {
                    duration: 0.3
                }
            }
        },
        exit: {
            x: '0',
            opacity: 0,
            transition: {
                ease: cubicBezier(...easeOutCirc),
                duration: 0.3
            }
        }
    }


    // 
    const items = useMemo(() => {
        if(index === null && data === null) return []
        return index.map((id, i) => {
            const {artist, title} = getDataById(id)

            return{
                key: id,
                order: i,
                artist,
                title,
                len: index.length,
            }
        })
    }, [data, index])


    return(
        <div
            className={listBoxClass}
        >

            <motion.div
                className={listWrapperClass}
                style={listWrapperStyle}
                initial="initial"
                animate={isListOpen ? "animate" : "exit"}
                variants={animVariants}
            >

               <ListScroll items={items} color={color} idx={idx} />

            </motion.div>

        </div>
    )
}


export default ListBox