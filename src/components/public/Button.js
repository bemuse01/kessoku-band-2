const Button = ({className, children}) => {
    const buttonClass = className + ' cursor-pointer'

    return(
        <div
            className={buttonClass}
        >
            {children}
        </div>
    )
}

export default Button