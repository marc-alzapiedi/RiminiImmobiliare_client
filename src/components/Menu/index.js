const Menu = ({children, className}) => {
    return (
        <div className={className}>

            <ul>
                {children}
            </ul>

        </div>
    )
}

export default Menu