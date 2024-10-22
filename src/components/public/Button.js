const Button = ({className, onClick, children}) => {
    const buttonClass = className + ' cursor-pointer'

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