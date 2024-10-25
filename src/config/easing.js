const easeInOutQuint = [0.83, 0, 0.17, 1]
const easeInOutCubic = [0.65, 0, 0.35, 1]
const easeOutCirc = [0, 0.55, 0.45, 1]
const DEFAULT_SPRING = {
    type: 'spring',
    stiffness: 300,
    damping: 18,
    mass: 0.8
}

export {easeInOutQuint, easeInOutCubic, easeOutCirc, DEFAULT_SPRING}