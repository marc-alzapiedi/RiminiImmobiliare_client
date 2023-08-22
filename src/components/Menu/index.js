const Menu = ({children, className, siblings}) => {
    return (
        <div className={className}>
            {siblings}

            <ul>
                {children}
            </ul>

        </div>
    )
}

export default Menu