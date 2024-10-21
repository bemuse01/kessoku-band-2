const PlayShape = ({color}) => {
    return(
        <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 164 204"
            preserveAspectRatio="xMidYMid meet"
        >
            <path 
                fillRule="evenodd"  
                stroke={color} 
                strokeWidth="1px"
                strokeLinecap="butt" 
                strokeLinejoin="miter" 
                fill={color}
                d="M154.600,89.399 C163.621,95.324 163.621,108.550 154.600,114.475 L25.219,199.448 C15.244,205.999 1.984,198.844 1.984,186.910 L1.984,16.964 C1.984,5.030 15.244,-2.125 25.219,4.426 L154.600,89.399 Z"
            />
        </svg>
    )
}

export default PlayShape