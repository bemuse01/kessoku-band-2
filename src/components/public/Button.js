const Button = ({className, pointerup, children}) => {
    const buttonClass = className + ' cursor-pointer duration-300 md:hover:opacity-[0.6] focus:opacity-[0.6] active:opacity-[0.6]'

    return(
        <div
            className={buttonClass}
            onPointerUp={pointerup}
        >
            {children}
        </div>
    )
}

export default Button