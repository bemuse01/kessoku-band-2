import { motion } from 'framer-motion'

const LoadingBox = () => {
    // loading box
    const parentSize = 200
    const loadBoxClass = 'loading-box'
    const loadBoxStyle = {
        width: `${parentSize}px`,
        height: `${parentSize}px`
    }


    // loading animation
    // loading parent
    const loadParentClass = 'loading-parent w-full h-full relative overflow-hidden'

    // loading chils
    const childSize = 30
    const loadChildCount = 5
    const loadChilds = Array.from({length: loadChildCount}, (_, i) => {

        const len = loadChildCount - 1
        const light = 85 - 85 / len * (len - i)

        const key = i
        const className = 'loading-child absolute'
        const style = {
            width: `${childSize}px`,
            height: `${childSize}px`,
            background: `hsl(0, 0%, ${light}%)`,
            top: '50%',
            // transform: 'translate(0, -50%) rotate(0deg)',
            zIndex: loadChildCount - i,
        }

        return {key, className, style}
    })
    const loadChildVar = {
        hidden: {
            transform: `translate(-${childSize}px, -50%) rotate(0deg)`,
        },
        visible: i => ({
            transform: `translate(${parentSize}px, -50%) rotate(180deg)`,
            transition: {
                delay: 0.08 * i,
                duration: 1,
                repeat: Infinity,
                repeatDelay: 0.5,
                ease: 'easeInOut'
            }
        }),
    }
    const loadChildsComp = loadChilds.map((child, i) =>
        <motion.div 
            key={child.key}
            className={child.className}
            style={child.style}
            custom={i}
            initial='hidden'
            animate='visible'
            variants={loadChildVar}
        />
    )


    // render
    return(
        <div 
            className={loadBoxClass}
            style={loadBoxStyle}
        >

            <div 
                className={loadParentClass}
            >

                {loadChildsComp}

            </div>

        </div>
    )
}

export default LoadingBox