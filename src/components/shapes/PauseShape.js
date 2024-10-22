const PauseShape = ({color}) => {
    return(
        <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 162 204"
            preserveAspectRatio="xMidYMid meet"
        >
            <path 
                fillRule="evenodd"  
                stroke={color}
                strokeWidth="1px" 
                strokeLinecap="butt" 
                strokeLinejoin="miter" 
                fill={color}
                d="M144.500,201.500 L115.500,201.500 C107.216,201.500 100.500,194.784 100.500,186.500 L100.500,16.500 C100.500,8.216 107.216,1.500 115.500,1.500 L144.500,1.500 C152.784,1.500 159.500,8.216 159.500,16.500 L159.500,186.500 C159.500,194.784 152.784,201.500 144.500,201.500 ZM45.500,201.500 L16.500,201.500 C8.216,201.500 1.500,194.784 1.500,186.500 L1.500,16.500 C1.500,8.216 8.216,1.500 16.500,1.500 L45.500,1.500 C53.784,1.500 60.500,8.216 60.500,16.500 L60.500,186.500 C60.500,194.784 53.784,201.500 45.500,201.500 Z"
            />
        </svg>
    )
}

export default PauseShape
