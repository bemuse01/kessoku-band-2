const Button = ({className, onClick, children}) => {
    const buttonClass = className + ' cursor-pointer duration-300 hover:opacity-[0.6]'

    return(
        <div
            className={buttonClass}
            onClick={onClick}
        >
            {children}
        </div>
    )
}

export default Button