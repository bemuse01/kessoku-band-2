const isMobileDevice = () => {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
}

export {isMobileDevice}